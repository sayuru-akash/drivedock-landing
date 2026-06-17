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

The site is a **static-first, performance-obsessed** Next.js 16 application built with the App Router, React Server Components, and a custom Tailwind v4 design system.

---

## Highlights

- **Modern stack** — Next.js 16, React 19, TypeScript 5, Tailwind v4 (CSS-first config)
- **Performance** — RSC by default, code-split by route, optimized fonts, no client JS for static content
- **Accessibility** — WCAG 2.2 AA, semantic HTML, skip link, focus rings, reduced motion
- **SEO** — Comprehensive JSON-LD structured data (Organization, WebSite, SoftwareApplication, FAQPage), OG, Twitter Cards, sitemap, robots.txt
- **PWA-ready** — Web app manifest, apple-touch-icon, theme color
- **Design system** — Token-based theming with `@theme`, semantic color classes, custom CSS utilities (`.glass-card`, `.gradient-text-blue`, etc.)
- **Animation** — Framer Motion with `prefers-reduced-motion` respect, transform-only transitions
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
│   ├── layout/
│   │   ├── navbar.tsx           # Sticky nav with mobile menu
│   │   └── footer.tsx           # Site footer
│   ├── sections/
│   │   ├── hero.tsx             # Hero with app mockup
│   │   ├── features.tsx         # 8-feature grid
│   │   ├── privacy-highlight.tsx
│   │   ├── social-proof.tsx
│   │   ├── technical.tsx
│   │   ├── faq.tsx              # FAQ accordion
│   │   └── download.tsx
│   ├── ui/
│   │   ├── button.tsx           # Polymorphic button/link
│   │   ├── card.tsx
│   │   ├── container.tsx        # Responsive container
│   │   └── motion.tsx           # FadeIn, StaggerContainer, etc.
│   └── providers.tsx            # ThemeProvider
├── content/
│   └── landing.ts               # Centralized content
├── lib/
│   └── utils.ts                 # cn() helper
├── public/                      # Static assets
│   ├── icon.svg
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── favicon.ico
│   └── site.webmanifest
├── types/
│   └── content.ts               # Content type definitions
├── next.config.ts
├── tailwind v4 (via @import)
└── tsconfig.json
```

---

## Design System

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

Use them as: `bg-bg-base`, `text-accent`, `border-green-border`, etc.

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
