import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  products,
  getProduct,
  getDesigner,
  productsByCollection,
  conditionLabel,
} from "@/data/catalogue";
import { img, formatPrice } from "@/lib/utils";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { ProductDetail } from "@/components/product/ProductDetail";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  const desc = `${product.name} by ${product.designer}. ${product.description}`;
  return {
    title: product.name,
    description: desc,
    openGraph: {
      title: `${product.name} · KATTREND`,
      description: desc,
      images: [{ url: img(product.image, 1200, 1200) }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const designer = getDesigner(product.designerSlug);
  const related = productsByCollection(product.collection)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.designer },
    material: product.materials.join(", "),
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      itemCondition:
        product.condition === "certified-pre-owned"
          ? "https://schema.org/UsedCondition"
          : "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[calc(38px+92px)]">
        <div className="wrap pb-s4">
          <Breadcrumb
            trail={[
              { label: "Home", href: "/" },
              { label: "Collections", href: "/collections" },
              { label: conditionLabel[product.condition] },
              { label: product.name },
            ]}
          />
        </div>

        <section className="pb-s7">
          <div className="wrap">
            <ProductDetail product={product} />
          </div>
        </section>

        {/* Designer note */}
        {designer && (
          <section className="border-y border-mist bg-ivory py-s6">
            <div className="wrap grid items-center gap-s5 md:grid-cols-[1fr_1.6fr]">
              <Reveal>
                <span className="eyebrow kicker">The Designer</span>
                <h2 className="mt-s3 font-display text-display-sm font-light">{designer.name}</h2>
                <p className="mt-1 text-[11px] uppercase tracking-luxe text-ash">
                  {designer.origin} · {designer.discipline}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[15px] leading-loose text-graphite">{designer.bio}</p>
              </Reveal>
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="py-s7">
            <div className="wrap">
              <Reveal className="mb-s5">
                <span className="eyebrow kicker mb-s3 block">You May Also Consider</span>
                <h2 className="font-display text-display-md font-light">
                  From the same collection
                </h2>
              </Reveal>
              <ProductGrid products={related} columns={4} />
            </div>
          </section>
        )}
      </div>
    </>
  );
}
