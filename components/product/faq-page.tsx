import Link from "next/link"
import { ArrowRight, Github, LifeBuoy, ShieldCheck } from "lucide-react"
import { DownloadLink, SiteFooter, SiteHeader } from "@/components/home/site-chrome"
import homeStyles from "@/components/home/home.module.css"
import { FaqBrowser } from "./faq-browser"
import styles from "./product-pages.module.css"

export function FaqPage() {
  return (
    <div className={`${homeStyles.homePage} ${styles.productPage}`}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className={styles.faqHero} aria-labelledby="faq-page-title">
          <div className={styles.heroDots} aria-hidden="true" />
          <div className={styles.productContainer}>
            <div className={styles.faqHeroCopy}>
              <h1 id="faq-page-title">Answers before<br />your first transfer.</h1>
              <p>Clear details about uploads, downloads, accounts, permissions, privacy, installation, and how DriveDock behaves when a transfer is interrupted.</p>
              <div className={styles.heroActions}><DownloadLink /><a className={homeStyles.secondaryButton} href="https://github.com/sayuru-akash/drivedock#faq"><Github aria-hidden="true" size={17} />Read on GitHub</a></div>
            </div>
            <div className={styles.faqHeroFacts}>
              <article><strong>23</strong><span>Practical answers</span></article>
              <article><strong>5</strong><span>Focused topics</span></article>
              <article><strong>0</strong><span>Analytics or telemetry</span></article>
            </div>
          </div>
        </section>

        <div className={styles.productContainer}>
          <FaqBrowser />
        </div>

        <section className={styles.supportSection} id="support" aria-labelledby="support-title">
          <div className={styles.productContainer}>
            <div className={styles.supportHeading}>
              <span>Still Need Help?</span>
              <h2 id="support-title">Use the right channel for the question.</h2>
              <p>DriveDock is open source. Public support and private security reporting both happen in the GitHub repository.</p>
            </div>
            <div className={styles.supportOptions}>
              <article>
                <LifeBuoy aria-hidden="true" size={23} />
                <h3>Bugs, Questions & Feature Requests</h3>
                <p>Search existing issues first. If the problem is new, include steps to reproduce it, the expected result, and your macOS version.</p>
                <a href="https://github.com/sayuru-akash/drivedock/issues">Open GitHub Issues<ArrowRight aria-hidden="true" size={16} /></a>
              </article>
              <article>
                <ShieldCheck aria-hidden="true" size={23} />
                <h3>Sensitive Security Reports</h3>
                <p>Report vulnerabilities privately through GitHub Security. Do not put credentials, tokens, or sensitive details in a public issue.</p>
                <a href="https://github.com/sayuru-akash/drivedock/security">Open Security Reporting<ArrowRight aria-hidden="true" size={16} /></a>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.faqCta} aria-labelledby="faq-cta-title">
          <div className={styles.productContainer}>
            <div><h2 id="faq-cta-title">See what DriveDock can do.</h2><p>Explore the full feature set, or download the current macOS release from GitHub.</p></div>
            <div className={styles.heroActions}><Link className={homeStyles.secondaryButton} href="/features">Explore Features<ArrowRight aria-hidden="true" size={16} /></Link><DownloadLink /></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
