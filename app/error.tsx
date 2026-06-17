"use client"

import { useEffect } from "react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      console.error(error)
    }
  }, [error])

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="grid-bg" aria-hidden="true" />
      <Container className="relative z-10 text-center py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-red/10 border border-red/20 text-red mb-8">
          Error · Something went wrong
        </div>
        <h1 className="mb-6 max-w-3xl mx-auto">
          An unexpected error{" "}
          <span className="gradient-text-blue">occurred</span>
        </h1>
        <p className="text-lg text-fg-secondary max-w-xl mx-auto mb-12 leading-relaxed">
          Don&apos;t worry, this isn&apos;t your fault. We&apos;ve been notified and the issue is likely temporary. Try refreshing the page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} size="lg" icon={<RefreshCw size={18} />}>
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="lg" icon={<Home size={18} />}>
            Back to Home
          </Button>
        </div>
      </Container>
    </main>
  )
}
