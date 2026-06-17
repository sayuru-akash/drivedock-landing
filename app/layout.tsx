import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DriveDock - Native macOS Google Drive Upload Client",
  description: "The cleanest way to upload files to Google Drive on macOS. Native Swift app with drag-and-drop, parallel uploads, and complete privacy.",
  keywords: ["google drive", "macos", "upload", "native app", "swift", "open source", "file upload", "cloud storage"],
  authors: [{ name: "DriveDock Contributors" }],
  creator: "DriveDock Contributors",
  publisher: "DriveDock",
  openGraph: {
    title: "DriveDock - Native macOS Google Drive Upload Client",
    description: "The cleanest way to upload files to Google Drive on macOS. Native Swift app with drag-and-drop, parallel uploads, and complete privacy.",
    url: "https://drivedock.app",
    siteName: "DriveDock",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DriveDock App Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveDock - Native macOS Google Drive Upload Client",
    description: "The cleanest way to upload files to Google Drive on macOS.",
    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
