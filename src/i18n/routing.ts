import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Danish is the primary market; English is the secondary language.
  locales: ["da", "en"],
  defaultLocale: "da",
  // Danish (default) gets clean URLs (e.g. /collections); English is prefixed
  // (e.g. /en/collections).
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
