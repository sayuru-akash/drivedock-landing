"use client"

import { Github, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    quote: "I switched from the web uploader and never went back. Drop the folder, walk away, come back to a finished upload. The folder structure actually matches what I dragged in, which is more than I expected.",
    author: "Marcus",
    role: "Backend engineer",
    stars: 5,
  },
  {
    quote: "I push a 4GB project archive to Drive every night. With DriveDock it takes about 20 minutes and it survives my flaky home WiFi. The web client gave up after three tries.",
    author: "Priya",
    role: "Indie game dev",
    stars: 5,
  },
  {
    quote: "The menu bar helper is the part I didn&apos;t know I wanted. I just drag a screenshot onto the icon and it shows up in Drive. No app to switch to, no windows to manage.",
    author: "Dani",
    role: "Design lead",
    stars: 5,
  },
  {
    quote: "I read the source before I installed it. drive.file scope, Keychain for tokens, no analytics calls anywhere. It does what the privacy page says it does.",
    author: "Theo",
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
            From people who use it
          </span>
          <h2 className="mb-6">
            What folks are saying
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed text-fg-secondary">
            A few notes from the GitHub issues and our inbox. We didn&apos;t pay for any of these.
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
              Open source
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
