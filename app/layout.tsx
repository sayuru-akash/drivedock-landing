import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
})

const siteUrl = "https://drivedock.app"
const siteName = "DriveDock"
const siteTitle = "DriveDock: Native macOS Google Drive Upload Client"
const siteDescription =
  "The cleanest way to upload files to Google Drive on macOS. Native Swift app with drag-and-drop, parallel uploads, folder preservation, and complete privacy. Free & open source."
const siteKeywords = [
  "Google Drive uploader macOS",
  "native macOS Google Drive app",
  "Google Drive desktop client",
  "macOS file upload Google Drive",
  "Swift SwiftUI Google Drive",
  "drag and drop Google Drive mac",
  "parallel uploads Google Drive",
  "open source Google Drive client",
  "DriveDock",
  "macOS Sonoma Google Drive",
  "Google Drive menu bar app",
  "resumable uploads macOS",
  "macOS Sonoma app",
  "Apple Silicon Google Drive",
  "Intel Mac Google Drive",
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "DriveDock Contributors", url: siteUrl }],
  creator: "DriveDock Contributors",
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
    description:
      "The cleanest way to upload files to Google Drive on macOS. Drag-and-drop, parallel uploads, folder preservation, zero telemetry. Free & open source.",
    countryName: "United States",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "Native macOS, drag-and-drop, parallel uploads, folder preservation, zero telemetry. Free & open source.",
    creator: "@drivedockapp",
    site: "@drivedockapp",
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
    statusBarStyle: "black-translucent",
    startupImage: ["/icon-512.png"],
  },
  appLinks: {
    web: { url: siteUrl, should_fallback: true },
  },
  other: {
    "msapplication-TileColor": "#0B0F1A",
    "msapplication-TileImage": "/icon-512.png",
    "theme-color": "#0B0F1A",
    "color-scheme": "dark",
    "apple-itunes-app": "app-id=000000000",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: light)", color: "#0B0F1A" },
  ],
  colorScheme: "dark",
  viewportFit: "cover",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "DriveDock Contributors",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon-512.png`,
        width: 512,
        height: 512,
      },
      sameAs: [
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
      publisher: { "@id": `${siteUrl}#organization` },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}#features`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "File Upload Manager",
      operatingSystem: "macOS 14.0 or later",
      downloadUrl: "https://github.com/sayuru-akash/drivedock/releases",
      softwareVersion: "latest",
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@id": `${siteUrl}#organization` },
      publisher: { "@id": `${siteUrl}#organization` },
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
      memoryRequirements: "100MB",
      storageRequirements: "50MB",
      permissions: "Network access, Google Drive account",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is DriveDock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DriveDock is a native macOS app for uploading files and folders to Google Drive with speed, clarity, and control. Built with Swift and SwiftUI.",
          },
        },
        {
          "@type": "Question",
          name: "Is DriveDock free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, DriveDock is completely free and open source under the MIT License. You can use, modify, and distribute it freely.",
          },
        },
        {
          "@type": "Question",
          name: "Does DriveDock collect my data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. DriveDock collects zero personal data and sends no telemetry. OAuth tokens are stored exclusively in the macOS Keychain.",
          },
        },
        {
          "@type": "Question",
          name: "What macOS versions are supported?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "DriveDock requires macOS 14 Sonoma or later, and supports both Apple Silicon and Intel Macs.",
          },
        },
        {
          "@type": "Question",
          name: "Is my Google account safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DriveDock only requests the drive.file OAuth scope, meaning it can only access files it personally uploads. Your existing Drive content is untouchable, and credentials are stored in the macOS Keychain.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="theme-color" content="#0B0F1A" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col antialiased bg-bg-base text-fg-primary">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
