"use client"

import { CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const sections = [
  {
    category: "Architecture",
    color: "#4285F4",
    borderColor: "rgba(66,133,244,0.22)",
    items: [
      "Built with Swift and SwiftUI",
      "Native macOS 14+ (Sonoma+)",
      "MVVM with @Observable",
      "Declarative UI composition",
    ],
  },
  {
    category: "Security",
    color: "#22C55E",
    borderColor: "rgba(34,197,94,0.22)",
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
    borderColor: "rgba(245,158,11,0.22)",
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
    borderColor: "rgba(167,139,250,0.22)",
    items: [
      "MIT License — free forever",
      "Open source on GitHub",
      "macOS 14 Sonoma or later",
      "Google account with Drive",
    ],
  },
]

export function Technical() {
  return (
    <section
      id="technical"
      aria-labelledby="technical-heading"
      className="py-28 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 100% 50%, rgba(66,133,244,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
            Technical Details
          </span>
          <h2
            id="technical-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-fg-primary mb-5"
          >
            Built the right way
          </h2>
          <p className="text-lg text-fg-secondary max-w-xl mx-auto leading-relaxed">
            No Electron. No web views. Pure Swift, proper macOS APIs, and
            engineering decisions that respect your trust.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sections.map((s) => (
            <StaggerItem key={s.category}>
              <article
                className="rounded-2xl p-6 h-full"
                style={{
                  background: "rgba(27, 35, 54, 0.75)",
                  border: `1px solid ${s.borderColor}`,
                  backdropFilter: "blur(12px)",
                }}
              >
                <h3
                  className="text-xs font-semibold tracking-widest uppercase mb-4 pb-3"
                  style={{
                    color: s.color,
                    borderBottom: `1px solid ${s.borderColor}`,
                  }}
                >
                  {s.category}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={14}
                        className="mt-[2px] shrink-0"
                        style={{ color: s.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-fg-secondary leading-snug">
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
