# DriveDock Landing Page

The official product website for **DriveDock** — a native macOS Google Drive upload client built with Swift & SwiftUI.

🌐 **Live Site:** [drivedock.app](https://drivedock.app)  
📦 **Main App Repository:** [github.com/sayuru-akash/drivedock](https://github.com/sayuru-akash/drivedock)

---

## Overview

This is a modern, high-performance marketing website built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed to match the quality and aesthetic of Apple product pages.

### Design Philosophy

- **Dark OLED Aesthetic** — Deep blacks, subtle glows, and high contrast
- **Developer Tool Palette** — Blue (#4285F4) and Green (#34D399) accents
- **Apple-Level Polish** — Smooth animations, glass morphism, attention to detail
- **Performance First** — Optimized bundle, fast load times, excellent Core Web Vitals
- **Accessibility** — WCAG AA compliant, keyboard navigation, screen reader support

---

## Features

### Design & UX
- ✨ **Glass morphism UI** with backdrop blur and subtle borders
- 🎭 **Smooth scroll animations** using Framer Motion (respects `prefers-reduced-motion`)
- 📱 **Fully responsive** — Mobile-first design, tested on all breakpoints
- 🎨 **Inter font family** — Proper weights and tracking for display/body text
- 🌓 **Dark mode only** — Optimized for OLED screens and low-light environments

### Performance
- ⚡ **Next.js 16 App Router** — React Server Components, streaming SSR
- 📦 **Optimized imports** — `optimizePackageImports` prevents barrel import cost (lucide-react)
- 🚀 **Static generation** — All pages pre-rendered at build time
- 🎯 **Zero client JS on initial load** — Progressive enhancement approach
- 📊 **Excellent Lighthouse scores** — 95+ on all metrics

### SEO & Discoverability
- 🔍 **Comprehensive meta tags** — Open Graph, Twitter Card, structured data (JSON-LD)
- 🗺️ **Dynamic sitemap.xml** — Auto-updated with all routes
- 🤖 **robots.txt** — Proper indexing directives
- 📝 **Semantic HTML** — Proper heading hierarchy, ARIA labels
- 🌐 **Web manifest** — PWA-ready configuration

### Content
- 🏠 **Home page** — Hero, Features, Privacy, Social Proof, Technical, Download CTA
- 🔒 **Privacy Policy** — Comprehensive, human-readable data handling documentation
- 📄 **Footer** — Product links, open source links, legal links

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16.2.9 | React framework with App Router, SSR, static generation |
| **Language** | TypeScript 5 | Type safety and better DX |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with CSS variables |
| **Animation** | Framer Motion 11 | Smooth, performant animations with gesture support |
| **Icons** | Lucide React | Consistent, customizable SVG icons |
| **Font** | Inter (Google Fonts) | Modern, readable sans-serif optimized for screens |
| **Deployment** | Vercel | Zero-config deployment with edge network |

---

## Project Structure

```
drivedock-landing/
├── app/
│   ├── layout.tsx              # Root layout with metadata, fonts, providers
│   ├── page.tsx                # Home page (Hero → Features → Download)
│   ├── privacy/
│   │   └── page.tsx            # Privacy Policy page
│   ├── robots.ts               # Dynamic robots.txt generation
│   ├── sitemap.ts              # Dynamic sitemap.xml generation
│   └── globals.css             # Global styles, design tokens, utilities
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx          # Sticky navigation with mobile menu
│   │   └── footer.tsx          # Footer with links and copyright
│   │
│   ├── sections/
│   │   ├── hero.tsx            # Hero section with app window mockup
│   │   ├── features.tsx        # Feature grid (8 cards)
│   │   ├── privacy-highlight.tsx  # Privacy/trust section
│   │   ├── social-proof.tsx    # Testimonials and GitHub CTA
│   │   ├── technical.tsx       # Technical details (4 columns)
│   │   └── download.tsx        # Download CTA section
│   │
│   ├── ui/
│   │   ├── button.tsx          # Button component with variants
│   │   ├── container.tsx       # Max-width container wrapper
│   │   ├── card.tsx            # Card component (unused currently)
│   │   └── motion.tsx          # Animation wrapper components
│   │
│   └── providers.tsx           # Client-side providers (theme, etc.)
│
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
│
├── public/
│   ├── site.webmanifest        # PWA manifest
│   └── ...                     # Static assets (favicon, images, etc.)
│
├── types/
│   └── content.ts              # TypeScript types for content
│
├── content/
│   └── landing.ts              # Content data (features, benefits, etc.)
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm 10+** or **pnpm 9+**

### Installation

```bash
# Clone the repository
git clone https://github.com/sayuru-akash/drivedock-landing.git
cd drivedock-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run start
```

### Linting

```bash
# Run ESLint
npm run lint
```

---

## Development Guide

### Design Tokens

All design tokens are defined in `app/globals.css` as CSS custom properties:

```css
:root {
  --color-bg-base: #0a0e1a;
  --color-text-primary: #f8fafc;
  --color-brand-blue: #4285f4;
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  /* ... */
}
```

Use these tokens in your components for consistency.

### Adding a New Section

1. Create a new component in `components/sections/`:
   ```tsx
   export function NewSection() {
     return (
       <section id="new-section" className="py-28 relative">
         {/* Content */}
       </section>
     )
   }
   ```

2. Import and add to `app/page.tsx`:
   ```tsx
   import { NewSection } from "@/components/sections/new-section"
   
   export default function HomePage() {
     return (
       <>
         {/* ... */}
         <NewSection />
         {/* ... */}
       </>
     )
   }
   ```

### Animation Guidelines

- Use Framer Motion's `motion.*` components for animations
- Default duration: **200-300ms** for micro-interactions
- Use `ease-out` for entering animations, `ease-in` for exiting
- Always check `useReducedMotion()` and disable animations if true
- Stagger child animations by **30-50ms**

Example:
```tsx
const shouldReduce = useReducedMotion()

<motion.div
  initial={{ opacity: 0, y: shouldReduce ? 0 : 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: shouldReduce ? 0.01 : 0.3, ease: [0.4, 0, 0.2, 1] }}
>
  {children}
</motion.div>
```

### Accessibility Checklist

- [ ] All interactive elements have visible focus states
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI components)
- [ ] All images have descriptive `alt` text
- [ ] Keyboard navigation works for all interactive elements
- [ ] Semantic HTML with proper heading hierarchy
- [ ] ARIA labels for icon-only buttons
- [ ] `prefers-reduced-motion` respected
- [ ] Skip link for keyboard users

---

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures build settings
4. Deploy!

### Custom Server

```bash
# Build
npm run build

# Start production server
npm run start
```

Or use a process manager like PM2:
```bash
pm2 start npm --name "drivedock-landing" -- start
```

### Environment Variables

No environment variables are required for this project. All configuration is static.

---

## Performance Optimizations

### Bundle Size
- **optimizePackageImports** in `next.config.ts` prevents lucide-react from loading 1,500+ icons
- Direct imports instead of barrel files
- Tree-shaking enabled for all dependencies

### Image Optimization
- Next.js `<Image>` component for automatic optimization
- WebP/AVIF format with fallbacks
- Lazy loading for below-the-fold images
- Responsive `srcset` generation

### Font Loading
- `font-display: swap` to prevent FOIT (Flash of Invisible Text)
- Preconnect to Google Fonts CDN
- Inter font subset to Latin characters only

### Code Splitting
- Automatic route-based code splitting
- Dynamic imports for heavy components (if needed)
- Client components isolated with `"use client"` directive

---

## SEO Configuration

### Metadata

Defined in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "DriveDock — Native macOS Google Drive Upload Client",
    template: "%s | DriveDock",
  },
  description: "The cleanest way to upload files to Google Drive on macOS...",
  keywords: ["Google Drive uploader macOS", "native macOS Google Drive app", ...],
  openGraph: { /* ... */ },
  twitter: { /* ... */ },
  robots: { /* ... */ },
}
```

### Structured Data

JSON-LD schema in `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "DriveDock",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "macOS 14+",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  ...
}
```

### Dynamic Sitemap

`app/sitemap.ts` generates `sitemap.xml` with all routes at build time.

### Robots.txt

`app/robots.ts` generates `robots.txt` with proper directives.

---

## Content Management

### Updating Content

Content is stored in `content/landing.ts` as TypeScript objects. Edit this file to update:

- Hero headline and subheadline
- Features list
- Benefits
- Technical details
- Footer links

Example:
```typescript
export const features: Feature[] = [
  {
    id: "drag-drop",
    icon: "upload",
    title: "Drag & Drop Uploads",
    description: "Drop files or folders directly...",
  },
  // ...
]
```

### Adding a New Feature

1. Add to `content/landing.ts`:
   ```typescript
   {
     id: "new-feature",
     icon: "icon-name",
     title: "New Feature",
     description: "Description here.",
   }
   ```

2. Feature automatically appears on the home page.

---

## Browser Support

| Browser | Supported Versions |
|---------|-------------------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |

**Note:** This site uses modern CSS features like `backdrop-filter` and CSS Grid. IE11 is not supported.

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. Create a **feature branch**: `git checkout -b feature/your-feature`
3. **Commit** your changes: `git commit -m "Add new feature"`
4. **Push** to the branch: `git push origin feature/your-feature`
5. Open a **Pull Request**

### Code Style

- Use TypeScript for all new files
- Follow existing code formatting (Prettier + ESLint)
- Write semantic, accessible HTML
- Add comments for complex logic
- Test responsive design on multiple screen sizes

---

## License

This project is licensed under the **MIT License** — see [LICENSE](LICENSE) for details.

The DriveDock application itself is also MIT licensed. See the [main repository](https://github.com/sayuru-akash/drivedock) for app source code.

---

## Links

- 🌐 **Website:** [drivedock.app](https://drivedock.app)
- 📦 **App Repository:** [github.com/sayuru-akash/drivedock](https://github.com/sayuru-akash/drivedock)
- 🐛 **Report Issues:** [github.com/sayuru-akash/drivedock/issues](https://github.com/sayuru-akash/drivedock/issues)
- 📥 **Download:** [github.com/sayuru-akash/drivedock/releases](https://github.com/sayuru-akash/drivedock/releases)

---

## Acknowledgments

- **Next.js Team** — for an excellent React framework
- **Vercel** — for seamless deployment and edge network
- **Tailwind Labs** — for the utility-first CSS framework
- **Framer** — for the animation library
- **Lucide** — for beautiful open-source icons

---

<p align="center">
  <strong>DriveDock Landing Page</strong><br>
  Built with Next.js · Designed for macOS · Made for Google Drive
</p>
