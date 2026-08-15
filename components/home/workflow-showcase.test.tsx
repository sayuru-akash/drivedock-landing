import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { WorkflowShowcase } from "./workflow-showcase"

afterEach(cleanup)

describe("WorkflowShowcase", () => {
  it("starts on Select Files and exposes the related workflow visual", () => {
    render(<WorkflowShowcase />)

    const selectFiles = screen.getByRole("tab", { name: /select files/i })

    expect(selectFiles.getAttribute("aria-selected")).toBe("true")
    expect(screen.getByRole("tabpanel").textContent).toContain("3 items selected")
    expect(screen.queryByText("Choose files in Finder")).toBeNull()
    expect(screen.queryByText("S")).toBeNull()
  })

  it("switches the copy and upload visual when a user selects Uploading", () => {
    render(<WorkflowShowcase />)

    const uploading = screen.getByRole("tab", { name: /uploading/i })
    fireEvent.click(uploading)

    expect(uploading.getAttribute("aria-selected")).toBe("true")
    expect(screen.getByRole("progressbar", { name: /uploading 3 items/i })).toBeDefined()
  })

  it("supports arrow-key navigation between workflow steps", () => {
    render(<WorkflowShowcase />)

    const selectFiles = screen.getByRole("tab", { name: /select files/i })
    const dragAndDrop = screen.getByRole("tab", { name: /drag & drop/i })
    selectFiles.focus()
    fireEvent.keyDown(selectFiles, { key: "ArrowDown" })

    expect(dragAndDrop.getAttribute("aria-selected")).toBe("true")
    expect(document.activeElement).toBe(dragAndDrop)
  })

  it("shows a completion state when All Done is selected", () => {
    render(<WorkflowShowcase />)

    fireEvent.click(screen.getByRole("tab", { name: /all done/i }))

    expect(screen.getByRole("status").textContent).toContain("Upload complete")
    expect(screen.queryByRole("progressbar")).toBeNull()
  })

  it("shows an active drop target for the Drag & Drop step", () => {
    render(<WorkflowShowcase />)

    fireEvent.click(screen.getByRole("tab", { name: /drag & drop/i }))

    expect(screen.getByLabelText("Drop target ready")).toBeDefined()
    expect(screen.queryByText("Drop them into DriveDock")).toBeNull()
  })
})
