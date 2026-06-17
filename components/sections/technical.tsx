"use client"

import { CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const sections = [
  {
    category: "Architecture",
    color: "#4285F4",
    borderColor: "rgba(66,133,244,0.25)",
    items: [
      "Built with Swift and SwiftUI",
      "Native macOS 14+ (Sonoma+)",
      "MVVM with @Observable",
      "Declarative UI composition",
    ],
  },
  {
    category: "Security",
    color: "#10B981",
    borderColor: "rgba(16,185,129,0.25)",
    items: [
      "OAuth 2.0 authentication",
      "Keychain-only credential store",
      "Security-scoped file bookmarks",
      "drive.file scope only",
    ],
  },
  {
    category: "Reliability",
    color: "#F59E0B",
    borderColor: "rgba(245,158,11,0.25)",
    items: [
      "Resumable upload protocol",
      "Adaptive concurrency",
      "Exponential backoff retry",
      "Real-time network monitoring",
    ],
  },
  {
    category: "License & Requirements",
    color: "#A78BFA",
    borderColor: "rgba(167,139,250,0.25)",
    items: [
      "MIT License—free forever",
      "Open source on GitHub",
      "macOS 14 Sonoma or later",
      "Google account with Drive",
    ],
  },
]

export function Technical() {
  return (
    <section id="technical" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 40% at 100% 50%, rgba(66,133,244,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-20">
          <span className="text-sm font-medium tracking-widest uppercase mb-5 block" style={{ color: "#4285F4" }}>
            Technical Details
          </span>
          <h2 className="mb-6">
            Built the right way
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--color-fg-secondary)" }}>
            No Electron. No web views. Pure Swift, proper macOS APIs, and engineering decisions that respect your trust.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s) => (
            <StaggerItem key={s.category}>
              <article
                className="glass-card rounded-2xl p-7 h-full"
                style={{ borderColor: s.borderColor }}
              >
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-5 pb-4"
                  style={{
                    color: s.color,
                    borderBottom: `1px solid ${s.borderColor}`,
                  }}
                >
                  {s.category}
                </h3>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: s.color }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--color-fg-secondary)" }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
