import type { Metadata, Viewport } from "next";
import { Newsreader, Schibsted_Grotesk, Spline_Sans_Mono } from "next/font/google";
import "./holding.css";

// Fonts are downloaded and self-hosted at build time (no runtime Google dependency).
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kattrend — Architectural cat furniture, made to order in Europe",
  description:
    "Kattrend is a premium cat-furniture brand from Aalborg, Denmark. Architectural pieces in black-stained oak, steel and wool — made to order in Europe, built to be lived with.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Kattrend — The design your cat deserves",
    description:
      "Architectural cat furniture in oak, steel and wool. Made to order in Europe. A piece you don't want to hide.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#16130F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${schibsted.variable} ${splineMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
