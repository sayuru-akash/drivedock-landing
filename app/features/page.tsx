import type { Metadata } from "next"
import { FeaturesPage } from "@/components/product/features-page"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore DriveDock's resumable uploads, parallel downloads, persistent queues, multiple Google accounts, Shared Drives, transfer history, and local-first macOS security.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "DriveDock Features: Reliable Google Drive Transfers for macOS",
    description: "Control uploads, downloads, accounts, destinations, duplicate handling, bandwidth, history, and reports from a native macOS app.",
    url: "/features",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveDock Features for macOS",
    description: "Resumable uploads, persistent queues, Shared Drives, downloads, history, and zero telemetry.",
  },
}

export default function Page() {
  return <FeaturesPage />
}
