import Link from "next/link";
import { Instagram, Pinterest, Tiktok } from "@/components/ui/icons";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Designer Cat Trees", href: "/collections/designer-cat-trees" },
      { label: "Luxury Cat Lounges", href: "/collections/luxury-cat-lounges" },
      { label: "Limited Editions", href: "/collections/limited-edition" },
      { label: "New Arrivals", href: "/collections" },
      { label: "Best Sellers", href: "/collections" },
    ],
  },
  {
    title: "Resale",
    links: [
      { label: "The Resale Program", href: "/marketplace" },
      { label: "Shop Pre-Owned", href: "/marketplace" },
      { label: "Sell Your Piece", href: "/marketplace" },
      { label: "Authentication", href: "/authentication" },
      { label: "Trade-In", href: "/marketplace" },
    ],
  },
  {
    title: "Maison",
    links: [
      { label: "Our Story", href: "/#story" },
      { label: "The Journal", href: "/journal" },
      { label: "Designers", href: "/designers" },
      { label: "Contact", href: "/account" },
      { label: "Client Care", href: "/account" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-noir text-pearl">
      {/* Newsletter */}
      <section className="border-b border-white/10 py-s7 text-center">
        <div className="wrap">
          <span className="eyebrow kicker justify-center !text-champagne">The List</span>
          <h2 className="mt-3 font-display text-display-lg font-light text-white">
            Join the <em className="italic text-champagne">Maison</em>
          </h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-[14.5px] leading-relaxed text-white/60">
            Private previews of limited editions, resale drops, and the occasional letter on the
            art of living well — with a cat.
          </p>
          <form className="mx-auto mt-s5 flex max-w-[520px] flex-col border-b border-white/30 sm:flex-row sm:items-center">
            <label htmlFor="news-email" className="sr-only">
              Email address
            </label>
            <input
              id="news-email"
              type="email"
              required
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-transparent px-1 py-4 text-[13px] tracking-wide text-white outline-none placeholder:text-[11px] placeholder:uppercase placeholder:tracking-luxe placeholder:text-white/45"
            />
            <button
              type="submit"
              className="px-2 py-2 text-[11px] uppercase tracking-luxe text-white transition-colors hover:text-champagne sm:py-0"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-s3 text-[10px] tracking-wide text-white/35">
            By subscribing you agree to receive correspondence from KATTREND.
          </p>
        </div>
      </section>

      {/* Columns */}
      <div className="wrap py-s6">
        <div className="grid gap-s4 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-3xl tracking-[0.4em] indent-[0.4em] text-white">
              KATTREND
            </div>
            <p className="mt-s3 max-w-[34ch] text-[13px] leading-relaxed text-white/50">
              The maison of feline design. Curated and certified luxury cat furniture for
              design-conscious homes worldwide.
            </p>
            <div className="mt-s4 flex gap-s2">
              {[Instagram, Pinterest, Tiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="grid h-[38px] w-[38px] place-items-center rounded-full border border-white/20 transition-all duration-300 ease-luxe hover:border-white hover:bg-white hover:text-noir"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="mb-s3 text-[10.5px] uppercase tracking-wide text-champagne">
                {col.title}
              </h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-white/60 transition-all duration-300 hover:pl-1.5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="wrap flex flex-col items-center justify-between gap-s2 border-t border-white/10 py-s4 text-[11px] tracking-wide text-white/40 sm:flex-row">
        <p>© 2026 KATTREND. All rights reserved.</p>
        <div className="flex gap-s3">
          {["Privacy", "Terms", "Shipping", "Cookies"].map((l) => (
            <Link key={l} href="#" className="transition-colors hover:text-white/80">
              {l}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
