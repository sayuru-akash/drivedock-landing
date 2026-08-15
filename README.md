<div align="center">

# DriveDock Landing

The marketing website for **DriveDock** — a native macOS app for uploading files to Google Drive with speed, clarity, and control.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[Live Site](https://drivedock.app) · [Report Bug](https://github.com/sayuru-akash/drivedock-landing/issues) · [App Repo](https://github.com/sayuru-akash/drivedock)

</div>

---

## What is this?

This is the official marketing website for [DriveDock](https://github.com/sayuru-akash/drivedock) — a native macOS Google Drive upload client built with Swift and SwiftUI. The landing page showcases features, privacy guarantees, technical architecture, and a download CTA.

The site is a **static-first, performance-focused** Next.js 16 application built with the App Router, React Server Components, a route-scoped homepage design system, and Tailwind v4 utilities for the remaining routes.

---

## Highlights

- **Modern stack** — Next.js 16, React 19, TypeScript 5, Tailwind v4 (CSS-first config)
- **Performance** — RSC by default, code-split by route, optimized fonts, and native HTML interactions on the homepage
- **Accessibility** — WCAG 2.2 AA, semantic HTML, skip link, focus rings, reduced motion
- **SEO** — Comprehensive JSON-LD structured data (Organization, WebSite, SoftwareApplication, FAQPage), OG, Twitter Cards, sitemap, robots.txt
- **PWA-ready** — Web app manifest, apple-touch-icon, theme color
- **Design system** — A Figma-matched CSS Module for the homepage plus shared Tailwind tokens for the remaining routes
- **Responsive** — Purpose-built desktop, tablet, and mobile layouts with reduced-motion support
- **Zero analytics** — No tracking, no telemetry, fully privacy-respecting (matching the app's promise)

---

## Quick Start

```bash
# Install
npm install

# Develop
npm run dev          # → http://localhost:3000

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Requires **Node.js 20+** and **npm 10+**.

---

## Project Structure

```
drivedock-landing/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout, metadata, structured data
│   ├── page.tsx                 # Home page composition
│   ├── globals.css              # Design system + base styles
│   ├── not-found.tsx            # 404 page
│   ├── error.tsx                # Error boundary
│   ├── loading.tsx              # Loading state
│   ├── opengraph-image.tsx      # Dynamic OG image
│   ├── robots.ts                # robots.txt
│   ├── sitemap.ts               # sitemap.xml
│   └── privacy/                 # Privacy policy
│       └── page.tsx
├── components/
│   ├── home/
│   │   ├── home-page.tsx        # Server-rendered homepage composition
│   │   ├── home-data.ts         # Homepage content and external URLs
│   │   └── home.module.css      # Route-scoped responsive design system
│   ├── layout/
│   │   ├── navbar.tsx           # Shared navigation for secondary routes
│   │   └── footer.tsx           # Shared footer for secondary routes
│   ├── ui/
│   │   ├── button.tsx           # Polymorphic button/link
│   │   ├── container.tsx        # Responsive container
│   │   └── ...
├── lib/
│   └── utils.ts                 # cn() helper
├── public/                      # Static assets
│   ├── icon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   └── site.webmanifest
├── next.config.ts
├── tailwind v4 (via @import)
└── tsconfig.json
```

---

## Design System

The homepage styles are intentionally isolated in `components/home/home.module.css`. This keeps the new light visual system from changing the privacy page while that route awaits its own redesign. Homepage tokens cover its palette, spacing, typography, surfaces, responsive behavior, and reduced-motion rules.

The remaining routes continue to use the shared Tailwind tokens in `app/globals.css`:

Colors, spacing, and typography are defined as **CSS custom properties** in `app/globals.css` under `@theme`. This makes them available as Tailwind utility classes:

```css
@theme {
  --color-bg-base: #0B0F1A;
  --color-accent: #4285F4;
  --color-green: #10B981;
  --color-fg-primary: #FAFBFC;
  /* ... */
}
```

Use shared tokens as `bg-bg-base`, `text-accent`, `border-green-border`, etc. Do not use those dark-route tokens inside the homepage unless the homepage design system explicitly maps them.

Custom CSS utilities:
- `.glass-card` — Frosted glass card
- `.glass-panel` — Solid frosted panel
- `.gradient-text` — White-to-slate text gradient
- `.gradient-text-blue` — White-to-blue text gradient
- `.gradient-text-green` — White-to-green text gradient
- `.grid-bg` — Subtle grid background with mask
- `.focus-ring` — Accessible focus indicator
- `.skip-link` — Skip-to-content link

---

## SEO

This site ships with comprehensive SEO:

- **Metadata** — Title, description, keywords, authors, canonical
- **Open Graph** — Type, locale, site name, images (dynamically generated)
- **Twitter Cards** — summary_large_image with creator
- **JSON-LD** — Organization, WebSite, SoftwareApplication, FAQPage
- **Sitemap** — `app/sitemap.ts` generates `/sitemap.xml`
- **Robots** — `app/robots.ts` generates `/robots.txt`
- **OG Image** — `app/opengraph-image.tsx` generates 1200×630 PNG

Test it with:
- [Google Rich Results](https://search.google.com/test/rich-results)
- [OpenGraph.xyz](https://www.opengraph.xyz/)

---

## Accessibility

- Semantic HTML (h1-h6 hierarchy, nav, main, footer, article)
- Skip link to `#main-content`
- Visible focus rings (3px outline + glow)
- `prefers-reduced-motion` disables all animations
- Color contrast meets WCAG 2.2 AA (AAA for body text)
- ARIA labels for icon-only buttons
- Keyboard navigation for all interactive elements
- Mobile menu with `aria-expanded` and `aria-controls`

---

## Deployment

### Vercel (recommended)

```bash
vercel
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new).

### Static Export

```bash
# Add to next.config.ts: output: 'export'
npm run build
# Deploy the `out/` directory to any static host
```

### Other Platforms

- **Netlify** — build: `npm run build`, publish: `.next`
- **Cloudflare Pages** — same as Netlify
- **GitHub Pages** — use static export

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup, conventions, and the PR process.

## Security

See [SECURITY.md](./SECURITY.md) for how to report vulnerabilities.

## License

[MIT](./LICENSE) © 2024-2026 DriveDock Contributors

---

## Related

- **DriveDock app**: [github.com/sayuru-akash/drivedock](https://github.com/sayuru-akash/drivedock)
- **Releases**: [github.com/sayuru-akash/drivedock/releases](https://github.com/sayuru-akash/drivedock/releases)
- **Issues**: [github.com/sayuru-akash/drivedock/issues](https://github.com/sayuru-akash/drivedock/issues)

---

<div align="center">

Made with care by the DriveDock team.

</div>
