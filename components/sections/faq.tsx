"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What is DriveDock?",
    answer:
      "DriveDock is a native macOS app for uploading files and folders to Google Drive with speed, clarity, and control. Built from scratch with Swift and SwiftUI, it provides a focused alternative to web-based upload tools.",
  },
  {
    question: "Is DriveDock really free?",
    answer:
      "Yes. DriveDock is completely free and open source under the MIT License. There are no in-app purchases, no premium tiers, and no upsells. You can use it forever at no cost, and you can read every line of source code.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "DriveDock requires macOS 14 Sonoma or later. It runs natively on both Apple Silicon (M1, M2, M3, M4) and Intel Macs. You'll also need a Google account with Drive access and an internet connection for uploads.",
  },
  {
    question: "How is my Google account kept secure?",
    answer:
      "DriveDock uses Google's OAuth 2.0 authentication and stores tokens exclusively in the macOS Keychain—the same encrypted credential store Safari uses. It only requests the drive.file scope, meaning it can only access files it personally uploads. Your existing Drive content is untouchable.",
  },
  {
    question: "Does DriveDock collect telemetry or analytics?",
    answer:
      "No. DriveDock collects zero personal data and sends no telemetry of any kind. There are no analytics services, no crash reporting to third parties, and no usage tracking. We don't operate any backend service at all—only the Google APIs that DriveDock needs to function.",
  },
  {
    question: "Can I upload folders and preserve the structure?",
    answer:
      "Yes. Drop a folder onto DriveDock and it will recreate the entire folder hierarchy in Google Drive, including deeply nested subfolders. You can also pause, resume, and reorder uploads as needed.",
  },
  {
    question: "What happens if my connection drops mid-upload?",
    answer:
      "DriveDock uses Google Drive's resumable upload protocol. If your connection drops, uploads automatically pause. When your connection returns, uploads pick up exactly where they left off—no restarting from scratch, no corrupted files.",
  },
  {
    question: "Can I contribute to the project?",
    answer:
      "Absolutely. The full source code is on GitHub. You can report bugs, suggest features, submit pull requests, or fork the project to create your own version. All contributions are welcome.",
  },
  {
    question: "Is DriveDock affiliated with Google?",
    answer:
      "No. DriveDock is an independent, community-driven project. It is not affiliated with, endorsed by, or sponsored by Google LLC. Google Drive and related trademarks are property of Google LLC.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Please open a security advisory on GitHub at github.com/sayuru-akash/drivedock/security. For urgent issues, mark it as a private security disclosure and we'll respond as quickly as possible.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-32 relative overflow-hidden" id="faq">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(66,133,244,0.05) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <Container size="lg">
        <FadeIn className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase mb-5 block text-accent">
            FAQ
          </span>
          <h2 className="mb-6">
            Frequently asked <span className="gradient-text-blue">questions</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-fg-secondary">
            Everything you need to know about DriveDock. Can&apos;t find your answer?{" "}
            <a
              href="https://github.com/sayuru-akash/drivedock/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
            >
              Open an issue on GitHub
            </a>
            .
          </p>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <FadeIn key={i} delay={i * 0.03}>
                <div
                  className={cn(
                    "rounded-2xl border transition-colors duration-200",
                    isOpen
                      ? "bg-bg-card/80 border-accent-border"
                      : "bg-bg-card/50 border-border hover:border-border-strong"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left focus-ring rounded-2xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="text-base font-semibold text-fg-primary">
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border transition-colors",
                        isOpen
                          ? "bg-accent-subtle border-accent-border text-accent"
                          : "bg-white/5 border-white/10 text-fg-secondary"
                      )}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm text-fg-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
