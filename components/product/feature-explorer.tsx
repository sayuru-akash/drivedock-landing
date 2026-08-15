"use client"

import { useSyncExternalStore } from "react"
import {
  Check,
  ChevronRight,
  CirclePause,
  CloudDownload,
  CloudUpload,
  FileArchive,
  FolderTree,
  Gauge,
  History,
  RefreshCw,
  Users,
} from "lucide-react"
import { featureExplorerItems } from "./product-data"
import styles from "./product-pages.module.css"

type ExplorerId = (typeof featureExplorerItems)[number]["id"]

const validIds = new Set<ExplorerId>(featureExplorerItems.map((item) => item.id))

function subscribeToHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange)
  window.addEventListener("drivedock:hashchange", onStoreChange)
  return () => {
    window.removeEventListener("hashchange", onStoreChange)
    window.removeEventListener("drivedock:hashchange", onStoreChange)
  }
}

function getHashSnapshot() {
  return window.location.hash.slice(1)
}

function ExplorerVisual({ id }: { id: ExplorerId }) {
  if (id === "upload-engine") {
    return (
      <div className={styles.engineVisual} aria-label="Example upload queue">
        <div className={styles.visualTitle}><CloudUpload aria-hidden="true" size={16} />Upload Queue <span>3 active</span></div>
        {[
          ["campaign-video.mov", "1.8 GB of 2.4 GB", "74%"],
          ["brand-assets.zip", "186 MB of 312 MB", "60%"],
          ["project-archive", "Preparing 142 files", "24%"],
        ].map(([name, detail, progress]) => (
          <div className={styles.transferRow} key={name}>
            <FileArchive aria-hidden="true" size={17} />
            <div><strong>{name}</strong><span>{detail}</span></div>
            <b>{progress}</b>
            <i><span style={{ width: progress }} /></i>
          </div>
        ))}
        <div className={styles.visualStatus}><Gauge aria-hidden="true" size={15} /><span>Adaptive concurrency</span><strong>Balanced</strong></div>
      </div>
    )
  }

  if (id === "queue-control") {
    return (
      <div className={styles.queueVisual} aria-label="Example queue controls">
        <div className={styles.visualTitle}><RefreshCw aria-hidden="true" size={16} />Persistent Queue <span>7 items</span></div>
        <div className={styles.queueControlRow}>
          <CirclePause aria-hidden="true" size={20} />
          <div><strong>campaign-video.mov</strong><span>Paused at 1.8 GB</span></div>
          <span className={styles.visualAction}>Resume</span>
        </div>
        <div className={styles.queueControlRow}>
          <ChevronRight aria-hidden="true" size={20} />
          <div><strong>site-export.zip</strong><span>Next in queue</span></div>
          <span className={styles.visualAction}>Prioritize</span>
        </div>
        <div className={styles.recoveryNote}><Check aria-hidden="true" size={16} /><span>Queue saved locally. Eligible work resumes after restart.</span></div>
      </div>
    )
  }

  if (id === "accounts-drives") {
    return (
      <div className={styles.accountVisual} aria-label="Example Google account and destination selection">
        <div className={styles.visualTitle}><Users aria-hidden="true" size={16} />Transfer Destination <span>2 accounts</span></div>
        <div className={styles.accountPicker}>
          <span className={styles.accountMark}>S</span>
          <div><strong>sayuru@workspace.com</strong><span>Connected with macOS Keychain</span></div>
          <Check aria-hidden="true" size={17} />
        </div>
        <div className={styles.drivePath}>
          <FolderTree aria-hidden="true" size={18} />
          <span>Shared Drives</span><ChevronRight aria-hidden="true" size={14} />
          <span>Design Team</span><ChevronRight aria-hidden="true" size={14} />
          <strong>Launch Assets</strong>
        </div>
        <div className={styles.destinationReady}><Check aria-hidden="true" size={16} />Destination ready for upload</div>
      </div>
    )
  }

  return (
    <div className={styles.downloadVisual} aria-label="Example download history and reports">
      <div className={styles.visualTitle}><CloudDownload aria-hidden="true" size={16} />Downloads & History <span>Today</span></div>
      <div className={styles.downloadSummary}>
        <History aria-hidden="true" size={23} />
        <div><strong>12 transfers completed</strong><span>4.7 GB transferred successfully</span></div>
      </div>
      <div className={styles.reportGrid}>
        <span><b>CSV</b><small>Spreadsheet-ready</small></span>
        <span><b>JSON</b><small>Structured record</small></span>
        <span><b>TXT</b><small>Plain summary</small></span>
      </div>
    </div>
  )
}

export function FeatureExplorer() {
  const hash = useSyncExternalStore(subscribeToHash, getHashSnapshot, () => "")
  const activeId = validIds.has(hash as ExplorerId) ? hash as ExplorerId : "upload-engine"

  const active = featureExplorerItems.find((item) => item.id === activeId) ?? featureExplorerItems[0]

  function selectFeature(id: ExplorerId) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`)
    window.dispatchEvent(new Event("drivedock:hashchange"))
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.explorerTabs} role="tablist" aria-label="Feature groups">
        {featureExplorerItems.map((item, index) => (
          <button
            aria-controls="feature-explorer-panel"
            aria-selected={activeId === item.id}
            className={activeId === item.id ? styles.explorerTabActive : undefined}
            id={`feature-tab-${item.id}`}
            key={item.id}
            onClick={() => selectFeature(item.id)}
            role="tab"
            tabIndex={activeId === item.id ? 0 : -1}
            type="button"
            onKeyDown={(event) => {
              if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowLeft" && event.key !== "ArrowRight") return
              event.preventDefault()
              const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1
              const next = featureExplorerItems[(index + direction + featureExplorerItems.length) % featureExplorerItems.length]
              selectFeature(next.id)
              document.getElementById(`feature-tab-${next.id}`)?.focus()
            }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.label}
            <ChevronRight aria-hidden="true" size={17} />
          </button>
        ))}
      </div>

      <section
        aria-labelledby={`feature-tab-${active.id}`}
        className={styles.explorerPanel}
        id="feature-explorer-panel"
        key={active.id}
        role="tabpanel"
      >
        <div className={styles.explorerCopy}>
          <p>{active.label}</p>
          <h3>{active.title}</h3>
          <div>{active.description}</div>
          <ul>
            {active.points.map((point) => <li key={point}><Check aria-hidden="true" size={16} />{point}</li>)}
          </ul>
        </div>
        <ExplorerVisual id={active.id} />
      </section>
    </div>
  )
}
