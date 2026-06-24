// ============================================================
// KATTREND — Catalogue data & domain types
// Single source of truth for products, collections, designers,
// and editorial content across the application.
// ============================================================

export type Condition = "new" | "certified-pre-owned" | "limited-edition";

export interface Product {
  slug: string;
  name: string;
  designer: string;
  designerSlug: string;
  collection: string;
  price: number;
  wasPrice?: number;
  currency: string;
  condition: Condition;
  /** Unsplash image id (object/interior). Presentation kept monochrome via CSS. */
  image: string;
  imageAlt: string;
  hoverImage?: string;
  materials: string[];
  dimensions: string;
  description: string;
  /** remaining units for scarcity messaging; undefined = in stock */
  stock?: number;
  edition?: string; // e.g. "12 of 50"
  authenticated?: boolean;
  isBestseller?: boolean;
}

export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  index: string; // "01 — Architecture"
  description: string;
  image: string;
  imageAlt: string;
}

export interface Designer {
  slug: string;
  name: string;
  origin: string;
  discipline: string;
  bio: string;
  image: string;
}

export interface JournalEntry {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  quote: string;
  emphasis: string;
  name: string;
  role: string;
  initial: string;
}

// ------------------------------------------------------------
// Collections
// ------------------------------------------------------------
export const collections: Collection[] = [
  {
    slug: "designer-cat-trees",
    name: "Designer Cat Trees",
    tagline: "Architecture",
    index: "01 — Architecture",
    description:
      "Vertical sculpture for the climbing instinct. Engineered as load-bearing furniture, finished as objects of design.",
    image: "photo-1573865526739-10659fec78a5",
    imageAlt: "Sculptural designer cat tree in a minimal interior",
  },
  {
    slug: "luxury-cat-lounges",
    name: "Luxury Cat Lounges",
    tagline: "Repose",
    index: "02 — Repose",
    description:
      "Low, considered forms for rest. Upholstered by ateliers in materials chosen for both paw and palette.",
    image: "photo-1592194996308-7b43878e84a6",
    imageAlt: "Luxury upholstered cat lounge",
  },
  {
    slug: "limited-edition",
    name: "Limited Edition Pieces",
    tagline: "Rarity",
    index: "03 — Rarity",
    description:
      "Numbered works from our designer collaborations. Made in small runs, certified, and never repeated.",
    image: "photo-1545249390-6bdfa286032f",
    imageAlt: "Limited edition designer cat furniture piece",
  },
];

// ------------------------------------------------------------
// Designers
// ------------------------------------------------------------
export const designers: Designer[] = [
  {
    slug: "studio-brun",
    name: "Studio Brun",
    origin: "Copenhagen",
    discipline: "Architectural furniture",
    bio: "A Copenhagen practice working at the intersection of architecture and object design. Studio Brun treats every piece as a small building — concerned with load, light, and the honest expression of material.",
    image: "photo-1524758631624-e2822e304c36",
  },
  {
    slug: "maison-vell",
    name: "Maison Vell",
    origin: "Paris",
    discipline: "Upholstery & form",
    bio: "Founded on the conviction that comfort is a discipline, Maison Vell brings couture upholstery traditions to feline repose. Each lounge is hand-finished in the atelier's Marais workrooms.",
    image: "photo-1493663284031-b7e3aefcae8e",
  },
  {
    slug: "atelier-noor",
    name: "Atelier Noor",
    origin: "Milan",
    discipline: "Stone & monolith",
    bio: "A Milanese atelier devoted to stone. Atelier Noor sources travertine and marble offcuts from Italian quarries, giving noble material a second life as quiet, weighty furniture.",
    image: "photo-1583511655857-d19b40a7a54e",
  },
];

// ------------------------------------------------------------
// Products
// ------------------------------------------------------------
export const products: Product[] = [
  {
    slug: "monolith-tower",
    name: "The Monolith Tower",
    designer: "Studio Brun",
    designerSlug: "studio-brun",
    collection: "designer-cat-trees",
    price: 1480,
    currency: "€",
    condition: "new",
    image: "photo-1606214174585-fe31582dc6ee",
    imageAlt: "The Monolith Tower designer cat tree",
    materials: ["Solid oak", "Wool felt", "Powder-coated steel"],
    dimensions: "H 168 × W 60 × D 60 cm",
    description:
      "A stacked composition of solid oak volumes, each platform cantilevered to invite ascent. The Monolith reads as architecture first and cat furniture second — which is precisely its intent.",
    isBestseller: true,
  },
  {
    slug: "levitation-lounge",
    name: "Lévitation Lounge",
    designer: "Maison Vell",
    designerSlug: "maison-vell",
    collection: "luxury-cat-lounges",
    price: 940,
    currency: "€",
    condition: "new",
    image: "photo-1615796153287-98eacf0abb13",
    imageAlt: "Lévitation Lounge upholstered cat bed",
    materials: ["Bouclé wool", "Walnut base"],
    dimensions: "H 34 × W 72 × D 48 cm",
    description:
      "A softly bolstered chaise raised on a slender walnut frame. Upholstered in undyed bouclé, it offers the warmth of repose without surrendering line.",
  },
  {
    slug: "travertine-perch",
    name: "Travertine Perch",
    designer: "Atelier Noor",
    designerSlug: "atelier-noor",
    collection: "limited-edition",
    price: 880,
    wasPrice: 1260,
    currency: "€",
    condition: "certified-pre-owned",
    image: "photo-1518791841217-8f162f1e1131",
    imageAlt: "Travertine Perch stone cat pedestal",
    materials: ["Roman travertine", "Brushed brass"],
    dimensions: "H 96 × W 40 × D 40 cm",
    description:
      "A column of Roman travertine crowned with a brass-rimmed rest. Certified pre-owned and restored by our atelier, sold with full provenance.",
    authenticated: true,
  },
  {
    slug: "cocoon-suspendu",
    name: "Cocoon Suspendu",
    designer: "Studio Brun",
    designerSlug: "studio-brun",
    collection: "luxury-cat-lounges",
    price: 1120,
    currency: "€",
    condition: "new",
    image: "photo-1495360010541-f48722b34f7d",
    imageAlt: "Cocoon Suspendu suspended cat bed",
    materials: ["Saddle leather", "Blackened steel"],
    dimensions: "H 120 × Ø 46 cm",
    description:
      "A suspended vessel in saddle leather, hung from a single blackened-steel arc. Movement is gentle and deliberate — a still point in a considered room.",
  },
  {
    slug: "noir-etagere",
    name: "Noir Étagère",
    designer: "Maison Vell",
    designerSlug: "maison-vell",
    collection: "limited-edition",
    price: 2350,
    currency: "€",
    condition: "limited-edition",
    image: "photo-1592194996308-7b43878e84a6",
    imageAlt: "Noir Étagère shelving cat tower",
    materials: ["Ebonised ash", "Smoked glass"],
    dimensions: "H 184 × W 90 × D 36 cm",
    description:
      "Part shelving, part climbing structure, the Noir Étagère merges library and feline architecture. A numbered edition, finished in ebonised ash.",
    edition: "12 of 50",
    stock: 3,
    authenticated: true,
  },
  {
    slug: "sable-column",
    name: "Sable Column",
    designer: "Atelier Noor",
    designerSlug: "atelier-noor",
    collection: "designer-cat-trees",
    price: 690,
    currency: "€",
    condition: "new",
    image: "photo-1561948955-570b270e7c36",
    imageAlt: "Sable Column scratching post",
    materials: ["Sisal rope", "Oak core"],
    dimensions: "H 110 × Ø 22 cm",
    description:
      "A scratching column reduced to its essence — a single oak core wound in natural sisal, weighted for stability and built to last decades.",
    isBestseller: true,
  },
  {
    slug: "marble-basin-bed",
    name: "Marble Basin Bed",
    designer: "Studio Brun",
    designerSlug: "studio-brun",
    collection: "luxury-cat-lounges",
    price: 1540,
    currency: "€",
    condition: "new",
    image: "photo-1559235038-1b0fadf76f78",
    imageAlt: "Marble Basin Bed",
    materials: ["Carrara marble", "Cashmere cushion"],
    dimensions: "H 22 × W 64 × D 50 cm",
    description:
      "A shallow basin carved from a single block of Carrara, lined with a removable cashmere cushion. Cool stone, warm wool — a study in contrast.",
  },
  {
    slug: "oslo-daybed",
    name: "Oslo Daybed",
    designer: "Maison Vell",
    designerSlug: "maison-vell",
    collection: "luxury-cat-lounges",
    price: 1150,
    wasPrice: 1680,
    currency: "€",
    condition: "certified-pre-owned",
    image: "photo-1511044568932-338cba0ad803",
    imageAlt: "Oslo Daybed cat lounge",
    materials: ["Linen weave", "Ash frame"],
    dimensions: "H 30 × W 88 × D 44 cm",
    description:
      "A low daybed in natural linen on a tapered ash frame. Certified pre-owned, restored, and authenticated — luxury made circular.",
    authenticated: true,
  },
];

// ------------------------------------------------------------
// Journal
// ------------------------------------------------------------
export const journalEntries: JournalEntry[] = [
  {
    slug: "the-architecture-of-rest",
    category: "Design",
    title: "The Architecture of Rest",
    excerpt:
      "How the principles of modernist building — load, light, and honest material — translate to objects scaled for the feline.",
    author: "Editorial Desk",
    date: "May 2026",
    readTime: "6 min",
    image: "photo-1524758631624-e2822e304c36",
    imageAlt: "Modernist interior with designer furniture",
  },
  {
    slug: "in-conversation-studio-brun",
    category: "Designer Interview",
    title: "In Conversation: Studio Brun",
    excerpt:
      "The Copenhagen practice on treating a cat tree as a small building, and why restraint is the hardest brief of all.",
    author: "Mei Tanaka",
    date: "April 2026",
    readTime: "9 min",
    image: "photo-1493663284031-b7e3aefcae8e",
    imageAlt: "Designer studio interior",
  },
  {
    slug: "the-case-for-certified-resale",
    category: "Sustainability",
    title: "The Case for Certified Resale",
    excerpt:
      "Why extending the life of fine objects is the most luxurious choice of all — and how authentication makes it possible.",
    author: "Editorial Desk",
    date: "April 2026",
    readTime: "5 min",
    image: "photo-1583511655857-d19b40a7a54e",
    imageAlt: "Restored designer furniture in atelier",
  },
  {
    slug: "living-with-stone",
    category: "Interiors",
    title: "Living With Stone",
    excerpt:
      "Travertine, marble, and the quiet weight they bring to a room — a study in material for the design-conscious home.",
    author: "Isabelle Roux",
    date: "March 2026",
    readTime: "7 min",
    image: "photo-1505693416388-ac5ce068fe85",
    imageAlt: "Stone interior detail",
  },
];

// ------------------------------------------------------------
// Testimonials
// ------------------------------------------------------------
export const testimonials: Testimonial[] = [
  {
    quote: "It is the only piece in my living room my architect did not ask me to",
    emphasis: "remove. My cat agrees.",
    name: "Isabelle Roux",
    role: "Interior Designer · Paris",
    initial: "I",
  },
  {
    quote: "I bought pre-owned and could not tell. The certificate, the restoration —",
    emphasis: "flawless. This is how resale should feel.",
    name: "Henrik Møller",
    role: "Collector · Copenhagen",
    initial: "H",
  },
  {
    quote: "Finally, furniture for my cat that belongs in the",
    emphasis: "photographs, not hidden behind the sofa.",
    name: "Mei Tanaka",
    role: "Stylist · Milan",
    initial: "M",
  },
];

// ------------------------------------------------------------
// Lookups
// ------------------------------------------------------------
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getCollection = (slug: string) => collections.find((c) => c.slug === slug);
export const getDesigner = (slug: string) => designers.find((d) => d.slug === slug);
export const getJournalEntry = (slug: string) => journalEntries.find((j) => j.slug === slug);
export const productsByCollection = (slug: string) =>
  products.filter((p) => p.collection === slug);
export const productsByDesigner = (slug: string) =>
  products.filter((p) => p.designerSlug === slug);
export const preOwnedProducts = () =>
  products.filter((p) => p.condition === "certified-pre-owned");

export const conditionLabel: Record<Condition, string> = {
  new: "New",
  "certified-pre-owned": "Certified Pre-Owned",
  "limited-edition": "Limited Edition",
};
