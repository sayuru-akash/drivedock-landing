"use client"

import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { CheckCircle } from "lucide-react"

const technicalSections = [
  {
    category: "Architecture",
    color: "#4285F4",
    items: [
      "Built with Swift and SwiftUI",
      "Native macOS 14+ (Sonoma or later)",
      "MVVM architecture with @Observable",
      "Declarative UI composition",
    ],
  },
  {
    category: "Security",
    color: "#22C55E",
    items: [
      "OAuth 2.0 authentication",
      "Keychain-only credential storage",
      "Security-scoped file bookmarks",
      "drive.file scope only — minimal access",
    ],
  },
  {
    category: "Reliability",
    color: "#F59E0B",
    items: [
      "Resumable upload protocol",
      "Adaptive concurrency control",
      "Automatic retry with exponential backoff",
      "Real-time network monitoring",
    ],
  },
  {
    category: "License & Requirements",
    color: "#A78BFA",
    items: [
      "MIT License — free, forever",
      "Open source on GitHub",
      "Requires macOS 14 Sonoma or later",
      "Google account with Drive access",
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
            "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(66,133,244,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase mb-4 block">
            Technical Details
          </span>
          <h2
            id="technical-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg-primary mb-5"
          >
            Built the right way
          </h2>
          <p className="text-lg text-fg-secondary max-w-xl mx-auto leading-relaxed">
            No Electron. No web views. Pure Swift, proper macOS APIs, and
            engineering decisions that prioritise your trust.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {technicalSections.map((section) => (
            <StaggerItem key={section.category}>
              <div
                className="rounded-2xl p-6 h-full"
                style={{
                  background: "rgba(21, 29, 46, 0.7)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="text-xs font-semibold tracking-wider uppercase mb-4 pb-3 border-b"
                  style={{
                    color: section.color,
                    borderColor: `${section.color}22`,
                  }}
                >
                  {section.category}
                </div>
                <ul className="space-y-2.5" role="list">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: section.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-fg-secondary leading-snug">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
