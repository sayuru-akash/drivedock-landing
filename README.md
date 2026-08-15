# DriveDock Landing

The official website for [DriveDock](https://github.com/sayuru-akash/drivedock), an open-source macOS app for uploading files and folders to Google Drive.

## Local Development

Requirements: Node.js 20 or later and npm 10 or later.

```bash
npm install
npm run dev
```

The site does not require environment variables. Next.js uses the first available local port, normally `http://localhost:3000`.

## Verification

```bash
npm run lint
npm test
npm run build
npm audit
```

## Routes

- `/`: product homepage
- `/privacy`: privacy policy
- `/_not-found`: generated 404 surface for unmatched URLs
- `/robots.txt`: crawler policy
- `/sitemap.xml`: indexable route map
- `/opengraph-image`: generated social preview image

Runtime and root-layout errors are handled by `app/error.tsx` and `app/global-error.tsx`.

## Structure

```text
app/
  layout.tsx                 global metadata and structured data
  page.tsx                   homepage route
  privacy/page.tsx           privacy route
  not-found.tsx              404 UI
  error.tsx                  route error UI
  global-error.tsx           root error UI
  opengraph-image.tsx        social image
  robots.ts                  robots.txt
  sitemap.ts                 sitemap.xml
components/home/
  home-page.tsx              homepage composition
  site-chrome.tsx            shared header and footer
  mobile-navigation.tsx      accessible mobile navigation
  home-data.ts               verified product copy and links
  workflow-showcase.tsx      interactive workflow demo
  testimonials-carousel.tsx  verified capability carousel
  home.module.css            homepage and shared shell styles
  secondary.module.css       Privacy, 404, and error styles
public/                      icons and web app manifest
```

## Technical Approach

- Next.js App Router and React Server Components by default
- CSS Modules with one shared responsive visual system
- Small client islands only for the workflow, carousel, and mobile menu
- Static prerendering for all public routes
- Semantic HTML, visible focus states, reduced-motion support, and a skip link
- Canonical metadata, Open Graph and Twitter cards, JSON-LD, sitemap, robots policy, manifest, and a no-index 404
- No website analytics, trackers, forms, databases, or environment secrets

Google does not use meta keywords as a ranking signal. Search relevance comes from the page title, description, headings, useful copy, internal links, structured data, performance, accessibility, and crawlable static output.

## Deployment

The repository is ready for a standard Vercel deployment with `npm run build`. A local build proves source readiness, not that the current production domain has received the latest commit.

## Related Links

- [Live site](https://drivedock.app)
- [DriveDock app repository](https://github.com/sayuru-akash/drivedock)
- [App releases](https://github.com/sayuru-akash/drivedock/releases)
- [Website issues](https://github.com/sayuru-akash/drivedock-landing/issues)

## License

[MIT](./LICENSE) © 2024-2026 DriveDock Contributors
