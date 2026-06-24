import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Certificate, Leaf } from "@/components/ui/icons";

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Pre-Owned",
    body: "Each piece graded against a 40-point standard and sold with a signed certificate of authenticity.",
  },
  {
    icon: Certificate,
    title: "Authentication Guarantee",
    body: "Provenance verified by our specialists. If it isn't genuine, your purchase is fully refunded.",
  },
  {
    icon: Leaf,
    title: "Sustainability-Focused Luxury",
    body: "Extending the life of fine objects — keeping craft in circulation and waste out of landfill.",
  },
];

export function Marketplace() {
  return (
    <section id="marketplace" className="relative overflow-hidden bg-noir py-s7 text-pearl">
      <div className="wrap grid items-center gap-[clamp(48px,7vw,120px)] lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <Eyebrow light className="mb-s3">
            Certified Designer Resale
          </Eyebrow>
          <h2 className="mb-s3 font-display text-display-xl font-light text-white">
            A Second Life,
            <br />
            <em className="italic text-champagne">Certified.</em>
          </h2>
          <p className="mb-s5 max-w-[46ch] text-[15px] leading-relaxed text-white/70">
            Our resale atelier gives exceptional pieces a continued story. Every item is inspected,
            authenticated, and restored before it returns to the floor — luxury, made circular.
          </p>

          <div className="mb-s5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="flex gap-s3 border-t border-white/10 py-s3 last:border-b"
              >
                <span className="shrink-0 text-champagne">
                  <f.icon className="h-[30px] w-[30px]" />
                </span>
                <div>
                  <h4 className="mb-1.5 font-sans text-[12px] font-medium uppercase tracking-wide text-white">
                    {f.title}
                  </h4>
                  <p className="max-w-[42ch] text-[13.5px] leading-relaxed text-white/60">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/marketplace" className="btn btn-ghost">
            Browse the Market
          </Link>
        </Reveal>

        <Reveal delay={0.15} className="relative aspect-[4/5]">
          <Image
            src={img("photo-1574158622682-e40e69881006", 1100, 1375)}
            alt="Certified pre-owned designer cat furniture in atelier light"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover grayscale-[22%] contrast-[1.05]"
          />
          <div className="absolute right-6 top-6 border border-champagne/40 bg-noir/40 px-5 py-4 text-center backdrop-blur-md">
            <div className="font-display text-2xl italic leading-none text-champagne">Verified</div>
            <div className="mt-2 text-[8.5px] uppercase tracking-wide text-white/75">
              Atelier Certified
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
