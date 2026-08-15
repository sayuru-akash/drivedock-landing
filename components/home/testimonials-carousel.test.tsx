import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ProductHighlightsCarousel } from "./testimonials-carousel"

describe("ProductHighlightsCarousel", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })
    Object.defineProperty(HTMLElement.prototype, "scrollTo", {
      configurable: true,
      value: vi.fn(),
    })
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it("renders verified product capability content and an active slide", () => {
    render(<ProductHighlightsCarousel />)

    expect(screen.getByRole("heading", { name: "What the current app actually does" })).toBeDefined()
    expect(screen.getByText("Resumable large uploads")).toBeDefined()
    expect(screen.queryByText("Jamie Park")).toBeNull()
    expect(screen.getByRole("button", { name: "Pause highlight rotation" })).toBeDefined()
    expect(screen.getByRole("button", { name: "Show highlight 1" }).getAttribute("aria-current")).toBe("true")
  })

  it("advances automatically and supports manual navigation", () => {
    render(<ProductHighlightsCarousel />)

    act(() => vi.advanceTimersByTime(6000))
    expect(screen.getByRole("button", { name: "Show highlight 2" }).getAttribute("aria-current")).toBe("true")

    fireEvent.click(screen.getByRole("button", { name: "Next highlight" }))
    expect(screen.getByRole("button", { name: "Show highlight 3" }).getAttribute("aria-current")).toBe("true")

    fireEvent.click(screen.getByRole("button", { name: "Previous highlight" }))
    expect(screen.getByRole("button", { name: "Show highlight 2" }).getAttribute("aria-current")).toBe("true")
  })

  it("pauses rotation when requested", () => {
    render(<ProductHighlightsCarousel />)

    fireEvent.click(screen.getByRole("button", { name: "Pause highlight rotation" }))
    act(() => vi.advanceTimersByTime(12000))

    expect(screen.getByRole("button", { name: "Show highlight 1" }).getAttribute("aria-current")).toBe("true")
    expect(screen.getByRole("button", { name: "Resume highlight rotation" })).toBeDefined()
  })

  it("does not auto-rotate for people who prefer reduced motion", () => {
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    })

    render(<ProductHighlightsCarousel />)
    act(() => vi.advanceTimersByTime(12000))

    expect(screen.getByRole("button", { name: "Show highlight 1" }).getAttribute("aria-current")).toBe("true")
    expect(screen.getByRole("button", { name: "Resume highlight rotation" })).toBeDefined()
  })
})
