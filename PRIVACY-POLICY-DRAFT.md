<!--
  ┌─────────────────────────────────────────────────────────────────────────┐
  │  INTERNAL DRAFT — NOT PUBLISHED, NOT LINKED, NOT LIVE.                     │
  │  This file lives at the repo root on purpose: Next.js only serves routes  │
  │  under src/app/, so this document is NOT reachable on kattrend.com and is  │
  │  not indexed by anyone. It is a discussion draft for the partners meeting. │
  │  Do NOT move it into src/app/ or link it from the site until the team has  │
  │  agreed the content AND had it reviewed (see "Before this goes live").     │
  └─────────────────────────────────────────────────────────────────────────┘
-->

# Privacy Policy — DRAFT for discussion

> **Status:** Internal working draft · **Not published** · **For the next partners meeting**
> **Prepared:** 22 July 2026 · **Reflects:** the current holding/landing page only
> **⚠️ Not legal advice.** This is a plain-language starting point written to match what
> the site *actually* does today. It must be reviewed (ideally by a Danish lawyer or via
> Datatilsynet's guidance) before it is ever published.

---

## How to use this document at the meeting

The landing page today collects **almost no data** (no cookies, no analytics, no forms —
just an email link and normal hosting logs), so the policy can be short and honest. The
job of the meeting is to **close the open decisions** flagged in the boxes below, and to
agree on what changes when the real store launches.

### Decisions we need from the partners

| # | Decision | Why it matters |
|---|----------|----------------|
| 1 | **Legal entity name + form** (e.g. "Kattrend ApS" / "Kattrend IVS" / sole prop.) | The policy must name the *data controller*. Company isn't registered yet. |
| 2 | **CVR number + registered address** | Required identity details once registered. |
| 3 | **Confirm hosting providers** (currently Vercel + Cloudflare) | They are our data processors and involve US data transfer — must be listed accurately. |
| 4 | **Where the `info@kattrend.com` inbox is hosted** (Google Workspace / Zoho / other) | That provider processes anyone who emails us. |
| 5 | **Retention periods** — how long we keep emails and logs | Placeholders below; the team should pick real numbers. |
| 6 | **Who is the day-to-day privacy contact?** | One person should own privacy requests. |

> 💬 **Discussion boxes** like this appear throughout, marking open questions and choices.
> Everything outside a box is proposed policy text.

---

## 1. Who we are

Kattrend ("**Kattrend**", "**we**", "**us**") is a premium cat-furniture and cat-products
brand based in Aalborg, Denmark. This policy explains how we handle personal data on our
website, **kattrend.com**.

> 💬 **Decision 1 & 2.** Before publishing, replace this with the registered entity:
> *"Kattrend [ApS], CVR [number], [registered address], Aalborg, Denmark."* Until the
> company is registered we should not publish a policy that implies a legal entity exists.

**Data controller / contact:** info@kattrend.com

> 💬 **Decision 6.** Consider a dedicated alias, e.g. `privacy@kattrend.com`, so requests
> don't get lost in the general inbox.

---

## 2. What this policy covers

Right now, kattrend.com is a **single informational landing page**. It has:

- **No cookies** and no tracking, advertising, or analytics technologies.
- **No account creation, sign-up, newsletter, or contact form.**
- A self-hosted introduction video and self-hosted fonts (nothing is loaded from
  third-party services that would see our visitors).
- One `mailto:` link so you can email us directly if you want to.

Because of this, the amount of personal data we handle today is very small. The full
online shop (with accounts, cart, and checkout) is **not yet live** — when it launches,
this policy will be expanded (see [section 9](#9-what-changes-when-the-shop-launches)).

---

## 3. The personal data we process today

### a) If you email us
If you contact `info@kattrend.com`, we receive and keep your **email address, your name**
(if you give it), and **whatever you choose to write** to us.

- **Why (legal basis):** our legitimate interest in responding to and managing enquiries,
  and, where you're contacting us about a possible business relationship, taking steps at
  your request before any agreement (GDPR Art. 6(1)(f) and 6(1)(b)).

### b) Technical logs from hosting
Like almost every website, our hosting and content-delivery providers automatically record
technical information when a page is requested — typically your **IP address**, browser and
device type, referring page, and the date/time of the request.

- **Why (legal basis):** our legitimate interest in keeping the site secure, available, and
  working correctly, and in preventing abuse (GDPR Art. 6(1)(f)).
- We do **not** use this information to identify or profile individual visitors.

> 💬 We do **not** currently collect anything else — no location tracking, no marketing
> profiles, no cookies. Keep this section honest: if we add *anything* (even a simple
> analytics tag), it has to be described here first.

---

## 4. Cookies

**This website does not use cookies** or similar technologies (local storage, tracking
pixels, fingerprinting). Because we set no non-essential cookies, no cookie-consent banner
is required for the current landing page.

> 💬 This is the single biggest thing that changes at store launch. A shop needs at least a
> cart/session mechanism and will almost certainly involve analytics and/or marketing tools —
> at that point we'll need a proper **cookie policy + consent banner**. Flag for the roadmap.

---

## 5. Who we share data with (our processors)

We don't sell personal data and we don't share it for advertising. We do rely on a few
trusted service providers ("data processors") to run the site:

| Provider | What they do | Where |
|----------|-------------|-------|
| **Vercel Inc.** | Website hosting / serving the page | USA |
| **Cloudflare, Inc.** | Domain, DNS, security/CDN | USA |
| **[Email provider — TBD]** | Hosting the `info@kattrend.com` inbox | [TBD] |

> 💬 **Decisions 3 & 4.** Confirm this list is accurate and complete before publishing.
> We should also have a signed **Data Processing Agreement (DPA)** with each of them — most
> offer a standard one. Add/adjust rows as the stack is finalised.

### International transfers
Some of these providers process data in the **United States**. Where that happens, transfers
are protected by appropriate safeguards — such as the **EU–U.S. Data Privacy Framework** and/or
the European Commission's **Standard Contractual Clauses**.

> 💬 Confirm each US provider's transfer mechanism when we sign their DPA, and cite it here.

---

## 6. How long we keep data

- **Emails / correspondence:** kept for as long as needed to deal with your enquiry and our
  relationship, then deleted. *(Proposed: delete after [12–24 months] of inactivity.)*
- **Hosting logs:** retained for a short period for security and troubleshooting, per our
  providers' defaults. *(Proposed: [30–90 days].)*

> 💬 **Decision 5.** Replace the bracketed ranges with numbers the team is comfortable with
> and can actually stick to.

---

## 7. Your rights

If you're in the EU/EEA, the GDPR gives you the right to:

- **access** the personal data we hold about you;
- ask us to **correct** inaccurate data;
- ask us to **erase** your data ("right to be forgotten");
- **restrict** or **object to** our processing;
- request **portability** of data you gave us;
- **withdraw consent** at any time (where we rely on consent — currently we don't).

To exercise any of these, email **info@kattrend.com**. We'll respond within one month.

---

## 8. Complaints

If you believe we've mishandled your personal data, you can contact us first — we'd like the
chance to put it right. You also have the right to complain to the Danish supervisory
authority:

> **Datatilsynet** (Danish Data Protection Agency)
> Carl Jacobsens Vej 35, 2500 Valby, Denmark
> Tel: +45 33 19 32 00 · dt@datatilsynet.dk · [datatilsynet.dk](https://www.datatilsynet.dk)

---

## 9. What changes when the shop launches

*(Not part of the live policy — a planning note for the team.)*

When kattrend.com becomes a working store (planned on **Shopify**, headless), this policy
will need substantial additions:

- **Cookies & consent** — a cookie policy and consent banner for cart/session, analytics,
  and any marketing tags.
- **Shopify** as a processor — customer accounts, orders, addresses, and order history.
- **Payments** — handled by Shopify / the payment provider (they take card data directly;
  we describe the flow but don't store card numbers).
- **Marketing email / newsletter** — if we use Shopify Email or Klaviyo, we need a lawful
  basis (consent), a clear opt-in, and an unsubscribe mechanism.
- **Analytics** — decide cookieless (e.g. Vercel/Plausible/Fathom, lighter footprint) vs.
  Google Analytics (needs consent); document whichever we choose.
- **DPAs** — a signed data-processing agreement with every new processor.

---

## 10. Changes to this policy

We may update this policy as our services change. The "last updated" date at the top will
always show the current version.

---

### Before this goes live — checklist

- [ ] Company registered; legal name + CVR + address filled in (Decisions 1 & 2)
- [ ] Processor list confirmed and DPAs signed (Decisions 3 & 4)
- [ ] Retention periods agreed (Decision 5)
- [ ] Privacy contact assigned (Decision 6)
- [ ] Reviewed by a lawyer or against Datatilsynet guidance
- [ ] *Then* create the `src/app/privacy/page.tsx` route and link it from the footer
