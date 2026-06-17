"use client"

import { Download as DownloadIcon, Github, Star, GitFork, Bug } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/motion"

export function Download() {
  return (
    <section id="download" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 75% 80% at 50% 50%, rgba(66,133,244,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container size="lg">
        <FadeIn>
          <div
            className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(28,34,50,0.95) 0%, rgba(20,24,35,0.98) 100%)",
              border: "1px solid rgba(66,133,244,0.25)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Top highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(66,133,244,0.6), rgba(16,185,129,0.4), transparent)",
              }}
              aria-hidden="true"
            />

            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl pointer-events-none opacity-25"
              style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Icon */}
            <div
              className="w-24 h-24 rounded-3xl mx-auto mb-10 flex items-center justify-center relative z-10"
              style={{
                background: "linear-gradient(135deg, #4285F4 0%, #10B981 100%)",
                boxShadow: "0 12px 40px rgba(66,133,244,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>

            <h2 className="mb-6 relative z-10">
              Ready to get started?
            </h2>
            <p className="text-lg max-w-lg mx-auto mb-12 leading-relaxed relative z-10" style={{ color: "var(--color-fg-secondary)" }}>
              Download the latest release and start uploading with speed and control. Always free. Always open source.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 relative z-10">
              <Button
                href="https://github.com/sayuru-akash/drivedock/releases"
                size="lg"
                icon={<DownloadIcon size={20} />}
              >
                Download for macOS
              </Button>
              <Button
                href="https://github.com/sayuru-akash/drivedock"
                variant="secondary"
                size="lg"
                icon={<Github size={20} />}
              >
                View Source Code
              </Button>
            </div>

            {/* Requirements */}
            <p className="text-sm mb-12 relative z-10" style={{ color: "var(--color-fg-muted)" }}>
              Requires macOS 14 Sonoma or later · Apple Silicon & Intel Mac
            </p>

            {/* Social links */}
            <div
              className="flex flex-wrap items-center justify-center gap-8 pt-10 relative z-10"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors focus-ring rounded"
                style={{ color: "var(--color-fg-muted)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-muted)"}
              >
                <Star size={16} />
                Star on GitHub
              </a>
              <span style={{ color: "rgba(160,174,192,0.25)" }}>·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors focus-ring rounded"
                style={{ color: "var(--color-fg-muted)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-muted)"}
              >
                <GitFork size={16} />
                Fork & Contribute
              </a>
              <span style={{ color: "rgba(160,174,192,0.25)" }}>·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors focus-ring rounded"
                style={{ color: "var(--color-fg-muted)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-muted)"}
              >
                <Bug size={16} />
                Report Issues
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
