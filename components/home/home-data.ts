export const githubUrl = "https://github.com/sayuru-akash/drivedock"
export const releasesUrl = `${githubUrl}/releases`
export const latestReleaseUrl = `${releasesUrl}/latest`
export const issuesUrl = `${githubUrl}/issues`
export const developer = {
  name: "Sayuru Akash Amarasinghe",
  website: "https://sayuru.dev",
} as const

export const socialLinks = [
  { label: "Developer website", href: developer.website, icon: "website" },
  { label: "GitHub", href: "https://github.com/sayuru-akash", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sayuruakash", icon: "linkedin" },
  { label: "X", href: "https://twitter.com/sayuru_akash", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/sayuru_akash", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/sayuru.me", icon: "facebook" },
] as const

export const workflowSteps = [
  {
    number: "01.",
    title: "Select Files",
    description: "Choose files or folders in DriveDock, paste them from the clipboard, or start from Finder.",
  },
  {
    number: "02.",
    title: "Drag & Drop",
    description: "Drop items on the main window, menu bar helper, or Dock icon, then choose the account and destination.",
  },
  {
    number: "03.",
    title: "Uploading",
    description: "Track per-file progress, speed, ETA, and status while DriveDock processes the queue.",
  },
  {
    number: "04.",
    title: "All Done",
    description: "Review the completion summary and open the uploaded files or destination folder in Drive.",
  },
] as const

export const privacyPoints = [
  {
    title: "Tokens stay in the Keychain",
    description: "OAuth access and refresh tokens are stored in macOS Keychain, not plain files.",
  },
  {
    title: "No analytics, anywhere",
    description: "No tracking, analytics, or third-party crash reporting.",
  },
  {
    title: "Limited Drive permissions",
    description: "drive.file handles uploads; drive.readonly enables Drive browsing and destination selection.",
  },
  {
    title: "Open source",
    description: "The source, release history, and security policy are public on GitHub.",
  },
] as const

export const productHighlights = [
  {
    category: "Reliability",
    title: "Resumable large uploads",
    description:
      "Large files use Google Drive's resumable upload protocol in 8 MB chunks. Interrupted sessions can continue after network loss, sleep, or an app restart.",
  },
  {
    category: "Folders",
    title: "Folder structure preservation",
    description:
      "DriveDock scans a selected folder, creates its destination folders in Drive, and uploads nested files without flattening the hierarchy.",
  },
  {
    category: "Performance",
    title: "Adaptive parallel uploads",
    description:
      "Multiple files upload together. Concurrency adjusts for network quality, errors, battery state, and Google Drive rate limits.",
  },
  {
    category: "Accounts",
    title: "Multiple Google accounts",
    description:
      "Connect more than one Google account, choose the account for each upload batch, and keep queued items tied to their selected account.",
  },
  {
    category: "Destinations",
    title: "Shared Drive support",
    description:
      "Browse My Drive and Shared Drives, choose a destination folder, create folders, and upload where the connected account has permission.",
  },
  {
    category: "Privacy",
    title: "Local-first account storage",
    description:
      "OAuth tokens stay in macOS Keychain. The app includes no analytics or tracking and sends file data directly to Google Drive APIs.",
  },
] as const

export const faqs = [
  {
    question: "What does DriveDock actually do?",
    answer:
      "It uploads files and folders from your Mac to Google Drive. Drop files on the app, menu bar icon, or Dock and DriveDock handles parallel uploads while preserving your folder structure.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. DriveDock is released under the MIT License. The source code and current release downloads are available from the public GitHub repository.",
  },
  {
    question: "Does DriveDock replace Google Drive for desktop?",
    answer:
      "No. DriveDock is an upload utility, not a two-way sync client. It is designed for sending selected files and folders to Drive without creating a local sync folder.",
  },
  {
    question: "What happens if an upload is interrupted?",
    answer:
      "Large files use Google Drive's resumable upload protocol. DriveDock can continue eligible transfers after a connection loss, Mac sleep, or an app restart.",
  },
  {
    question: "Which Macs can run DriveDock?",
    answer:
      "DriveDock requires macOS 14 Sonoma or later. Current downloads are provided as a DMG and zip archive on GitHub Releases.",
  },
  {
    question: "Which Google Drive permissions are required?",
    answer:
      "DriveDock uses drive.file to create and upload files, plus drive.readonly to browse existing Drive items and choose a destination. OAuth credentials stay in macOS Keychain.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Use the repository Security tab to report a vulnerability privately. Use GitHub Issues for non-sensitive bugs and feature requests.",
  },
  {
    question: "Do you collect any data at all?",
    answer:
      "No. There is no analytics SDK, third-party crash reporting, or anonymous usage tracking in DriveDock.",
  },
] as const
