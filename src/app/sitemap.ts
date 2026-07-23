import type { MetadataRoute } from "next";
import { localePath, locales } from "./i18n";

const BASE = "https://kattrend.com";

// Absolute URL for a locale — the default locale lives at the bare origin
// (no trailing slash, matching the canonical), others are prefixed.
const urlFor = (locale: (typeof locales)[number]) => {
  const path = localePath(locale);
  return path === "/" ? BASE : BASE + path;
};

// The site is a single landing page in two locales: English (default, "/") and
// Danish ("/da"). The previously-built full site was removed; it's preserved on
// the `archive/full-site` branch and in git history.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(locales.map((l) => [l, urlFor(l)]));
  return locales.map((l) => ({
    url: urlFor(l),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages },
  }));
}
