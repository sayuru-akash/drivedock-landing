"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Download, Github, ArrowDown, ShieldCheck, Star, Terminal } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const EASE = [0.0, 0.0, 0.2, 1.0] as [number, number, number, number]

const uploadItems = [
  { name: "design-assets.zip", size: "312 MB", pct: 100, done: true },
  { name: "videos/", size: "24 files", pct: 64, done: false },
  { name: "backup-2026-06.dmg", size: "1.8 GB", pct: 18, done: false },
]

export function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Top radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(66,133,244,0.14) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.28)] text-[#86EFAC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
            Free & Open Source · MIT License
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.55, delay: shouldReduce ? 0 : 0.1, ease: EASE }}
          className="mb-6"
        >
          The cleanest way to
          <br />
          <span className="gradient-text-blue">upload to Google Drive</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.5, delay: shouldReduce ? 0 : 0.2, ease: EASE }}
          className="text-lg sm:text-xl text-[var(--color-fg-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Native macOS app built with Swift & SwiftUI. Drag-and-drop, parallel uploads, folder preservation, and zero telemetry—in a lightweight, privacy-first package.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.45, delay: shouldReduce ? 0 : 0.3, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
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
            View on GitHub
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, delay: shouldReduce ? 0 : 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--color-fg-muted)] mb-20"
        >
          <span className="flex items-center gap-2">
            <Terminal size={14} />
            macOS 14 Sonoma+
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} />
            Zero telemetry
          </span>
          <span className="flex items-center gap-2">
            <Star size={14} />
            MIT License
          </span>
        </motion.div>

        {/* App mockup */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 48, scale: shouldReduce ? 1 : 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.75, delay: shouldReduce ? 0 : 0.5, ease: EASE }}
          className="relative mx-auto max-w-4xl"
        >
          {/* Glow */}
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none opacity-50"
            style={{
              background: "linear-gradient(135deg, rgba(66,133,244,0.25) 0%, rgba(16,185,129,0.1) 100%)",
              filter: "blur(32px)",
            }}
            aria-hidden="true"
          />

          {/* Window */}
          <div className="relative glass-card rounded-2xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-[var(--color-border)]">
              <div className="flex gap-2" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-sm text-[var(--color-fg-muted)] mx-auto font-medium">DriveDock</span>
              <div className="w-20" aria-hidden="true" />
            </div>

            <div className="p-6">
              {/* Account */}
              <div className="glass-card rounded-xl px-5 py-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(66,133,244,0.2)] flex items-center justify-center text-sm font-semibold text-[#93C5FD]">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-fg-primary)]">john@workspace.com</p>
                    <p className="text-xs text-[var(--color-fg-muted)]">My Drive · 45.2 GB free</p>
                  </div>
                </div>
                <span className="text-xs text-[var(--color-fg-muted)] px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)]">
                  Switch
                </span>
              </div>

              {/* Drop zone */}
              <div className="rounded-xl p-12 mb-5 text-center border-2 border-dashed border-[rgba(66,133,244,0.35)] bg-[rgba(66,133,244,0.04)]">
                <div className="w-12 h-12 rounded-xl bg-[rgba(66,133,244,0.12)] border border-[rgba(66,133,244,0.25)] flex items-center justify-center mx-auto mb-4">
                  <Upload size={22} className="text-[#4285F4]" />
                </div>
                <p className="text-sm font-medium text-[var(--color-fg-secondary)] mb-1">Drop files or folders here</p>
                <p className="text-xs text-[var(--color-fg-muted)]">or click to browse</p>
              </div>

              {/* Queue */}
              <div className="space-y-3">
                {uploadItems.map((item) => (
                  <div key={item.name} className="glass-card rounded-xl px-5 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[var(--color-fg-primary)] truncate">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[var(--color-fg-muted)]">{item.size}</span>
                        {item.done && (
                          <span className="text-xs font-medium px-2 py-1 rounded bg-[rgba(16,185,129,0.12)] text-[#86EFAC]">
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-[rgba(255,255,255,0.06)]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: item.done ? "#10B981" : "linear-gradient(90deg, #4285F4, #60A5FA)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 1.3, duration: 0.5 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-xs text-[var(--color-fg-muted)] tracking-wide uppercase">Scroll to explore</span>
            <motion.div
              animate={shouldReduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="text-[var(--color-fg-muted)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

function Upload({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
