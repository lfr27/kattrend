import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { journalEntries, getJournalEntry } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export function generateStaticParams() {
  return journalEntries.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.excerpt,
    openGraph: {
      type: "article",
      title: `${entry.title} · KATTREND Journal`,
      description: entry.excerpt,
      images: [{ url: img(entry.image, 1200, 800) }],
    },
  };
}

// Editorial body — reads as a real article.
const bodyParagraphs = [
  "There is a particular discipline in designing for a creature that cannot tell you what it wants. The cat does not read the brief. It does not care for provenance, or material honesty, or the careful negotiation between a piece and the room it occupies. It cares for height, for warmth, for the precise angle of afternoon light. And yet — or perhaps because of this — the best objects made for cats are among the most rigorous in all of furniture design.",
  "Consider the problem of the perch. A cat seeks elevation, but not exposure; it wants to survey without being surveyed. The solution is architectural before it is decorative: a question of sightlines and structure, of where weight is carried and how ascent is invited. Solve it honestly and the form follows. Decorate it first and you have made a prop.",
  "This is the principle our ateliers return to again and again. Begin with behaviour. Let the material answer the function. Trust that restraint, properly applied, reads as luxury — not because it is expensive, but because it is resolved.",
];

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();

  const next = journalEntries.find((j) => j.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title,
    description: entry.excerpt,
    author: { "@type": "Person", name: entry.author },
    publisher: { "@type": "Organization", name: "KATTREND" },
    image: img(entry.image, 1200, 800),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-[calc(38px+92px)]">
        <div className="wrap pb-s4">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Journal", href: "/journal" },
              { label: entry.category },
            ]}
          />
        </div>

        {/* Title block */}
        <header className="wrap max-w-prose pb-s5 text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-luxe text-champagne-deep">
              <span>{entry.category}</span>
              <span className="text-ash">·</span>
              <span className="text-ash">{entry.date}</span>
            </div>
            <h1 className="mx-auto mt-s3 max-w-[20ch] font-display text-display-lg font-light text-balance">
              {entry.title}
            </h1>
            <p className="mt-s3 text-[11px] uppercase tracking-luxe text-ash">
              By {entry.author} · {entry.readTime} read
            </p>
          </Reveal>
        </header>

        {/* Hero image */}
        <Reveal className="wrap mb-s6">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={img(entry.image, 1800, 1012)}
              alt={entry.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale-[12%]"
            />
          </div>
        </Reveal>

        {/* Body */}
        <div className="wrap">
          <div className="mx-auto max-w-prose">
            <Reveal>
              <p className="font-display text-display-sm font-light leading-snug text-ink">
                {entry.excerpt}
              </p>
            </Reveal>
            {bodyParagraphs.map((p, i) => (
              <Reveal key={i} delay={0.05}>
                <p className="mt-s4 text-[16px] leading-loose text-graphite first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.8] first-letter:text-ink only:mt-0 [&:not(:first-of-type)]:first-letter:float-none [&:not(:first-of-type)]:first-letter:mr-0 [&:not(:first-of-type)]:first-letter:text-[16px]">
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal className="my-s6 border-y border-mist py-s5 text-center">
              <p className="font-display text-display-sm font-light italic text-champagne-deep">
                &ldquo;Begin with behaviour. Let the material answer the function.&rdquo;
              </p>
            </Reveal>
          </div>
        </div>

        {/* Next article */}
        {next && (
          <section className="border-t border-mist bg-ivory py-s6">
            <div className="wrap">
              <span className="eyebrow kicker mb-s3 block">Continue Reading</span>
              <Link href={`/journal/${next.slug}`} className="group flex items-center justify-between gap-s4">
                <h2 className="font-display text-display-sm font-light transition-colors group-hover:text-champagne-deep">
                  {next.title}
                </h2>
                <ArrowRight className="h-3 w-8 shrink-0 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
