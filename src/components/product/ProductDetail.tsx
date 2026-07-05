"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Product, conditionLabel } from "@/data/catalogue";
import { img, formatPrice } from "@/lib/utils";
import { useWishlist } from "@/lib/wishlist";
import { HeartIcon, ShieldCheck, Truck, Lock, ArrowRight } from "@/components/ui/icons";
import { luxeEase } from "@/lib/motion";

export function ProductDetail({ product }: { product: Product }) {
  const { has, toggle } = useWishlist();
  const wished = has(product.slug);
  const [added, setAdded] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("details");

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2400);
  };

  // Build a small gallery from the primary image (monochrome crops)
  const gallery = [
    img(product.image, 1100, 1375),
    img(product.image, 1100, 900),
    img(product.image, 1100, 1500),
  ];
  const [active, setActive] = useState(0);

  const sections = [
    { id: "details", label: "Description", body: product.description },
    {
      id: "materials",
      label: "Materials & Dimensions",
      body: `${product.materials.join(", ")}. ${product.dimensions}.`,
    },
    {
      id: "care",
      label: "Care & Delivery",
      body: "Delivered white-glove, fully assembled, within 2–3 weeks. Wipe with a dry cloth; treat upholstery per the enclosed atelier card. Every piece carries a five-year structural guarantee.",
    },
  ];

  return (
    <div className="grid gap-s5 lg:grid-cols-[1.1fr_1fr] lg:gap-s6">
      {/* Gallery */}
      <div className="flex flex-col-reverse gap-s3 sm:flex-row">
        <div className="flex gap-2.5 sm:flex-col">
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative aspect-square w-16 shrink-0 overflow-hidden border transition-colors sm:w-20 ${
                active === i ? "border-ink" : "border-mist hover:border-ash"
              }`}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover grayscale-[12%]" />
            </button>
          ))}
        </div>
        <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-mist">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: luxeEase }}
              className="absolute inset-0"
            >
              <Image
                src={gallery[active]}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover grayscale-[12%]"
              />
            </motion.div>
          </AnimatePresence>
          {product.authenticated && (
            <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-noir/40 px-3 py-2 text-[9px] uppercase tracking-luxe text-pearl backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-champagne" />
              Authenticated
            </span>
          )}
        </div>
      </div>

      {/* Info column */}
      <div className="lg:sticky lg:top-[120px] lg:self-start">
        <span className="text-[10px] uppercase tracking-luxe text-champagne-deep">
          {conditionLabel[product.condition]}
          {product.edition ? ` · ${product.edition}` : ""}
        </span>
        <Link
          href={`/designers/${product.designerSlug}`}
          className="mt-s3 block text-[11px] uppercase tracking-luxe text-ash transition-colors hover:text-ink"
        >
          {product.designer}
        </Link>
        <h1 className="mt-2 font-display text-display-md font-light text-ink">{product.name}</h1>

        <div className="mt-s3 flex items-baseline gap-3">
          {product.wasPrice && (
            <span className="text-base text-ash line-through">
              {formatPrice(product.wasPrice, product.currency)}
            </span>
          )}
          <span className="text-xl text-ink">{formatPrice(product.price, product.currency)}</span>
        </div>

        {product.stock !== undefined && product.stock <= 5 && (
          <p className="mt-s3 text-[11px] uppercase tracking-luxe text-champagne-deep">
            Only {product.stock} remaining
          </p>
        )}

        {/* Actions */}
        <div className="mt-s5 flex gap-3">
          <button onClick={handleAdd} className="btn btn-solid flex-1 relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={added ? "added" : "add"}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{ duration: 0.3, ease: luxeEase }}
              >
                {added ? "Added to Bag" : "Add to Bag"}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wished}
            onClick={() => toggle(product.slug)}
            className="grid h-[54px] w-[54px] shrink-0 place-items-center border border-ink transition-colors hover:bg-ink hover:text-pearl"
          >
            <HeartIcon
              className={wished ? "h-5 w-5 fill-champagne stroke-champagne" : "h-5 w-5"}
            />
          </button>
        </div>

        {/* Trust row */}
        <div className="mt-s4 grid grid-cols-3 gap-2 border-y border-mist py-s3 text-center">
          {[
            { icon: Truck, label: "White-glove delivery" },
            { icon: ShieldCheck, label: "5-year guarantee" },
            { icon: Lock, label: "Secure checkout" },
          ].map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1.5">
              <t.icon className="h-4 w-4 text-champagne-deep" />
              <span className="text-[9px] uppercase tracking-wide leading-tight text-ash">
                {t.label}
              </span>
            </div>
          ))}
        </div>

        {/* Accordions */}
        <div className="mt-s4">
          {sections.map((s) => {
            const open = openSection === s.id;
            return (
              <div key={s.id} className="border-b border-mist">
                <button
                  onClick={() => setOpenSection(open ? null : s.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between py-s3 text-left"
                >
                  <span className="text-[12px] font-medium uppercase tracking-wide text-ink">
                    {s.label}
                  </span>
                  <span className="text-lg text-ash">{open ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: luxeEase }}
                      className="overflow-hidden"
                    >
                      <p className="pb-s4 text-[14px] leading-relaxed text-graphite">{s.body}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Link
          href={`/designers/${product.designerSlug}`}
          className="group mt-s4 inline-flex items-center gap-2.5 text-[11px] uppercase tracking-luxe text-ink"
        >
          More from {product.designer}
          <ArrowRight className="h-[9px] w-[15px] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
