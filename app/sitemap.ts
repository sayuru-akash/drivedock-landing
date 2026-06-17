import type { MetadataRoute } from "next"

const BASE = "https://drivedock.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date("2025-06-01"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
