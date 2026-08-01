// Kattrend holding page — the single, only page of the site, in two locales.
// Danish is served at "/" and English at "/en" via the optional catch-all
// segment. The previously-built full site was removed; it lives on the
// `archive/full-site` branch.
import { notFound } from "next/navigation";
import FilmPlayer from "../FilmPlayer";
import LanguageSwitcher from "../LanguageSwitcher";
import { dictionaries, defaultLocale, locales, resolveLocale } from "../i18n";

// Statically pre-render both locales. The default locale is unprefixed ("/");
// every other locale is prefixed (e.g. "/da").
export function generateStaticParams() {
  return locales.map((locale) =>
    locale === defaultLocale ? { lang: [] as string[] } : { lang: [locale] }
  );
}

export default async function HoldingPage({
  params,
}: {
  params: Promise<{ lang?: string[] }>;
}) {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  if (!locale) notFound();
  const t = dictionaries[locale];

  return (
    <div className="page">
      <nav className="wrap">
        <div className="nv">
          <a className="brand" href="#top" aria-label={t.nav.homeAria}>
            <svg viewBox="0 0 17.81 17.81" aria-hidden="true">
              <rect width="17.81" height="17.81" rx="1.98" ry="1.98" fill="#232323" />
              <path
                d="M6.08,11.74v-6.02c0-.25-.02-.44-.06-.57-.04-.12-.14-.21-.28-.26-.14-.05-.36-.07-.64-.07-.02,0-.03-.03-.03-.08s0-.08.03-.08c.23,0,.47,0,.74.02s.55.02.86.02c.33,0,.63,0,.9-.02s.51-.02.72-.02c.03,0,.04.03.04.08s-.01.08-.04.08c-.28,0-.49.03-.62.08-.14.05-.23.14-.29.27-.05.13-.08.32-.08.57v5.99c0,.25.02.44.07.57.05.13.14.22.28.26.14.04.35.06.64.06.03,0,.05.03.05.08s-.02.08-.05.08c-.22,0-.46,0-.72-.01-.26,0-.56-.01-.89-.01-.3,0-.59,0-.87.01-.28,0-.52.01-.74.01-.02,0-.03-.03-.03-.08s0-.08.03-.08c.29,0,.5-.02.64-.06.14-.04.24-.13.29-.26.05-.13.07-.32.07-.57ZM6.52,9.31l3.35-3.41c.32-.32.45-.58.38-.78s-.32-.3-.77-.3c-.02,0-.03-.03-.03-.08s0-.08.03-.08c.23,0,.47,0,.7.02s.54.02.92.02.7,0,.92-.02c.23-.01.45-.02.66-.02.03,0,.04.03.04.08s-.01.08-.04.08c-.37,0-.78.1-1.24.3s-.87.49-1.26.86l-3.33,3.35-.35-.03ZM9.46,10.91l-1.88-2.47.91-.83,1.95,2.59c.36.49.66.88.91,1.19.25.31.46.55.62.73.16.18.31.3.44.38.13.07.26.12.38.13.12.01.26.02.4.02.03,0,.04.03.04.08s-.01.08-.04.08h-1.46c-.21,0-.37,0-.47.01-.11,0-.2,0-.29-.04-.08-.04-.18-.12-.29-.24-.11-.12-.26-.31-.45-.57-.19-.26-.45-.61-.78-1.04Z"
                fill="#f3f1ec"
              />
            </svg>
            <span>KATTREND</span>
          </a>
          <div className="nv-right">
            <a className="mail" href="mailto:info@kattrend.com">
              info@kattrend.com
            </a>
            <LanguageSwitcher current={locale} dict={t.switcher} />
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="bg" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise d1">{t.hero.eyebrow}</p>
          <h1 className="rise d2">{t.hero.heading}</h1>
          <div className="hrule rise d3" aria-hidden="true" />
          <p className="lead rise d4">{t.hero.lead}</p>
        </div>
      </header>

      <section className="film">
        <div className="wrap">
          <p className="eyebrow">{t.film.eyebrow}</p>
          <h2 className="sec-title">{t.film.title}</h2>

          <FilmPlayer labels={t.player} />
        </div>
      </section>

      <section className="paper">
        <div className="wrap">
          <p className="eyebrow">{t.manifesto.eyebrow}</p>
          <h2>{t.manifesto.heading}</h2>
          <p>{t.manifesto.body1}</p>
          <p>{t.manifesto.body2}</p>
          <p className="sig">{t.manifesto.signature}</p>
          <div className="prule" aria-hidden="true" />
        </div>
      </section>

      <footer>
        <div className="wrap ft">
          <a className="brand" href="#top" aria-label={t.footer.backToTopAria}>
            <svg viewBox="0 0 512 512" aria-hidden="true" style={{ width: 26, height: 26 }}>
              <rect width="512" height="512" fill="#16130F" stroke="#2A251F" strokeWidth="8" />
              <circle cx="210" cy="240" r="136" fill="#F3F1EC" />
            </svg>
            <span>KATTREND</span>
          </a>
          <div className="tag">{t.footer.tagline}</div>
          <div className="meta">
            {t.footer.location} ·{" "}
            <a href="mailto:info@kattrend.com">info@kattrend.com</a> ·{" "}
            <a href="https://kattrend.com">kattrend.com</a>
          </div>
          <div className="meta">© 2026 Kattrend. {t.footer.rights}</div>
        </div>
      </footer>
    </div>
  );
}
