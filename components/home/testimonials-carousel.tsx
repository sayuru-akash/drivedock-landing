"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Pause, Play } from "lucide-react"
import { githubUrl, productHighlights } from "./home-data"
import styles from "./home.module.css"

const ROTATION_INTERVAL = 6000

export function ProductHighlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [interactionPaused, setInteractionPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const railRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLElement | null>>([])
  const scrollFrameRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    function handleMotionPreference(event: MediaQueryListEvent | MediaQueryList) {
      setReducedMotion(event.matches)
      if (event.matches) setAutoPlay(false)
    }

    handleMotionPreference(mediaQuery)
    mediaQuery.addEventListener("change", handleMotionPreference)
    return () => mediaQuery.removeEventListener("change", handleMotionPreference)
  }, [])

  useEffect(() => () => {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current)
  }, [])

  useEffect(() => {
    const rail = railRef.current
    const card = cardRefs.current[activeIndex]
    if (!rail || !card) return

    rail.scrollTo({
      behavior: reducedMotion ? "auto" : "smooth",
      left: card.offsetLeft,
    })
  }, [activeIndex, reducedMotion])

  useEffect(() => {
    if (!autoPlay || interactionPaused || reducedMotion) return

    const rotation = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setActiveIndex((current) => (current + 1) % productHighlights.length)
      }
    }, ROTATION_INTERVAL)

    return () => window.clearInterval(rotation)
  }, [activeIndex, autoPlay, interactionPaused, reducedMotion])

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + productHighlights.length) % productHighlights.length)
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % productHighlights.length)
  }

  function handleRailScroll() {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current)

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const rail = railRef.current
      if (!rail) return

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const distance = Math.abs(card.offsetLeft - rail.scrollLeft)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex((current) => current === closestIndex ? current : closestIndex)
      scrollFrameRef.current = null
    })
  }

  return (
    <section
      aria-labelledby="highlights-title"
      className={styles.testimonialsSection}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteractionPaused(false)
      }}
      onFocusCapture={() => setInteractionPaused(true)}
      onMouseEnter={() => setInteractionPaused(true)}
      onMouseLeave={() => setInteractionPaused(false)}
    >
      <div className={styles.sectionHeading}>
        <span>Current capabilities</span>
        <h2 id="highlights-title">What the current app actually does</h2>
        <p>Each capability below is documented in the current public DriveDock repository.</p>
      </div>

      <div
        aria-label="DriveDock product capabilities"
        className={styles.testimonialRail}
        onScroll={handleRailScroll}
        ref={railRef}
      >
        {productHighlights.map((highlight, index) => (
          <article
            aria-label={`Capability ${index + 1} of ${productHighlights.length}`}
            className={`${styles.testimonialCard} ${activeIndex === index ? styles.testimonialActive : ""}`}
            key={highlight.title}
            ref={(element) => {
              cardRefs.current[index] = element
            }}
          >
            <div className={styles.testimonialCardTop}>
              <CheckCircle2 aria-hidden="true" className={styles.quoteIcon} size={27} />
              <span className={styles.capabilityCategory}>{highlight.category}</span>
            </div>
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
            <small className={styles.capabilityStatus}>Documented in the current repository</small>
          </article>
        ))}
      </div>

      <div className={styles.carouselControls} aria-label="Product highlight controls">
        <button
          aria-label={autoPlay ? "Pause highlight rotation" : "Resume highlight rotation"}
          className={styles.rotationControl}
          onClick={() => setAutoPlay((current) => !current)}
          type="button"
        >
          {autoPlay ? <Pause aria-hidden="true" size={16} /> : <Play aria-hidden="true" size={16} />}
        </button>
        <button aria-label="Previous highlight" onClick={showPrevious} type="button">
          <ArrowLeft aria-hidden="true" size={18} />
        </button>
        <div className={styles.testimonialDots}>
          {productHighlights.map((highlight, index) => (
            <button
              aria-current={activeIndex === index ? "true" : undefined}
              aria-label={`Show highlight ${index + 1}`}
              key={highlight.title}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
        <button aria-label="Next highlight" onClick={showNext} type="button">
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>
      <a className={styles.highlightsSource} href={`${githubUrl}#features`}>
        Review the feature documentation
        <ExternalLink aria-hidden="true" size={14} />
      </a>
    </section>
  )
}
