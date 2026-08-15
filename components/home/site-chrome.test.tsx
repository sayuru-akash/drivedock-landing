import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { SiteFooter, SiteHeader } from "./site-chrome"

afterEach(cleanup)

describe("shared site chrome", () => {
  it("keeps the macOS download action in the header", () => {
    render(<SiteHeader />)

    expect(screen.getAllByRole("link", { name: /download/i }).length).toBeGreaterThan(0)
  })

  it("omits Download from the Product footer while keeping Releases", () => {
    render(<SiteFooter />)

    const productNav = screen.getByRole("navigation", { name: "Product" })
    expect(within(productNav).queryByRole("link", { name: "Download" })).toBeNull()
    expect(within(productNav).getByRole("link", { name: "Features" }).getAttribute("href")).toBe("/features")
    expect(within(productNav).getByRole("link", { name: "FAQ" }).getAttribute("href")).toBe("/faq")
    expect(within(productNav).getByRole("link", { name: "Releases" })).toBeDefined()
  })
})
