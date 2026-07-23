import type { MetadataRoute } from "next";

const BASE = "https://kattrend.com";

// The site is a single landing page. The previously-built full site was removed;
// it's preserved on the `archive/full-site` branch and in git history.
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
