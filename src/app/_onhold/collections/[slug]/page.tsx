import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  collections,
  getCollection,
  productsByCollection,
} from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { FilterableGrid } from "@/components/product/FilterableGrid";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
    openGraph: { title: `${collection.name} · KATTREND`, description: collection.description },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = productsByCollection(slug);

  return (
    <>
      {/* Editorial hero */}
      <section className="relative flex h-[58vh] min-h-[440px] items-end overflow-hidden bg-noir pt-[38px]">
        <Image
          src={img(collection.image, 2000, 1200)}
          alt={collection.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.78] grayscale-[18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-transparent to-noir/80" />
        <div className="wrap relative z-10 pb-s5">
          <Reveal>
            <span className="text-[10px] uppercase tracking-luxe text-champagne">
              {collection.index}
            </span>
            <h1 className="mt-s2 max-w-[16ch] font-display text-display-xl font-light text-white">
              {collection.name}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-s6">
        <div className="wrap">
          <div className="mb-s5 flex flex-col gap-s3 md:flex-row md:items-end md:justify-between">
            <Breadcrumb
              trail={[
                { label: "Home", href: "/" },
                { label: "Collections", href: "/collections" },
                { label: collection.name },
              ]}
            />
            <p className="max-w-[44ch] text-[14px] leading-relaxed text-graphite">
              {collection.description}
            </p>
          </div>

          <FilterableGrid products={items} />
        </div>
      </section>
    </>
  );
}
