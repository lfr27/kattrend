// Internationalisation for the Kattrend landing page.
//
// Two locales: English (default, served at "/") and Danish (served at "/da").
// Content is fully static, so each locale is pre-rendered as its own HTML page
// with the correct <html lang> and hreflang alternates — good for SEO in both
// English abroad and the Danish home market. There is no i18n library: the site
// is one page, so a plain typed dictionary is lighter and clearer.

export const locales = ["en", "da"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

// Resolve the optional-catch-all route segment to a locale.
//   "/"    -> segment undefined/[]  -> "en"
//   "/da"  -> segment ["da"]        -> "da"
// Anything else returns null so the route can 404.
export function resolveLocale(segment?: string[]): Locale | null {
  if (!segment || segment.length === 0) return defaultLocale;
  if (segment.length === 1 && (locales as readonly string[]).includes(segment[0])) {
    // Only non-default locales are prefixed; the default locale lives at "/", not "/en".
    return segment[0] === defaultLocale ? null : (segment[0] as Locale);
  }
  return null;
}

// Path for a given locale (default locale is unprefixed).
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export interface Dictionary {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    homeAria: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  film: {
    eyebrow: string;
    title: string;
  };
  manifesto: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    signature: string;
  };
  footer: {
    backToTopAria: string;
    tagline: string;
    location: string;
    rights: string;
  };
  // Accessible labels for the founder-film player controls.
  player: {
    filmAria: string;
    play: string;
    pause: string;
    mute: string;
    unmute: string;
    seek: string;
    volume: string;
    fullscreen: string;
    exitFullscreen: string;
    fallback: string;
  };
  // Language switcher: label announced by screen readers, keyed by the locale
  // the link switches TO.
  switcher: {
    toDanish: string;
    toEnglish: string;
    label: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  da: {
    htmlLang: "da",
    meta: {
      title: "Kattrend — Arkitektoniske kattemøbler, fremstillet på bestilling i Europa",
      description:
        "Kattrend er et premium-brand inden for kattemøbler fra Aalborg, Danmark. Arkitektoniske møbler i sortbejdset eg, stål og uld — fremstillet på bestilling i Europa, skabt til at leve med.",
      ogTitle: "Kattrend — Det design, din kat fortjener",
      ogDescription:
        "Arkitektoniske kattemøbler i eg, stål og uld. Fremstillet på bestilling i Europa. Et møbel, du ikke vil gemme væk.",
    },
    nav: {
      homeAria: "Kattrend forside",
    },
    hero: {
      eyebrow: "Kattrend · Aalborg, Danmark",
      heading: "Et møbel, du ikke vil gemme væk.",
      lead:
        "Kattrend er et premium-brand inden for kattemøbler fra Danmark. Vi designer arkitektoniske møbler i sortbejdset eg, stål og uld — fremstillet på bestilling i Europa, skabt til at leve med, og konstrueret, så hver sliddel kan udskiftes hele livet.",
    },
    film: {
      eyebrow: "Introduktion fra grundlæggeren",
      title: "Et par ord om, hvem vi er",
    },
    manifesto: {
      eyebrow: "Derfor findes vi",
      heading: "Virkelig enestående produkter skabes aldrig alene.",
      body1:
        "Vi bygger et brand omkring tidløst design, enestående håndværk og kompromisløs kvalitet — kattemøbler smukke nok til at komplementere et moderne hjem, og komfortable og holdbare nok til at vinde en kats loyalitet.",
      body2:
        "Møbler som disse skabes gennem partnerskab: med producenter, der sætter en ære i præcision, ensartethed og sans for hver detalje. Vi bringer færdig konstruktion, en klar model og langsigtet hensigt; vores partnere bringer håndværket.",
      signature: "Møblet først, katten bagefter.",
    },
    footer: {
      backToTopAria: "Tilbage til toppen",
      tagline: "Det design, din kat fortjener.",
      location: "Kattrend · Aalborg, Danmark",
      rights: "Alle rettigheder forbeholdes.",
    },
    player: {
      filmAria: "Kattrend introduktionsfilm",
      play: "Afspil film",
      pause: "Sæt film på pause",
      mute: "Slå lyd fra",
      unmute: "Slå lyd til",
      seek: "Spol",
      volume: "Lydstyrke",
      fullscreen: "Fuld skærm",
      exitFullscreen: "Forlad fuld skærm",
      fallback: "Se vores introduktion på kattrend.com",
    },
    switcher: {
      toDanish: "Skift til dansk",
      toEnglish: "Switch to English",
      label: "Vælg sprog",
    },
  },
  en: {
    htmlLang: "en",
    meta: {
      title: "Kattrend — Architectural cat furniture, made to order in Europe",
      description:
        "Kattrend is a premium cat-furniture brand from Aalborg, Denmark. Architectural pieces in black-stained oak, steel and wool — made to order in Europe, built to be lived with.",
      ogTitle: "Kattrend — The design your cat deserves",
      ogDescription:
        "Architectural cat furniture in oak, steel and wool. Made to order in Europe. A piece you don't want to hide.",
    },
    nav: {
      homeAria: "Kattrend home",
    },
    hero: {
      eyebrow: "Kattrend · Aalborg, Denmark",
      heading: "A piece you don’t want to hide.",
      lead:
        "Kattrend is a premium cat-furniture brand from Denmark. We design architectural pieces in black-stained oak, steel and wool — made to order in Europe, built to be lived with, and engineered so every wear part can be replaced for life.",
    },
    film: {
      eyebrow: "Founder introduction",
      title: "A short word on who we are",
    },
    manifesto: {
      eyebrow: "Why we exist",
      heading: "Truly exceptional products are never created alone.",
      body1:
        "We are building a brand around timeless design, exceptional craftsmanship and uncompromising quality — cat furniture beautiful enough to complement a modern home, and comfortable and durable enough to earn a cat’s loyalty.",
      body2:
        "Pieces like that are built through partnership: with makers who take pride in precision, consistency and attention to every detail. We bring finished engineering, a clear model and long-term intent; our partners bring the craft.",
      signature: "Furniture first, cat second.",
    },
    footer: {
      backToTopAria: "Back to top",
      tagline: "The design your cat deserves.",
      location: "Kattrend · Aalborg, Denmark",
      rights: "All rights reserved.",
    },
    player: {
      filmAria: "Kattrend introduction film",
      play: "Play film",
      pause: "Pause film",
      mute: "Mute",
      unmute: "Unmute",
      seek: "Seek",
      volume: "Volume",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit fullscreen",
      fallback: "Watch our introduction at kattrend.com",
    },
    switcher: {
      toDanish: "Skift til dansk",
      toEnglish: "Switch to English",
      label: "Choose language",
    },
  },
};
