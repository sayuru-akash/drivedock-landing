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

      <Container>
        <FadeIn>
          <div className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden bg-gradient-to-br from-bg-elevated/95 to-bg-surface/98 border border-accent-border shadow-2xl shadow-black/60">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(66,133,244,0.6), rgba(16,185,129,0.4), transparent)",
              }}
              aria-hidden="true"
            />

            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 blur-3xl pointer-events-none opacity-25"
              style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative w-24 h-24 rounded-3xl mx-auto mb-10 flex items-center justify-center bg-gradient-to-br from-accent to-green shadow-accent/40 shadow-[0_12px_40px] ring-1 ring-white/10">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>

            <h2 className="relative mb-6">
              Grab it and try it
            </h2>
            <p className="relative text-lg max-w-lg mx-auto mb-12 leading-relaxed text-fg-secondary">
              Download the latest build from GitHub, drag it to Applications, and you&apos;re set. It&apos;s a 12 MB binary that does one thing.
            </p>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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
                Read the code
              </Button>
            </div>

            <p className="relative text-sm mb-12 text-fg-muted">
              Needs macOS 14 Sonoma or later, works on Apple Silicon and Intel
            </p>

            <div className="relative flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-border">
              <a
                href="https://github.com/sayuru-akash/drivedock"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors focus-ring rounded"
              >
                <Star size={16} />
                Star the repo
              </a>
              <span className="text-fg-muted/25">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors focus-ring rounded"
              >
                <GitFork size={16} />
                Fork it
              </a>
              <span className="text-fg-muted/25">·</span>
              <a
                href="https://github.com/sayuru-akash/drivedock/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-fg-muted hover:text-fg-secondary transition-colors focus-ring rounded"
              >
                <Bug size={16} />
                Report a bug
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
