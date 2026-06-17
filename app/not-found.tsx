import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="grid-bg" aria-hidden="true" />
      <Container className="relative z-10 text-center py-32">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-accent-subtle border border-accent-border text-accent-light mb-8">
          404 · Page Not Found
        </div>
        <h1 className="mb-6 max-w-3xl mx-auto">
          This page took a wrong turn at{" "}
          <span className="gradient-text-blue">the Dock</span>
        </h1>
        <p className="text-lg text-fg-secondary max-w-xl mx-auto mb-12 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved, renamed, or never existed in the first place.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" size="lg" icon={<Home size={18} />}>
            Back to Home
          </Button>
          <Button
            href="https://github.com/sayuru-akash/drivedock"
            variant="secondary"
            size="lg"
            icon={<ArrowLeft size={18} />}
          >
            Visit GitHub
          </Button>
        </div>
      </Container>
    </main>
  )
}
