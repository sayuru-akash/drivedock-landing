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

export { homepageFaqs as faqs } from "../product/product-data"
