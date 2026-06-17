"use client"

/* App Store Style Landing — Section 5: Download CTA
   Rules: primary CTA most prominent, platform-specific label,
          social proof (GitHub star), requirements below CTA
*/

import { Download as DownloadIcon, Github, Star, GitFork, Bug } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/motion"

export function Download() {
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 50% 50%, rgba(66,133,244,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container size="lg">
        <FadeIn>
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(30,42,59,0.92) 0%, rgba(21,29,46,0.96) 100%)",
              border: "1px solid rgba(66,133,244,0.2)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Top highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(66,133,244,0.5), rgba(34,197,94,0.3), transparent)",
              }}
              aria-hidden="true"
            />

            {/* Inner glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 blur-3xl pointer-events-none opacity-20"
              style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* App icon */}
            <div
              className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4285F4 0%, #22C55E 100%)",
                boxShadow:
                  "0 8px 32px rgba(66,133,244,0.35), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
              aria-hidden="true"
            >
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.55" />
              </svg>
            </div>

            <h2
              id="download-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-fg-primary mb-4"
            >
              Ready to get started?
            </h2>
            <p className="text-lg text-fg-secondary max-w-md mx-auto mb-10 leading-relaxed">
              Download the latest release and start uploading with speed and
              control. Always free. Always open source.
            </p>

            {/* Primary CTA — most prominent */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Button
                href="https://github.com/sayuru-akash/drivedock/releases"
                size="lg"
                icon={<DownloadIcon size={18} />}
                aria-label="Download latest DriveDock release from GitHub"
              >
                Download for macOS
              </Button>
              <Button
                href="https://github.com/sayuru-akash/drivedock"
                variant="secondary"
                size="lg"
                icon={<Github size={18} />}
              >
                View Source Code
              </Button>
            </div>

            {/* Requirements */}
            <p className="text-sm text-fg-muted mb-10">
              Requires macOS 14 Sonoma or later · Apple Silicon &amp; Intel Mac
            </p>

            {/* GitHub social proof row */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors group focus-ring rounded"
                aria-label="Star DriveDock on GitHub"
              >
                <Star
                  size={15}
                  className="group-hover:fill-yellow-400 group-hover:text-yellow-400 transition-colors"
                  aria-hidden="true"
                />
                Star on GitHub
              </a>
              <span className="text-fg-muted/25" aria-hidden="true">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors focus-ring rounded"
                aria-label="Fork DriveDock on GitHub"
              >
                <GitFork size={15} aria-hidden="true" />
                Fork &amp; Contribute
              </a>
              <span className="text-fg-muted/25" aria-hidden="true">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors focus-ring rounded"
              >
                <Bug size={15} aria-hidden="true" />
                Report Issues
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
