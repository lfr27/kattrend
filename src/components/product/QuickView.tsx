"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { type Product, conditionLabel } from "@/data/catalogue";
import { img, formatPrice } from "@/lib/utils";
import { useWishlist } from "@/lib/wishlist";
import { CloseIcon, HeartIcon, ShieldCheck } from "@/components/ui/icons";
import { luxeEase } from "@/lib/motion";

export function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { has, toggle } = useWishlist();

  // Lock scroll + escape to close
  useEffect(() => {
    if (!product) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: luxeEase }}
        >
          <div
            className="absolute inset-0 bg-noir/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view: ${product.name}`}
            className="relative z-10 grid w-full max-w-4xl grid-cols-1 overflow-hidden bg-pearl md:grid-cols-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: luxeEase }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center bg-pearl/70 text-ink transition-colors hover:bg-noir hover:text-pearl"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <div className="relative aspect-[4/5] bg-mist md:aspect-auto">
              <Image
                src={img(product.image, 800, 1000)}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale-[12%]"
              />
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="text-[10px] uppercase tracking-luxe text-champagne-deep">
                {conditionLabel[product.condition]}
              </span>
              <Link
                href={`/designers/${product.designerSlug}`}
                className="mt-4 text-[11px] uppercase tracking-luxe text-ash hover:text-ink"
              >
                {product.designer}
              </Link>
              <h2 className="mt-2 font-display text-display-sm font-light text-ink">
                {product.name}
              </h2>
              <div className="mt-3 flex items-center gap-3 text-base text-graphite">
                {product.wasPrice && (
                  <span className="text-ash line-through text-sm">
                    {formatPrice(product.wasPrice, product.currency)}
                  </span>
                )}
                <span>{formatPrice(product.price, product.currency)}</span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-graphite">
                {product.description}
              </p>

              <dl className="mt-6 space-y-2 border-t border-mist pt-5 text-[12px]">
                <div className="flex gap-4">
                  <dt className="w-24 uppercase tracking-wide text-ash">Material</dt>
                  <dd className="text-ink">{product.materials.join(", ")}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-24 uppercase tracking-wide text-ash">Dimensions</dt>
                  <dd className="text-ink">{product.dimensions}</dd>
                </div>
              </dl>

              {product.authenticated && (
                <p className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe text-champagne-deep">
                  <ShieldCheck className="h-4 w-4" />
                  Authenticated by our atelier
                </p>
              )}

              <div className="mt-7 flex gap-3">
                <button className="btn btn-solid flex-1">Add to Bag</button>
                <button
                  aria-label="Add to wishlist"
                  onClick={() => toggle(product.slug)}
                  className="grid h-[54px] w-[54px] place-items-center border border-ink transition-colors hover:bg-ink hover:text-pearl"
                >
                  <HeartIcon
                    className={
                      has(product.slug)
                        ? "h-5 w-5 fill-champagne stroke-champagne"
                        : "h-5 w-5"
                    }
                  />
                </button>
              </div>
              <Link
                href={`/product/${product.slug}`}
                className="link-underline mt-5 self-start text-[11px] uppercase tracking-luxe text-ink"
              >
                View full details
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
