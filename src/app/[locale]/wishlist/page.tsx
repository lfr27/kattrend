"use client";

import { Link } from "@/i18n/navigation";
import { useWishlist } from "@/lib/wishlist";
import { products } from "@/data/catalogue";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumb } from "@/components/layout/PageHeader";
import { HeartIcon } from "@/components/ui/icons";

export default function WishlistPage() {
  const { items } = useWishlist();
  const saved = products.filter((p) => items.includes(p.slug));

  return (
    <div className="pt-[calc(38px+92px)]">
      <div className="wrap py-s4">
        <Breadcrumb trail={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} />
      </div>

      <section className="pb-s7">
        <div className="wrap">
          <div className="mb-s5 flex items-end justify-between">
            <div>
              <span className="eyebrow kicker mb-s3 block">Saved</span>
              <h1 className="font-display text-display-lg font-light">Your Wishlist</h1>
            </div>
            {saved.length > 0 && (
              <span className="text-[11px] uppercase tracking-luxe text-ash">
                {saved.length} {saved.length === 1 ? "piece" : "pieces"}
              </span>
            )}
          </div>

          {saved.length > 0 ? (
            <ProductGrid products={saved} columns={4} />
          ) : (
            <div className="flex flex-col items-center border border-mist bg-paper py-s8 text-center">
              <HeartIcon className="h-8 w-8 text-silver" />
              <p className="mt-s3 font-display text-display-sm font-light text-ink">
                Your wishlist is empty
              </p>
              <p className="mt-2 max-w-[40ch] text-[14px] text-graphite">
                Save the pieces you love by selecting the heart on any product. They&apos;ll wait for
                you here.
              </p>
              <Link href="/collections" className="btn btn-outline mt-s4">
                Explore the Collection
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
