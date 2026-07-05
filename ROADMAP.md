# KATTREND — Roadmap & Go-Live Checklist

> Actionable checklist for taking KATTREND from staging to a live, secure store.
> Background/strategy lives in [`kattrend-project-brief.md`](./kattrend-project-brief.md).
>
> **Last updated:** 5 July 2026

## Current status
- ✅ Frontend deployed on **Vercel** (host decision made — Vercel over Amplify/Simply).
- ✅ **Staging live** at `dev.kattrend.com` → auto-deploys on every push to `development`.
- ⚫ **Production `kattrend.com` intentionally dark** until go-live (not attached in Vercel; no apex DNS records yet).
- Git flow: build on `development`, merge to `main` = production (go-live).

## Phase 1 — Validation landing page (current)
- [ ] Finalize landing page content for the validation/ad test.
- [ ] Add email capture (newsletter signup) — measure signups / cost-per-email.
- [ ] Set up analytics.
- [ ] Start paid ad test during the legal/registration runway.

## Phase 2 — Shopify commerce build (headless)
- [ ] Connect Shopify Storefront API; store token in **Vercel env vars** (per-environment: dev store on `development`, live store on `main`).
- [ ] Swap `src/data/catalogue.ts` → live products from Shopify.
- [ ] Wire UI cart → Shopify cart → Shopify-hosted checkout (payments/PCI handled by Shopify).
- [ ] Wire accounts → Shopify customer accounts.
- [ ] Product pages: static + periodic revalidation (SEO); cart client-side.
- [ ] **Wishlist:** keep the existing localStorage wishlist (`src/lib/wishlist.tsx`) for launch — it's a
      custom feature (Shopify has no native wishlist) and works with no backend. *Later (optional):* sync
      to the logged-in customer's Shopify account via **customer metafields** so it follows them across
      devices (hybrid: localStorage for guests → merge into account on login). Update stored keys from
      product slugs to Shopify product IDs/handles when connecting Shopify.

## Phase 3 — Go-live (when legally clear to sell)
- [ ] Vercel → Domains → add `kattrend.com` + `www.kattrend.com` (Production).
- [ ] Cloudflare → DNS: `A @ → 76.76.21.21` and `CNAME www → cname.vercel-dns.com` (DNS only).
- [ ] Merge `development` → `main` → production deploys, domain goes live over HTTPS.
- [ ] Complete the **Security & Compliance checklist** below first.

---

## 🔒 Security & Compliance checklist
Context: Vercel + Cloudflare (PaaS) already handle TLS/cert renewal, OS patching, DDoS at the edge,
and — via Shopify's hosted checkout — PCI compliance. The items below are the parts that remain ours.

### Account hygiene (do now — highest-value)
- [x] **2FA enabled** on GitHub, Vercel, Cloudflare accounts.
- [ ] **Branch protection on `main`** in GitHub: require pull request, block force-push/deletion.
- [ ] **GitHub Dependabot alerts** enabled (flags vulnerable npm packages).
- [ ] **GitHub secret scanning** enabled (catches accidentally committed secrets; `.env*` already gitignored).
- [ ] Review who has access to the Vercel project, Cloudflare zone, and GitHub repo (least privilege).

### Before go-live (app hardening)
- [ ] **Security headers** via Next.js config/middleware: Content-Security-Policy, HSTS,
      X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- [ ] **🇩🇰 GDPR / EU compliance** (required for `.dk`/EU audience): privacy policy, cookie policy,
      and a cookie-consent banner before setting non-essential cookies/analytics.
- [ ] Terms of service / trade conditions (Danish "handelsbetingelser") for selling online.
- [ ] Re-evaluate enabling **Cloudflare proxy (orange cloud)** for WAF, bot protection, and
      edge rate limiting (currently DNS-only for cert issuance).

### When Shopify + dynamic features / forms are added
- [ ] Storefront API token in Vercel env vars only. If ever using the Shopify **Admin** API,
      keep that token strictly server-side — never expose to the client.
- [ ] **Verify Shopify webhook signatures** for any webhook endpoints.
- [ ] **Rate limiting + input validation** on any API routes and forms (contact, newsletter).
- [ ] Keep dependencies current (act on Dependabot PRs).
- [ ] Add security.txt / responsible-disclosure contact (optional, but the security-aware team may want it).

### Ongoing
- [ ] Periodic dependency audit (`npm audit`) and review of Dependabot alerts.
- [ ] Rotate/scope any tokens on team changes.
