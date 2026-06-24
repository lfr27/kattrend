import type { Metadata } from "next";
import Image from "next/image";
import { preOwnedProducts } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ButtonLink } from "@/components/ui/primitives";
import { ShieldCheck, Certificate, Leaf } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Certified Designer Resale",
  description:
    "KATTREND's certified resale platform. Authenticated, restored, pre-owned designer cat furniture — luxury made circular, with a full authentication guarantee.",
};

const process = [
  {
    step: "01",
    title: "Submit",
    body: "Tell us about your piece. Our specialists review provenance, condition, and authenticity before acceptance.",
  },
  {
    step: "02",
    title: "Authenticate",
    body: "Each accepted piece is graded against a 40-point standard and issued a signed certificate of authenticity.",
  },
  {
    step: "03",
    title: "Restore",
    body: "Our atelier returns the object to its finest condition — refinishing, reupholstering, and conserving as needed.",
  },
  {
    step: "04",
    title: "Rehome",
    body: "Listed with full transparency and delivered white-glove to its next custodian, guaranteed genuine.",
  },
];

export default function MarketplacePage() {
  const listings = preOwnedProducts();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[64vh] min-h-[480px] items-end overflow-hidden bg-noir pt-[38px]">
        <Image
          src={img("photo-1574158622682-e40e69881006", 2000, 1300)}
          alt="Certified pre-owned designer cat furniture"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.72] grayscale-[20%] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/50 via-transparent to-noir/85" />
        <div className="wrap relative z-10 pb-s6">
          <Reveal>
            <span className="eyebrow kicker !text-champagne mb-s3">Certified Designer Resale</span>
            <h1 className="max-w-[18ch] font-display text-display-xl font-light text-white">
              A Second Life, <em className="italic text-champagne">Certified.</em>
            </h1>
            <p className="mt-s3 max-w-[46ch] text-[15px] leading-relaxed text-white/80">
              Authenticated, restored, and guaranteed. Our resale atelier extends the life of
              exceptional pieces — the most considered way to own design.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="wrap py-s4">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Resale" }]} />
      </div>

      {/* Guarantees */}
      <section className="pb-s6">
        <div className="wrap grid gap-s3 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Authentication Guarantee", body: "Verified genuine by our specialists, or your purchase is fully refunded." },
            { icon: Certificate, title: "40-Point Certification", body: "Every piece graded and issued a signed certificate of authenticity." },
            { icon: Leaf, title: "Circular Luxury", body: "Extending the life of fine objects — keeping craft in circulation." },
          ].map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="h-full border border-mist bg-paper p-s4">
                <g.icon className="h-7 w-7 text-champagne-deep" />
                <h3 className="mt-s3 font-display text-[1.4rem] font-light">{g.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Listings */}
      <section className="pb-s7">
        <div className="wrap">
          <Reveal className="mb-s5 flex items-end justify-between">
            <div>
              <span className="eyebrow kicker mb-s3 block">Now Available</span>
              <h2 className="font-display text-display-md font-light">Certified Pre-Owned</h2>
            </div>
          </Reveal>
          <ProductGrid products={listings} columns={4} />
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-mist bg-ivory py-s7">
        <div className="wrap">
          <Reveal className="mb-s5 text-center">
            <span className="eyebrow kicker justify-center mb-s3">How It Works</span>
            <h2 className="font-display text-display-md font-light">The Resale Process</h2>
          </Reveal>
          <div className="grid gap-s4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="border-t border-ink pt-s3">
                  <span className="font-display text-[1.6rem] italic text-champagne-deep">
                    {p.step}
                  </span>
                  <h3 className="mt-s2 font-display text-[1.5rem] font-light">{p.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-graphite">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-s6 text-center" delay={0.1}>
            <ButtonLink href="/account" variant="outline">
              Sell Your Piece
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
