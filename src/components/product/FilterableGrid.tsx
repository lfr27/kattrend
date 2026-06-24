"use client";

import { useState, useMemo } from "react";
import { type Product, type Condition, conditionLabel } from "@/data/catalogue";
import { ProductGrid } from "./ProductGrid";
import { Sliders } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc";

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price · Low to High" },
  { key: "price-desc", label: "Price · High to Low" },
];

const conditionFilters: { key: Condition | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new", label: conditionLabel.new },
  { key: "limited-edition", label: conditionLabel["limited-edition"] },
  { key: "certified-pre-owned", label: conditionLabel["certified-pre-owned"] },
];

export function FilterableGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortKey>("featured");
  const [condition, setCondition] = useState<Condition | "all">("all");

  const filtered = useMemo(() => {
    let list = [...products];
    if (condition !== "all") list = list.filter((p) => p.condition === condition);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    return list;
  }, [products, sort, condition]);

  return (
    <div>
      <div className="mb-s5 flex flex-col gap-s3 border-y border-mist py-s3 md:flex-row md:items-center md:justify-between">
        {/* Condition filters */}
        <div className="flex flex-wrap items-center gap-1">
          <Sliders className="mr-2 h-4 w-4 text-ash" />
          {conditionFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setCondition(f.key)}
              className={cn(
                "px-3.5 py-2 text-[10.5px] uppercase tracking-luxe transition-colors",
                condition === f.key
                  ? "text-ink underline underline-offset-4 decoration-champagne-deep"
                  : "text-ash hover:text-graphite"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Sort + count */}
        <div className="flex items-center gap-s3">
          <span className="text-[11px] text-ash">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </span>
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort products"
              className="cursor-pointer appearance-none border border-mist bg-transparent py-2 pl-3.5 pr-8 text-[10.5px] uppercase tracking-luxe text-ink outline-none transition-colors hover:border-ink"
            >
              {sortOptions.map((o) => (
                <option key={o.key} value={o.key}>
                  {o.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ash">
              ↓
            </span>
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <ProductGrid products={filtered} columns={4} />
      ) : (
        <div className="py-s7 text-center">
          <p className="font-display text-display-sm font-light text-graphite">
            No pieces match this selection.
          </p>
          <button
            onClick={() => setCondition("all")}
            className="link-underline mt-s3 text-[11px] uppercase tracking-luxe text-ink"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
