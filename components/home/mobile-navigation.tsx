"use client"

import { useEffect, useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { releasesUrl } from "./home-data"
import styles from "./home.module.css"

const links = [
  { href: "#top", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
] as const

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }

    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [isOpen])

  return (
    <div className={styles.mobileNavigation}>
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls="home-mobile-menu"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>

      {isOpen ? (
        <nav id="home-mobile-menu" className={styles.mobileMenu} aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className={styles.mobileDownload} href={releasesUrl}>
            <Download aria-hidden="true" size={15} />
            Download
          </a>
        </nav>
      ) : null}
    </div>
  )
}

