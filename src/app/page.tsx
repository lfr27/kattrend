// Kattrend holding page — the single, only route while the full site is on hold.
// The full site is parked under `src/app/_onhold` (rename back to `[locale]` to restore).
export default function HoldingPage() {
  return (
    <div className="page">
      <nav className="wrap">
        <div className="nv">
          <a className="brand" href="#top" aria-label="Kattrend home">
            <svg viewBox="0 0 512 512" aria-hidden="true">
              <rect width="512" height="512" fill="#16130F" stroke="#2A251F" strokeWidth="8" />
              <circle cx="210" cy="240" r="136" fill="#F3F1EC" />
            </svg>
            <span>KATTREND</span>
          </a>
          <a className="mail" href="mailto:info@kattrend.com">
            info@kattrend.com
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="bg" aria-hidden="true" />
        <div className="wrap">
          <p className="eyebrow rise d1">Kattrend · Aalborg, Denmark</p>
          <h1 className="rise d2">A piece you don&apos;t want to hide.</h1>
          <div className="hrule rise d3" aria-hidden="true" />
          <p className="lead rise d4">
            Kattrend is a premium cat-furniture brand from Denmark. We design
            architectural pieces in black-stained oak, steel and wool — made to
            order in Europe, built to be lived with, and engineered so every wear
            part can be replaced for life.
          </p>
        </div>
      </header>

      <section className="film">
        <div className="wrap">
          <p className="eyebrow">Founder introduction</p>
          <h2 className="sec-title">A short word on who we are</h2>

          <div className="frame">
            <video
              className="film-video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Kattrend introduction film"
            >
              <source src="/cat.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="paper">
        <div className="wrap">
          <p className="eyebrow">Why we exist</p>
          <h2>Truly exceptional products are never created alone.</h2>
          <p>
            We are building a brand around timeless design, exceptional
            craftsmanship and uncompromising quality — cat furniture beautiful
            enough to complement a modern home, and comfortable and durable enough
            to earn a cat&apos;s loyalty.
          </p>
          <p>
            Pieces like that are built through partnership: with makers who take
            pride in precision, consistency and attention to every detail. We bring
            finished engineering, a clear model and long-term intent; our partners
            bring the craft.
          </p>
          <p className="sig">Furniture first, cat second.</p>
          <div className="prule" aria-hidden="true" />
        </div>
      </section>

      <footer>
        <div className="wrap ft">
          <a className="brand" href="#top" aria-label="Back to top">
            <svg viewBox="0 0 512 512" aria-hidden="true" style={{ width: 26, height: 26 }}>
              <rect width="512" height="512" fill="#16130F" stroke="#2A251F" strokeWidth="8" />
              <circle cx="210" cy="240" r="136" fill="#F3F1EC" />
            </svg>
            <span>KATTREND</span>
          </a>
          <div className="tag">The design your cat deserves.</div>
          <div className="meta">
            Kattrend · Aalborg, Denmark ·{" "}
            <a href="mailto:info@kattrend.com">info@kattrend.com</a> ·{" "}
            <a href="https://kattrend.com">kattrend.com</a>
          </div>
          <div className="meta">© 2026 Kattrend. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
