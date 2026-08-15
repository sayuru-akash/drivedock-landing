import Link from "next/link"
import {
  ArrowRight,
  Bell,
  Check,
  Clipboard,
  CloudDownload,
  CloudUpload,
  FileCheck2,
  FileClock,
  FileOutput,
  Fingerprint,
  FolderInput,
  FolderTree,
  Gauge,
  HardDriveDownload,
  KeyRound,
  Laptop,
  ListRestart,
  Menu,
  MousePointer2,
  Network,
  Pause,
  RotateCcw,
  ShieldCheck,
  SlidersHorizontal,
  Users,
  WifiOff,
} from "lucide-react"
import { DownloadLink, SiteFooter, SiteHeader, SourceLink } from "@/components/home/site-chrome"
import homeStyles from "@/components/home/home.module.css"
import { FeatureExplorer } from "./feature-explorer"
import styles from "./product-pages.module.css"

const entryPoints = [
  { icon: MousePointer2, title: "Main Window", text: "Drop files or folders directly into DriveDock." },
  { icon: Menu, title: "Menu Bar", text: "Start a transfer from the lightweight menu bar helper." },
  { icon: FolderInput, title: "Finder & Dock", text: "Send selections from Finder or drop them on the Dock icon." },
  { icon: Clipboard, title: "Clipboard", text: "Paste copied file and folder references into the queue." },
] as const

const reliabilityPoints = [
  { icon: CloudUpload, title: "Parallel Uploads", text: "Transfer multiple files together with adaptive concurrency." },
  { icon: RotateCcw, title: "Resumable Sessions", text: "Continue eligible large uploads after interruption instead of restarting." },
  { icon: WifiOff, title: "Network Recovery", text: "Retry transient failures with exponential backoff and jitter." },
  { icon: Pause, title: "Queue Control", text: "Pause, resume, cancel, retry, reorder, and prioritize work." },
  { icon: Gauge, title: "Bandwidth Limits", text: "Cap upload bandwidth when other work needs the connection." },
  { icon: FileClock, title: "Persistent State", text: "Keep queue state through app restarts, sleep, and wake cycles." },
] as const

const nativePoints = [
  { icon: Laptop, title: "Native macOS Interface", text: "Built in Swift and SwiftUI with light and dark appearance support." },
  { icon: Bell, title: "Native Notifications", text: "Receive macOS notifications when important transfer events occur." },
  { icon: Fingerprint, title: "Optional App Protection", text: "Use Touch ID or Apple Watch approval when available." },
  { icon: KeyRound, title: "Keychain Credentials", text: "Keep OAuth access and refresh tokens in macOS Keychain." },
]

function TransferBoard() {
  return (
    <div className={styles.heroBoard} aria-label="Illustration of a DriveDock transfer queue">
      <div className={styles.heroBoardBar}>
        <span aria-hidden="true"><i /><i /><i /></span>
        <strong>DriveDock</strong>
        <small>Queue</small>
      </div>
      <div className={styles.heroBoardBody}>
        <div className={styles.heroAccount}>
          <span>S</span><div><strong>sayuru@workspace.com</strong><small>Shared Drives available</small></div><Check aria-hidden="true" size={16} />
        </div>
        <div className={styles.heroDestination}><FolderTree aria-hidden="true" size={17} /><span>Design Team / Launch Assets</span></div>
        <div className={styles.heroTransfers}>
          <div><CloudUpload aria-hidden="true" size={17} /><span><strong>campaign-video.mov</strong><small>1.8 GB of 2.4 GB</small></span><b>74%</b><i><span style={{ width: "74%" }} /></i></div>
          <div><CloudUpload aria-hidden="true" size={17} /><span><strong>brand-assets.zip</strong><small>186 MB of 312 MB</small></span><b>60%</b><i><span style={{ width: "60%" }} /></i></div>
          <div><ListRestart aria-hidden="true" size={17} /><span><strong>project-archive</strong><small>Preparing 142 files</small></span><b>Next</b><i><span style={{ width: "18%" }} /></i></div>
        </div>
      </div>
    </div>
  )
}

export function FeaturesPage() {
  return (
    <div className={`${homeStyles.homePage} ${styles.productPage}`}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className={styles.featuresHero} aria-labelledby="features-page-title">
          <div className={styles.heroDots} aria-hidden="true" />
          <div className={styles.productContainer}>
            <div className={styles.featuresHeroGrid}>
              <div className={styles.featuresHeroCopy}>
                <h1 id="features-page-title">Every transfer,<br />under your control.</h1>
                <p>DriveDock gives macOS users a clear, durable way to move files and folders through Google Drive without setting up a sync folder.</p>
                <div className={styles.heroActions}><DownloadLink /><SourceLink /></div>
                <ul className={styles.heroProof} aria-label="DriveDock highlights">
                  <li><Check aria-hidden="true" size={15} />macOS 14+</li>
                  <li><Check aria-hidden="true" size={15} />MIT licensed</li>
                  <li><Check aria-hidden="true" size={15} />No telemetry</li>
                </ul>
              </div>
              <TransferBoard />
            </div>
          </div>
        </section>

        <nav className={styles.sectionNav} aria-label="Features on this page">
          <div className={styles.productContainer}>
            <a href="#start">Start Transfers</a>
            <a href="#control">Transfer Control</a>
            <a href="#destinations">Accounts & Drives</a>
            <a href="#downloads">Downloads & Records</a>
            <a href="#security">macOS & Security</a>
          </div>
        </nav>

        <section className={styles.entrySection} id="start" aria-labelledby="start-title">
          <div className={styles.productContainer}>
            <div className={styles.splitHeading}>
              <div><span>Start Anywhere</span><h2 id="start-title">Move files into the queue from the places you already work.</h2></div>
              <p>Start with a single file, a nested folder, or a larger batch. DriveDock prepares the work, shows the plan, and lets you confirm the account, destination, and duplicate policy before transfer.</p>
            </div>
            <div className={styles.entryGrid}>
              {entryPoints.map(({ icon: Icon, title, text }) => (
                <article key={title}><Icon aria-hidden="true" size={21} /><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.controlSection} id="control" aria-labelledby="control-title">
          <div className={styles.productContainer}>
            <div className={styles.centerHeading}>
              <span>Transfer Control</span>
              <h2 id="control-title">A transfer engine built for real connections.</h2>
              <p>Explore the controls that keep uploads, downloads, accounts, and records understandable.</p>
            </div>
            <FeatureExplorer />
          </div>
        </section>

        <section className={styles.reliabilitySection} aria-labelledby="reliability-title">
          <div className={styles.productContainer}>
            <div className={styles.reliabilityGrid}>
              <div className={styles.reliabilityIntro}>
                <span>Reliable by Design</span>
                <h2 id="reliability-title">The queue stays useful when conditions change.</h2>
                <p>DriveDock adapts to rate limits, network changes, battery state, interruption, sleep, and restart without hiding what is happening.</p>
                <Link href="/faq?category=uploads">Read Upload Answers<ArrowRight aria-hidden="true" size={16} /></Link>
              </div>
              <div className={styles.reliabilityList}>
                {reliabilityPoints.map(({ icon: Icon, title, text }) => (
                  <article key={title}><span><Icon aria-hidden="true" size={19} /></span><div><h3>{title}</h3><p>{text}</p></div></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.destinationSection} id="destinations" aria-labelledby="destinations-title">
          <div className={styles.productContainer}>
            <div className={styles.destinationGrid}>
              <div className={styles.destinationVisual} aria-hidden="true">
                <div className={styles.driveTree}>
                  <div><Users size={17} /><strong>sayuru@workspace.com</strong><Check size={15} /></div>
                  <span><HardDriveDownload size={16} />My Drive</span>
                  <span className={styles.driveTreeActive}><Users size={16} />Shared Drives</span>
                  <small><FolderTree size={15} />Design Team</small>
                  <small className={styles.driveFolderSelected}><FolderInput size={15} />Launch Assets</small>
                </div>
                <div className={styles.duplicatePolicy}>
                  <strong>Duplicate Policy</strong>
                  {['Keep Both', 'Auto Rename', 'Skip', 'Replace'].map((policy, index) => <span key={policy} className={index === 1 ? styles.policySelected : undefined}><i />{policy}{index === 1 ? <Check size={14} /> : null}</span>)}
                </div>
              </div>
              <div className={styles.destinationCopy}>
                <span>Accounts & Destinations</span>
                <h2 id="destinations-title">Choose the right account, Drive, folder, and duplicate policy.</h2>
                <p>Connected accounts stay available for future batches. DriveDock keeps every queued item tied to the account and destination you selected.</p>
                <ul>
                  <li><Users aria-hidden="true" size={18} /><span><strong>Multiple accounts</strong>Switch per batch without removing other accounts.</span></li>
                  <li><FolderTree aria-hidden="true" size={18} /><span><strong>My Drive and Shared Drives</strong>Browse folders and create a destination where you have access.</span></li>
                  <li><SlidersHorizontal aria-hidden="true" size={18} /><span><strong>4 duplicate policies</strong>Keep both, auto rename, skip, or replace.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.downloadsSection} id="downloads" aria-labelledby="downloads-title">
          <div className={styles.productContainer}>
            <div className={styles.splitHeading}>
              <div><span>Downloads & Records</span><h2 id="downloads-title">Bring files down, then keep a clear record.</h2></div>
              <p>Use the Drive browser to select files for parallel download. Completed work stays in local history, with summaries and reports you can export when you need an audit trail.</p>
            </div>
            <div className={styles.downloadFeatureRow}>
              <article><CloudDownload aria-hidden="true" size={23} /><span>01</span><h3>Parallel Downloads</h3><p>Download multiple selected Drive files through a persistent queue.</p></article>
              <article><FileCheck2 aria-hidden="true" size={23} /><span>02</span><h3>Transfer History</h3><p>Review completed items, status, destinations, and completion summaries.</p></article>
              <article><FileOutput aria-hidden="true" size={23} /><span>03</span><h3>Exportable Reports</h3><p>Save CSV, JSON, or plain-text reports for your own records.</p></article>
            </div>
          </div>
        </section>

        <section className={styles.nativeSection} id="security" aria-labelledby="native-title">
          <div className={styles.productContainer}>
            <div className={styles.nativeGrid}>
              <div className={styles.nativeCopy}>
                <span>Native & Local-First</span>
                <h2 id="native-title">Designed to feel at home on your Mac.</h2>
                <p>DriveDock uses native macOS frameworks, stores credentials in Keychain, and sends file data directly to Google Drive APIs. There is no analytics or third-party crash reporting.</p>
                <div className={styles.nativeActions}><Link href="/privacy">Read the Privacy Policy<ArrowRight aria-hidden="true" size={16} /></Link><a href="https://github.com/sayuru-akash/drivedock/security">Security Policy<ArrowRight aria-hidden="true" size={16} /></a></div>
              </div>
              <div className={styles.nativeList}>
                {nativePoints.map(({ icon: Icon, title, text }) => <article key={title}><Icon aria-hidden="true" size={21} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
                <article><Network aria-hidden="true" size={21} /><div><h3>Direct Transfers</h3><p>File data moves between your Mac and Google Drive APIs, not through this website.</p></div></article>
                <article><ShieldCheck aria-hidden="true" size={21} /><div><h3>No Telemetry</h3><p>No analytics SDK, advertising, usage tracking, or third-party crash reporter.</p></div></article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.productCta} aria-labelledby="features-cta-title">
          <div className={styles.heroDots} aria-hidden="true" />
          <div className={styles.productCtaCopy}>
            <h2 id="features-cta-title">Ready for a more deliberate way to use Google Drive?</h2>
            <p>Download DriveDock for macOS, or read the FAQ before you install.</p>
            <div className={styles.heroActions}><DownloadLink /><Link className={homeStyles.secondaryButton} href="/faq">Read the FAQ<ArrowRight aria-hidden="true" size={16} /></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
