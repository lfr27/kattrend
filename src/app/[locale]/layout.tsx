import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WishlistProvider } from "@/lib/wishlist";

// Self-hosted variable fonts — no runtime dependency on Google Fonts.
const cormorant = localFont({
  src: [
    { path: "../../../public/fonts/CormorantGaramond-Variable.ttf", weight: "300 600", style: "normal" },
    { path: "../../../public/fonts/CormorantGaramond-Italic-Variable.ttf", weight: "300 600", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: [
    { path: "../../../public/fonts/Jost-Variable.ttf", weight: "300 700", style: "normal" },
    { path: "../../../public/fonts/Jost-Italic-Variable.ttf", weight: "300 700", style: "italic" },
  ],
  variable: "--font-jost",
  display: "swap",
});

const SITE_URL = "https://kattrend.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KATTREND — Furniture Worthy of Nine Lives",
    template: "%s · KATTREND",
  },
  description:
    "The maison of feline design. Curated and certified luxury cat furniture for design-conscious homes — new pieces, designer collaborations, and authenticated pre-owned resale.",
  keywords: [
    "luxury cat furniture",
    "designer cat trees",
    "cat lounges",
    "certified pre-owned",
    "designer pet furniture",
    "modern cat furniture",
  ],
  authors: [{ name: "KATTREND" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "KATTREND",
    title: "KATTREND — Furniture Worthy of Nine Lives",
    description:
      "Curated luxury cat furniture for beautiful homes. New, limited edition, and certified pre-owned designer pieces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KATTREND — Furniture Worthy of Nine Lives",
    description: "The maison of feline design. Luxury cat furniture for design-conscious homes.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  name: "KATTREND",
  description:
    "Luxury cat furniture marketplace — new, limited edition, and certified pre-owned designer pieces.",
  url: SITE_URL,
  brand: { "@type": "Brand", name: "KATTREND" },
  knowsAbout: ["Luxury furniture", "Interior design", "Pet furniture", "Sustainable resale"],
};

// Pre-render both locales at build time (keeps the site statically generated).
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <NextIntlClientProvider>
          <WishlistProvider>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </WishlistProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
