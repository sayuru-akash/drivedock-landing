"use client"

import { CheckCircle2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const sections = [
  {
    category: "Architecture",
    color: "text-accent",
    borderColor: "border-accent-border",
    items: [
      "Swift and SwiftUI",
      "macOS 14 Sonoma or later",
      "MVVM with @Observable",
      "Declarative UI",
    ],
  },
  {
    category: "Security",
    color: "text-green",
    borderColor: "border-green-border",
    items: [
      "OAuth 2.0 sign-in",
      "Tokens in macOS Keychain",
      "Security-scoped file bookmarks",
      "drive.file scope only",
    ],
  },
  {
    category: "Reliability",
    color: "text-yellow",
    borderColor: "border-yellow-500/25",
    items: [
      "Resumable upload protocol",
      "Adjustable concurrency",
      "Exponential backoff retry",
      "Live network monitoring",
    ],
  },
  {
    category: "License",
    color: "text-purple",
    borderColor: "border-purple-400/25",
    items: [
      "MIT, free forever",
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
          <span className="text-sm font-medium tracking-widest uppercase mb-5 block text-accent">
            Under the hood
          </span>
          <h2 className="mb-6">
            How it&apos;s built
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-fg-secondary">
            Native Swift, real macOS APIs, and the boring engineering choices that keep your files safe. No Electron, no web view, nothing pretending to be a desktop app.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((s) => (
            <StaggerItem key={s.category}>
              <article className={cn("glass-card rounded-2xl p-7 h-full", s.borderColor)}>
                <p
                  className={cn(
                    "text-xs font-semibold tracking-widest uppercase mb-5 pb-4 border-b",
                    s.color,
                    s.borderColor
                  )}
                >
                  {s.category}
                </p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className={cn("mt-0.5 shrink-0", s.color)} />
                      <span className="text-sm leading-relaxed text-fg-secondary">
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
