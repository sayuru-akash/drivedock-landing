"use client"

import { Github, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "Finally a native macOS Google Drive uploader that doesn't feel like a web app wrapped in Electron. Folder preservation alone saves me hours every week.",
    author: "Alex Chen",
    role: "macOS developer",
    stars: 5,
  },
  {
    quote: "I upload project archives daily. DriveDock's parallel uploads and resumable protocol cut my upload time in half and I've never lost a file mid-transfer.",
    author: "Maya Patel",
    role: "Indie game developer",
    stars: 5,
  },
  {
    quote: "The menu bar helper is incredibly useful. Progress at a glance, quick drop zone, account switching—all without opening a full window.",
    author: "Jordan Lee",
    role: "Creative director",
    stars: 5,
  },
  {
    quote: "Open source and MIT licensed. I audited the OAuth scope—it only requests drive.file. Exactly what you'd want from a privacy-respecting tool.",
    author: "Sam Rivera",
    role: "Security engineer",
    stars: 5,
  },
]

const avatarGradients = [
  "from-accent to-accent/40",
  "from-green to-green/40",
  "from-purple to-purple/40",
  "from-yellow to-yellow/40",
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < count ? "fill-yellow text-yellow" : "text-fg-muted"}
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
          <span className="text-sm font-medium tracking-widest uppercase mb-5 block text-accent">
            Community
          </span>
          <h2 className="mb-6">
            Loved by developers
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed text-fg-secondary">
            Built by the macOS community, for the macOS community.
          </p>
        </FadeIn>

        <FadeIn className="flex justify-center mb-16">
          <a
            href="https://github.com/sayuru-akash/drivedock"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 glass-card rounded-2xl px-7 py-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Github size={22} className="text-fg-secondary" />
            <span className="text-base font-medium text-fg-primary">
              Star on GitHub
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-yellow-subtle text-yellow">
              <Star size={12} className="fill-yellow text-yellow" />
              Open Source
            </span>
          </a>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="glass-card rounded-2xl p-7 h-full flex flex-col gap-5">
                <StarRating count={t.stars} />
                <blockquote className="text-base leading-relaxed flex-1 text-fg-primary">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-gradient-to-br text-white",
                      avatarGradients[i % avatarGradients.length]
                    )}
                  >
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-fg-primary">
                      {t.author}
                    </p>
                    <p className="text-xs text-fg-muted">
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

