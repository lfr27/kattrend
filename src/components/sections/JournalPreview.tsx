import Link from "next/link";
import Image from "next/image";
import { journalEntries } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Eyebrow, ViewAllLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function JournalPreview() {
  const [lead, ...rest] = journalEntries.slice(0, 3);

  return (
    <section className="bg-pearl py-s7">
      <div className="wrap">
        <Reveal className="mb-s5 flex flex-wrap items-end justify-between gap-s3">
          <div>
            <Eyebrow className="mb-s3 block">The Journal</Eyebrow>
            <h2 className="font-display text-display-lg font-light">Notes on Living Well</h2>
          </div>
          <ViewAllLink href="/journal">Read the Journal</ViewAllLink>
        </Reveal>

        <div className="grid gap-s4 lg:grid-cols-2">
          {/* Lead story */}
          <Reveal>
            <Link href={`/journal/${lead.slug}`} className="group block">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={img(lead.image, 1100, 730)}
                  alt={lead.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale-[12%] transition-transform duration-slow ease-luxe group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-s3 flex items-center gap-3 text-[10px] uppercase tracking-luxe text-champagne-deep">
                <span>{lead.category}</span>
                <span className="text-ash">·</span>
                <span className="text-ash">{lead.readTime}</span>
              </div>
              <h3 className="mt-2.5 font-display text-display-sm font-light leading-tight transition-colors group-hover:text-champagne-deep">
                {lead.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[14px] leading-relaxed text-graphite">
                {lead.excerpt}
              </p>
            </Link>
          </Reveal>

          {/* Secondary stories */}
          <div className="flex flex-col justify-between gap-s4">
            {rest.map((entry, i) => (
              <Reveal key={entry.slug} delay={i * 0.1}>
                <Link href={`/journal/${entry.slug}`} className="group grid grid-cols-[140px_1fr] gap-s3 sm:grid-cols-[180px_1fr]">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={img(entry.image, 360, 450)}
                      alt={entry.imageAlt}
                      fill
                      sizes="180px"
                      className="object-cover grayscale-[12%] transition-transform duration-slow ease-luxe group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-luxe text-champagne-deep">
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
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
