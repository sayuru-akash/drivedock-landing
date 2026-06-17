import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { ArrowLeft, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "DriveDock Privacy Policy — how your data is handled, stored, and protected. Zero telemetry, Keychain-only credentials, minimal OAuth scopes.",
  alternates: {
    canonical: "https://drivedock.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | DriveDock",
    description:
      "DriveDock handles your data with zero telemetry and Keychain-only credential storage. Read our full privacy policy.",
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
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.25)",
                color: "#86EFAC",
              }}
            >
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
          <div
            className="rounded-2xl p-6 mb-12"
            style={{
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <h2 className="text-base font-semibold text-fg-primary mb-3 flex items-center gap-2">
              <ShieldCheck size={16} className="text-green" aria-hidden="true" />
              The short version
            </h2>
            <ul className="space-y-2 text-sm text-fg-secondary" role="list">
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5 shrink-0">✓</span>
                DriveDock collects <strong className="text-fg-primary">no personal data</strong> and sends
                no telemetry to any server.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5 shrink-0">✓</span>
                Google OAuth tokens are stored exclusively in the{" "}
                <strong className="text-fg-primary">macOS Keychain</strong>.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5 shrink-0">✓</span>
                DriveDock requests only the{" "}
                <strong className="text-fg-primary">drive.file</strong> OAuth scope — it cannot read,
                modify, or delete any file it did not upload.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green mt-0.5 shrink-0">✓</span>
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
              DriveDock (&ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is a native macOS application developed
              by DriveDock Contributors and released as free, open-source software
              under the MIT License. This Privacy Policy describes what data
              DriveDock accesses, how it is used, and how it is protected.
            </p>
            <p>
              DriveDock is designed from first principles to minimise data exposure.
              We do not operate analytics infrastructure, crash-reporting pipelines,
              or any backend service of our own.
            </p>

            <h2>2. Data We Do Not Collect</h2>
            <p>
              DriveDock does <strong>not</strong> collect, transmit, or store any of
              the following:
            </p>
            <ul>
              <li>Your name, email address, or any profile information</li>
              <li>The names, contents, or metadata of any files you upload</li>
              <li>Usage statistics, feature analytics, or interaction logs</li>
              <li>Crash reports or diagnostic data sent to our servers</li>
              <li>IP addresses or device identifiers</li>
              <li>Any information about your Google Drive folder structure</li>
            </ul>

            <h2>3. Google OAuth Authentication</h2>
            <p>
              To upload files to Google Drive on your behalf, DriveDock uses
              Google&apos;s OAuth 2.0 authorisation flow. When you connect a Google
              account:
            </p>
            <ul>
              <li>
                You are redirected to Google&apos;s own sign-in page. DriveDock never
                sees your Google password.
              </li>
              <li>
                DriveDock requests only the{" "}
                <code>https://www.googleapis.com/auth/drive.file</code> scope,
                which grants access only to files and folders that DriveDock
                itself creates or uploads. It provides no access to pre-existing
                Drive content.
              </li>
              <li>
                The resulting OAuth access token and refresh token are stored
                exclusively in the <strong>macOS Keychain</strong> — the
                system-level encrypted credential store. DriveDock does not write
                tokens to any file on disk, database, or cloud service.
              </li>
              <li>
                Tokens are never transmitted to any server other than
                Google&apos;s own APIs (<code>accounts.google.com</code>,
                <code>www.googleapis.com</code>).
              </li>
            </ul>

            <h2>4. File Handling</h2>
            <p>
              When you drag a file or folder onto DriveDock:
            </p>
            <ul>
              <li>
                The file is read from your local file system using
                macOS security-scoped file bookmarks and streamed directly
                to Google Drive&apos;s Upload API.
              </li>
              <li>
                No copy of the file is written to any intermediate location by
                DriveDock. The data path is exclusively:
                your disk → Google Drive API.
              </li>
              <li>
                Upload history (file name, size, timestamp, destination path,
                upload speed, status) is stored locally in the App&apos;s container on
                your Mac and is never transmitted off-device.
              </li>
            </ul>

            <h2>5. Network Connections</h2>
            <p>
              DriveDock makes network requests only to the following Google-owned
              endpoints:
            </p>
            <ul>
              <li>
                <code>accounts.google.com</code> — OAuth 2.0 authorisation and
                token refresh
              </li>
              <li>
                <code>www.googleapis.com</code> — Google Drive API (upload,
                folder creation, Shared Drive enumeration)
              </li>
            </ul>
            <p>
              No requests are made to any server operated by DriveDock Contributors
              or any third-party analytics, advertising, or monitoring service.
            </p>

            <h2>6. Local Data Storage</h2>
            <p>
              DriveDock stores the following data locally on your Mac only:
            </p>
            <ul>
              <li>
                <strong>OAuth tokens</strong> — encrypted in the macOS Keychain
              </li>
              <li>
                <strong>Account preferences</strong> — default upload destination,
                concurrency settings — stored in the App&apos;s sandboxed
                preferences container
              </li>
              <li>
                <strong>Upload history</strong> — local database within the App
                container, never synced or transmitted
              </li>
            </ul>
            <p>
              All locally stored data can be deleted by removing DriveDock from
              your Mac and clearing its associated Keychain entries.
            </p>

            <h2>7. Third-Party Services</h2>
            <p>
              DriveDock interacts with the following third-party service:
            </p>
            <ul>
              <li>
                <strong>Google Drive API</strong> — governed by{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://developers.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google APIs Terms of Service
                </a>
                . Once files are uploaded to Google Drive, they are subject to
                Google&apos;s data handling practices.
              </li>
            </ul>
            <p>
              DriveDock does not integrate with any advertising networks, social
              media platforms, or analytics services.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              DriveDock does not knowingly collect any information from users
              of any age, as it collects no information whatsoever. The App
              is not directed at children under 13.
            </p>

            <h2>9. Open Source and Auditability</h2>
            <p>
              DriveDock is fully open source under the MIT License. The complete
              source code is publicly available at{" "}
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sayuru-akash/drivedock
              </a>
              . Any user or security researcher may audit the code to verify
              the privacy claims made in this policy. We encourage this.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              If this Privacy Policy changes in any material way, the updated
              version will be published at{" "}
              <a href="https://drivedock.app/privacy">drivedock.app/privacy</a>{" "}
              with an updated &ldquo;Last updated&rdquo; date. Because DriveDock has no
              account system or email list, we cannot notify users directly.
              We recommend checking this page periodically.
            </p>
            <p>
              Changes that reduce privacy protections will be clearly noted in
              the repository&apos;s commit history and release notes.
            </p>

            <h2>11. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or
              DriveDock&apos;s data practices, please open an issue on{" "}
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Issues
              </a>
              . We are committed to transparency and will respond as promptly
              as possible.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              This Privacy Policy is provided as a good-faith disclosure for
              users of DriveDock. As the App collects no personal data, no
              specific privacy regulation (GDPR, CCPA, etc.) is directly
              applicable. However, DriveDock&apos;s design satisfies the intent
              of privacy-by-design principles underlying such regulations.
            </p>
          </div>

          {/* Footer nav */}
          <div
            className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
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
              View source on GitHub →
            </a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
