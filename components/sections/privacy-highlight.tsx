"use client"

/* Section: Privacy / "Problem → Solution" narrative
   Design system: green accent for privacy/open-source signal
   Rules: a11y list semantics, heading hierarchy h2→h3, card-glass surfaces,
          contrast green on dark bg, stagger 40ms
*/

import { Shield, Lock, Eye, Code2 } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"
import type { ReactNode } from "react"

interface PrivacyPoint {
  icon: ReactNode
  title: string
  description: string
}

const privacyPoints: PrivacyPoint[] = [
  {
    icon: <Lock size={20} aria-hidden="true" />,
    title: "Keychain-only credentials",
    description:
      "OAuth tokens live exclusively in the macOS Keychain — the same secure store Safari uses. DriveDock never writes credentials to disk.",
  },
  {
    icon: <Eye size={20} aria-hidden="true" />,
    title: "Absolute zero telemetry",
    description:
      "No analytics, no crash reports to third parties, no usage tracking — not even anonymous data. Your file activity is yours alone.",
  },
  {
    icon: <Shield size={20} aria-hidden="true" />,
    title: "Minimal OAuth scope",
    description:
      "Only the drive.file scope is requested, meaning DriveDock can only access files it personally uploads. Your existing Drive content is untouchable.",
  },
  {
    icon: <Code2 size={20} aria-hidden="true" />,
    title: "Fully auditable source",
    description:
      "Every line is public on GitHub under the MIT license. Verify exactly what runs on your machine — no trust required.",
  },
]

export function PrivacyHighlight() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="py-28 relative overflow-hidden"
    >
      {/* Green radial glow — left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 65% at -5% 50%, rgba(34,197,94,0.07) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Narrative copy */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <span className="text-sm font-medium text-green tracking-widest uppercase mb-4 block">
              Privacy First
            </span>
            <h2
              id="privacy-heading"
              className="text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-fg-primary mb-5 leading-tight"
            >
              Your files never leave{" "}
              <span className="gradient-text-green">your hands</span>
            </h2>
            <p className="text-lg text-fg-secondary leading-relaxed mb-6">
              DriveDock was designed with privacy as a hard constraint. Credentials
              stay in your Keychain, OAuth access is minimal by design, and
              there is no telemetry infrastructure — because there shouldn&apos;t be.
            </p>
            <p className="text-base text-fg-secondary leading-relaxed mb-8">
              Every aspect of how DriveDock handles your data is documented in the
              Privacy Policy and verifiable in the open-source code.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-green hover:opacity-80 transition-opacity focus-ring rounded"
              style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              Read the full Privacy Policy →
            </Link>
          </FadeIn>

          {/* Right: Privacy point cards */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2"
          >
            {privacyPoints.map((point, i) => (
              <StaggerItem key={i}>
                <article
                  className="rounded-2xl p-5 h-full"
                  style={{
                    background: "rgba(27, 35, 54, 0.75)",
                    border: "1px solid rgba(34,197,94,0.14)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.22)",
                    }}
                    aria-hidden="true"
                  >
                    <span className="text-green">{point.icon}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-fg-primary mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs text-fg-secondary leading-relaxed">
                    {point.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
