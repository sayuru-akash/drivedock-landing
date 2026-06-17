import Link from "next/link"
import { Github } from "lucide-react"
import { Container } from "@/components/ui/container"

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Download", href: "/#download" },
      { label: "Releases", href: "https://github.com/sayuru-akash/drivedock/releases", external: true },
    ],
  },
  {
    heading: "Open Source",
    links: [
      { label: "GitHub", href: "https://github.com/sayuru-akash/drivedock", external: true },
      { label: "Issues", href: "https://github.com/sayuru-akash/drivedock/issues", external: true },
      { label: "Contribute", href: "https://github.com/sayuru-akash/drivedock/blob/main/CONTRIBUTING.md", external: true },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "MIT License", href: "https://github.com/sayuru-akash/drivedock/blob/main/LICENSE", external: true },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-white/[0.06] pt-16 pb-10"
      style={{ background: "rgba(11, 15, 26, 0.9)" }}
      role="contentinfo"
      aria-label="Site footer"
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 focus-ring rounded-lg mb-4"
              aria-label="DriveDock home"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, #4285F4 0%, #22C55E 100%)",
                }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 15L12 3L21 15H3Z" fill="white" fillOpacity="0.9" />
                  <path d="M3 15H21L18 21H6L3 15Z" fill="white" fillOpacity="0.6" />
                </svg>
              </div>
              <span className="font-semibold text-fg-primary">DriveDock</span>
            </Link>
            <p className="text-sm text-fg-secondary leading-relaxed mb-5">
              The cleanest way to upload to Google Drive on macOS. Native Swift, zero telemetry.
            </p>
            <a
              href="https://github.com/sayuru-akash/drivedock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-fg-secondary hover:text-fg-primary transition-colors focus-ring rounded-md"
              aria-label="View DriveDock on GitHub (opens in new tab)"
            >
              <Github size={16} aria-hidden="true" />
              <span>sayuru-akash/drivedock</span>
            </a>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={`${col.heading} links`}>
              <h3 className="text-xs font-semibold text-fg-muted tracking-widest uppercase mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-150 focus-ring rounded"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-fg-secondary hover:text-fg-primary transition-colors duration-150 focus-ring rounded"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.05]"
        >
          <p className="text-xs text-fg-muted">
            © {year} DriveDock Contributors. Released under the{" "}
            <a
              href="https://github.com/sayuru-akash/drivedock/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fg-secondary transition-colors underline underline-offset-2"
            >
              MIT License
            </a>
            .
          </p>
          <p className="text-xs text-fg-muted">
            Not affiliated with Google LLC.
          </p>
        </div>
      </Container>
    </footer>
  )
}
