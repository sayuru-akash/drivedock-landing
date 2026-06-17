"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Download, Github, ArrowRight, Shield, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden pt-16"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(66,133,244,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(66,133,244,0.12)",
              border: "1px solid rgba(66,133,244,0.3)",
              color: "#93C5FD",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-green animate-pulse"
              aria-hidden="true"
            />
            Free & Open Source · MIT License
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          The cleanest way to{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">upload to Google Drive</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-fg-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Native macOS app built with Swift & SwiftUI. Drag-and-drop, parallel
          uploads, folder preservation, and zero telemetry — all in a
          beautifully minimal package.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button
            href="https://github.com/sayuru-akash/drivedock/releases"
            size="lg"
            icon={<Download size={18} />}
            aria-label="Download DriveDock for macOS"
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

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-fg-muted"
        >
          <span className="flex items-center gap-1.5">
            <Shield size={14} className="text-green" aria-hidden="true" />
            macOS 14 Sonoma+
          </span>
          <span className="flex items-center gap-1.5">
            <Star size={14} className="text-yellow-400" aria-hidden="true" />
            MIT License
          </span>
          <span className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full bg-green"
              aria-hidden="true"
            />
            No telemetry, ever
          </span>
        </motion.div>

        {/* App window mockup */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 40, scale: prefersReduced ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-20 relative mx-auto max-w-4xl"
          aria-label="App preview"
        >
          {/* Window chrome */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #1E2A3B 0%, #151D2E 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 25px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), 0 0 80px rgba(66,133,244,0.08)",
            }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-fg-muted mx-auto font-medium">
                DriveDock
              </span>
            </div>

            {/* App body */}
            <div className="p-6">
              {/* Account selector */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-xs font-semibold text-accent">J</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-fg-primary">john@example.com</p>
                    <p className="text-[10px] text-fg-muted">My Drive</p>
                  </div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-lg text-xs text-fg-secondary"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  Switch Account
                </div>
              </div>

              {/* Drop zone */}
              <div
                className="rounded-xl p-8 mb-5 text-center"
                style={{
                  border: "2px dashed rgba(66,133,244,0.4)",
                  background: "rgba(66,133,244,0.04)",
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="17,8 12,3 7,8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="3" x2="12" y2="15" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sm font-medium text-fg-secondary">
                  Drop files or folders here
                </p>
                <p className="text-xs text-fg-muted mt-1">or click to browse</p>
              </div>

              {/* Upload queue */}
              <div className="space-y-2.5">
                {[
                  { name: "project-backup.zip", size: "245 MB", progress: 100, color: "#22C55E" },
                  { name: "designs/", size: "38 files", progress: 67, color: "#4285F4" },
                  { name: "video-export.mp4", size: "1.2 GB", progress: 32, color: "#4285F4" },
                ].map((file) => (
                  <div
                    key={file.name}
                    className="rounded-lg px-4 py-3"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-fg-primary truncate max-w-[60%]">
                        {file.name}
                      </span>
                      <span className="text-[10px] text-fg-muted">{file.size}</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${file.progress}%`, background: file.color }}
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
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
            aria-hidden="true"
          >
            <span className="text-xs text-fg-muted">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={14} className="text-fg-muted rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
