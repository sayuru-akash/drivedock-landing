import Image from "next/image"
import Link from "next/link"
import { Download, Github, Globe2 } from "lucide-react"
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import {
  developer,
  githubUrl,
  issuesUrl,
  latestReleaseUrl,
  releasesUrl,
  socialLinks,
} from "./home-data"
import styles from "./home.module.css"
import { MobileNavigation } from "./mobile-navigation"

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`${styles.brand} ${inverse ? styles.brandInverse : ""}`} href="/" aria-label="DriveDock home">
      <Image src="/icon.svg" width={26} height={26} alt="" priority />
      <span translate="no">DriveDock</span>
    </Link>
  )
}

export function DownloadLink({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`${styles.primaryButton} ${compact ? styles.compactButton : ""}`} href={latestReleaseUrl}>
      <Download aria-hidden="true" size={compact ? 14 : 17} />
      {compact ? "Download" : "Download for macOS"}
    </a>
  )
}

export function SourceLink() {
  return (
    <a className={styles.secondaryButton} href={githubUrl}>
      <Github aria-hidden="true" size={17} />
      See The Source
    </a>
  )
}

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.headerInner}>
        <Brand />
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link href="/#top">Home</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className={styles.desktopDownload}>
          <DownloadLink compact />
        </div>
        <MobileNavigation />
      </div>
    </header>
  )
}

const footerColumns = [
  {
    title: "Product",
    links: [
      ["Features", "/#features"],
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

const socialIconMap = {
  website: Globe2,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
} as const

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Brand inverse />
          <p>A native Swift and SwiftUI uploader for Google Drive, with resumable transfers and no analytics or telemetry.</p>
          <p className={styles.developerCredit}>
            Developer: <a href={developer.website}>{developer.name}</a>
          </p>
          <div className={styles.socialIcons} role="group" aria-label={`${developer.name} social profiles`}>
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon]
              return (
                <a
                  aria-label={social.label}
                  href={social.href}
                  key={social.label}
                  rel="me noopener noreferrer"
                  target="_blank"
                  title={social.label}
                >
                  <Icon aria-hidden="true" size={16} />
                </a>
              )
            })}
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
