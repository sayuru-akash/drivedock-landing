import type { Metadata } from "next"
import { FaqPage } from "@/components/product/faq-page"
import { allFaqs } from "@/components/product/product-data"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about DriveDock uploads, downloads, resumable transfers, Google accounts, Shared Drives, macOS requirements, permissions, privacy, and installation.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "DriveDock FAQ: Google Drive Transfers on macOS",
    description: "Get clear answers about DriveDock features, setup, accounts, permissions, interrupted transfers, privacy, and support.",
    url: "/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "DriveDock FAQ",
    description: "Answers about DriveDock transfers, accounts, macOS requirements, permissions, privacy, and support.",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <FaqPage />
    </>
  )
}
