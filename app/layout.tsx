import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { faqs } from "@/components/home/home-data"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
})

const siteUrl = "https://drivedock.app"
const siteName = "DriveDock"
const siteTitle = "DriveDock: Google Drive Uploader for macOS"
const siteDescription =
  "Upload files and folders from macOS to Google Drive with resumable transfers, parallel uploads, folder preservation, multiple accounts, and no telemetry."
const siteKeywords = [
  "Google Drive uploader macOS",
  "upload files to Google Drive Mac",
  "Google Drive upload app for Mac",
  "macOS Google Drive uploader",
  "drag and drop Google Drive Mac",
  "parallel uploads Google Drive",
  "resumable Google Drive uploads",
  "upload folders to Google Drive Mac",
  "open source Google Drive client",
  "DriveDock",
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Sayuru Akash Amarasinghe", url: "https://sayuru.dev" }],
  creator: "Sayuru Akash Amarasinghe",
  publisher: siteName,
  applicationName: siteName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: siteUrl,
    languages: { "en-US": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@sayuru_akash",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
      noimageindex: false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
    startupImage: ["/icon-512.png"],
  },
  appLinks: {
    web: { url: siteUrl, should_fallback: true },
  },
  other: {
    "msapplication-TileColor": "#EEF4FF",
    "msapplication-TileImage": "/icon-512.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#EEF4FF",
  colorScheme: "light",
  viewportFit: "cover",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}#developer`,
      name: "Sayuru Akash Amarasinghe",
      url: "https://sayuru.dev",
      sameAs: [
        "https://github.com/sayuru-akash",
        "https://www.linkedin.com/in/sayuruakash",
        "https://x.com/sayuru_akash",
        "https://github.com/sayuru-akash/drivedock",
        "https://github.com/sayuru-akash/drivedock-landing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}#developer` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "File Upload Manager",
      operatingSystem: "macOS 14.0 or later",
      downloadUrl: "https://github.com/sayuru-akash/drivedock/releases/latest",
      datePublished: "2026-06-17",
      dateModified: "2026-08-16",
      author: { "@id": `${siteUrl}#developer` },
      publisher: { "@id": `${siteUrl}#developer` },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description: siteDescription,
      url: siteUrl,
      license: "https://opensource.org/licenses/MIT",
      codeRepository: "https://github.com/sayuru-akash/drivedock",
      screenshot: `${siteUrl}/icon-512.png`,
      featureList: [
        "Drag and drop uploads",
        "Folder structure preservation",
        "Parallel uploads with adaptive concurrency",
        "Resumable uploads",
        "Multi-account support",
        "Shared Drive support",
        "Menu bar helper",
        "Upload history",
        "Keychain-only credential storage",
        "Zero telemetry",
        "Open source",
        "MIT License",
      ],
      softwareRequirements: "macOS 14 Sonoma or later",
      permissions: "Google Drive drive.file and drive.readonly OAuth scopes",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="https://github.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
