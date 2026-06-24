import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { journalEntries } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Notes on living well — design trends, cat lifestyle, interior inspiration, and designer interviews from the KATTREND editorial desk.",
};

export default function JournalPage() {
  const [lead, ...rest] = journalEntries;

  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title={<>Notes on Living Well</>}
        description="Design trends, interiors, and conversations with the people shaping the way we live — with cats."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Journal" }]}
      />

      <section className="pb-s7">
        <div className="wrap">
          {/* Lead feature */}
          <Reveal className="mb-s6">
            <Link href={`/journal/${lead.slug}`} className="group grid items-center gap-s5 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={img(lead.image, 1200, 900)}
                  alt={lead.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[12%] transition-transform duration-slow ease-luxe group-hover:scale-[1.04]"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-luxe text-champagne-deep">
                  <span>{lead.category}</span>
                  <span className="text-ash">·</span>
                  <span className="text-ash">{lead.date}</span>
                </div>
                <h2 className="mt-s2 font-display text-display-md font-light transition-colors group-hover:text-champagne-deep">
                  {lead.title}
                </h2>
                <p className="mt-s3 max-w-[50ch] text-[15px] leading-relaxed text-graphite">
                  {lead.excerpt}
                </p>
                <p className="mt-s3 text-[11px] uppercase tracking-luxe text-ash">
                  {lead.author} · {lead.readTime} read
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Grid */}
          <div className="grid gap-s4 border-t border-mist pt-s6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((entry, i) => (
              <Reveal key={entry.slug} delay={(i % 3) * 0.08}>
                <Link href={`/journal/${entry.slug}`} className="group block">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={img(entry.image, 700, 470)}
                      alt={entry.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale-[12%] transition-transform duration-slow ease-luxe group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-s3 flex items-center gap-2.5 text-[10px] uppercase tracking-luxe text-champagne-deep">
                    <span>{entry.category}</span>
                    <span className="text-ash">·</span>
                    <span className="text-ash">{entry.readTime}</span>
                  </div>
                  <h3 className="mt-2 font-display text-[1.5rem] font-light leading-snug transition-colors group-hover:text-champagne-deep">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite line-clamp-2">
                    {entry.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
