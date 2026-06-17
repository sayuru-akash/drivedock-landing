# Changelog

All notable changes to the DriveDock landing page will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- FAQ section with 10 common questions
- Custom 404 page with branded design
- Error boundary with retry mechanism
- Loading state for page transitions
- Comprehensive structured data (Organization, WebSite, SoftwareApplication, FAQPage)
- Full Open Graph and Twitter Card metadata
- Web app manifest with PWA support
- Apple touch icons and favicon variants
- DNS prefetch for GitHub

### Changed
- Migrated to token-based design system across all components
- Replaced all hardcoded colors with `@theme` tokens
- Improved mobile menu animation (translateY instead of height)
- Hero headline uses inline span gradient (no manual line break)
- Better heading hierarchy across all sections
- Enhanced focus rings and accessibility

### Fixed
- Critical: `*, *::before, *::after { padding: 0 }` was killing all Tailwind padding utilities
- Mobile menu height animation jitter (now uses opacity + translateY)
- Inconsistent container padding across components
- Hover styles implemented via inline event handlers
- Footer grid layout imbalance on tablet widths
- Section padding inconsistency between Hero and other sections

## [1.0.0] - 2024-01-15

### Added
- Initial release
- Hero section with animated app mockup
- 8-feature grid with Lucide icons
- Privacy highlight section
- Social proof / testimonials
- Technical details
- Download CTA
- Privacy policy page
- Full responsive design
- Dark mode design system
- Framer Motion animations
- SEO metadata
- Skip link for accessibility
- Reduced motion support

[Unreleased]: https://github.com/sayuru-akash/drivedock-landing/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/sayuru-akash/drivedock-landing/releases/tag/v1.0.0
