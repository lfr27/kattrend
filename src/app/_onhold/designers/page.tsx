import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { designers, productsByDesigner } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Designers",
  description:
    "The studios and ateliers behind KATTREND — Studio Brun, Maison Vell, and Atelier Noor. Architects and craftspeople designing furniture for the feline.",
};

export default function DesignersPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Ateliers"
        title={<>Designers &amp; Studios</>}
        description="We collaborate only with studios who treat restraint as the highest form of expression. Meet the architects and craftspeople behind the collection."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Designers" }]}
      />

      <section className="pb-s7">
        <div className="wrap grid gap-s4 md:grid-cols-3">
          {designers.map((d, i) => {
            const count = productsByDesigner(d.slug).length;
            return (
              <Reveal key={d.slug} delay={i * 0.08}>
                <Link href={`/designers/${d.slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <Image
                      src={img(d.image, 800, 1000)}
                      alt={d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale transition-[transform,filter] duration-slow ease-luxe group-hover:scale-[1.04] group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-s3">
                    <p className="text-[10px] uppercase tracking-luxe text-ash">{d.origin}</p>
                    <h2 className="mt-1.5 font-display text-display-sm font-light transition-colors group-hover:text-champagne-deep">
                      {d.name}
                    </h2>
                    <p className="mt-1 text-[12px] text-graphite">
                      {d.discipline} · {count} {count === 1 ? "piece" : "pieces"}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
