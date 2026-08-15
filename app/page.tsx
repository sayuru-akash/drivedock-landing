import type { Metadata, Viewport } from "next"
import { HomePage } from "@/components/home/home-page"

export const metadata: Metadata = {
  title: "DriveDock: Google Drive Uploader for macOS",
  description:
    "Upload files and folders to Google Drive from macOS with resumable transfers, parallel uploads, folder preservation, Shared Drive support, and no telemetry.",
  alternates: {
    canonical: "https://drivedock.app",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#eef4ff",
  colorScheme: "light",
}

export default function Page() {
  return <HomePage />
}
