"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Product, conditionLabel } from "@/data/catalogue";
import { img, formatPrice, cn } from "@/lib/utils";
import { useWishlist } from "@/lib/wishlist";
import { HeartIcon, ShieldCheck } from "@/components/ui/icons";
import { fadeUp } from "@/lib/motion";

export function ProductCard({
  product,
  index = 0,
  onQuickView,
}: {
  product: Product;
  index?: number;
  onQuickView?: (p: Product) => void;
}) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);

  const tagTone =
    product.condition === "certified-pre-owned"
      ? "dark"
      : product.condition === "limited-edition"
      ? "champagne"
      : "light";

  return (
    <motion.article
      className="group relative"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: (index % 4) * 0.06 }}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          {/* Status tag */}
          <span
            className={cn(
              "absolute top-4 left-4 z-30 text-[9px] uppercase tracking-luxe px-2.5 py-1.5 font-normal",
              tagTone === "dark" && "bg-noir text-pearl",
              tagTone === "champagne" && "bg-champagne text-noir",
              tagTone === "light" && "bg-pearl text-ink"
            )}
          >
            {product.isBestseller && product.condition === "new"
              ? "Bestseller"
              : conditionLabel[product.condition]}
          </span>

          {/* Authentication badge */}
          {product.authenticated && (
            <span className="absolute bottom-4 left-4 z-30 inline-flex items-center gap-1.5 bg-noir/40 backdrop-blur-md border border-champagne/40 px-2.5 py-1.5 text-[8.5px] uppercase tracking-luxe text-pearl">
              <ShieldCheck className="w-3 h-3 text-champagne" />
              Authenticated
            </span>
          )}

          <Image
            src={img(product.image, 800, 1000)}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 760px) 50vw, 25vw"
            className="object-cover grayscale-[12%] transition-transform duration-slow ease-luxe group-hover:scale-[1.05]"
            loading={index < 4 ? "eager" : "lazy"}
          />

          {/* Quick-add bar */}
          <button
            className="absolute inset-x-0 bottom-0 z-30 translate-y-full bg-noir py-3.5 text-center text-[10.5px] uppercase tracking-luxe text-white transition-transform duration-med ease-luxe group-hover:translate-y-0"
            onClick={(e) => {
              e.preventDefault();
              onQuickView?.(product);
            }}
          >
            Quick View
          </button>
        </div>
      </Link>

      {/* Wishlist toggle */}
      <button
        aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={wished}
        onClick={() => toggle(product.slug)}
        className={cn(
          "absolute top-3 right-3 z-30 grid h-9 w-9 place-items-center rounded-full transition-all duration-300 ease-luxe",
          "bg-pearl/80 backdrop-blur-sm",
          wished
            ? "!bg-noir opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0"
        )}
      >
        <HeartIcon
          className={cn(
            "h-4 w-4 transition-colors",
            wished ? "fill-champagne stroke-champagne" : "stroke-ink"
          )}
        />
      </button>

      {/* Meta */}
      <div className="mt-s3">
        <Link
          href={`/designers/${product.designerSlug}`}
          className="text-[10px] uppercase tracking-luxe text-ash hover:text-ink transition-colors"
        >
          {product.designer}
        </Link>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1.5 font-display text-[1.32rem] font-normal leading-tight text-ink">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-2.5 text-[13px] text-graphite">
          {product.wasPrice && (
            <span className="text-ash line-through text-xs">
              {formatPrice(product.wasPrice, product.currency)}
            </span>
          )}
          <span>{formatPrice(product.price, product.currency)}</span>
        </div>
        {/* Scarcity */}
        {product.stock !== undefined && product.stock <= 5 && (
          <p className="mt-2 text-[10px] uppercase tracking-luxe text-champagne-deep">
            {product.edition ? `${product.edition} · ` : ""}
            Only {product.stock} remaining
          </p>
        )}
      </div>
    </motion.article>
  );
}
