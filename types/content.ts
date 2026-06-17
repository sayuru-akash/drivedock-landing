export interface CallToAction {
  text: string
  url: string
  external?: boolean
}

export interface HeroContent {
  headline: string
  subheadline: string
  heroImage: {
    src: string
    alt: string
  }
  ctaPrimary: CallToAction
  ctaSecondary: CallToAction
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface Benefit {
  title: string
  description: string
  emphasis?: "high" | "medium" | "low"
}

export interface TechnicalDetail {
  category: string
  items: string[]
}

export interface Screenshot {
  src: string
  alt: string
  caption?: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}
