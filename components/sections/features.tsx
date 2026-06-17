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
            Everything you need,{" "}
            <span className="gradient-text-blue">nothing you don&apos;t</span>
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
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

