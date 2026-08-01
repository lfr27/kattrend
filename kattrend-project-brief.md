# KATTREND — Project Brief & Brainstorm State

> Working document for the KATTREND e-commerce project. Captures decisions, context,
> and open questions so the brainstorm can resume without re-explaining anything.
> Drop this in the repo (root or `/docs`) so it travels with the project in VS Code.
>
> **Last updated:** 24 June 2026 · **Stage:** Pre-launch brainstorming (no build started yet)

## One-line concept
A luxury cat-products e-commerce shop, launched as a market test. Premium positioning;
realistically premium **non-designer** goods to start.

## Team & roles
- **Luis** — marketing + technical build/setup. Has shipped 5 Next.js + AWS Amplify apps to
  production; comfortable but still leveling up as a programmer. Owns the storefront build.
- **Supply partner** — long experience in supply/sourcing. Owns sourcing, inventory, and
  operations. Will work day-to-day in the Shopify admin (no code needed).
- **Photographer** — professional, strong. Owns product photography — and because the brand
  has no designer names to lean on, this is the single most important brand asset.

## Status & timeline
- Company registration (kommune paperwork), legal setup, and buying initial inventory are the
  real bottleneck — realistically **6+ months** before they can legally sell.
- The build itself is fast and is **not** the bottleneck.
- **Plan for the runway:** don't wait. Use the 6 months to validate demand (landing page +
  paid ads → measure signups / cost-per-email) while building the full store in parallel,
  ready to flip live the moment they're legally clear to sell.

## Strategy — decided
- **Goal of the test:** both validate demand *and* serve as a real build/learning project.
- **Product:** luxury cat goods. Designer/branded relationships are being explored but unlikely;
  realistic plan is premium **non-designer** goods. The "luxury" stays; the "designer" part is
  contingent on what the supply partner can land.
- **Dropped from the template:** the certified pre-owned **resale marketplace + authentication
  service**. These only make sense for branded designer goods (counterfeit risk, resale market)
  — neither applies to unbranded premium goods.
- **Positioning — working direction:** start as a **curated retailer** (sell premium third-party
  cat goods; easy to start, low risk, but thin moat) and use it as an **on-ramp to a house brand**
  (own line; harder, but owns the margin and the moat). Sequence:
  1. Validate as a curated retailer; learn which categories move; build an email list/audience.
  2. Private-label the proven categories, starting with the easiest (textiles, bowls, simple
     accessories — low tooling cost).
  3. Shift the mix toward KATTREND's own line over time; third-party brands stay as the
     credibility anchor while the house line grows.
  - *Why sequence:* luxury margin comes from brand equity. As a pure retailer that equity belongs
    to the brands carried, not to KATTREND. Owning the line is where the durable business is.
- **Brand consistency = the strategy:** the template's restrained monochrome editorial photo
  treatment is the unifying layer that makes a mixed catalog read as one coherent house rather
  than a reseller. Shoot *everything* in that same expensive, consistent style.

## Tech stack — decided
- **Frontend:** existing repo `kattrend` (github.com/lfr27/kattrend). Next.js 15 / React 19,
  App Router, TypeScript (strict), Tailwind, Framer Motion, self-hosted variable fonts, fully SSG.
  Luxury monochrome design system (noir + champagne accent; Cormorant Garamond display + Jost body).
- **Commerce backend:** **Shopify** (headless, via the Storefront API). Shopify handles the hard
  parts: customer accounts/login, transactional email, payments + PCI compliance, and
  inventory/order management (where the supply partner works).
- **Rejected:** a custom Laravel backend — redundant with Shopify, creates two sources of truth,
  unnecessary here. (Keep Luis's Laravel side-project as a learning exercise only.)

## Tech stack — open
- **Hosting:** AWS Amplify (familiar, already proven by Luis) vs Vercel (near-zero config for
  Next.js). Low-stakes; currently leaning Amplify for familiarity.
- **Email types** (don't conflate): transactional → Shopify; newsletter/marketing → Shopify Email
  or Klaviyo; company inbox (hello@…) → Google Workspace / Zoho.
- **Validation landing page + ads:** recommended to start during the legal runway; not yet begun.

## The template → real store
The `kattrend` repo is a polished but **commerce-agnostic** front-end shell: cart & checkout are
UI-only, products are hardcoded in `src/data/catalogue.ts`, wishlist is localStorage, and the
account/auth pages are shells. Nothing to rip out — the commerce layer is a clean, empty slot.

**Work to make it transact (with Shopify):**
1. Swap `src/data/catalogue.ts` (static product array) → live products from the Shopify
   Storefront API.
2. Wire the UI cart → Shopify cart + redirect to Shopify-hosted checkout (this is where
   payments/PCI are handled for you).
3. Accounts → Shopify customer accounts (wire the existing pages, or redirect to Shopify-hosted
   account pages).
4. Rendering: keep product pages mostly static + periodic revalidation (good for SEO), make the
   cart client-side. (Template is currently all-SSG, which goes stale for live price/stock.)

**Template content mapping:**
- *Keep:* luxury aesthetic / design system, product → cart → checkout flow, editorial **journal**
  (content marketing), wishlist.
- *Repurpose:* the `designers/` section → "house story" or "brands we carry."
- *Cut / park far-future:* resale marketplace + authentication service.

## Open questions — resume here
1. **(Live, unanswered) What can the supply partner actually source — recognizable premium brands,
   or premium-but-unbranded goods?** This sets how hard the brand and photography must work, and
   whether "curated retailer" is genuinely viable or effectively forces house-brand thinking.
   Also note: many premium brands gate who may sell them online and enforce minimum advertised
   prices — so the real question is "can we get desirable goods *and* are we authorized to sell
   them," not just "can we get expensive cat stuff." ← **next thing to answer.**
2. Final positioning call (current lean: curated retailer now → house brand later).
3. Hosting: Amplify vs Vercel (deferrable).
4. Start the validation landing page + ad test now? (recommended)
5. Designer relationships — pending, considered unlikely.

## Notes for picking this up
- When the build actually starts, distill a **lean `CLAUDE.md`** (≈40–80 lines: stack, conventions,
  commands, "always use X not Y") from this brief and commit it to the repo root — Claude reads it
  automatically at the start of every session. Keep this brief as the broader background doc it
  references.
