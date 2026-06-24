import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Build an Unsplash image URL at a given width.
 * Centralised so presentation (quality, crop, format) stays consistent.
 *
 * When NEXT_PUBLIC_USE_LOCAL_IMAGES is set, serves bundled monochrome
 * placeholders instead — used for offline/preview builds. Production
 * uses the real Unsplash CDN.
 */
export function img(id: string, w = 1200, h?: number) {
  if (process.env.NEXT_PUBLIC_USE_LOCAL_IMAGES === "1") {
    // Placeholders are keyed by the short Unsplash id (first two segments).
    const key = id.split("-").slice(0, 2).join("-");
    return `/placeholders/${key}.jpg`;
  }
  const base = `https://images.unsplash.com/${id}`;
  const params = new URLSearchParams({
    q: "80",
    w: String(w),
    auto: "format",
    fit: "crop",
  });
  if (h) params.set("h", String(h));
  return `${base}?${params.toString()}`;
}

/** Format a price with thousands separators. */
export function formatPrice(amount: number, currency = "€") {
  return `${currency}${amount.toLocaleString("en-US")}`;
}
