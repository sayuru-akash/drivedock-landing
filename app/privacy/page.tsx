import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { ArrowLeft, ShieldCheck, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DriveDock Privacy Policy: what gets stored on your Mac, what gets sent to Google, and what doesn&apos;t get sent at all. No telemetry, no analytics, minimal OAuth scope.",
  alternates: {
    canonical: "https://drivedock.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | DriveDock",
    description:
      "What DriveDock does with your data, what it doesn&apos;t do, and where to check the source if you don&apos;t believe us.",
    url: "https://drivedock.app/privacy",
  },
}

const lastUpdated = "June 2026"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-24 pb-20">
        <Container size="md">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors mb-10 focus-ring rounded"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to DriveDock
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5 bg-green-subtle border border-green-border text-green-light">
              <ShieldCheck size={13} aria-hidden="true" />
              Privacy Policy
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-[-0.025em] text-fg-primary mb-3">
              DriveDock Privacy Policy
            </h1>
            <p className="text-fg-secondary text-sm">
              Last updated: <time dateTime="2026-06">{lastUpdated}</time>
            </p>
          </div>

          {/* Summary card */}
          <div className="rounded-2xl p-6 mb-12 bg-green-subtle/60 border border-green-border">
            <h2 className="text-base font-semibold text-fg-primary mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-green" aria-hidden="true" />
              The short version
            </h2>
            <ul className="space-y-2 text-sm text-fg-secondary" role="list">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green mt-0.5 shrink-0" aria-hidden="true" />
                DriveDock collects <strong className="text-fg-primary">no personal data</strong> and sends
                no telemetry to any server.
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green mt-0.5 shrink-0" aria-hidden="true" />
                Google OAuth tokens are stored exclusively in the{" "}
                <strong className="text-fg-primary">macOS Keychain</strong>.
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green mt-0.5 shrink-0" aria-hidden="true" />
                DriveDock only asks for the <strong className="text-fg-primary">drive.file</strong> scope, so it physically can&apos;t touch files it didn&apos;t upload.
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-green mt-0.5 shrink-0" aria-hidden="true" />
                All source code is publicly auditable on{" "}
                <a
                  href="https://github.com/sayuru-akash/drivedock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
                >
                  GitHub
                </a>
                .
              </li>
            </ul>
          </div>

          {/* Full policy */}
          <div className="prose-dark">
            <h2>1. Overview</h2>
            <p>
              DriveDock is a native macOS app built by a small group of contributors. It&apos;s free, it&apos;s open source, and it&apos;s released under the MIT License. This page is the privacy policy.
            </p>
            <p>
              The short version is that we don&apos;t run a server. There&apos;s no analytics backend, no crash reporting service, no telemetry pipeline. The only network calls the app makes go to Google&apos;s own APIs.
            </p>

            <h2>2. What we don&apos;t collect</h2>
            <p>
              DriveDock does not collect, transmit, or store any of the following:
            </p>
            <ul>
              <li>Your name, email, or profile info</li>
              <li>The names, contents, or metadata of your files</li>
              <li>Usage stats, feature analytics, or interaction logs</li>
              <li>Crash reports or diagnostic data</li>
              <li>Your IP address or device identifiers</li>
              <li>Anything about your Drive folder structure</li>
            </ul>

            <h2>3. Google sign-in</h2>
            <p>
              DriveDock uses Google&apos;s OAuth 2.0 flow to get permission to upload on your behalf. When you sign in:
            </p>
            <ul>
              <li>
                You go to Google&apos;s sign-in page directly. DriveDock never sees your Google password.
              </li>
              <li>
                DriveDock asks for the <code>https://www.googleapis.com/auth/drive.file</code> scope. That scope only covers files the app itself creates or uploads, nothing else in your Drive.
              </li>
              <li>
                The access and refresh tokens get stored in the macOS Keychain (the same encrypted store Safari uses). They never get written to a regular file, a database, or a cloud service.
              </li>
              <li>
                Tokens only ever travel to Google&apos;s own servers (<code>accounts.google.com</code> and <code>www.googleapis.com</code>).
              </li>
            </ul>

            <h2>4. What happens when you drop a file</h2>
            <p>
              The file is read from your disk using macOS security-scoped bookmarks and streamed straight to Google Drive&apos;s upload endpoint. The data path is your disk, then Google&apos;s API. Nothing in between.
            </p>
            <p>
              The app does keep a local upload history (file name, size, timestamp, destination, speed, status) so you can see what you uploaded and find it in Drive. That history stays in the app&apos;s container on your Mac. It&apos;s never synced anywhere.
            </p>

            <h2>5. Where the app talks to the network</h2>
            <p>
              Only two places:
            </p>
            <ul>
              <li><code>accounts.google.com</code> for sign-in and token refresh</li>
              <li><code>www.googleapis.com</code> for the Drive API (uploads, folder creation, listing Shared Drives)</li>
            </ul>
            <p>
              No requests go to anything we run. No third-party analytics, ads, or error reporting services.
            </p>

            <h2>6. What&apos;s on your Mac</h2>
            <p>
              The app stores three things locally, that&apos;s it:
            </p>
            <ul>
              <li><strong>OAuth tokens</strong> in the macOS Keychain</li>
              <li><strong>Settings</strong> like your default upload destination and concurrency, in the app&apos;s sandboxed preferences</li>
              <li><strong>Upload history</strong> in a local database inside the app container</li>
            </ul>
            <p>
              To wipe everything, delete the app and clear its Keychain entries. That&apos;s the whole footprint.
            </p>

            <h2>7. Third parties</h2>
            <p>
              The only third party involved is Google. The Drive API is governed by{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s Privacy Policy
              </a>{" "}
              and the{" "}
              <a
                href="https://developers.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google APIs Terms
              </a>
              . After a file reaches Drive, it&apos;s subject to Google&apos;s data practices, not ours.
            </p>

            <h2>8. Kids</h2>
            <p>
              DriveDock doesn&apos;t collect info from anyone because it doesn&apos;t collect info, period. We don&apos;t direct the app at children under 13 and we don&apos;t knowingly track them.
            </p>

            <h2>9. The source</h2>
            <p>
              Everything is on GitHub at{" "}
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sayuru-akash/drivedock
              </a>
              . If you want to check the privacy claims in this document against the actual code, please do. That&apos;s the easiest way to know if we&apos;re being honest.
            </p>

            <h2>10. Changes</h2>
            <p>
              If this policy changes in a meaningful way, we&apos;ll update the date at the top of this page and call it out in the release notes for the next version. We don&apos;t have a way to email you about it since we don&apos;t have your email, so check back if you care.
            </p>

            <h2>11. Questions</h2>
            <p>
              Open an issue on{" "}
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              . We read everything and reply when we can.
            </p>

            <h2>12. Legal stuff</h2>
            <p>
              This policy is a good-faith disclosure. We&apos;re not a company, we&apos;re not a data controller in the GDPR sense, and the app doesn&apos;t collect personal data in the first place. If you need this for compliance, the source is the answer.
            </p>
          </div>

          {/* Footer nav */}
          <div className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border-subtle">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors focus-ring rounded"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to DriveDock
            </Link>
            <a
              href="https://github.com/sayuru-akash/drivedock"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-secondary hover:text-fg-primary transition-colors focus-ring rounded"
            >
              View source on GitHub
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
