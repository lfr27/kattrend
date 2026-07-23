# KATTREND

**The Maison of Feline Design** — premium, architectural cat furniture from Aalborg, Denmark.

This repository currently hosts the **Kattrend holding page**: a single dark landing page,
live while the brand lines up manufacturing.

> The previously-built full e-commerce platform (marketplace, collections, product pages,
> designers, journal, wishlist, i18n, …) has been **removed** from this branch. It is
> preserved on the **`archive/full-site`** branch and in git history.

---

## Stack

- **Next.js 15** (App Router, React 19) — statically generated
- **TypeScript** (strict)
- Plain CSS with design tokens in `src/app/holding.css` (no Tailwind)
- Fonts self-hosted at build time via `next/font/google` (Noto Serif, Schibsted Grotesk,
  Spline Sans Mono) — no runtime Google dependency

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run type-check
npm run lint
```

Node 18.18+ required (developed on Node 22).

---

## Structure

```
src/app/
├── layout.tsx        # Root layout: fonts, SEO metadata, viewport (dark theme)
├── page.tsx          # The holding / landing page — the only route
├── FilmPlayer.tsx    # Self-hosted founder film with custom controls (client component)
├── holding.css       # All landing-page styles (design tokens + layout)
├── icon.svg          # Favicon / brand mark
├── robots.ts         # robots.txt
└── sitemap.ts        # sitemap.xml (single route: /)

public/
└── cat.mp4           # Founder film
```

The only route is `/`; `robots.txt` and `sitemap.xml` reflect that single page.

---

## The film

`FilmPlayer.tsx` wraps a self-hosted `<video>` (`public/cat.mp4`) with custom, brand-styled
controls: play/pause, seek, mute + volume, and fullscreen, plus a play-invite overlay while
paused. Autoplay/muted are currently disabled (the film starts paused). Swap the film by
replacing `public/cat.mp4`.

---

## Design system

Encoded as CSS custom properties at the top of `src/app/holding.css` — a dark editorial
palette (velvet `#16130F`, offwhite `#F3F1EC`, ecru, greige, with an oxblood `#8A3B2E`
accent). Serif in Noto Serif; UI/sans in Schibsted Grotesk; mono in Spline Sans Mono. All
motion respects `prefers-reduced-motion`.

---

## Bringing the full site back

The complete platform lives on the `archive/full-site` branch. To restore any part:

```bash
git checkout archive/full-site -- <path>
```

Forward plans (validation landing → headless Shopify commerce) are in
[`ROADMAP.md`](./ROADMAP.md).

© 2026 KATTREND.
