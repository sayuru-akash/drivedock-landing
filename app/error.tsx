"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/home/site-chrome"
import homeStyles from "@/components/home/home.module.css"
import styles from "@/components/home/secondary.module.css"

export default function ErrorPage({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className={`${homeStyles.homePage} ${styles.secondaryPage}`}>
      <SiteHeader />
      <main id="main-content" className={styles.stateMain}>
        <div className={styles.stateCard} role="alert">
          <span className={styles.stateCode}>Temporary Error</span>
          <h1>DriveDock hit an unexpected stop.</h1>
          <p>Try loading this page again. If the problem continues, report it on GitHub with the page address and what you were doing.</p>
          <div className={styles.stateActions}>
            <button className={styles.primaryAction} onClick={retry} type="button"><RefreshCw aria-hidden="true" size={17} />Try Again</button>
            <Link className={styles.secondaryAction} href="/"><Home aria-hidden="true" size={17} />Back to Home</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
