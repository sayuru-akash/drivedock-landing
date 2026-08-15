export type FaqCategoryId = "general" | "uploads" | "downloads" | "accounts" | "technical"

export type FaqItem = {
  id: string
  question: string
  answer: string
  category: FaqCategoryId
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General" },
  { id: "uploads", label: "Uploads" },
  { id: "downloads", label: "Downloads" },
  { id: "accounts", label: "Accounts & Security" },
  { id: "technical", label: "Technical" },
] as const

export const allFaqs: FaqItem[] = [
  {
    id: "different-from-drive-desktop",
    category: "general",
    question: "What makes DriveDock different from Google Drive for desktop?",
    answer:
      "DriveDock is a focused transfer utility, not a background sync client. You choose exactly what to upload or download, where it should go, and which Google account to use, without creating a local sync folder.",
  },
  {
    id: "does-it-sync",
    category: "general",
    question: "Does DriveDock sync files?",
    answer:
      "No. DriveDock does not continuously watch folders or mirror changes. It handles transfer jobs that you start and keeps a persistent queue so you can pause, resume, retry, and review them.",
  },
  {
    id: "shared-drives",
    category: "general",
    question: "Can I use Shared Drives?",
    answer:
      "Yes. You can browse My Drive and Shared Drives, choose a destination folder, create a folder, and upload wherever the connected Google account has permission.",
  },
  {
    id: "free-open-source",
    category: "general",
    question: "Is DriveDock free and open source?",
    answer:
      "Yes. DriveDock is released under the MIT License. The source code, issue tracker, release history, and current downloads are public on GitHub.",
  },
  {
    id: "where-to-download",
    category: "general",
    question: "Where do I download DriveDock?",
    answer:
      "Use the latest GitHub Release. The release page provides the current DMG, zip archive, and SHA-256 checksums. The current build is unsigned or ad-hoc signed, so macOS may require Control-click, then Open, on first launch.",
  },
  {
    id: "interrupted-upload",
    category: "uploads",
    question: "What happens if my internet connection drops?",
    answer:
      "DriveDock retries eligible transfers with exponential backoff and jitter. Large files use Google Drive's resumable upload protocol, so an interrupted upload can continue instead of starting over.",
  },
  {
    id: "mac-sleep",
    category: "uploads",
    question: "What happens when my Mac sleeps?",
    answer:
      "The queue pauses safely when the Mac sleeps and resumes when the Mac wakes and the network is available. Persistent queue state also allows eligible work to continue after the app restarts.",
  },
  {
    id: "large-files",
    category: "uploads",
    question: "Can DriveDock upload large files?",
    answer:
      "Yes. Large files use resumable sessions and are sent in 8 MB chunks. DriveDock shows per-file progress, transfer speed, estimated time remaining, and status while the upload runs.",
  },
  {
    id: "pause-resume",
    category: "uploads",
    question: "Can I pause or resume uploads?",
    answer:
      "Yes. You can pause, resume, cancel, retry, reorder, and prioritize queued work. Controls are available for individual items and for the queue as a whole.",
  },
  {
    id: "duplicate-files",
    category: "uploads",
    question: "How are duplicate files handled?",
    answer:
      "Choose the policy that fits the job: keep both, automatically rename the new item, skip it, or replace the existing Drive item. DriveDock can apply the selected policy across the batch.",
  },
  {
    id: "folder-structure",
    category: "uploads",
    question: "Does DriveDock preserve folder structure?",
    answer:
      "Yes. DriveDock scans the selected folder, prepares matching folders in Google Drive, and uploads nested files without flattening the hierarchy. Folder preparation can continue in the background.",
  },
  {
    id: "bandwidth-concurrency",
    category: "uploads",
    question: "Can I control bandwidth and parallel uploads?",
    answer:
      "Yes. DriveDock supports upload bandwidth limits and adjustable concurrency. Its adaptive mode can respond to network quality, errors, battery state, and Google Drive rate limits.",
  },
  {
    id: "downloads",
    category: "downloads",
    question: "Can DriveDock download files from Google Drive?",
    answer:
      "Yes. Use the Drive browser to select files and start parallel downloads. Download jobs use the same persistent queue model so their state survives an app restart.",
  },
  {
    id: "history-reports",
    category: "downloads",
    question: "Where can I review completed transfers?",
    answer:
      "DriveDock keeps local transfer history and completion summaries. You can review completed work and export reports in CSV, JSON, or plain-text format.",
  },
  {
    id: "multiple-accounts",
    category: "accounts",
    question: "Can I connect multiple Google accounts?",
    answer:
      "Yes. Connect multiple accounts, choose the account for each transfer batch, and switch accounts without removing the others. Queued items remain associated with the account you selected.",
  },
  {
    id: "credentials-storage",
    category: "accounts",
    question: "Where are my Google credentials stored?",
    answer:
      "OAuth access and refresh tokens are stored in macOS Keychain. They are not written to a plain settings file, stored by this website, or sent to the developer.",
  },
  {
    id: "drive-permissions",
    category: "accounts",
    question: "Which Google Drive permissions are required?",
    answer:
      "DriveDock uses drive.file to create and upload files. It uses drive.readonly to browse existing Drive items, My Drive folders, and Shared Drives when you choose a destination.",
  },
  {
    id: "local-app-lock",
    category: "accounts",
    question: "Can I protect access to the app?",
    answer:
      "Yes. DriveDock can use macOS authentication, including Touch ID or Apple Watch approval when available, to protect sensitive app access on your Mac.",
  },
  {
    id: "macos-requirement",
    category: "technical",
    question: "Which Macs can run DriveDock?",
    answer:
      "DriveDock requires macOS 14 Sonoma or later. It is a native Swift and SwiftUI app built for macOS rather than a browser wrapper.",
  },
  {
    id: "offline-use",
    category: "technical",
    question: "Does DriveDock work offline?",
    answer:
      "You need an internet connection to authenticate, browse Google Drive, upload, or download. The local queue remains available offline and can continue eligible work when connectivity returns.",
  },
  {
    id: "data-collection",
    category: "technical",
    question: "Does DriveDock collect analytics or usage data?",
    answer:
      "No. DriveDock includes no analytics SDK, advertising, anonymous usage tracking, or third-party crash reporting. File transfers go directly from your Mac to Google Drive APIs.",
  },
  {
    id: "report-an-issue",
    category: "technical",
    question: "How do I report a bug or request a feature?",
    answer:
      "Open a GitHub Issue with the steps to reproduce the problem, the result you expected, and your macOS version. Check existing issues first to avoid duplicates.",
  },
  {
    id: "report-security-issue",
    category: "technical",
    question: "How do I report a security issue?",
    answer:
      "Use the repository Security tab to report a vulnerability privately. Do not post sensitive security details in a public GitHub Issue.",
  },
]

const homepageFaqIds = [
  "different-from-drive-desktop",
  "free-open-source",
  "interrupted-upload",
  "large-files",
  "macos-requirement",
  "drive-permissions",
  "report-security-issue",
  "data-collection",
]

export const homepageFaqs = homepageFaqIds.map((id) => {
  const faq = allFaqs.find((item) => item.id === id)
  if (!faq) throw new Error(`Missing homepage FAQ: ${id}`)
  return faq
})

export const featureExplorerItems = [
  {
    id: "upload-engine",
    label: "Upload Engine",
    title: "Fast when the network is ready. Patient when it is not.",
    description:
      "Parallel transfers, resumable sessions, and adaptive concurrency keep batches moving without treating every connection the same.",
    points: ["8 MB resumable chunks", "Adaptive parallel transfers", "Upload bandwidth limits"],
  },
  {
    id: "queue-control",
    label: "Queue Control",
    title: "A queue you can actually direct.",
    description:
      "Pause, resume, cancel, retry, reorder, and prioritize individual items. Queue state persists across app restarts and network changes.",
    points: ["Per-item controls", "Retry with backoff and jitter", "Sleep, wake, and restart recovery"],
  },
  {
    id: "accounts-drives",
    label: "Accounts & Drives",
    title: "Send each batch to the right place.",
    description:
      "Keep multiple Google accounts connected, pick one per batch, and browse both My Drive and Shared Drives before a transfer begins.",
    points: ["Multiple Google accounts", "My Drive and Shared Drives", "Destination folder creation"],
  },
  {
    id: "downloads-records",
    label: "Downloads & Records",
    title: "Transfers do not disappear when they finish.",
    description:
      "Run parallel downloads, review local transfer history, open completed destinations, and export summaries for your own records.",
    points: ["Persistent download queue", "Completion history", "CSV, JSON, and text reports"],
  },
] as const
