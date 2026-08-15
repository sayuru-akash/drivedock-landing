"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Download, Menu } from "lucide-react"
import { latestReleaseUrl } from "./home-data"
import styles from "./home.module.css"

export function MobileNavigation() {
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const summaryRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      const menu = detailsRef.current
      if (menu?.open && event.target instanceof Node && !menu.contains(event.target)) {
        menu.open = false
      }
    }

    document.addEventListener("pointerdown", closeOutside)
    return () => document.removeEventListener("pointerdown", closeOutside)
  }, [])

  function closeMenu() {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details
      className={styles.mobileNavigation}
      onKeyDown={(event) => {
        if (event.key === "Escape" && detailsRef.current?.open) {
          closeMenu()
          summaryRef.current?.focus()
        }
      }}
      ref={detailsRef}
    >
      <summary className={styles.menuButton} aria-label="Toggle navigation" ref={summaryRef}>
        <Menu aria-hidden="true" size={20} />
      </summary>
      <nav className={styles.mobileMenu} aria-label="Mobile navigation">
        <Link href="/#top" onClick={closeMenu}>Home</Link>
        <Link href="/#features" onClick={closeMenu}>Features</Link>
        <Link href="/#faq" onClick={closeMenu}>FAQ</Link>
        <a className={styles.mobileDownload} href={latestReleaseUrl} onClick={closeMenu}>
          <Download aria-hidden="true" size={15} />
          Download for macOS
        </a>
      </nav>
    </details>
  )
}
