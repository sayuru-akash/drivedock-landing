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
      className="pt-20 pb-12"
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        background: "rgba(11, 15, 26, 0.95)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 focus-ring rounded-lg mb-5">
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
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-fg-secondary)" }}>
              The cleanest way to upload to Google Drive on macOS. Native Swift, zero telemetry.
            </p>
            <a
              href="https://github.com/sayuru-akash/drivedock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors focus-ring rounded"
              style={{ color: "var(--color-fg-secondary)" }}
            >
              <Github size={18} />
              <span>sayuru-akash/drivedock</span>
            </a>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <nav key={col.heading}>
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-5"
                style={{ color: "var(--color-fg-muted)" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors focus-ring rounded"
                        style={{ color: "var(--color-fg-secondary)" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors focus-ring rounded"
                        style={{ color: "var(--color-fg-secondary)" }}
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

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-fg-muted)" }}>
            © {year} DriveDock Contributors. Released under the{" "}
            <a
              href="https://github.com/sayuru-akash/drivedock/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors underline underline-offset-2"
              style={{ color: "var(--color-fg-muted)" }}
            >
              MIT License
            </a>
            .
          </p>
          <p className="text-xs" style={{ color: "var(--color-fg-muted)" }}>
            Not affiliated with Google LLC.
          </p>
        </div>
      </Container>
    </footer>
  )
}
