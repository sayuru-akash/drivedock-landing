import type { Metadata, Viewport } from "next"
import { HomePage } from "@/components/home/home-page"

export const metadata: Metadata = {
  title: "DriveDock: A Better Google Drive Uploader for macOS",
  description:
    "Upload files and folders to Google Drive from macOS with drag and drop, parallel uploads, Shared Drive support, and zero telemetry.",
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
