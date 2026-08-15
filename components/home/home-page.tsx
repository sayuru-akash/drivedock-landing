import Link from "next/link"
import {
  ChevronDown,
  Upload,
} from "lucide-react"
import {
  faqs,
  githubUrl,
  issuesUrl,
  privacyPoints,
} from "./home-data"
import { ProductHighlightsCarousel } from "./testimonials-carousel"
import { DownloadLink, SiteFooter, SiteHeader, SourceLink } from "./site-chrome"
import { WorkflowShowcase } from "./workflow-showcase"
import styles from "./home.module.css"

function AccountRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.accountRow} ${compact ? styles.accountCompact : ""}`}>
      <span className={styles.accountAvatar}>J</span>
      <span className={styles.accountDetails}>
        <strong>john@workspace.com</strong>
        <small>My Drive, 45.2 GB free</small>
      </span>
      <span className={styles.switchLabel}>Switch</span>
    </div>
  )
}

function DropZone({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.dropZone} ${compact ? styles.dropZoneCompact : ""}`}>
      <span className={styles.uploadIcon}>
        <Upload aria-hidden="true" size={compact ? 14 : 19} />
      </span>
      <strong>Drop files or folders here</strong>
      <small>or click to browse</small>
    </div>
  )
}

const uploadRows = [
  { name: "design-assets.zip", meta: "312 MB", width: "100%", done: true },
  { name: "videos/", meta: "24 files", width: "68%", done: false },
  { name: "backup-2026-08.dmg", meta: "1.8 GB", width: "24%", done: false },
] as const

function UploadRows({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.uploadRows} ${compact ? styles.uploadRowsCompact : ""}`}>
      {uploadRows.map((row) => (
        <div className={styles.uploadRow} key={row.name}>
          <div>
            <strong>{row.name}</strong>
            <span>{row.done ? "Done" : row.meta}</span>
          </div>
          <span className={styles.progressTrack}>
            <span
              className={row.done ? styles.progressDone : styles.progressActive}
              style={{ width: row.width }}
            />
          </span>
        </div>
      ))}
    </div>
  )
}

function AppWindow({
  compact = false,
  className = "",
  showUploads = true,
}: {
  compact?: boolean
  className?: string
  showUploads?: boolean
}) {
  return (
    <div className={`${styles.appWindow} ${compact ? styles.appWindowCompact : ""} ${className}`}>
      <div className={styles.windowBar}>
        <span className={styles.trafficLights} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>DriveDock</span>
      </div>
      <div className={styles.windowBody}>
        <AccountRow compact={compact} />
        <DropZone compact={compact} />
        {!compact && showUploads ? <UploadRows /> : null}
      </div>
    </div>
  )
}

function FinderWindow() {
  const folders = ["Project Assets", "Designs", "Docs", "Downloads", "Archive"]

  return (
    <div className={styles.finderWindow} aria-hidden="true">
      <div className={styles.finderToolbar}>
        <span>‹</span>
        <span>›</span>
        <strong>Downloads</strong>
        <span>•••</span>
      </div>
      <div className={styles.folderGrid}>
        {folders.map((folder, index) => (
          <span key={folder}>
            <i className={index === 3 ? styles.fileThumb : styles.folderIcon} />
            <small>{folder}</small>
          </span>
        ))}
      </div>
      <span className={styles.dragCursor}>↗</span>
    </div>
  )
}

function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="home-title">
      <div className={styles.dotField} aria-hidden="true" />
      <span className={`${styles.heroBadge} ${styles.badgeMac}`}>macOS 14+ Sonoma</span>
      <span className={`${styles.heroBadge} ${styles.badgeSpeed}`}>Resumable uploads</span>
      <span className={`${styles.heroBadge} ${styles.badgeLicense}`}>MIT license</span>
      <span className={`${styles.heroBadge} ${styles.badgeTelemetry}`}>Zero telemetry</span>

      <div className={styles.heroCopy}>
        <h1 id="home-title">A better way to upload<br />to Google Drive</h1>
        <p>
          DriveDock is a native macOS app for uploading files and folders to Google Drive.
          <br className={styles.desktopBreak} /> It supports resumable transfers, parallel uploads, folder preservation, and per-file progress.
        </p>
        <div className={styles.heroActions}>
          <DownloadLink />
          <SourceLink />
        </div>
      </div>

      <AppWindow className={styles.heroWindow} showUploads={false} />
    </section>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description: string }) {
  return (
    <div className={styles.sectionHeading}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

function Features() {
  return (
    <section className={styles.featuresSection} id="features" aria-labelledby="features-title">
      <div className={styles.pageContainer}>
        <div className={styles.sectionHeading}>
          <span>Features</span>
          <h2 id="features-title">Upload to Drive without<br />setting up a sync folder.</h2>
          <p>Select files or folders, choose a Drive destination, and track each transfer.</p>
        </div>

        <div className={styles.featureGrid}>
          <article className={`${styles.featureCard} ${styles.dragFeature}`}>
            <h3>Drag and drop</h3>
            <p>Add files or folders from the main window, menu bar helper, Dock icon, or clipboard.</p>
            <div className={styles.dragVisual}>
              <FinderWindow />
              <AppWindow compact />
            </div>
          </article>

          <article className={`${styles.featureCard} ${styles.parallelFeature}`}>
            <h3>Uploads in parallel</h3>
            <p>Upload multiple files at once. Concurrency adapts to network quality, errors, battery state, and Drive rate limits.</p>
            <UploadRows compact />
          </article>

          <article className={`${styles.featureCard} ${styles.smallFeature} ${styles.blueFeature}`}>
            <h3>Multiple Google accounts</h3>
            <p>Connect multiple accounts and choose the Google account used for each upload batch.</p>
          </article>

          <article className={`${styles.featureCard} ${styles.smallFeature}`}>
            <h3>Works with Shared Drives</h3>
            <p>Browse My Drive and Shared Drives, then upload to folders where the connected account has write access.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section className={styles.workflowSection} id="workflow" aria-labelledby="workflow-title">
      <div className={styles.pageContainer}>
        <SectionHeading
          eyebrow="How It Works"
          title={<>Built Around a Workflow<br />You&apos;ll Already Know.</>}
          description="Just drag, drop, and let DriveDock do the rest."
        />
        <WorkflowShowcase />
      </div>
    </section>
  )
}

function Privacy() {
  return (
    <section className={styles.privacySection} id="privacy" aria-labelledby="privacy-title">
      <div className={`${styles.pageContainer} ${styles.privacyGrid}`}>
        <div className={styles.privacyCopy}>
          <span>Privacy</span>
          <h2 id="privacy-title">Your files stay yours</h2>
          <p>OAuth tokens stay in macOS Keychain, telemetry is disabled, and the source code is available for review.</p>
          <Link href="/privacy">Read the privacy policy</Link>
        </div>
        <div className={styles.privacyCards}>
          {privacyPoints.map((point, index) => (
            <article className={index === 0 || index === 3 ? styles.privacyCardBlue : undefined} key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className={styles.faqSection} id="faq" aria-labelledby="faq-title">
      <div className={`${styles.pageContainer} ${styles.faqGrid}`}>
        <div className={styles.faqCopy}>
          <span>FAQ</span>
          <h2 id="faq-title">Frequently Asked<br />Questions</h2>
          <p>If you have any questions or issues, <a href={issuesUrl}>open an issue.</a></p>
          <a className={styles.allFaqsLink} href={`${githubUrl}#faq`}>Read the app FAQ</a>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <details className={styles.faqItem} key={faq.question} open={index === 1}>
              <summary>
                <span>{faq.question}</span>
                <ChevronDown aria-hidden="true" size={18} />
              </summary>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section className={styles.downloadSection} id="download" aria-labelledby="download-title">
      <div className={styles.downloadDots} aria-hidden="true" />
      <div className={styles.downloadContent}>
        <h2 id="download-title">Download DriveDock for macOS</h2>
        <p>The current DMG, zip archive, and SHA-256 checksums are available from GitHub Releases.</p>
        <div className={styles.heroActions}>
          <DownloadLink />
          <SourceLink />
        </div>
        <small>This release is unsigned or ad-hoc signed. Gatekeeper may require Control-click, then Open, on first launch.</small>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Features />
        <Workflow />
        <Privacy />
        <ProductHighlightsCarousel />
        <FAQ />
        <DownloadSection />
      </main>
      <SiteFooter />
    </div>
  )
}
