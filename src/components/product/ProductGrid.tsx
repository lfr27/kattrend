"use client";

import { useState } from "react";
import { type Product } from "@/data/catalogue";
import { ProductCard } from "./ProductCard";
import { QuickView } from "./QuickView";
import { cn } from "@/lib/utils";

export function ProductGrid({
  products,
  columns = 4,
  className,
}: {
  products: Product[];
  columns?: 3 | 4;
  className?: string;
}) {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div
        className={cn(
          "grid gap-s3",
          columns === 4
            ? "grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          className
        )}
      >
        {products.map((p, i) => (
          <ProductCard
            key={p.slug}
            product={p}
            index={i}
            onQuickView={setActive}
          />
        ))}
      </div>
      <QuickView product={active} onClose={() => setActive(null)} />
    </>
  );
}
