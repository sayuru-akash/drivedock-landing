"use client"

import { Github, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

/* App Store Style Landing pattern: "Reviews/ratings" section
   Developer Tool palette: trust colors, star ratings gold, verified badge green */

const testimonials = [
  {
    quote:
      "Finally a native macOS Google Drive uploader that doesn't feel like a web app wrapped in Electron. Folder preservation alone is worth it.",
    author: "macOS developer",
    role: "Full-stack engineer",
    stars: 5,
  },
  {
    quote:
      "I upload project archives weekly. DriveDock's parallel uploads and resumable protocol cut my upload time in half and I've never lost a file mid-transfer.",
    author: "Indie game developer",
    role: "Solo game studio",
    stars: 5,
  },
  {
    quote:
      "The menu bar helper is incredibly useful. Progress at a glance, quick drop zone, account switching — all without opening a full window.",
    author: "Creative agency lead",
    role: "Design & video production",
    stars: 5,
  },
  {
    quote:
      "Open source and MIT licensed. I audited the OAuth scope — it only requests drive.file. Exactly what you'd want from a privacy-respecting tool.",
    author: "Security researcher",
    role: "Independent auditor",
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-yellow-400 text-yellow-400" : "text-fg-muted"}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function SocialProof() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-28 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(66,133,244,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase mb-4 block">
            Community
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg-primary mb-5"
          >
            Loved by developers
          </h2>
          <p className="text-lg text-fg-secondary max-w-xl mx-auto">
            Built by the macOS community, for the macOS community.
          </p>
        </FadeIn>

        {/* GitHub star CTA — App Store pattern: "ratings prominent throughout" */}
        <FadeIn className="flex justify-center mb-14">
          <a
            href="https://github.com/sayuru-akash/drivedock"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: "rgba(27,35,54,0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            <Github size={20} className="text-fg-secondary" aria-hidden="true" />
            <span className="text-sm font-medium text-fg-primary">
              Star on GitHub
            </span>
            <span
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{ background: "rgba(255,214,0,0.12)", color: "#FBBF24" }}
            >
              <Star size={11} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
              Open Source
            </span>
          </a>
        </FadeIn>

        {/* Testimonial cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure
                className="rounded-2xl p-6 h-full flex flex-col gap-4"
                style={{
                  background: "rgba(27, 35, 54, 0.75)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <StarRating count={t.stars} />
                <blockquote className="text-fg-primary text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${["#4285F4","#22C55E","#A78BFA","#F59E0B"][i % 4]} 0%, rgba(27,35,54,0.8) 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg-primary leading-tight">
                      {t.author}
                    </p>
                    <p className="text-xs text-fg-muted">{t.role}</p>
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
