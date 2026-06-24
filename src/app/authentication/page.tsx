import type { Metadata } from "next";
import Image from "next/image";
import { img } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/primitives";
import { ShieldCheck, Certificate, Leaf } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Authentication",
  description:
    "Every KATTREND resale piece is authenticated against a 40-point standard and issued a signed certificate of authenticity. Genuine, guaranteed.",
};

const criteria = [
  "Provenance & ownership history",
  "Maker's marks & signatures",
  "Material composition & origin",
  "Construction & joinery integrity",
  "Finish, patina & restoration record",
  "Hardware & fittings verification",
];

export default function AuthenticationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Authentication Services"
        title={
          <>
            Genuine,
            <br />
            Guaranteed.
          </>
        }
        description="Authentication is the foundation of our resale market. Every certified piece is examined by our specialists and issued documentation that travels with it for life."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Authentication" }]}
      />

      {/* The standard */}
      <section className="pb-s6">
        <div className="wrap grid items-center gap-s5 md:grid-cols-2 md:gap-s6">
          <Reveal className="relative aspect-[5/6] overflow-hidden bg-mist">
            <Image
              src={img("photo-1583511655857-d19b40a7a54e", 900, 1080)}
              alt="Atelier authentication examination"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale-[16%]"
            />
            <div className="absolute right-5 top-5 border border-champagne/40 bg-noir/40 px-5 py-4 text-center backdrop-blur-md">
              <div className="font-display text-2xl italic leading-none text-champagne">40</div>
              <div className="mt-2 text-[8.5px] uppercase tracking-wide text-pearl">
                Point Standard
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow kicker mb-s3">The Standard</span>
            <h2 className="font-display text-display-md font-light">
              A 40-Point Examination
            </h2>
            <p className="mt-s3 max-w-[44ch] text-[15px] leading-relaxed text-graphite">
              Each piece submitted to our resale market undergoes a rigorous assessment across six
              domains. Only those that pass receive certification.
            </p>
            <ul className="mt-s4 grid gap-x-s4 gap-y-3 sm:grid-cols-2">
              {criteria.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[13.5px] text-ink">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-champagne-deep" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Guarantees band */}
      <section className="border-y border-mist bg-ivory py-s6">
        <div className="wrap grid gap-s4 md:grid-cols-3">
          {[
            { icon: Certificate, title: "Signed Certificate", body: "Issued for every certified piece, documenting grade and provenance." },
            { icon: ShieldCheck, title: "Money-Back Guarantee", body: "If a piece is ever found not genuine, your purchase is fully refunded." },
            { icon: Leaf, title: "Lifetime Record", body: "Authentication travels with the object, supporting its future resale." },
          ].map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="text-center">
                <g.icon className="mx-auto h-7 w-7 text-champagne-deep" />
                <h3 className="mt-s3 font-display text-[1.5rem] font-light">{g.title}</h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-graphite">
                  {g.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-s7 text-center">
        <div className="wrap">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] font-display text-display-md font-light text-balance">
              Have a piece to authenticate or sell?
            </h2>
            <p className="mx-auto mt-s3 max-w-[42ch] text-[14px] leading-relaxed text-graphite">
              Submit your designer cat furniture for assessment. Our specialists will respond within
              two business days.
            </p>
            <div className="mt-s4 flex justify-center gap-s2">
              <ButtonLink href="/account" variant="solid">
                Submit a Piece
              </ButtonLink>
              <ButtonLink href="/marketplace" variant="outline">
                Browse Certified
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
