import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Download,
  Facebook,
  Github,
  Instagram,
  Menu,
  Music2,
  Quote,
  Upload,
  X,
} from "lucide-react"
import {
  faqs,
  githubUrl,
  issuesUrl,
  privacyPoints,
  releasesUrl,
  testimonials,
  workflowSteps,
} from "./home-data"
import styles from "./home.module.css"

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`${styles.brand} ${inverse ? styles.brandInverse : ""}`} href="/" aria-label="DriveDock home">
      <Image src="/icon.svg" width={26} height={26} alt="" priority />
      <span>DriveDock</span>
    </Link>
  )
}

function DownloadLink({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`${styles.primaryButton} ${compact ? styles.compactButton : ""}`} href={releasesUrl}>
      <Download aria-hidden="true" size={compact ? 14 : 17} />
      {compact ? "Download" : "Download for macOS"}
    </a>
  )
}

function SourceLink() {
  return (
    <a className={styles.secondaryButton} href={githubUrl}>
      <Github aria-hidden="true" size={17} />
      See The Source
    </a>
  )
}

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

function AppWindow({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
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
        {compact ? null : <UploadRows />}
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

function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <a href="#top">Home</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className={styles.desktopDownload}>
          <DownloadLink compact />
        </div>
        <details className={styles.mobileNavigation}>
          <summary className={styles.menuButton} aria-label="Toggle navigation">
            <Menu aria-hidden="true" size={20} />
          </summary>
          <nav className={styles.mobileMenu} aria-label="Mobile navigation">
            <a href="#top">Home</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a className={styles.mobileDownload} href={releasesUrl}>
              <Download aria-hidden="true" size={15} />
              Download
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="home-title">
      <div className={styles.dotField} aria-hidden="true" />
      <span className={`${styles.heroBadge} ${styles.badgeMac}`}>macOS 14+ Sonoma</span>
      <span className={`${styles.heroBadge} ${styles.badgeSpeed}`}>Fast Uploads</span>
      <span className={`${styles.heroBadge} ${styles.badgeLicense}`}>MIT license</span>
      <span className={`${styles.heroBadge} ${styles.badgeTelemetry}`}>Zero telemetry</span>

      <div className={styles.heroCopy}>
        <h1 id="home-title">A better way to upload<br />to Google Drive</h1>
        <p>
          DriveDock is a native macOS app for getting files into Google Drive. Drag, drop, done.
          <br className={styles.desktopBreak} /> No browser tabs, no upload limits you can&apos;t see, no telemetry.
        </p>
        <div className={styles.heroActions}>
          <DownloadLink />
          <SourceLink />
        </div>
      </div>

      <AppWindow className={styles.heroWindow} />
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
          <h2 id="features-title">Unlock Premium Benefits With<br />Our Advanced Features.</h2>
          <p>Get files from your Mac into Google Drive. That&apos;s it.</p>
        </div>

        <div className={styles.featureGrid}>
          <article className={`${styles.featureCard} ${styles.dragFeature}`}>
            <h3>Drag and drop</h3>
            <p>Drop a file on the window, the menu bar, or the Dock icon. It starts uploading before you can lift your finger.</p>
            <div className={styles.dragVisual}>
              <FinderWindow />
              <AppWindow compact />
            </div>
          </article>

          <article className={`${styles.featureCard} ${styles.parallelFeature}`}>
            <h3>Uploads in parallel</h3>
            <p>Multiple files at once, with the concurrency adjusted to whatever your network can actually handle.</p>
            <UploadRows compact />
          </article>

          <article className={`${styles.featureCard} ${styles.smallFeature} ${styles.blueFeature}`}>
            <h3>Multiple Google accounts</h3>
            <p>Sign in to your personal, work, and shared drive accounts. Switch between them from the menu bar.</p>
          </article>

          <article className={`${styles.featureCard} ${styles.smallFeature}`}>
            <h3>Works with Shared Drives</h3>
            <p>Browse and upload to any Shared Drive you have access to, with the right permissions respected.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section className={styles.workflowSection} aria-labelledby="workflow-title">
      <div className={styles.pageContainer}>
        <SectionHeading
          eyebrow="How It Works"
          title={<>Built Around a Workflow<br />You&apos;ll Already Know.</>}
          description="Just drag, drop, and let DriveDock do the rest."
        />
        <div className={styles.workflowGrid}>
          <ol className={styles.workflowSteps}>
            {workflowSteps.map((step, index) => (
              <li className={index === 0 ? styles.activeStep : undefined} key={step.title}>
                <strong><span>{step.number}</span> {step.title}</strong>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <div className={styles.workflowVisual}>
            <span className={styles.menuBubble}>S</span>
            <FinderWindow />
            <AppWindow compact />
          </div>
        </div>
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
          <p>We built DriveDock to make uploading to Google Drive simple, fast, and private, without unnecessary permissions or tracking.</p>
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

function Testimonials() {
  return (
    <section className={styles.testimonialsSection} aria-labelledby="testimonials-title">
      <SectionHeading
        eyebrow="From people who use it"
        title={<span id="testimonials-title">What folks are saying</span>}
        description="A few notes from the GitHub issues and our inbox. We didn't pay for any of these."
      />
      <div className={styles.testimonialRail}>
        {testimonials.map((testimonial, index) => (
          <article
            className={`${styles.testimonialCard} ${index === 2 ? styles.testimonialFeatured : ""}`}
            id={`testimonial-${index}`}
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
      <nav className={styles.carouselControls} aria-label="Testimonial controls">
        <a href="#testimonial-1" aria-label="Previous testimonials">
          <ArrowLeft aria-hidden="true" size={17} />
        </a>
        <a href="#testimonial-3" aria-label="Next testimonials">
          <ArrowRight aria-hidden="true" size={17} />
        </a>
      </nav>
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
          <a className={styles.allFaqsLink} href={issuesUrl}>View All FAQs</a>
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
        <h2 id="download-title">Grab it and try it</h2>
        <p>Download the latest build from GitHub, drag it to Applications,<br />and you&apos;re set. It&apos;s a 12 MB binary that does one thing.</p>
        <div className={styles.heroActions}>
          <DownloadLink />
          <SourceLink />
        </div>
        <small>Needs macOS 14 Sonoma or later, works on Apple Silicon and Intel</small>
      </div>
    </section>
  )
}

const footerColumns = [
  {
    title: "Product",
    links: [
      ["Features", "#features"],
      ["Download", "#download"],
      ["Releases", releasesUrl],
    ],
  },
  {
    title: "Open Source",
    links: [
      ["GitHub", githubUrl],
      ["Issues", issuesUrl],
      ["Contribute", `${githubUrl}/blob/main/CONTRIBUTING.md`],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy"],
      ["MIT License", `${githubUrl}/blob/main/LICENSE`],
    ],
  },
] as const

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Brand inverse />
          <p>A small macOS app for getting files into Google Drive. Built with Swift, ships with zero telemetry.</p>
          <div className={styles.socialIcons} role="group" aria-label="DriveDock social channels">
            <Facebook aria-hidden="true" size={16} />
            <Instagram aria-hidden="true" size={16} />
            <X aria-hidden="true" size={16} />
            <Music2 aria-hidden="true" size={16} />
          </div>
        </div>
        <div className={styles.footerColumns}>
          {footerColumns.map((column) => (
            <nav aria-label={column.title} key={column.title}>
              <h2>{column.title}</h2>
              {column.links.map(([label, href]) => (
                <Link href={href} key={label}>{label}</Link>
              ))}
            </nav>
          ))}
        </div>
        <p className={styles.affiliation}>Not affiliated with Google LLC.</p>
        <div className={styles.footerBottom}>
          <p>© 2026 DriveDock Contributors. Released under the <a href={`${githubUrl}/blob/main/LICENSE`}>MIT License.</a></p>
        </div>
      </div>
    </footer>
  )
}

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <Workflow />
        <Privacy />
        <Testimonials />
        <FAQ />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
