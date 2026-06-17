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
    title: "Drag & Drop Uploads",
    description: "Drop files or folders onto the window, menu bar, or Dock icon. Upload starts instantly—no clicks required.",
    highlighted: true,
  },
  {
    id: "folder-structure",
    icon: <FolderOpen size={22} />,
    title: "Folder Preservation",
    description: "DriveDock recreates your exact folder hierarchy in Google Drive, including deeply nested subfolders.",
  },
  {
    id: "parallel-uploads",
    icon: <Zap size={22} />,
    title: "Parallel Uploads",
    description: "Upload multiple files simultaneously. Adaptive concurrency adjusts automatically to your network.",
    highlighted: true,
  },
  {
    id: "resumable",
    icon: <RefreshCw size={22} />,
    title: "Resumable Uploads",
    description: "Uses Google Drive's resumable protocol. Drop in connection? Uploads resume exactly where they left off.",
  },
  {
    id: "multi-account",
    icon: <Users size={22} />,
    title: "Multi-Account",
    description: "Connect personal, work, and Shared Drive accounts. Switch between them without friction.",
  },
  {
    id: "shared-drive",
    icon: <Share2 size={22} />,
    title: "Shared Drive Support",
    description: "Browse and upload to any Google Shared Drive you have access to, with full permission awareness.",
    highlighted: true,
  },
  {
    id: "menu-bar",
    icon: <LayoutGrid size={22} />,
    title: "Menu Bar Helper",
    description: "Persistent menu bar icon shows active upload count, progress, a quick drop zone, and account switcher.",
  },
  {
    id: "history",
    icon: <Clock size={22} />,
    title: "Upload History",
    description: "Every upload logged with timestamp, size, duration, speed, destination, status, and Drive link.",
  },
]

function FeatureCard({ icon, title, description, highlighted }: Omit<FeatureData, "id">) {
  return (
    <article
      className="group relative rounded-2xl p-7 h-full transition-all duration-300 hover:scale-[1.02]"
      style={{
        background: highlighted
          ? "linear-gradient(135deg, rgba(66,133,244,0.1) 0%, rgba(27,35,54,0.95) 100%)"
          : "rgba(27, 35, 54, 0.7)",
        border: highlighted
          ? "1px solid rgba(66,133,244,0.28)"
          : "1px solid rgba(255,255,255,0.07)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 8px -2px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0"
        style={{
          background: highlighted ? "rgba(66,133,244,0.18)" : "rgba(255,255,255,0.05)",
          border: highlighted ? "1px solid rgba(66,133,244,0.3)" : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <span className={highlighted ? "text-[#4285F4]" : "text-[var(--color-fg-secondary)]"}>
          {icon}
        </span>
      </div>
      <h3 className="text-base font-semibold text-[var(--color-fg-primary)] mb-3 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-fg-secondary)] leading-relaxed">
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
          <span className="text-sm font-medium text-[#4285F4] tracking-widest uppercase mb-5 block">
            Features
          </span>
          <h2 className="mb-6">
            Everything you need,{" "}
            <span className="gradient-text-blue">nothing you don't</span>
          </h2>
          <p className="text-lg text-[var(--color-fg-secondary)] max-w-2xl mx-auto leading-relaxed">
            DriveDock is purpose-built for one job: getting your files from your Mac into Google Drive as fast and reliably as possible.
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
