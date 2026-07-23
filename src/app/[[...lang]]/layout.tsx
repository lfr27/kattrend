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

const SITE_URL = "https://kattrend.com";

// hreflang alternates shared by both locales — every page points to every version.
const languageAlternates = {
  da: SITE_URL + localePath("da"),
  en: SITE_URL + localePath("en"),
  "x-default": SITE_URL + localePath(defaultLocale),
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = resolveLocale(lang) ?? defaultLocale;
  const dict = dictionaries[locale];
  const url = SITE_URL + localePath(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: url,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      url,
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      locale: locale === "da" ? "da_DK" : "en_GB",
    },
    robots: { index: true, follow: true },
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
