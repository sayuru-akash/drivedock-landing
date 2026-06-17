"use client"

/* App Store Style Landing — Section 3: Features with icons
   Feature-Rich Showcase pattern: Hero → Features grid → benefits → CTA
   Rules: Lucide icons (no emojis), card glass surface, stagger 40ms,
          hover scale 1.02, shadow transition, a11y heading hierarchy
*/

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
    icon: <Upload size={20} aria-hidden="true" />,
    title: "Drag & Drop Uploads",
    description:
      "Drop files or folders onto the window, menu bar, or Dock icon. Upload starts instantly — no clicks required.",
    highlighted: true,
  },
  {
    id: "folder-structure",
    icon: <FolderOpen size={20} aria-hidden="true" />,
    title: "Folder Preservation",
    description:
      "DriveDock recreates your exact folder hierarchy in Google Drive, including deeply nested subfolders.",
  },
  {
    id: "parallel-uploads",
    icon: <Zap size={20} aria-hidden="true" />,
    title: "Parallel Uploads",
    description:
      "Upload multiple files simultaneously. Adaptive concurrency adjusts automatically to your network.",
    highlighted: true,
  },
  {
    id: "resumable",
    icon: <RefreshCw size={20} aria-hidden="true" />,
    title: "Resumable Uploads",
    description:
      "Uses Google Drive's resumable protocol. Drop in connection? Uploads resume exactly where they left off.",
  },
  {
    id: "multi-account",
    icon: <Users size={20} aria-hidden="true" />,
    title: "Multi-Account",
    description:
      "Connect personal, work, and Shared Drive accounts. Switch between them without friction.",
  },
  {
    id: "shared-drive",
    icon: <Share2 size={20} aria-hidden="true" />,
    title: "Shared Drive Support",
    description:
      "Browse and upload to any Google Shared Drive you have access to, with full permission awareness.",
    highlighted: true,
  },
  {
    id: "menu-bar",
    icon: <LayoutGrid size={20} aria-hidden="true" />,
    title: "Menu Bar Helper",
    description:
      "Persistent menu bar icon shows active upload count, progress, a quick drop zone, and account switcher.",
  },
  {
    id: "history",
    icon: <Clock size={20} aria-hidden="true" />,
    title: "Upload History",
    description:
      "Every upload logged with timestamp, size, duration, speed, destination, status, and Drive link.",
  },
]

function FeatureCard({ icon, title, description, highlighted }: Omit<FeatureData, "id">) {
  return (
    <article
      className="group relative rounded-2xl p-6 h-full flex flex-col transition-all duration-200 hover:scale-[1.025]"
      style={{
        background: highlighted
          ? "linear-gradient(135deg, rgba(66,133,244,0.1) 0%, rgba(27,35,54,0.95) 100%)"
          : "rgba(27, 35, 54, 0.7)",
        border: highlighted
          ? "1px solid rgba(66,133,244,0.28)"
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        boxShadow: highlighted
          ? "0 0 0 0 transparent"
          : undefined,
      }}
      onMouseEnter={(e) => {
        if (highlighted) return
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(66,133,244,0.08)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none"
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shrink-0"
        style={{
          background: highlighted
            ? "rgba(66,133,244,0.18)"
            : "rgba(255,255,255,0.05)",
          border: highlighted
            ? "1px solid rgba(66,133,244,0.3)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
        aria-hidden="true"
      >
        <span className={highlighted ? "text-accent" : "text-fg-secondary"}>
          {icon}
        </span>
      </div>
      <h3 className="text-sm font-semibold text-fg-primary mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-fg-secondary leading-relaxed flex-1">
        {description}
      </p>
    </article>
  )
}

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-28 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(66,133,244,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-widest uppercase mb-4 block">
            Features
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-fg-primary mb-5"
          >
            Everything you need,{" "}
            <span className="gradient-text-blue">nothing you don&apos;t</span>
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            DriveDock is purpose-built for one job: getting your files from your
            Mac into Google Drive as fast and reliably as possible.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
