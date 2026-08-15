import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Home } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/home/site-chrome"
import homeStyles from "@/components/home/home.module.css"
import styles from "@/components/home/secondary.module.css"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested DriveDock page could not be found.",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className={`${homeStyles.homePage} ${styles.secondaryPage}`}>
      <SiteHeader />
      <main id="main-content" className={styles.stateMain}>
        <div className={styles.stateCard}>
          <span className={styles.stateCode}>404 · Page Not Found</span>
          <h1>This page is not on the dock.</h1>
          <p>The address may be outdated or mistyped. Return to the homepage, or open the source repository if you were looking for app documentation.</p>
          <div className={styles.stateActions}>
            <Link className={styles.primaryAction} href="/"><Home aria-hidden="true" size={17} />Back to Home</Link>
            <a className={styles.secondaryAction} href="https://github.com/sayuru-akash/drivedock">View the Source<ArrowRight aria-hidden="true" size={17} /></a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
