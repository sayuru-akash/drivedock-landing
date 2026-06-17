"use client"

import {
  Upload, FolderOpen, Zap, RefreshCw, Users, Share2, Menu, Clock
} from "lucide-react"
import { Container } from "@/components/ui/container"
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/ui/motion"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accent?: boolean
}

function FeatureCard({ icon, title, description, accent }: FeatureCardProps) {
  return (
    <div
      className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(66,133,244,0.12)]"
      style={{
        background: accent
          ? "linear-gradient(135deg, rgba(66,133,244,0.08) 0%, rgba(21,29,46,0.9) 100%)"
          : "rgba(21, 29, 46, 0.7)",
        border: accent
          ? "1px solid rgba(66,133,244,0.25)"
          : "1px solid rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: accent
            ? "rgba(66,133,244,0.15)"
            : "rgba(255,255,255,0.05)",
          border: accent
            ? "1px solid rgba(66,133,244,0.3)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
        aria-hidden="true"
      >
        <span className={accent ? "text-accent" : "text-fg-secondary"}>
          {icon}
        </span>
      </div>
      <h3 className="text-base font-semibold text-fg-primary mb-2 leading-snug">
        {title}
      </h3>
      <p className="text-sm text-fg-secondary leading-relaxed">
        {description}
      </p>
    </div>
  )
}

const featureData: (FeatureCardProps & { id: string })[] = [
  {
    id: "drag-drop",
    icon: <Upload size={20} />,
    title: "Drag & Drop Uploads",
    description:
      "Drop files or folders directly onto the window, menu bar, or Dock icon to start uploading instantly. Zero friction.",
    accent: true,
  },
  {
    id: "folder-structure",
    icon: <FolderOpen size={20} />,
    title: "Folder Structure Preservation",
    description:
      "Upload entire folder hierarchies and DriveDock recreates the exact structure in Google Drive — including nested subfolders.",
    accent: false,
  },
  {
    id: "parallel-uploads",
    icon: <Zap size={20} />,
    title: "Parallel Uploads",
    description:
      "Upload multiple files simultaneously with adaptive concurrency that automatically adjusts to your network conditions.",
    accent: true,
  },
  {
    id: "resumable",
    icon: <RefreshCw size={20} />,
    title: "Resumable Uploads",
    description:
      "Large files use Google Drive's resumable upload protocol. If your connection drops, uploads pick up right where they left off.",
    accent: false,
  },
  {
    id: "multi-account",
    icon: <Users size={20} />,
    title: "Multi-Account Support",
    description:
      "Connect multiple Google accounts and switch between personal, work, and Shared Drive accounts without any friction.",
    accent: false,
  },
  {
    id: "shared-drive",
    icon: <Share2 size={20} />,
    title: "Shared Drive Support",
    description:
      "Browse and upload to Google Shared Drives you have access to, with full permission awareness baked in.",
    accent: false,
  },
  {
    id: "menu-bar",
    icon: <Menu size={20} />,
    title: "Menu Bar Helper",
    description:
      "A persistent menu bar icon shows upload progress, active uploads count, a quick drop zone, and account switching.",
    accent: true,
  },
  {
    id: "history",
    icon: <Clock size={20} />,
    title: "Upload History",
    description:
      "Track every upload with timestamps, file size, duration, average speed, destination, account, status, and Drive links.",
    accent: false,
  },
]

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="py-28 relative">
      {/* Subtle separator */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(66,133,244,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-wider uppercase mb-4 block">
            Features
          </span>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-fg-primary mb-5"
          >
            Everything you need,{" "}
            <span className="gradient-text-blue">nothing you don&apos;t</span>
          </h2>
          <p className="text-lg text-fg-secondary max-w-2xl mx-auto leading-relaxed">
            DriveDock is purpose-built for uploading. No reading, no editing,
            no bloat — just a fast, reliable path from your Mac to Google Drive.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featureData.map((feature) => (
            <StaggerItem key={feature.id}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                accent={feature.accent}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}
