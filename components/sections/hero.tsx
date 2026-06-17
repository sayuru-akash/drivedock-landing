"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Download, Github, ArrowDown, ShieldCheck, Star, Terminal, Upload } from "lucide-react"
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
      <div className="grid-bg" aria-hidden="true" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(66,133,244,0.14) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-green-subtle border border-green-border text-green-light">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-glow-pulse" aria-hidden="true" />
            Free and open source, MIT licensed
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.55, delay: shouldReduce ? 0 : 0.1, ease: EASE }}
          className="max-w-4xl mx-auto mb-6"
        >
          A better way to{" "}
          <span className="gradient-text-blue">upload to Google Drive</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.5, delay: shouldReduce ? 0 : 0.2, ease: EASE }}
          className="text-lg sm:text-xl text-fg-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          DriveDock is a native macOS app for getting files into Google Drive. Drag, drop, done. No browser tabs, no upload limits you can&apos;t see, no telemetry.
        </motion.p>

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
            See the source
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, delay: shouldReduce ? 0 : 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-fg-muted mb-20"
        >
          <span className="flex items-center gap-2">
            <Terminal size={14} />
            macOS 14 Sonoma or later
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={14} />
            Zero telemetry
          </span>
          <span className="flex items-center gap-2">
            <Star size={14} />
            MIT license
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 48, scale: shouldReduce ? 1 : 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.75, delay: shouldReduce ? 0 : 0.5, ease: EASE }}
          className="relative mx-auto max-w-4xl"
        >
          <div
            className="absolute -inset-4 rounded-3xl pointer-events-none opacity-50"
            style={{
              background: "linear-gradient(135deg, rgba(66,133,244,0.25) 0%, rgba(16,185,129,0.1) 100%)",
              filter: "blur(32px)",
            }}
            aria-hidden="true"
          />

          <div className="relative glass-card rounded-2xl overflow-hidden text-left">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-5 py-4 border-b border-border">
              <div className="flex gap-2" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red" />
                <div className="w-3 h-3 rounded-full bg-amber" />
                <div className="w-3 h-3 rounded-full bg-lime" />
              </div>
              <span className="text-sm text-fg-muted font-medium">DriveDock</span>
              <div aria-hidden="true" />
            </div>

            <div className="p-6">
              <div className="glass-card rounded-xl px-5 py-4 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-sm font-semibold text-accent-light">
                    J
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg-primary">john@workspace.com</p>
                    <p className="text-xs text-fg-muted">My Drive, 45.2 GB free</p>
                  </div>
                </div>
                <span className="text-xs text-fg-muted px-3 py-1.5 rounded-lg bg-white/5">
                  Switch
                </span>
              </div>

              <div className="rounded-xl p-12 mb-5 text-center border-2 border-dashed border-accent-border-strong bg-accent-subtle">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent-border flex items-center justify-center mx-auto mb-4">
                  <Upload size={22} className="text-accent" />
                </div>
                <p className="text-sm font-medium text-fg-secondary mb-1">Drop files or folders here</p>
                <p className="text-xs text-fg-muted">or click to browse</p>
              </div>

              <div className="space-y-3">
                {uploadItems.map((item) => (
                  <div key={item.name} className="glass-card rounded-xl px-5 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-fg-primary truncate">{item.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-fg-muted">{item.size}</span>
                        {item.done && (
                          <span className="text-xs font-medium px-2 py-1 rounded bg-green-subtle text-green-light">
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden bg-white/[0.06]">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: item.done
                            ? "var(--color-green)"
                            : "linear-gradient(90deg, var(--color-accent), var(--color-accent-light))",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduce ? 0 : 1.3, duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-2"
            aria-hidden="true"
          >
            <span className="text-xs text-fg-muted tracking-wide uppercase">Scroll</span>
            <motion.div
              animate={shouldReduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="text-fg-muted" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
