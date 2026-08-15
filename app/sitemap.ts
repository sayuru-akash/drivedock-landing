import type { MetadataRoute } from "next"

const BASE = "https://drivedock.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/features`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/faq`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date("2026-08-16"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
