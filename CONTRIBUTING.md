# Contributing to DriveDock Landing

Thank you for your interest in contributing to the DriveDock landing page! This site is the public face of the DriveDock project, and we welcome improvements of all sizes.

## Code of Conduct

By participating, you agree to be respectful and constructive. We're a small team and we value kindness as much as code quality.

## How to Contribute

### Reporting Issues

- **Bugs**: Open an issue with a clear description, steps to reproduce, and screenshots
- **Suggestions**: Open an issue with the `enhancement` label
- **Security**: See [SECURITY.md](./SECURITY.md) for private disclosure

### Submitting Changes

1. **Fork** the repository
2. **Branch** from `main` (`git checkout -b feature/your-feature`)
3. **Commit** with clear messages (`git commit -m 'feat: add new feature'`)
4. **Push** to your fork (`git push origin feature/your-feature`)
5. **Open a Pull Request** with a description of the change

## Development Setup

```bash
# Clone
git clone https://github.com/sayuru-akash/drivedock-landing.git
cd drivedock-landing

# Install
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Project Structure

- `app/` — Next.js App Router pages and routes
- `components/layout/` — Navbar, Footer
- `components/sections/` — Page sections (Hero, Features, etc.)
- `components/ui/` — Reusable UI primitives (Button, Container, Card, Motion)
- `content/` — Centralized content/text data
- `lib/` — Utility functions
- `public/` — Static assets (icons, manifest)
- `types/` — TypeScript types

## Code Style

- **TypeScript**: Strict mode, no `any`
- **Formatting**: Match existing style (no Prettier config — follow conventions)
- **Tailwind**: Use theme tokens (`bg-bg-base`, `text-fg-primary`, etc.) — avoid hardcoded colors
- **Animations**: Use the `components/ui/motion.tsx` primitives
- **Components**: Keep small and focused

## Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation only
- `style:` — Formatting, no code change
- `refactor:` — Code change that neither fixes a bug nor adds a feature
- `perf:` — Performance improvement
- `test:` — Adding tests
- `chore:` — Build, tooling, or maintenance

Examples:
- `feat: add FAQ section`
- `fix: navbar mobile menu z-index`
- `docs: update README with new commands`

## Design Guidelines

When making UI changes, follow the design system defined in `app/globals.css`:

- **Colors**: Use the `@theme` tokens (e.g. `bg-accent`, `text-fg-secondary`)
- **Spacing**: Use Tailwind's spacing scale (multiples of 4px)
- **Typography**: Inter font with weights 400, 500, 600, 700, 800
- **Animations**: 150-300ms for micro, ≤400ms for complex
- **Accessibility**: Maintain WCAG 2.2 AA contrast, focus rings, reduced motion

## Accessibility

Always ensure:

- Color contrast ≥4.5:1 for text
- Visible focus indicators on interactive elements
- `prefers-reduced-motion` support
- Semantic HTML (h1, h2, nav, main, footer)
- ARIA labels for icon-only buttons

## Testing

```bash
# Type check
npx tsc --noEmit

# Lint
npm run lint

# Build
npm run build
```

## Questions?

Open a GitHub Discussion or reach out via [issues](https://github.com/sayuru-akash/drivedock-landing/issues).

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
