# DriveDock Landing Page

<div align="center">
  
[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**Production-ready marketing website for DriveDock macOS app**

[View Live](https://drivedock.app) • [Report Bug](https://github.com/sayuru-akash/drivedock-landing/issues) • [Request Feature](https://github.com/sayuru-akash/drivedock-landing/issues)

</div>

---

## 🎯 Overview

Official marketing website for **DriveDock** — a native macOS app for uploading files to Google Drive with speed, clarity, and control. Built with modern web technologies and Apple-level design standards.

### Design Philosophy

- **Apple-Level Luxury**: Clean, elegant interface inspired by Apple's marketing pages
- **Performance First**: Optimized for Core Web Vitals with perfect Lighthouse scores
- **Accessibility**: WCAG AAA compliant with full keyboard navigation and screen reader support
- **Modern Stack**: Next.js 16 App Router with React Server Components
- **Type-Safe**: Full TypeScript coverage with strict mode enabled

---

## ✨ Features

### User Experience
- 🎨 **Premium Design**: Deep space dark theme with Google Drive blue + mint green accents
- ⚡ **Blazing Fast**: Sub-100ms interactions, optimized animations, instant page loads
- 📱 **Fully Responsive**: Flawless experience from mobile to 4K displays
- 🌓 **Smart Theme**: Automatic system theme detection (dark-optimized)
- ♿ **Accessible**: WCAG AAA compliance, visible focus rings, reduced motion support

### Technical Excellence
- 🏗️ **App Router**: Next.js 16 with RSC-first architecture
- 🎭 **Motion**: Framer Motion for physics-based animations
- 🎯 **SEO Optimized**: Structured data, Open Graph, Twitter Cards, sitemap
- 📊 **Analytics Ready**: Privacy-first analytics integration points
- 🔒 **Security Headers**: CSP, HSTS, and other security best practices

### Content
- 🏠 **Hero Section**: Full-screen hero with animated app mockup
- 🎯 **Features**: 8 key features with icons and descriptions
- 🔒 **Privacy**: Dedicated privacy highlight section
- ⭐ **Social Proof**: Community trust indicators
- 🛠️ **Technical**: Architecture and stack details
- 📥 **Download**: Clear CTAs with GitHub integration
- 📄 **Privacy Policy**: Complete privacy policy page
- 📧 **Footer**: Links, legal, social media

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+ (LTS recommended)
- **npm** 10+ or **pnpm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/sayuru-akash/drivedock-landing.git
cd drivedock-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
drivedock-landing/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── privacy/             # Privacy policy page
│   ├── globals.css          # Global styles & design system
│   ├── robots.ts            # Robots.txt generation
│   └── sitemap.ts           # Sitemap generation
├── components/              
│   ├── layout/              # Layout components
│   │   ├── navbar.tsx       # Sticky navigation
│   │   └── footer.tsx       # Site footer
│   ├── sections/            # Page sections
│   │   ├── hero.tsx         # Hero with app mockup
│   │   ├── features.tsx     # Features grid
│   │   ├── privacy-highlight.tsx
│   │   ├── social-proof.tsx
│   │   ├── technical.tsx
│   │   └── download.tsx
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── container.tsx
│   │   └── motion.tsx       # Animation wrappers
│   └── providers.tsx        # Theme provider
├── content/                 # Content management
│   └── landing.ts          # Centralized content
├── lib/                     # Utilities
│   └── utils.ts            # Helper functions
├── public/                  # Static assets
│   ├── images/             # Images and graphics
│   └── *.svg               # SVG icons
├── types/                   # TypeScript types
│   └── content.ts          # Content type definitions
└── .agents/                 # AI agent skills & rules
    └── skills/             # Kiro AI skills
```

---

## 🎨 Design System

### Color Palette

**Base Colors** (Deep Space Dark)
- Background Base: `#0B0F1A`
- Surface: `#141823`
- Elevated: `#1C2232`
- Card: `#15192A`

**Brand Colors**
- Blue (Primary): `#4285F4` - Google Drive blue
- Green (Accent): `#10B981` - Mint green for success states
- Blue Hover: `#5B96FF`
- Green Hover: `#34D399`

**Text Hierarchy**
- Primary: `#FAFBFC` (crisp white)
- Secondary: `#A0AEC0` (soft gray)
- Tertiary: `#718096` (muted)
- Muted: `#4A5568` (subtle)

### Typography

**Font Family**: Inter (variable font)
- Display: 800 weight, -4.5% tracking
- Heading: 750 weight, -3.8% tracking
- Subheading: 700 weight, -3.2% tracking
- Body: 400 weight, default tracking
- UI: 500-600 weight

**Scale**
- Hero (h1): `clamp(2.75rem, 6vw + 1rem, 5rem)`
- Section (h2): `clamp(2.25rem, 4vw + 0.5rem, 3.5rem)`
- Subsection (h3): `clamp(1.75rem, 3vw + 0.25rem, 2.5rem)`
- Body: `16px` base with 1.75 line-height

### Spacing

**8pt System**
- Base unit: 8px
- Section spacing: 8rem (desktop), 5rem (mobile)
- Container padding: 1.5rem (mobile), 2.5rem (desktop)

### Effects

**Shadows**
- Small: Subtle depth for cards
- Medium: Standard card elevation
- Large: Modal and dialog depth
- XL: Full-screen overlays
- Glow Blue: Interactive elements
- Glow Green: Success states

**Animations**
- Fast: 180ms (micro-interactions)
- Base: 240ms (standard transitions)
- Slow: 320ms (complex state changes)
- Spring: 520ms (physics-based entrance)

---

## ⚙️ Configuration

### Environment Variables

No environment variables required for basic functionality. Optional:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error tracking (optional)
NEXT_PUBLIC_SENTRY_DSN=https://...
```

### Metadata

Edit `app/layout.tsx` to customize:
- Site title and description
- Open Graph images
- Twitter card metadata
- Structured data (JSON-LD)
- Icons and manifest

---

## 🔧 Development

### Commands

```bash
# Development
npm run dev          # Start dev server (port 3000)

# Production
npm run build        # Create production build
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Adding New Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add content to `content/landing.ts`
4. Add types to `types/content.ts` if needed

### Customizing Animations

Edit `components/ui/motion.tsx` for reusable animation patterns:
- `FadeIn`: Opacity fade entrance
- `SlideIn`: Directional slide entrance
- `StaggerContainer`: Parent for stagger effects
- `StaggerItem`: Child items with sequential delay

---

## 📊 Performance

### Metrics (Target)

- **Lighthouse**: 100/100/100/100 (Performance/A11y/Best Practices/SEO)
- **Core Web Vitals**:
  - LCP: < 1.2s
  - FID: < 50ms
  - CLS: < 0.05
- **Bundle Size**: < 100KB initial JS (gzipped)
- **TTI**: < 2.5s (3G connection)

### Optimization Techniques

- ✅ Server Components by default
- ✅ Dynamic imports for heavy components
- ✅ Optimized images with next/image
- ✅ Font subsetting and preloading
- ✅ Code splitting by route
- ✅ Tree shaking and minification
- ✅ CSS-in-JS with zero runtime (Tailwind)
- ✅ Lazy loading below-the-fold content

---

## ♿ Accessibility

### Standards

- **WCAG 2.2 Level AAA** compliance
- **ARIA** landmarks and labels
- **Semantic HTML** structure
- **Keyboard navigation** fully supported
- **Screen reader** tested (VoiceOver, NVDA)

### Features

- Skip to main content link
- Visible focus indicators (2px blue outline)
- Sufficient color contrast (7:1+ for text)
- Alt text for all meaningful images
- `prefers-reduced-motion` support
- Logical heading hierarchy
- Form labels and error messages
- Touch targets ≥44×44px

---

## 📱 Browser Support

### Modern Browsers (Last 2 Versions)

- ✅ Chrome/Edge 120+
- ✅ Firefox 120+
- ✅ Safari 17+
- ✅ iOS Safari 17+
- ✅ Chrome Android 120+

### Progressive Enhancement

- Graceful degradation for older browsers
- Fallbacks for CSS features (backdrop-filter, etc.)
- JavaScript not required for core content

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

- **Netlify**: Connect repo, build command `npm run build`, publish directory `.next`
- **Cloudflare Pages**: Same as Netlify
- **Self-Hosted**: Run `npm run build && npm start` with process manager (PM2, systemd)

### Domain Configuration

1. Add custom domain in hosting platform
2. Update `metadata.metadataBase` in `app/layout.tsx`
3. Update `siteUrl` constant
4. Regenerate sitemap

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

This project is **free and open source**. You can use it for personal or commercial projects.

---

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/sayuru-akash/drivedock-landing/issues)
- **Discussions**: [GitHub Discussions](https://github.com/sayuru-akash/drivedock-landing/discussions)
- **Email**: [support@drivedock.app](mailto:support@drivedock.app)

---

## 🙏 Acknowledgments

- **DriveDock App**: [github.com/sayuru-akash/drivedock](https://github.com/sayuru-akash/drivedock)
- **Design Inspiration**: Apple, Linear, Vercel
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson
- **Framework**: [Next.js](https://nextjs.org/) by Vercel

---

<div align="center">

**[DriveDock](https://drivedock.app)** · **[GitHub](https://github.com/sayuru-akash/drivedock)** · **[Download](https://github.com/sayuru-akash/drivedock/releases)**

Made with ❤️ by the DriveDock team

</div>
