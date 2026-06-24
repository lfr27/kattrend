import { products } from "@/data/catalogue";
import { Eyebrow, ViewAllLink } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ProductGrid } from "@/components/product/ProductGrid";

export function BestSellers() {
  return (
    <section id="bestsellers" className="py-s7">
      <div className="wrap">
        <Reveal className="mb-s5 flex flex-wrap items-end justify-between gap-s3">
          <div>
            <Eyebrow className="mb-s3 block">Most Coveted</Eyebrow>
            <h2 className="font-display text-display-lg font-light">The Best Sellers</h2>
          </div>
          <ViewAllLink href="/collections">View all pieces</ViewAllLink>
        </Reveal>

        <ProductGrid products={products} columns={4} />
      </div>
    </section>
  );
}
