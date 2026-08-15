"use client"

import { useEffect, useMemo, useSyncExternalStore } from "react"
import { ChevronDown, Search, X } from "lucide-react"
import { allFaqs, faqCategories } from "./product-data"
import styles from "./product-pages.module.css"

type Category = (typeof faqCategories)[number]["id"]

const validCategories = new Set<Category>(faqCategories.map((category) => category.id))

function subscribeToSearch(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange)
  window.addEventListener("drivedock:searchchange", onStoreChange)
  return () => {
    window.removeEventListener("popstate", onStoreChange)
    window.removeEventListener("drivedock:searchchange", onStoreChange)
  }
}

function getSearchSnapshot() {
  return window.location.search
}

function readUrlState(search: string) {
  const params = new URLSearchParams(search)
  const category = params.get("category") as Category | null
  return {
    category: category && validCategories.has(category) ? category : "all" as Category,
    query: params.get("q") ?? "",
  }
}

export function FaqBrowser() {
  const search = useSyncExternalStore(subscribeToSearch, getSearchSnapshot, () => "")
  const { category, query } = useMemo(() => readUrlState(search), [search])

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(hash)
        if (target instanceof HTMLDetailsElement) target.open = true
      })
    }

  }, [])

  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase()
    return allFaqs.filter((faq) => {
      const inCategory = category === "all" || faq.category === category
      const matchesQuery = !normalized || `${faq.question} ${faq.answer}`.toLocaleLowerCase().includes(normalized)
      return inCategory && matchesQuery
    })
  }, [category, query])

  function updateUrl(nextCategory: Category, nextQuery: string) {
    const params = new URLSearchParams()
    if (nextCategory !== "all") params.set("category", nextCategory)
    if (nextQuery.trim()) params.set("q", nextQuery.trim())
    const search = params.toString()
    window.history.replaceState(null, "", `${window.location.pathname}${search ? `?${search}` : ""}`)
    window.dispatchEvent(new Event("drivedock:searchchange"))
  }

  function selectCategory(next: Category) {
    updateUrl(next, query)
  }

  function updateQuery(next: string) {
    updateUrl(category, next)
  }

  return (
    <section className={styles.faqBrowser} aria-labelledby="faq-browser-title">
      <div className={styles.faqTools}>
        <div>
          <h2 id="faq-browser-title">Find a clear answer</h2>
          <p>Search every question or narrow the list by topic.</p>
        </div>
        <label className={styles.searchField}>
          <span className={styles.visuallyHidden}>Search DriveDock questions</span>
          <Search aria-hidden="true" size={18} />
          <input
            autoComplete="off"
            name="faq-search"
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search questions…"
            type="search"
            value={query}
          />
          {query ? (
            <button aria-label="Clear FAQ search" onClick={() => updateQuery("")} type="button">
              <X aria-hidden="true" size={16} />
            </button>
          ) : null}
        </label>
      </div>

      <div className={styles.categoryFilters} aria-label="FAQ categories" role="group">
        {faqCategories.map((item) => (
          <button
            aria-pressed={category === item.id}
            className={category === item.id ? styles.categoryActive : undefined}
            key={item.id}
            onClick={() => selectCategory(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" className={styles.resultCount}>
        {filteredFaqs.length === 1 ? "1 answer" : `${filteredFaqs.length} answers`}
      </p>

      {filteredFaqs.length ? (
        <div className={styles.fullFaqList}>
          {filteredFaqs.map((faq, index) => (
            <details id={faq.id} key={faq.id} open={!query && category === "all" && index === 0}>
              <summary>
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" size={20} />
              </summary>
              <div className={styles.fullFaqAnswer}>
                <p>{faq.answer}</p>
                <a aria-label={`Link to: ${faq.question}`} href={`#${faq.id}`}>Link to this answer</a>
              </div>
            </details>
          ))}
        </div>
      ) : (
        <div className={styles.emptyFaq} role="status">
          <Search aria-hidden="true" size={25} />
          <h3>No matching questions</h3>
          <p>Try a shorter search, choose another category, or clear the filters.</p>
          <button onClick={() => updateUrl("all", "")} type="button">Show All Questions</button>
        </div>
      )}
    </section>
  )
}
