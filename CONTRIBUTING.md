# Contributing to DriveDock Landing

Thank you for helping improve the DriveDock website.

## Before You Start

- Use Node.js 20 or later and npm 10 or later.
- Read `AGENTS.md` before changing Next.js code.
- Keep product claims aligned with the public [DriveDock app repository](https://github.com/sayuru-akash/drivedock).
- Report sensitive security issues through the process in [SECURITY.md](./SECURITY.md).

## Setup

```bash
git clone https://github.com/sayuru-akash/drivedock-landing.git
cd drivedock-landing
npm install
npm run dev
```

No environment variables are required.

## Project Conventions

- Use TypeScript and preserve strict type checking.
- Use Server Components unless a feature requires browser state or event handlers.
- Reuse `components/home/site-chrome.tsx` for shared navigation and footer changes.
- Keep shared product copy and external URLs in `components/home/home-data.ts`.
- Use the existing CSS Modules and responsive breakpoints instead of introducing another styling system.
- Keep essential content visible on first paint. Use motion for feedback and microinteractions, not to hide important copy or actions.
- Preserve visible focus indicators and `prefers-reduced-motion` behavior.
- Use semantic links for navigation and buttons for actions.

## Required Checks

```bash
npm run lint
npm test
npm run build
npm audit
```

For UI changes, also inspect the homepage, Privacy page, and an unmatched URL at 320, 390, 768, and 1440 pixels. Check for horizontal overflow, clipped text, focus visibility, mobile-menu behavior, and reduced motion.

## Pull Requests

Describe what changed, why it changed, which routes are affected, and how you verified it. Include screenshots for visual changes.

Contributions are licensed under the repository's MIT License.
