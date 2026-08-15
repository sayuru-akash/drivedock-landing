export const githubUrl = "https://github.com/sayuru-akash/drivedock"
export const releasesUrl = `${githubUrl}/releases`
export const issuesUrl = `${githubUrl}/issues`

export const workflowSteps = [
  {
    number: "01.",
    title: "Select Files",
    description: "Choose the files or folders you want to upload. Drag them straight from Finder.",
  },
  {
    number: "02.",
    title: "Drag & Drop",
    description: "Drop your files into DriveDock. No browser tabs or extra steps required.",
  },
  {
    number: "03.",
    title: "Uploading",
    description: "Track every upload with live progress. DriveDock handles everything in the background.",
  },
  {
    number: "04.",
    title: "All Done",
    description: "Your files are safely in Google Drive, ready to access from anywhere.",
  },
] as const

export const privacyPoints = [
  {
    title: "Tokens stay in the Keychain",
    description: "Your Google account stays safe in the macOS Keychain.",
  },
  {
    title: "No analytics, anywhere",
    description: "No tracking, analytics, or third-party crash reporting.",
  },
  {
    title: "Only the drive.file scope",
    description: "Your existing Drive files stay private.",
  },
  {
    title: "Existing files stay private",
    description: "The code is open source. You can view it on GitHub anytime.",
  },
] as const

export const testimonials = [
  {
    quote:
      "The menu bar helper is the part I didn't know I wanted. I just drag a screenshot onto the icon and it shows up in Drive. No app to switch to, no windows to manage.",
    author: "Dani Rivera",
    role: "Design Lead",
  },
  {
    quote:
      "I push a 4GB project archive to Drive every night. With DriveDock it takes about 20 minutes and it survives my flaky home WiFi. The web client gave up after three tries.",
    author: "Priya Patel",
    role: "Indie Game Developer",
  },
  {
    quote:
      "I switched from the web uploader and never went back. Drop the folder, walk away, come back to a finished upload. The folder structure actually matches what I dragged in, which is more than I expected.",
    author: "Marcus Chen",
    role: "Backend Engineer",
  },
  {
    quote:
      "I read the source before I installed it. drive.file scope, Keychain for tokens, no analytics calls anywhere. It does what the privacy page says it does.",
    author: "Theo Morgan",
    role: "Security Engineer",
  },
  {
    quote:
      "I set it going before lunch and came back to everything exactly where it should be. The progress view is simple and the uploads are reliable.",
    author: "Maya Singh",
    role: "Product Designer",
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
      "Yes. The whole app is MIT licensed. No paid tier, no Pro plan, no upsell. If you want to pay, you can buy us a coffee via the GitHub Sponsors link, but the app is the same for everyone.",
  },
  {
    question: "How do I report a security issue?",
    answer:
      "Open a private security advisory on GitHub so the issue can be reviewed responsibly before any public disclosure.",
  },
  {
    question: "Do you collect any data at all?",
    answer:
      "No. There is no analytics SDK, third-party crash reporting, or anonymous usage tracking in DriveDock.",
  },
] as const

