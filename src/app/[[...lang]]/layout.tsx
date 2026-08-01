import type { Metadata, Viewport } from "next";
import { Noto_Serif, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "../holding.css";
import {
  dictionaries,
  defaultLocale,
  localePath,
  resolveLocale,
  type Locale,
} from "../i18n";
import { IS_PRODUCTION, PRODUCTION_ORIGIN, SITE_ORIGIN } from "../site";

// Fonts are downloaded and self-hosted at build time (no runtime Google dependency).
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
  display: "swap",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-schibsted",
  display: "swap",
});

const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-spline-mono",
  display: "swap",
});

// hreflang alternates shared by both locales — every page points to every version.
// Always production: these declare where the content canonically lives, regardless
// of which deployment is rendering them.
const languageAlternates = {
  da: PRODUCTION_ORIGIN + localePath("da"),
  en: PRODUCTION_ORIGIN + localePath("en"),
  "x-default": PRODUCTION_ORIGIN + localePath(defaultLocale),
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = resolveLocale(lang) ?? defaultLocale;
  const dict = dictionaries[locale];
  const path = localePath(locale);

  return {
    // Relative metadata URLs (og:image) resolve against the live origin, so a
    // shared preview link shows that deployment's image, not production's.
    metadataBase: new URL(SITE_ORIGIN),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: PRODUCTION_ORIGIN + path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url: SITE_ORIGIN + path,
      siteName: "Kattrend",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: locale === "da" ? "da_DK" : "en_GB",
      // Declared explicitly — without this, scrapers scrape the page and pick
      // whatever image they find first (which was the language-switcher flag).
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: dict.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      images: ["/og-image.png"],
    },
    // Previews duplicate production verbatim — keep them out of the index.
    robots: IS_PRODUCTION
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#16130F",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string[] }>;
}) {
  const { lang } = await params;
  const locale: Locale = resolveLocale(lang) ?? defaultLocale;

  return (
    <html
      lang={locale}
      className={`${notoSerif.variable} ${schibsted.variable} ${splineMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
