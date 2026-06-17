"use client"

import { Shield, Lock, Eye, Code } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion"

const privacyPoints = [
  {
    icon: <Lock size={22} />,
    title: "Keychain-only credentials",
    description:
      "OAuth tokens are stored exclusively in the macOS Keychain — the same place Safari stores your passwords. DriveDock never touches a file on disk for credentials.",
  },
  {
    icon: <Eye size={22} />,
    title: "Zero telemetry",
    description:
      "No analytics, no crash reporting sent to third-party servers, no usage tracking. What you upload stays between you and Google Drive.",
  },
  {
    icon: <Shield size={22} />,
    title: "Minimal OAuth scopes",
    description:
      "DriveDock requests only drive.file — it can only see and access files it uploads. It cannot read, modify, or delete anything else in your Drive.",
  },
  {
    icon: <Code size={22} />,
    title: "Fully auditable",
    description:
      "Every line of code is public on GitHub under the MIT license. Anyone can verify exactly what DriveDock does — and exactly what it doesn't.",
  },
]

export function PrivacyHighlight() {
  return (
    <section
      id="privacy"
      aria-labelledby="privacy-heading"
      className="py-28 relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 0% 50%, rgba(34,197,94,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <FadeIn direction="right">
            <span className="text-sm font-medium text-green tracking-wider uppercase mb-4 block">
              Privacy First
            </span>
            <h2
              id="privacy-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-primary mb-5 leading-tight"
            >
              Your files never leave{" "}
              <span style={{
                background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                your hands
              </span>
            </h2>
            <p className="text-lg text-fg-secondary leading-relaxed mb-8">
              DriveDock was designed from the ground up with privacy as a
              constraint, not an afterthought. OAuth tokens live in your
              Keychain, the code is open for anyone to audit, and there is
              no telemetry of any kind — period.
            </p>
            <a
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-green hover:text-green/80 transition-colors"
              style={{ textDecoration: "underline", textUnderlineOffset: "4px" }}
            >
              Read the full Privacy Policy →
            </a>
          </FadeIn>

          {/* Right: Cards */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {privacyPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl p-5 h-full"
                  style={{
                    background: "rgba(21, 29, 46, 0.7)",
                    border: "1px solid rgba(34,197,94,0.12)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{
                      background: "rgba(34,197,94,0.1)",
                      border: "1px solid rgba(34,197,94,0.2)",
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
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  )
}
