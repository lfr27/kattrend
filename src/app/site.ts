// Single source of truth for the origin a given deployment is served from.
//
// Canonical URLs, hreflang alternates and the sitemap always point at
// production — those describe where the content officially lives. og:url and
// og:image instead follow SITE_ORIGIN, so sharing a preview link previews that
// deployment rather than production (which may not have the asset yet).
//
// On Vercel, set NEXT_PUBLIC_SITE_ORIGIN per environment:
//   Production → https://kattrend.com
//   Preview    → https://dev.kattrend.com
// Without it we fall back to the per-deployment VERCEL_URL, so one-off branch
// deploys still preview themselves rather than production.
export const PRODUCTION_ORIGIN = "https://kattrend.com";

const configured = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim().replace(/\/+$/, "");

export const SITE_ORIGIN =
  configured ||
  (process.env.VERCEL_ENV === "production"
    ? PRODUCTION_ORIGIN
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : PRODUCTION_ORIGIN);

// Only the production origin should be indexed; every preview is a duplicate of it.
export const IS_PRODUCTION = SITE_ORIGIN === PRODUCTION_ORIGIN;
