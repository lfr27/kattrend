import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { designers, getDesigner, productsByDesigner } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/product/ProductGrid";

export function generateStaticParams() {
  return designers.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const designer = getDesigner(slug);
  if (!designer) return {};
  return {
    title: designer.name,
    description: `${designer.name} — ${designer.discipline} from ${designer.origin}. ${designer.bio}`,
  };
}

export default async function DesignerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const designer = getDesigner(slug);
  if (!designer) notFound();

  const items = productsByDesigner(slug);

  return (
    <>
      <div className="pt-[calc(38px+92px)]">
        <div className="wrap pb-s4">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Designers", href: "/designers" },
              { label: designer.name },
            ]}
          />
        </div>

        {/* Designer intro */}
        <section className="pb-s6">
          <div className="wrap grid gap-s5 md:grid-cols-[1fr_1.2fr] md:gap-s6">
            <Reveal className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Image
                src={img(designer.image, 900, 1125)}
                alt={designer.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
              />
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center">
              <span className="eyebrow kicker">The Atelier</span>
              <h1 className="mt-s3 font-display text-display-lg font-light">{designer.name}</h1>
              <p className="mt-1.5 text-[11px] uppercase tracking-luxe text-ash">
                {designer.origin} · {designer.discipline}
              </p>
              <p className="mt-s4 max-w-[48ch] text-[15px] leading-loose text-graphite">
                {designer.bio}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Their pieces */}
        <section className="border-t border-mist py-s6">
          <div className="wrap">
            <Reveal className="mb-s5">
              <span className="eyebrow kicker mb-s3 block">The Work</span>
              <h2 className="font-display text-display-md font-light">
                Pieces by {designer.name}
              </h2>
            </Reveal>
            <ProductGrid products={items} columns={4} />
          </div>
        </section>
      </div>
    </>
  );
}
