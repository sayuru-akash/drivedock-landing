"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs } from "./home-data"
import styles from "./home.module.css"

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(1)

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex
        const panelId = `faq-answer-${index}`

        return (
          <article className={styles.faqItem} key={faq.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" className={isOpen ? styles.chevronOpen : undefined} size={18} />
              </button>
            </h3>
            <div id={panelId} className={styles.faqAnswer} hidden={!isOpen}>
              <p>{faq.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

