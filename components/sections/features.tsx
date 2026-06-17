"use client"

import {
  Upload,
  FolderOpen,
  Zap,
  RefreshCw,
  Users,
  Share2,
  LayoutGrid,
  Clock,
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/motion"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface FeatureData {
  id: string
  icon: ReactNode
  title: string
  description: string
  highlighted?: boolean
}

const features: FeatureData[] = [
  {
    id: "drag-drop",
    icon: <Upload size={22} />,
    title: "Drag and drop",
    description: "Drop a file on the window, the menu bar, or the Dock icon. It starts uploading before you can lift your finger.",
    highlighted: true,
  },
  {
    id: "folder-structure",
    icon: <FolderOpen size={22} />,
    title: "Keeps your folders",
    description: "Drop a folder and DriveDock recreates the same structure in Drive, nesting and all.",
  },
  {
    id: "parallel-uploads",
    icon: <Zap size={22} />,
    title: "Uploads in parallel",
    description: "Multiple files at once, with the concurrency adjusted to whatever your network can actually handle.",
    highlighted: true,
  },
  {
    id: "resumable",
    icon: <RefreshCw size={22} />,
    title: "Resumes when it can",
    description: "If your WiFi drops, the upload pauses. When you&apos;re back online, it picks up exactly where it stopped.",
  },
  {
    id: "multi-account",
    icon: <Users size={22} />,
    title: "Multiple Google accounts",
    description: "Sign in to your personal, work, and shared drive accounts. Switch between them from the menu bar.",
  },
  {
    id: "shared-drive",
    icon: <Share2 size={22} />,
    title: "Works with Shared Drives",
    description: "Browse and upload to any Shared Drive you have access to, with the right permissions respected.",
    highlighted: true,
  },
  {
    id: "menu-bar",
    icon: <LayoutGrid size={22} />,
    title: "Lives in your menu bar",
    description: "A small icon with your active upload count, a quick drop zone, and an account switcher.",
  },
  {
    id: "history",
    icon: <Clock size={22} />,
    title: "Upload history",
    description: "Every upload, with the timestamp, size, duration, speed, and a link back to the file in Drive.",
  },
]

function FeatureCard({ icon, title, description, highlighted }: Omit<FeatureData, "id">) {
  return (
    <article
      className={cn(
        "group relative rounded-2xl p-7 h-full border backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02]",
        highlighted
          ? "bg-accent-subtle border-accent-border"
          : "bg-bg-card/70 border-border hover:border-border-strong"
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 border",
          highlighted
            ? "bg-accent/15 border-accent-border text-accent"
            : "bg-white/5 border-white/[0.08] text-fg-secondary"
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-fg-primary mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-fg-secondary leading-relaxed">
        {description}
      </p>
    </article>
  )
}

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(66,133,244,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-20">
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-5 block">
            Features
          </span>
          <h2 className="mb-6">
            Built to do one thing well
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            Get files from your Mac into Google Drive. That&apos;s it. Every feature on this page exists to make that faster or less annoying.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <StaggerItem key={f.id}>
              <FeatureCard
                icon={f.icon}
                title={f.title}
                description={f.description}
                highlighted={f.highlighted}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
