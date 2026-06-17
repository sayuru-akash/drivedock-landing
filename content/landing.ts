import { 
  HeroContent, 
  Feature, 
  Benefit, 
  TechnicalDetail, 
  Screenshot,
  NavigationLink,
  FooterLink
} from "@/types/content"

export const heroContent: HeroContent = {
  headline: "The cleanest way to upload to Google Drive",
  subheadline: "Native macOS app for uploading files and folders to Google Drive with speed, clarity, and control. Built with Swift and SwiftUI.",
  heroImage: {
    src: "/images/hero-screenshot.png",
    alt: "DriveDock main window showing upload interface"
  },
  ctaPrimary: {
    text: "Download for macOS",
    url: "https://github.com/sayuru-akash/drivedock/releases",
    external: true
  },
  ctaSecondary: {
    text: "View on GitHub",
    url: "https://github.com/sayuru-akash/drivedock",
    external: true
  }
}

export const features: Feature[] = [
  {
    id: "drag-drop",
    icon: "upload",
    title: "Drag & Drop Uploads",
    description: "Drop files or folders directly onto the window, menu bar, or Dock icon to start uploading instantly."
  },
  {
    id: "folder-structure",
    icon: "folder",
    title: "Folder Structure Preservation",
    description: "Upload entire folder hierarchies and DriveDock recreates the exact structure in Google Drive, including nested subfolders."
  },
  {
    id: "parallel-uploads",
    icon: "zap",
    title: "Parallel Uploads",
    description: "Upload multiple files simultaneously with adaptive concurrency that adjusts based on network conditions."
  },
  {
    id: "resumable-uploads",
    icon: "refresh",
    title: "Resumable Uploads",
    description: "Large files use Google Drive's resumable upload protocol. If your connection drops, uploads pick up right where they left off."
  },
  {
    id: "multi-account",
    icon: "users",
    title: "Multi-Account Support",
    description: "Connect multiple Google accounts and switch between personal, work, and Shared Drive accounts without friction."
  },
  {
    id: "shared-drive",
    icon: "share",
    title: "Shared Drive Support",
    description: "Browse and upload to Google Shared Drives you have access to, with full permission awareness."
  },
  {
    id: "menu-bar",
    icon: "menu",
    title: "Menu Bar Helper",
    description: "A persistent menu bar icon shows upload progress, active count, a quick drop zone, and account switching."
  },
  {
    id: "upload-history",
    icon: "clock",
    title: "Upload History",
    description: "Track every upload with timestamps, file size, duration, average speed, destination, account, status, and Drive links."
  }
]

export const benefits: Benefit[] = [
  {
    title: "Native macOS Performance",
    description: "Built with Swift and SwiftUI for a fast, lightweight experience that feels right at home on your Mac. No Electron. No bloat.",
    emphasis: "high"
  },
  {
    title: "Complete Privacy",
    description: "OAuth tokens stored exclusively in macOS Keychain. Zero telemetry. Zero tracking. Your files and activity stay on your Mac.",
    emphasis: "high"
  },
  {
    title: "Open Source & Transparent",
    description: "Every line of code is publicly auditable under the MIT license. DriveDock does exactly what it says, nothing more.",
    emphasis: "high"
  },
  {
    title: "Reliable & Resilient",
    description: "Resumable uploads, adaptive concurrency, automatic retry with backoff, and network monitoring ensure your files always reach their destination.",
    emphasis: "medium"
  }
]

export const technicalDetails: TechnicalDetail[] = [
  {
    category: "Architecture",
    items: [
      "Built with Swift and SwiftUI",
      "Native macOS 14+ (Sonoma or later)",
      "MVVM architecture with @Observable",
      "React-style declarative UI composition"
    ]
  },
  {
    category: "Security",
    items: [
      "OAuth 2.0 authentication",
      "Keychain-only credential storage",
      "Security-scoped file bookmarks",
      "Minimal OAuth scopes (drive.file only)"
    ]
  },
  {
    category: "License",
    items: [
      "MIT License - free to use, modify, and distribute",
      "Open source on GitHub",
      "Community-driven development"
    ]
  },
  {
    category: "Requirements",
    items: [
      "macOS 14 Sonoma or later",
      "Google account with Drive access",
      "Internet connection for uploads"
    ]
  }
]

export const screenshots: Screenshot[] = [
  {
    src: "/images/screenshot-main.png",
    alt: "DriveDock main window with upload queue",
    caption: "Main window showing active uploads"
  },
  {
    src: "/images/screenshot-progress.png",
    alt: "Upload progress with speed and ETA",
    caption: "Real-time progress tracking"
  },
  {
    src: "/images/screenshot-menubar.png",
    alt: "Menu bar helper showing upload status",
    caption: "Menu bar integration"
  }
]

export const navigationLinks: NavigationLink[] = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Benefits", href: "#benefits" },
  { label: "Technical", href: "#technical" },
  { label: "Download", href: "#download" }
]

export const footerLinks: FooterLink[] = [
  { 
    label: "GitHub", 
    href: "https://github.com/sayuru-akash/drivedock",
    external: true
  },
  { 
    label: "Issues", 
    href: "https://github.com/sayuru-akash/drivedock/issues",
    external: true
  },
  { 
    label: "Releases", 
    href: "https://github.com/sayuru-akash/drivedock/releases",
    external: true
  }
]

export const downloadContent = {
  title: "Ready to try DriveDock?",
  description: "Download the latest version and start uploading with speed and control.",
  ctaText: "Download for macOS",
  ctaUrl: "https://github.com/sayuru-akash/drivedock/releases",
  requirements: "Requires macOS 14 Sonoma or later"
}

export const footerContent = {
  copyright: `© ${new Date().getFullYear()} DriveDock Contributors`,
  license: "Released under the MIT License"
}
