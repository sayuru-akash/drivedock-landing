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
  { label: "FAQ", href: "#faq" },
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
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-bg-base/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.95" />
                <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.65" />
              </svg>
            </div>
            <span className="font-semibold text-lg text-fg-primary">DriveDock</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm rounded-lg text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated transition-colors duration-200 focus-ring"
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
              className="p-2 rounded-lg text-fg-secondary hover:text-fg-primary transition-colors focus-ring"
              aria-label="View DriveDock on GitHub"
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
            className="md:hidden p-2 rounded-lg text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated transition-colors focus-ring"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-bg-surface/98 backdrop-blur-xl border-b border-border"
          >
            <Container>
              <nav className="py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-lg text-fg-secondary hover:text-fg-primary hover:bg-bg-elevated transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 pb-2 flex flex-col gap-3 mt-2 border-t border-border">
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

