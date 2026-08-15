import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"
import ErrorPage from "./error"

afterEach(cleanup)

describe("route error fallback", () => {
  it("offers a working retry action without claiming telemetry", () => {
    const retry = vi.fn()
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => undefined)

    render(<ErrorPage error={new Error("test failure")} retry={retry} />)
    fireEvent.click(screen.getByRole("button", { name: "Try Again" }))

    expect(retry).toHaveBeenCalledOnce()
    expect(screen.queryByText(/we've been notified/i)).toBeNull()
    consoleError.mockRestore()
  })
})
