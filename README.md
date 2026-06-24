# KATTREND

**The Maison of Feline Design** — a production-ready luxury e-commerce platform for new, limited-edition, and certified pre-owned designer cat furniture.

Built to stand alongside Chanel, Saint Laurent, Celine, Apple, and Net-a-Porter in visual and experiential quality.

---

## Stack

- **Next.js 15** (App Router, React 19) — static-generated routes
- **TypeScript** (strict)
- **Tailwind CSS** — design system encoded as tokens
- **Framer Motion** — refined, slow, scroll-triggered motion
- Self-hosted variable fonts (no Google Fonts runtime dependency)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run type-check
```

Node 18.18+ required (developed on Node 22).

---

## Architecture

```
src/
├── app/                      # App Router routes (all statically generated)
│   ├── layout.tsx            # Fonts, SEO metadata, JSON-LD, providers
│   ├── page.tsx              # Homepage
│   ├── collections/          # Index + [slug] detail (filterable)
│   ├── product/[slug]/       # PDP — gallery, add-to-bag, related, JSON-LD
│   ├── marketplace/          # Certified resale platform + process
│   ├── designers/            # Index + [slug] detail
│   ├── journal/              # Editorial index + [slug] article
│   ├── wishlist/             # Live wishlist (context-driven)
│   ├── account/              # Sign-in / register
│   ├── authentication/       # Authentication services
│   ├── sitemap.ts / robots.ts
│   └── not-found.tsx
├── components/
│   ├── layout/               # Header (mega-menu, search, mobile), Footer, PageHeader
│   ├── sections/             # Homepage sections (Hero, Marketplace, BrandStory, …)
│   ├── product/              # ProductCard, ProductGrid, QuickView, ProductDetail, FilterableGrid
│   └── ui/                   # Reveal, icons, primitives
├── data/catalogue.ts         # Typed single source of truth (products, collections, …)
├── lib/
│   ├── utils.ts              # cn(), img(), formatPrice()
│   ├── motion.ts             # Shared Framer Motion variants + easing
│   └── wishlist.tsx          # Wishlist context (localStorage-persisted)
└── styles/ (globals in app/globals.css)
```

### Adding a product

Append to the `products` array in `src/data/catalogue.ts`. Routes, sitemap,
related-product logic, and listings update automatically.

---

## Design system

Encoded in `tailwind.config.ts` and `app/globals.css`.

**Colour** — luxury monochrome. `noir #0A0A0A`, `ink #161616`, `graphite`,
`ash`, `mist`, `pearl #F6F5F3`, `ivory`, `paper`, with a single metallic accent:
`champagne #C9BBA0` (and `champagne-deep #A6926E` for text on light).

**Type** — Cormorant Garamond (high-contrast display serif, used light) +
Jost (geometric sans, Futura lineage) for body/UI. Editorial scale from
`display-2xl` down.

**Spacing** — 8pt base (`s1`–`s8`) plus fluid `gutter`.

**Motion** — one shared easing `cubic-bezier(0.22, 1, 0.36, 1)`. Slow, confident,
never flashy. All reveals and ambient motion respect `prefers-reduced-motion`.

---

## Images

Image URLs are centralised in `img()` (`src/lib/utils.ts`) and stream from the
Unsplash CDN in production, presented monochrome via CSS. For a fully offline
preview, set `NEXT_PUBLIC_USE_LOCAL_IMAGES=1` and provide bundled placeholders
under `public/placeholders/` keyed by short image id.

Swap in real product photography by replacing the image ids in
`src/data/catalogue.ts` (or pointing `img()` at your own asset host / CDN).

---

## Production notes

- All routes are statically generated (SSG) — fast TTFB, CDN-cacheable.
- Per-page metadata, OpenGraph, Twitter cards, and `Product` / `Article` /
  `OnlineStore` JSON-LD are in place.
- `sitemap.xml` and `robots.txt` are generated from the catalogue.
- Accessibility: semantic landmarks, visible keyboard focus, labelled controls,
  reduced-motion fallbacks.
- Wishlist is client-side (localStorage). Wire to an account backend for
  cross-device persistence.
- Cart / checkout are represented at the UI level; integrate a commerce backend
  (e.g. Shopify, Stripe, or a headless platform) to transact.

© 2026 KATTREND.
