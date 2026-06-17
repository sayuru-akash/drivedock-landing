import { Container } from "@/components/ui/container"

export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <div className="inline-block w-12 h-12 border-2 border-border border-t-accent rounded-full animate-spin" role="status" aria-label="Loading">
          <span className="sr-only">Loading...</span>
        </div>
      </Container>
    </main>
  )
}
