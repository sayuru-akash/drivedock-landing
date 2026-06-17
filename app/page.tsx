/* App Store Style Landing — Section order:
   1. Hero with device mockup
   2. Features with icons
   3. Privacy / trust
   4. Social proof / community
   5. Technical specs
   6. FAQ
   7. Download CTA (repeated per App Store pattern)

   Performance rules applied:
   - All sections are RSC-friendly (no "use client" at page level)
   - No barrel imports — direct component imports
   - Motion components are "use client" isolated in their own files
   - optimizePackageImports in next.config.ts handles lucide-react
*/

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { PrivacyHighlight } from "@/components/sections/privacy-highlight"
import { SocialProof } from "@/components/sections/social-proof"
import { Technical } from "@/components/sections/technical"
import { FAQ } from "@/components/sections/faq"
import { Download } from "@/components/sections/download"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* 1. Hero — primary CTA prominent, device mockup */}
        <Hero />

        {/* 2. Features grid — 8 features with Lucide icons */}
        <Features />

        {/* 3. Privacy / trust section — green accent, narrative */}
        <PrivacyHighlight />

        {/* 4. Social proof / community ratings */}
        <SocialProof />

        {/* 5. Technical details */}
        <Technical />

        {/* 6. FAQ — answers common questions */}
        <FAQ />

        {/* 7. Download CTA — repeated per App Store pattern */}
        <Download />
      </main>
      <Footer />
    </>
  )
}
