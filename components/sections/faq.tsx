"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Container } from "@/components/ui/container"
import { FadeIn } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What does DriveDock actually do?",
    answer:
      "It uploads files and folders from your Mac to Google Drive. You can drop stuff on the app, the menu bar icon, or the Dock. It runs uploads in parallel, keeps your folder structure intact, and picks up where it left off if your connection drops.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. The whole app is MIT licensed. No paid tier, no Pro plan, no upsell. If you want to pay, you can buy us a coffee via the GitHub Sponsors link, but the app is the same for everyone.",
  },
  {
    question: "What does it cost to run?",
    answer:
      "Nothing to run on our side because we don&apos;t run anything. Your uploads go directly from your Mac to Google&apos;s API. We don&apos;t have a server, we don&apos;t proxy anything, we don&apos;t see your files.",
  },
  {
    question: "What Mac do I need?",
    answer:
      "Anything running macOS 14 Sonoma or later. That includes Apple Silicon (M1 and up) and the last few generations of Intel Macs. You also need a Google account with Drive enabled.",
  },
  {
    question: "Can it see my existing Drive files?",
    answer:
      "No. DriveDock asks Google for the drive.file scope, which only grants access to files the app itself creates or uploads. Your existing documents, photos, and folders are completely off limits, and Google&apos;s API enforces this on their end too.",
  },
  {
    question: "Where do my login credentials live?",
    answer:
      "In the macOS Keychain, which is the same encrypted store Safari uses for your website passwords. DriveDock never writes the token to a file on disk and never sends it anywhere other than accounts.google.com.",
  },
  {
    question: "What happens to my upload if my WiFi dies?",
    answer:
      "It pauses. DriveDock uses Google Drive&apos;s resumable upload protocol, so when your connection comes back, the upload continues from the same byte. You won&apos;t end up with half a file in Drive.",
  },
  {
    question: "Do you collect any data at all?",
    answer:
      "No. There is no analytics SDK in the app, no crash reporting service, no anonymous usage ping. If you find any, that&apos;s a bug and we want to know about it.",
  },
  {
    question: "Can I audit the code?",
    answer:
      "Yes, please. The whole project is on GitHub. If something looks off, open an issue. If you want to verify a privacy claim, read the source. That&apos;s the whole point of open source.",
  },
  {
    question: "Does Google endorse this?",
    answer:
      "No. DriveDock is an independent project, not affiliated with or sponsored by Google. Google Drive, Google, and related marks are trademarks of Google LLC.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Open a security advisory on GitHub instead of a regular issue so we can talk privately first. We&apos;ll respond within a couple of days and credit you in the fix if you want.",
  },
  {
    question: "Why did you build this?",
    answer:
      "We wanted an uploader that didn&apos;t ask for our whole Drive and didn&apos;t phone home. None of the existing options worked that way, so we wrote our own. The source is on GitHub if you want to take it and make your own version.",
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
            Questions we get a lot
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-fg-secondary">
            The stuff people ask in issues and on Twitter. If yours isn&apos;t here,{" "}
            <a
              href="https://github.com/sayuru-akash/drivedock/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover underline underline-offset-4 transition-colors"
            >
              open an issue
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
