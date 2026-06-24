import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { collections } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore KATTREND's collections — designer cat trees, luxury cat lounges, and limited edition pieces. Architectural furniture conceived for the feline.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Collections"
        title={
          <>
            Three Houses
            <br />
            of Form
          </>
        }
        description="Each collection is a study in proportion — conceived for the cat, composed for the room it will quietly command."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Collections" }]}
      />

      <section className="pb-s7">
        <div className="wrap space-y-s3">
          {collections.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <Link
                href={`/collections/${c.slug}`}
                className="group grid items-stretch gap-0 overflow-hidden border border-mist bg-paper md:grid-cols-[1fr_1fr] lg:grid-cols-[1.2fr_1fr]"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                  <Image
                    src={img(c.image, 1200, 800)}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover grayscale-[10%] transition-transform duration-slow ease-luxe group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col justify-center p-s5 lg:p-s6">
                  <span className="text-[10px] uppercase tracking-luxe text-champagne-deep">
                    {c.index}
                  </span>
                  <h2 className="mt-s2 font-display text-display-md font-light transition-colors group-hover:text-champagne-deep">
                    {c.name}
                  </h2>
                  <p className="mt-s3 max-w-[42ch] text-[14px] leading-relaxed text-graphite">
                    {c.description}
                  </p>
                  <span className="mt-s4 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-luxe text-ink transition-[gap] duration-300 ease-luxe group-hover:gap-4">
                    Discover the line
                    <ArrowRight className="h-[9px] w-[15px]" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
