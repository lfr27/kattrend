import type { MetadataRoute } from "next";

const BASE = "https://kattrend.com";

// While the site is on hold, only the single landing page is live.
// The full route map is preserved in git history / `src/app/_onhold`.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
