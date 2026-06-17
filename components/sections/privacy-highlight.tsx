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
    title: "Tokens stay in the Keychain",
    description:
      "Your Google sign-in is stored in the macOS Keychain, same place Safari keeps your passwords. DriveDock never writes it to a file.",
  },
  {
    icon: <Eye size={22} />,
    title: "No analytics, anywhere",
    description:
      "No usage tracking, no crash reports to third parties, no anonymous metrics. There is literally no telemetry code in the app.",
  },
  {
    icon: <Shield size={22} />,
    title: "Only the drive.file scope",
    description:
      "DriveDock can only touch files it uploaded itself. Your existing Drive is off limits, and that&apos;s enforced by Google&apos;s API.",
  },
  {
    icon: <Code2 size={22} />,
    title: "Read the source yourself",
    description:
      "Every line of code is on GitHub under the MIT license. If you want to know what runs on your Mac, you can check.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right" className="order-2 lg:order-1">
            <span className="text-sm font-medium tracking-widest uppercase mb-5 block text-green">
              Privacy
            </span>
            <h2 className="mb-6">
              Your files stay{" "}
              <span className="gradient-text-green">yours</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-fg-secondary">
              We made DriveDock because we got tired of upload tools that wanted our email address, our usage stats, and a permission slip for our entire Drive. So we built one that asks for none of that.
            </p>
            <p className="text-base leading-relaxed mb-8 text-fg-secondary">
              The full policy is short and spells out exactly what gets stored on your Mac and what doesn&apos;t.
            </p>
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-green-hover underline underline-offset-4 transition-colors focus-ring rounded"
            >
              Read the privacy policy
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5 order-1 lg:order-2">
            {privacyPoints.map((point, i) => (
              <StaggerItem key={i}>
                <article className="glass-card rounded-2xl p-6 h-full border-green-border">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-subtle border border-green-border text-green">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-fg-primary">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-secondary">
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
