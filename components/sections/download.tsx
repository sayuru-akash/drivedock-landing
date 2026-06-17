"use client"

import { Download, Github, Star, GitFork } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/motion"

export function Download() {
  return (
    <section id="download" aria-labelledby="download-heading" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(66,133,244,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container size="lg">
        <FadeIn>
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,34,53,0.9) 0%, rgba(17,24,39,0.95) 100%)",
              border: "1px solid rgba(66,133,244,0.2)",
              boxShadow: "0 0 80px rgba(66,133,244,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Inner glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-30 pointer-events-none"
              style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* macOS icon */}
            <div
              className="w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4285F4 0%, #22C55E 100%)",
                boxShadow: "0 8px 32px rgba(66,133,244,0.3)",
              }}
              aria-hidden="true"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.9" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>

            <h2
              id="download-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg-primary mb-4"
            >
              Ready to get started?
            </h2>
            <p className="text-lg text-fg-secondary max-w-lg mx-auto mb-10 leading-relaxed">
              Download the latest version and start uploading with speed
              and control. Free, forever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
              <Button
                href="https://github.com/sayuru-akash/drivedock/releases"
                size="lg"
                icon={<Download size={18} />}
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

            <p className="text-sm text-fg-muted">
              Requires macOS 14 Sonoma or later · Apple Silicon & Intel
            </p>

            {/* GitHub stats */}
            <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/5">
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors group"
                aria-label="Star DriveDock on GitHub"
              >
                <Star
                  size={15}
                  className="text-yellow-400 group-hover:fill-yellow-400 transition-colors"
                  aria-hidden="true"
                />
                Star on GitHub
              </a>
              <span className="text-fg-muted/30" aria-hidden="true">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors"
                aria-label="Fork DriveDock on GitHub"
              >
                <GitFork size={15} aria-hidden="true" />
                Fork & Contribute
              </a>
              <span className="text-fg-muted/30" aria-hidden="true">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-muted hover:text-fg-secondary transition-colors"
              >
                Report Issues
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
