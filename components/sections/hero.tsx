"use client"

/* App Store Style Landing — Section 1: Hero with device mockup
   Design system: Dark OLED, Developer Tool palette, Inter 700/-1.5 tracking
   Rules: ease-out entering, transform/opacity only, prefers-reduced-motion,
          primary CTA prominent, platform-specific (macOS), cursor-pointer,
          hover 150-300ms, visible focus rings, 4.5:1 contrast
*/

import { motion, useReducedMotion } from "framer-motion"
import { Download as DownloadIcon, Github, ArrowDown, ShieldCheck, Star, Terminal } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const EASE_ENTER: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0]

/* Upload queue items in the app window mockup */
const uploadItems = [
  { name: "design-assets.zip",   size: "312 MB",  pct: 100, done: true  },
  { name: "videos/",             size: "24 files", pct: 64,  done: false },
  { name: "backup-2026-06.dmg",  size: "1.8 GB",  pct: 18,  done: false },
]

export function Hero() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />

      {/* Top radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(66,133,244,0.14) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center py-20">
        {/* Badge — open-source trust signal */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, ease: EASE_ENTER }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.28)",
              color: "#86EFAC",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green animate-pulse shrink-0"
              aria-hidden="true"
            />
            Free &amp; Open Source · MIT License
          </span>
        </motion.div>

        {/* Headline — Inter 700, -1.5 tracking for display per typography rules */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.55, delay: shouldReduce ? 0 : 0.1, ease: EASE_ENTER }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-[-0.03em] mb-6"
        >
          The cleanest way to
          <br />
          <span className="gradient-text">upload to Google Drive</span>
        </motion.h1>

        {/* Subheadline — fg-secondary, line-height 1.6, max 60ch */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.5, delay: shouldReduce ? 0 : 0.2, ease: EASE_ENTER }}
          className="text-lg sm:text-xl leading-relaxed text-fg-secondary max-w-2xl mx-auto mb-10"
        >
          Native macOS app built with Swift &amp; SwiftUI. Drag-and-drop, parallel
          uploads, folder preservation, and zero telemetry — in a lightweight,
          privacy-first package.
        </motion.p>

        {/* CTAs — primary prominent, platform-specific label */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.45, delay: shouldReduce ? 0 : 0.3, ease: EASE_ENTER }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button
            href="https://github.com/sayuru-akash/drivedock/releases"
            size="lg"
            icon={<DownloadIcon size={18} />}
            aria-label="Download DriveDock for macOS from GitHub Releases"
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

        {/* Trust / requirements row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.4, delay: shouldReduce ? 0 : 0.45 }}
          className="flex flex-wrap items-center justify-center gap-5 text-sm text-fg-muted"
          aria-label="App requirements and highlights"
        >
          {[
            { icon: <Terminal size={13} aria-hidden="true" />, text: "macOS 14 Sonoma+" },
            { icon: <ShieldCheck size={13} aria-hidden="true" />, text: "Zero telemetry" },
            { icon: <Star size={13} aria-hidden="true" />, text: "MIT License" },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <span className="text-fg-muted">{icon}</span>
              {text}
            </span>
          ))}
        </motion.div>

        {/* App window mockup — App Store pattern: device mockup with real UI */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 48, scale: shouldReduce ? 1 : 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: shouldReduce ? 0.01 : 0.75, delay: shouldReduce ? 0 : 0.5, ease: EASE_ENTER }}
          className="mt-20 relative mx-auto max-w-3xl"
          role="img"
          aria-label="DriveDock app window showing upload interface with three files in progress"
        >
          {/* Outer glow */}
          <div
            className="absolute -inset-px rounded-2xl pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(66,133,244,0.25) 0%, rgba(34,197,94,0.1) 100%)",
              filter: "blur(1px)",
              zIndex: -1,
            }}
            aria-hidden="true"
          />

          {/* Window */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #1A2438 0%, #131C2E 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            {/* macOS title bar */}
            <div
              className="flex items-center gap-2 px-4 py-3.5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
              </div>
              <span className="text-xs text-fg-muted mx-auto font-medium tracking-wide select-none">
                DriveDock
              </span>
              <div className="w-12" aria-hidden="true" />
            </div>

            <div className="p-5">
              {/* Account row */}
              <div
                className="flex items-center justify-between rounded-xl px-4 py-3 mb-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{ background: "rgba(66,133,244,0.25)", color: "#93C5FD" }}
                    aria-hidden="true"
                  >
                    J
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-fg-primary leading-tight">john@workspace.com</p>
                    <p className="text-[10px] text-fg-muted">My Drive · 45.2 GB free</p>
                  </div>
                </div>
                <span className="text-xs text-fg-muted px-2.5 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
                  Switch
                </span>
              </div>

              {/* Drop zone */}
              <div
                className="rounded-xl p-8 mb-4 text-center"
                style={{
                  border: "2px dashed rgba(66,133,244,0.35)",
                  background: "rgba(66,133,244,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(66,133,244,0.12)", border: "1px solid rgba(66,133,244,0.25)" }}
                  aria-hidden="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="17 8 12 3 7 8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="3" x2="12" y2="15" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-fg-secondary">Drop files or folders here</p>
                <p className="text-xs text-fg-muted mt-0.5">or click to browse</p>
              </div>

              {/* Upload queue */}
              <div className="space-y-2" role="list" aria-label="Upload queue">
                {uploadItems.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                    role="listitem"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-fg-primary truncate max-w-[55%]">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-fg-muted">{item.size}</span>
                        {item.done && (
                          <span
                            className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                            style={{ background: "rgba(34,197,94,0.12)", color: "#86EFAC" }}
                          >
                            Done
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${item.pct}%`,
                          background: item.done
                            ? "#22C55E"
                            : "linear-gradient(90deg, #4285F4, #60A5FA)",
                          transition: "width 1s ease",
                        }}
                        role="progressbar"
                        aria-valuenow={item.pct}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${item.name} upload progress`}
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
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            aria-hidden="true"
          >
            <span className="text-[11px] text-fg-muted tracking-wide uppercase">Scroll to explore</span>
            <motion.div
              animate={shouldReduce ? {} : { y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} className="text-fg-muted" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
