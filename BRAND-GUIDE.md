# Kattrend — Brand Reference

> Colour and type reference for the Kattrend landing page, pulled directly from the live
> stylesheet (`src/app/holding.css`) and font setup (`src/app/layout.tsx`).
> Use this as the source of truth when rebuilding the brand sheet in Illustrator.
>
> **Brand:** Kattrend — premium cat furniture · Aalborg, Denmark
> **Aesthetic:** architectural, restrained, warm-noir. Black-stained oak, steel and wool.

---

## 1. Colour palette

All values are **sRGB / HEX** (authoritative for screen). For print, convert to CMYK using
your chosen profile in Illustrator — don't hardcode CMYK from these numbers.

### Foundation — darks
| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Velvet** | `#16130F` | 22, 19, 15 | Primary background (the "black-stained oak" ground) |
| **Panel** | `#1A1714` | 26, 23, 20 | Raised surfaces — e.g. the video frame |
| **Line** | `#2A251F` | 42, 37, 31 | Hairline borders & dividers |

### Neutrals — lights
| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Off-white** | `#F3F1EC` | 243, 241, 236 | Light-section background + headings on dark |
| **Ecru** | `#D5CEBF` | 213, 206, 191 | Body text on dark |
| **Greige** | `#8D8678` | 141, 134, 120 | Muted / meta / secondary text |
| **Ink** | `#3A342C` | 58, 52, 44 | Body text on light ("paper") sections |

### Accent — oxblood family
| Name | HEX | RGB | Role |
|------|-----|-----|------|
| **Oxblood** | `#8A3B2E` | 138, 59, 46 | Primary accent — rule bars, focus outlines, eyebrows on light |
| **Oxdark** | `#6F2F24` | 111, 47, 36 | Deeper accent — shadows / hover / pressed states |
| **Tint** | `#C9A99B` | 201, 169, 155 | Soft rose — links and eyebrows on dark grounds |

### Quick hierarchy
- **Primary ground:** Velvet `#16130F`
- **Primary light:** Off-white `#F3F1EC`
- **Signature accent:** Oxblood `#8A3B2E`
- **Everything else** is supporting neutral or a tint of the above.

> **Detail:** the faint hero grid is pure white at **2.2 % opacity** (`rgba(255,255,255,0.022)`)
> over Velvet — effectively a barely-there structural texture, not a palette colour.

---

## 2. Typography

Three typefaces, each with a distinct job. All three are **free Google Fonts** — install them
in Illustrator from fonts.google.com.

| Role | Typeface | Weights in use | Styles |
|------|----------|----------------|--------|
| **Display / serif** | **Newsreader** | 400, 500 | Regular + *Italic* |
| **Body / sans** | **Schibsted Grotesk** | 400, 500, 600 | Regular |
| **Detail / mono** | **Spline Sans Mono** | 400, 500 | Regular |

**Fallback stacks** (if a face is unavailable):
- Serif → `Newsreader, Georgia, serif`
- Sans → `Schibsted Grotesk, system-ui, Arial, sans-serif`
- Mono → `Spline Sans Mono, ui-monospace, monospace`

### Pairing logic
- **Newsreader** carries all the personality — headlines, the wordmark, and italic flourishes
  (signature, tagline). Editorial, literary, warm.
- **Schibsted Grotesk** is the quiet workhorse for body and labels — clean and neutral so the
  serif stays the star.
- **Spline Sans Mono** appears sparingly for small technical captions — adds a precise,
  "spec-sheet" note that suits the made-to-order, engineered story.

### Type hierarchy (as used on the page)
| Element | Typeface | Size | Weight | Case / tracking |
|---------|----------|------|--------|-----------------|
| Wordmark "KATTREND" | Newsreader | 15 px | 500 | UPPERCASE · +0.26em |
| Eyebrow / label | Schibsted Grotesk | 13 px | 600 | UPPERCASE · +0.2em |
| H1 (hero) | Newsreader | 40 → 68 px* | 500 | Sentence · line-height 1.08 |
| Section title | Newsreader | 27 → 38 px* | 500 | Sentence · line-height 1.18 |
| Manifesto H2 (on light) | Newsreader | 28 → 42 px* | 500 | Sentence · line-height 1.12 |
| Lead paragraph | Schibsted Grotesk | 20 px | 400 | line-height 1.75 |
| Body copy (dark) | Schibsted Grotesk | 17 px | 400 | line-height 1.7 |
| Body copy (light "paper") | Schibsted Grotesk | 18 px | 400 | line-height 1.75 |
| Signature line | Newsreader *Italic* | 22 px | 400 | — |
| Footer tagline | Newsreader *Italic* | 17 px | 400 | — |
| Caption | Spline Sans Mono | 12.5 px | 400 | UPPERCASE · +0.18em |
| Meta / fine print | Schibsted Grotesk | 14 px | 400 | Greige |

\* *Responsive range — scales with viewport width; use the larger value for print/large layouts.*

---

## 3. Logo marks

| Mark | Composition | Colours |
|------|-------------|---------|
| **Primary — "K" monogram** | Serif "K" inside a rounded square | Square `#232323` · letter Off-white `#F3F1EC` |
| **Secondary — circle mark** | Off-white disc on a dark square | Square Velvet `#16130F` · disc Off-white `#F3F1EC` |

**Wordmark:** "KATTREND" set in **Newsreader 500, uppercase, +0.26em tracking**, in Off-white
on dark grounds. Mark and wordmark are set side-by-side with a small gap.

---

## 4. Voice — supporting lines

Pulled from the live page, useful for the sheet:

- **Primary tagline:** *"The design your cat deserves."*
- **Hero line:** *"A piece you don't want to hide."*
- **Ethos:** *"Furniture first, cat second."*
- **Origin:** Kattrend · Aalborg, Denmark · info@kattrend.com

---

> **Note on the future store.** This sheet documents the current **landing page**. The
> previously-built full e-commerce site (archived on the `archive/full-site` branch) used a
> different type pairing — **Cormorant Garamond** (display) + **Jost** (body) — should the two
> ever need reconciling.
