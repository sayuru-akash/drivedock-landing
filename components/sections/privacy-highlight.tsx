"use client"

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
    icon: <Lock size={22} />,
    title: "Keychain-only credentials",
    description:
      "OAuth tokens live exclusively in the macOS Keychain—the same secure store Safari uses. DriveDock never writes credentials to disk.",
  },
  {
    icon: <Eye size={22} />,
    title: "Absolute zero telemetry",
    description:
      "No analytics, no crash reports to third parties, no usage tracking—not even anonymous data. Your file activity is yours alone.",
  },
  {
    icon: <Shield size={22} />,
    title: "Minimal OAuth scope",
    description:
      "Only the drive.file scope is requested, meaning DriveDock can only access files it personally uploads. Your existing Drive content is untouchable.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Fully auditable source",
    description:
      "Every line is public on GitHub under the MIT license. Verify exactly what runs on your machine—no trust required.",
  },
]

export function PrivacyHighlight() {
  return (
    <section id="privacy" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 65% at -5% 50%, rgba(16,185,129,0.08) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <span className="text-sm font-medium tracking-widest uppercase mb-5 block" style={{ color: "#10B981" }}>
              Privacy First
            </span>
            <h2 className="mb-6">
              Your files never leave{" "}
              <span className="gradient-text-green">your hands</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-fg-secondary)" }}>
              DriveDock was designed with privacy as a hard constraint. Credentials stay in your Keychain, OAuth access is minimal by design, and there is no telemetry infrastructure—because there shouldn't be.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--color-fg-secondary)" }}>
              Every aspect of how DriveDock handles your data is documented in the Privacy Policy and verifiable in the open-source code.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80 focus-ring rounded"
              style={{ color: "#10B981", textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              Read the full Privacy Policy →
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2">
            {privacyPoints.map((point, i) => (
              <StaggerItem key={i}>
                <article className="glass-card rounded-2xl p-6 h-full" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.25)",
                      color: "#10B981",
                    }}
                  >
                    {point.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-fg-primary)" }}>
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-fg-secondary)" }}>
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
