"use client"

import { Github, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const testimonials = [
  {
    quote: "Finally a native macOS Google Drive uploader that doesn't feel like a web app wrapped in Electron. Folder preservation alone is worth it.",
    author: "macOS developer",
    role: "Full-stack engineer",
    stars: 5,
  },
  {
    quote: "I upload project archives weekly. DriveDock's parallel uploads and resumable protocol cut my upload time in half and I've never lost a file mid-transfer.",
    author: "Indie game developer",
    role: "Solo game studio",
    stars: 5,
  },
  {
    quote: "The menu bar helper is incredibly useful. Progress at a glance, quick drop zone, account switching—all without opening a full window.",
    author: "Creative agency lead",
    role: "Design & video production",
    stars: 5,
  },
  {
    quote: "Open source and MIT licensed. I audited the OAuth scope—it only requests drive.file. Exactly what you'd want from a privacy-respecting tool.",
    author: "Security researcher",
    role: "Independent auditor",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-yellow-400 text-yellow-400" : ""}
          style={{ color: i < count ? "#FBBF24" : "var(--color-fg-muted)" }}
        />
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(66,133,244,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-20">
          <span className="text-sm font-medium tracking-widest uppercase mb-5 block" style={{ color: "#4285F4" }}>
            Community
          </span>
          <h2 className="mb-6">
            Loved by developers
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "var(--color-fg-secondary)" }}>
            Built by the macOS community, for the macOS community.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center mb-16">
          <a
            href="https://github.com/sayuru-akash/drivedock"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 glass-card rounded-2xl px-7 py-4 transition-all duration-300 hover:scale-[1.02]"
          >
            <Github size={22} style={{ color: "var(--color-fg-secondary)" }} />
            <span className="text-base font-medium" style={{ color: "var(--color-fg-primary)" }}>
              Star on GitHub
            </span>
            <span
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
              style={{ background: "rgba(251,191,36,0.12)", color: "#FBBF24" }}
            >
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              Open Source
            </span>
          </a>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5">
                <StarRating count={t.stars} />
                <blockquote className="text-base leading-relaxed flex-1" style={{ color: "var(--color-fg-primary)" }}>
                  "{t.quote}"
                </blockquote>
                <figcaption
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                    style={{
                      background: `linear-gradient(135deg, ${["#4285F4", "#10B981", "#A78BFA", "#F59E0B"][i % 4]} 0%, rgba(27,35,54,0.8) 100%)`,
                      color: "#FFF",
                    }}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--color-fg-primary)" }}>
                      {t.author}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-fg-muted)" }}>
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
