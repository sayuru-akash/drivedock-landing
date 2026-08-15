"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Home, RefreshCw } from "lucide-react"
import styles from "@/components/home/secondary.module.css"

export default function GlobalError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <html lang="en">
      <head><title>Unexpected Error | DriveDock</title></head>
      <body style={{ margin: 0, fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <main id="main-content" className={styles.stateMain}>
          <div className={styles.stateCard} role="alert">
            <span className={styles.stateCode}>Temporary Error</span>
            <h1>DriveDock could not load this page.</h1>
            <p>Try loading it again. If the problem continues, return to the homepage and report the failing address on GitHub.</p>
            <div className={styles.stateActions}>
              <button className={styles.primaryAction} onClick={retry} type="button"><RefreshCw aria-hidden="true" size={17} />Try Again</button>
              <Link className={styles.secondaryAction} href="/"><Home aria-hidden="true" size={17} />Back to Home</Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
