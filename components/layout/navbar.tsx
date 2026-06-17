"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download as DownloadIcon, Github } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Privacy", href: "#privacy" },
  { label: "Technical", href: "#technical" },
  { label: "Download", href: "#download" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(11, 15, 26, 0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
        boxShadow: scrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.4)" : "none",
      }}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #4285F4 0%, #10B981 100%)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.65" />
              </svg>
            </div>
            <span className="font-semibold text-lg" style={{ color: "var(--color-fg-primary)" }}>
              DriveDock
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 focus-ring"
                  style={{ color: "var(--color-fg-secondary)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-primary)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/sayuru-akash/drivedock"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors focus-ring"
              style={{ color: "var(--color-fg-secondary)" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-primary)"}
              onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
            >
              <Github size={20} />
            </a>
            <Button
              href="https://github.com/sayuru-akash/drivedock/releases"
              size="sm"
              icon={<DownloadIcon size={16} />}
            >
              Download
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors focus-ring"
            style={{ color: "var(--color-fg-secondary)" }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-fg-primary)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-fg-secondary)"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "var(--color-bg-surface)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <Container>
              <nav className="py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg transition-colors"
                    style={{ color: "var(--color-fg-secondary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-fg-primary)"
                      e.currentTarget.style.background = "var(--color-bg-elevated)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--color-fg-secondary)"
                      e.currentTarget.style.background = "transparent"
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 pb-2 flex flex-col gap-3 mt-2" style={{ borderTop: "1px solid var(--color-border)" }}>
                  <Button
                    href="https://github.com/sayuru-akash/drivedock/releases"
                    icon={<DownloadIcon size={16} />}
                  >
                    Download for macOS
                  </Button>
                  <Button
                    href="https://github.com/sayuru-akash/drivedock"
                    variant="secondary"
                    icon={<Github size={16} />}
                  >
                    View on GitHub
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
