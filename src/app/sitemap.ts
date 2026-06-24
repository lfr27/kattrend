import type { MetadataRoute } from "next";
import { products, collections, designers, journalEntries } from "@/data/catalogue";

const BASE = "https://kattrend.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/marketplace",
    "/designers",
    "/journal",
    "/authentication",
    "/account",
    "/wishlist",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const dynamic = [
    ...collections.map((c) => `/collections/${c.slug}`),
    ...products.map((p) => `/product/${p.slug}`),
    ...designers.map((d) => `/designers/${d.slug}`),
    ...journalEntries.map((j) => `/journal/${j.slug}`),
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamic];
}
