# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in the DriveDock landing page or any related component, please report it privately.

**Do not open a public GitHub issue for security vulnerabilities.**

### How to Report

Open a security advisory at:
https://github.com/sayuru-akash/drivedock-landing/security/advisories/new

Include in your report:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

### What to Expect

- **Acknowledgment** within 48 hours
- **Initial assessment** within 7 days
- **Fix timeline** depends on severity:
  - Critical: 24-72 hours
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

### Scope

This landing page is a static site, so the attack surface is limited. Concerns include:

- **XSS** via user-submitted content (none currently accepted)
- **Supply chain** attacks via dependencies
- **Build pipeline** integrity
- **Deployment** configuration
- **Mixed content** errors

The DriveDock app itself has its own security policy at:
https://github.com/sayuru-akash/drivedock/security

## Best Practices for This Site

- All dependencies are pinned via `package-lock.json`
- Build runs in CI with no secrets
- No analytics or tracking scripts
- No third-party fonts loaded (system stack fallback)
- No PII collected or stored

## Disclosure Policy

We follow [coordinated disclosure](https://en.wikipedia.org/wiki/Coordinated_vulnerability_disclosure). Please allow us reasonable time to address issues before public disclosure.

## Recognition

We appreciate security researchers who help keep DriveDock safe. With your permission, we'll acknowledge your contribution in the release notes.
