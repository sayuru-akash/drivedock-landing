import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const siteUrl = "https://drivedock.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DriveDock — Native macOS Google Drive Upload Client",
    template: "%s | DriveDock",
  },
  description:
    "The cleanest way to upload files to Google Drive on macOS. Native Swift app with drag-and-drop, parallel uploads, folder preservation, and complete privacy. Free & open source.",
  keywords: [
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
  ],
  authors: [{ name: "DriveDock Contributors", url: siteUrl }],
  creator: "DriveDock Contributors",
  applicationName: "DriveDock",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "DriveDock — Native macOS Google Drive Upload Client",
    description:
      "The cleanest way to upload files to Google Drive on macOS. Drag-and-drop, parallel uploads, folder preservation, zero telemetry. Free & open source.",
    url: siteUrl,
    siteName: "DriveDock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveDock — Native macOS Google Drive Upload Client",
    description:
      "The cleanest way to upload files to Google Drive on macOS. Native Swift, drag-and-drop, parallel uploads. Free & open source.",
    creator: "@drivedockapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
    { media: "(prefers-color-scheme: light)", color: "#0B0F1A" },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "DriveDock",
              applicationCategory: "UtilitiesApplication",
              operatingSystem: "macOS 14+",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Native macOS Google Drive upload client. Drag-and-drop, parallel uploads, folder preservation, and complete privacy. Free and open source.",
              url: siteUrl,
              downloadUrl:
                "https://github.com/sayuru-akash/drivedock/releases",
              softwareVersion: "latest",
              author: {
                "@type": "Organization",
                name: "DriveDock Contributors",
                url: siteUrl,
              },
              license: "https://opensource.org/licenses/MIT",
              codeRepository: "https://github.com/sayuru-akash/drivedock",
            }),
          }}
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
