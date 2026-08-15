"use client"

import { type KeyboardEvent, useRef, useState } from "react"
import { Check, FileArchive, FileText, Folder, ImageIcon, Upload } from "lucide-react"
import { workflowSteps } from "./home-data"
import styles from "./home.module.css"

const selectedFiles = [
  { icon: Folder, name: "Project Assets", meta: "28 items" },
  { icon: ImageIcon, name: "hero-final.png", meta: "8.4 MB" },
  { icon: FileArchive, name: "brand-kit.zip", meta: "675 MB" },
] as const

const uploadingFiles = [
  { name: "Project Assets", progress: "100%", status: "Done" },
  { name: "hero-final.png", progress: "78%", status: "6.5 of 8.4 MB" },
  { name: "brand-kit.zip", progress: "46%", status: "310 of 675 MB" },
] as const

function WindowBar({ title }: { title: string }) {
  return (
    <div className={styles.workflowWindowBar}>
      <span aria-hidden="true"><i /><i /><i /></span>
      <strong>{title}</strong>
    </div>
  )
}

function SelectFilesVisual() {
  return (
    <div className={styles.workflowVisualBody}>
      <div className={`${styles.workflowMockWindow} ${styles.workflowFinderStage}`} aria-label="3 items selected in Finder">
        <WindowBar title="Downloads" />
        <div className={styles.workflowFileGrid}>
          {selectedFiles.map(({ icon: Icon, name, meta }) => (
            <div className={styles.workflowSelectedFile} key={name}>
              <span><Icon aria-hidden="true" size={25} /></span>
              <strong>{name}</strong>
              <small>{meta}</small>
              <i><Check aria-hidden="true" size={10} /></i>
            </div>
          ))}
          <div className={styles.workflowMutedFile} aria-hidden="true">
            <FileText size={24} />
            <span>Notes.txt</span>
          </div>
        </div>
      </div>
      <div className={styles.workflowSelectionBadge}>
        <strong>3 items selected</strong>
        <span>Ready to drag</span>
      </div>
    </div>
  )
}

function DragDropVisual() {
  return (
    <div className={styles.workflowVisualBody}>
      <div className={`${styles.workflowMockWindow} ${styles.workflowAppStage}`}>
        <WindowBar title="DriveDock" />
        <div className={styles.workflowAccountBar}>
          <span>J</span>
          <div><strong>john@workspace.com</strong><small>My Drive</small></div>
          <small>Connected</small>
        </div>
        <div aria-label="Drop target ready" className={styles.workflowDropTarget}>
          <span><Upload aria-hidden="true" size={23} /></span>
          <strong>Release to upload</strong>
          <small>3 items, 684 MB</small>
        </div>
      </div>
      <div className={styles.workflowDragPayload} aria-hidden="true">
        <Folder size={18} />
        <span>3</span>
      </div>
    </div>
  )
}

function UploadingVisual() {
  return (
    <div className={styles.workflowVisualBody}>
      <div className={`${styles.workflowMockWindow} ${styles.workflowUploadStage}`}>
        <WindowBar title="DriveDock" />
        <div className={styles.workflowUploadHeader}>
          <div><strong>Uploading 3 items</strong><span>2 uploads running in parallel</span></div>
          <strong>68%</strong>
        </div>
        <div
          aria-label="Uploading 3 items"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={68}
          className={styles.workflowProgress}
          role="progressbar"
        >
          <span />
        </div>
        <div className={styles.workflowUploadList}>
          {uploadingFiles.map((file) => (
            <div key={file.name}>
              <span><FileText aria-hidden="true" size={14} /></span>
              <div>
                <strong>{file.name}</strong>
                <i><span style={{ width: file.progress }} /></i>
              </div>
              <small>{file.status}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CompleteVisual() {
  return (
    <div className={styles.workflowVisualBody}>
      <div className={`${styles.workflowMockWindow} ${styles.workflowCompleteStage}`}>
        <WindowBar title="DriveDock" />
        <div className={styles.workflowSuccessMark}><Check aria-hidden="true" size={28} /></div>
        <div className={styles.workflowComplete} role="status">
          <strong>Upload complete</strong>
          <span>3 items added to My Drive</span>
        </div>
        <div className={styles.workflowCompleteFiles} aria-hidden="true">
          {selectedFiles.map((file) => (
            <span key={file.name}><Check size={11} />{file.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function WorkflowVisual({ activeIndex }: { activeIndex: number }) {
  if (activeIndex === 0) return <SelectFilesVisual />
  if (activeIndex === 1) return <DragDropVisual />
  if (activeIndex === 2) return <UploadingVisual />
  return <CompleteVisual />
}

export function WorkflowShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  function selectStep(index: number, moveFocus = false) {
    setActiveIndex(index)
    if (moveFocus) tabRefs.current[index]?.focus()
  }

  function handleStepKeyDown(index: number, event: KeyboardEvent<HTMLButtonElement>) {
    const lastIndex = workflowSteps.length - 1
    let nextIndex: number | null = null

    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1
    if (event.key === "Home") nextIndex = 0
    if (event.key === "End") nextIndex = lastIndex

    if (nextIndex === null) return
    event.preventDefault()
    selectStep(nextIndex, true)
  }

  return (
    <div className={styles.workflowGrid}>
      <div className={styles.workflowSteps} role="tablist" aria-label="How DriveDock works" aria-orientation="vertical">
        {workflowSteps.map((step, index) => (
          <button
            aria-controls="workflow-panel"
            aria-selected={activeIndex === index}
            className={activeIndex === index ? styles.activeStep : undefined}
            id={`workflow-tab-${index}`}
            key={step.title}
            onClick={() => selectStep(index)}
            onKeyDown={(event) => handleStepKeyDown(index, event)}
            ref={(element) => {
              tabRefs.current[index] = element
            }}
            role="tab"
            tabIndex={activeIndex === index ? 0 : -1}
            type="button"
          >
            <strong><span>{step.number}</span> {step.title}</strong>
            <span>{step.description}</span>
          </button>
        ))}
      </div>
      <div
        aria-labelledby={`workflow-tab-${activeIndex}`}
        className={styles.workflowVisual}
        id="workflow-panel"
        role="tabpanel"
        tabIndex={0}
      >
        <div className={styles.workflowStage} key={activeIndex}>
          <WorkflowVisual activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  )
}
