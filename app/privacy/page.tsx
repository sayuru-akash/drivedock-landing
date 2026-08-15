import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check, ExternalLink, ShieldCheck } from "lucide-react"
import { SiteFooter, SiteHeader } from "@/components/home/site-chrome"
import homeStyles from "@/components/home/home.module.css"
import styles from "@/components/home/secondary.module.css"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DriveDock handles Google OAuth credentials, upload history, local settings, and file transfers without analytics or telemetry.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "DriveDock Privacy Policy",
    description: "A plain-language explanation of DriveDock's local storage, Google Drive permissions, and zero-telemetry design.",
    url: "/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveDock Privacy Policy",
    description: "How DriveDock handles files, Google OAuth credentials, and local app data.",
  },
}

const policySummary = [
  <>DriveDock includes <strong>no analytics, advertising, or third-party telemetry.</strong></>,
  <>Google OAuth credentials are stored in <strong>macOS Keychain.</strong></>,
  <><code>drive.file</code> handles uploads, while <code>drive.readonly</code> enables destination browsing.</>,
  <>Files travel from your Mac directly to <strong>Google Drive APIs.</strong></>,
]

export default function PrivacyPage() {
  return (
    <div className={`${homeStyles.homePage} ${styles.secondaryPage}`}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className={styles.secondaryMain}>
        <div className={styles.policyShell}>
          <Link className={styles.backLink} href="/">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to DriveDock
          </Link>

          <header className={styles.policyHeader}>
            <span className={styles.eyebrow}><ShieldCheck aria-hidden="true" size={14} />Privacy Policy</span>
            <h1>Your files stay between your Mac and Google Drive.</h1>
            <p className={styles.updated}>Last updated: <time dateTime="2026-08">August 2026</time></p>
          </header>

          <section className={styles.summaryCard} aria-labelledby="privacy-summary-title">
            <h2 id="privacy-summary-title"><ShieldCheck aria-hidden="true" size={18} />The Short Version</h2>
            <ul>
              {policySummary.map((item, index) => (
                <li key={index}><Check aria-hidden="true" size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <article className={styles.policyContent}>
            <h2>1. What DriveDock Is</h2>
            <p>DriveDock is an open-source macOS app for uploading files and folders to Google Drive. It is released under the MIT License. This policy explains what the app stores locally, what it sends to Google, and what the developer does not receive.</p>

            <h2>2. Data the Developer Does Not Collect</h2>
            <p>DriveDock has no developer-operated analytics or data collection service. The app does not send the developer:</p>
            <ul>
              <li>Your name, email address, or Google profile information</li>
              <li>The names, contents, or metadata of your files</li>
              <li>Usage analytics, interaction logs, or device identifiers</li>
              <li>Crash reports or diagnostic telemetry</li>
              <li>Your Drive folders, destinations, or upload history</li>
            </ul>

            <h2>3. Google Sign-In and Permissions</h2>
            <p>DriveDock opens Google&apos;s OAuth 2.0 sign-in flow. Your Google password is entered on Google&apos;s page and is never visible to DriveDock.</p>
            <p>The app requests <code>https://www.googleapis.com/auth/drive.file</code> to create and upload files. It also requests <code>https://www.googleapis.com/auth/drive.readonly</code> to browse existing files, folders, and Shared Drives when you choose a destination. The read-only permission cannot modify or delete existing Drive items.</p>
            <p>Access and refresh tokens are stored in macOS Keychain. They are not written to a regular settings file, sent to the developer, or stored by this website.</p>

            <h2>4. File Transfers</h2>
            <p>When you upload an item, DriveDock reads it from your Mac and sends it to Google Drive&apos;s API. The website is not involved in the transfer, and the developer does not receive a copy.</p>
            <p>DriveDock keeps local upload records so you can review file names, sizes, destinations, progress, speed, and status. Those records remain in the app&apos;s container on your Mac.</p>

            <h2>5. Local Storage</h2>
            <p>DriveDock stores only the local data needed to operate:</p>
            <ul>
              <li><strong>OAuth credentials</strong> in macOS Keychain</li>
              <li><strong>App settings</strong> in the app&apos;s sandboxed preferences</li>
              <li><strong>Upload history and queue state</strong> inside the app container</li>
            </ul>
            <p>To remove this local data, delete DriveDock&apos;s app data and its Keychain entries from your Mac.</p>

            <h2>6. Network Services</h2>
            <p>The app connects to Google&apos;s authentication and Drive API services for sign-in, token refresh, Drive browsing, folder creation, and uploads. DriveDock contains no advertising SDK, analytics service, or third-party crash reporter.</p>

            <h2>7. Google&apos;s Terms</h2>
            <p>Google&apos;s services are governed by <a href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a> and the <a href="https://developers.google.com/terms">Google APIs Terms of Service</a>. After an upload reaches Google Drive, Google&apos;s policies apply to that stored file.</p>

            <h2>8. Source Code and Security</h2>
            <p>The <a href="https://github.com/sayuru-akash/drivedock">DriveDock source code</a>, release history, and security policy are public. Report sensitive security issues through the repository&apos;s private Security reporting flow. Use <a href="https://github.com/sayuru-akash/drivedock/issues">GitHub Issues</a> for non-sensitive bugs or questions.</p>

            <h2>9. Policy Changes</h2>
            <p>If DriveDock&apos;s data handling changes, this page will be updated with a new date and the relevant release notes will explain the change.</p>
          </article>

          <nav className={styles.policyFooterNav} aria-label="Privacy page links">
            <Link className={styles.backLink} href="/"><ArrowLeft aria-hidden="true" size={16} />Back to DriveDock</Link>
            <a className={styles.textLink} href="https://github.com/sayuru-akash/drivedock">Review the Source<ExternalLink aria-hidden="true" size={15} /></a>
          </nav>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
