import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"
import { FaqBrowser } from "./faq-browser"
import { FeatureExplorer } from "./feature-explorer"

beforeEach(() => {
  window.history.replaceState(null, "", "/")
})

afterEach(cleanup)

describe("feature explorer", () => {
  it("switches panels and stores the selected feature in the URL", () => {
    render(<FeatureExplorer />)

    fireEvent.click(screen.getByRole("tab", { name: /Queue Control/ }))

    expect(screen.getByRole("tab", { name: /Queue Control/ }).getAttribute("aria-selected")).toBe("true")
    expect(screen.getByRole("heading", { name: "A queue you can actually direct." })).toBeDefined()
    expect(window.location.hash).toBe("#queue-control")
  })

  it("supports arrow-key tab navigation", () => {
    render(<FeatureExplorer />)

    fireEvent.keyDown(screen.getByRole("tab", { name: /Upload Engine/ }), { key: "ArrowRight" })

    expect(screen.getByRole("tab", { name: /Queue Control/ }).getAttribute("aria-selected")).toBe("true")
  })
})

describe("FAQ browser", () => {
  it("filters by category and keeps that state in the URL", () => {
    const { container } = render(<FaqBrowser />)

    fireEvent.click(screen.getByRole("button", { name: "Uploads" }))

    expect(container.querySelectorAll("details")).toHaveLength(7)
    expect(window.location.search).toBe("?category=uploads")
  })

  it("shows a useful empty state and can reset it", () => {
    render(<FaqBrowser />)

    fireEvent.change(screen.getByRole("searchbox", { name: "Search DriveDock questions" }), {
      target: { value: "not-a-real-drivedock-capability" },
    })

    expect(screen.getByRole("heading", { name: "No matching questions" })).toBeDefined()
    fireEvent.click(screen.getByRole("button", { name: "Show All Questions" }))
    expect(screen.getByText("23 answers")).toBeDefined()
    expect(window.location.search).toBe("")
  })
})
