"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download as DownloadIcon, Github } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

  // Lock body scroll when mobile menu is open
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg-base/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      )}
      role="banner"
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-ring rounded-lg"
            aria-label="DriveDock home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #4285F4 0%, #22C55E 100%)",
              }}
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 15L12 3L21 15H3Z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path
                  d="M3 15H21L18 21H6L3 15Z"
                  fill="white"
                  fillOpacity="0.6"
                />
              </svg>
            </div>
            <span className="font-semibold text-fg-primary tracking-tight">
              DriveDock
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm text-fg-secondary hover:text-fg-primary rounded-md transition-colors duration-150 focus-ring"
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
              className="p-2 text-fg-secondary hover:text-fg-primary rounded-md transition-colors duration-150 focus-ring"
              aria-label="View DriveDock on GitHub"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <Button
              href="https://github.com/sayuru-akash/drivedock/releases"
              size="sm"
              icon={<DownloadIcon size={14} />}
            >
              Download
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-fg-secondary hover:text-fg-primary transition-colors focus-ring"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-bg-surface border-b border-border"
          >
            <Container>
              <nav className="py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated rounded-lg transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 pb-1 flex flex-col gap-2 border-t border-border mt-2">
                  <Button
                    href="https://github.com/sayuru-akash/drivedock/releases"
                    variant="primary"
                    icon={<DownloadIcon size={14} />}
                  >
                    Download for macOS
                  </Button>
                  <Button
                    href="https://github.com/sayuru-akash/drivedock"
                    variant="secondary"
                    icon={<Github size={14} />}
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
