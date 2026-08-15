"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { testimonials } from "./home-data"
import styles from "./home.module.css"

export function TestimonialsCarousel() {
  const railRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: -1 | 1) => {
    const rail = railRef.current
    if (!rail) return

    const card = rail.querySelector<HTMLElement>("article")
    const distance = (card?.offsetWidth ?? 360) + 20
    rail.scrollBy({ left: direction * distance, behavior: "smooth" })
  }

  return (
    <>
      <div className={styles.testimonialRail} ref={railRef}>
        {testimonials.map((testimonial, index) => (
          <article
            className={`${styles.testimonialCard} ${index === 2 ? styles.testimonialFeatured : ""}`}
            key={testimonial.author}
          >
            <Quote aria-hidden="true" className={styles.quoteIcon} size={26} fill="currentColor" />
            <blockquote>{testimonial.quote}</blockquote>
            <footer className={styles.testimonialAuthor}>
              <span className={styles.avatar} aria-hidden="true">
                {testimonial.author
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </span>
              <span>
                <strong>{testimonial.author}</strong>
                <small>{testimonial.role}</small>
              </span>
            </footer>
          </article>
        ))}
      </div>
      <div className={styles.carouselControls} aria-label="Testimonial controls">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous testimonials">
          <ArrowLeft aria-hidden="true" size={17} />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next testimonials">
          <ArrowRight aria-hidden="true" size={17} />
        </button>
      </div>
    </>
  )
}

