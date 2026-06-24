"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/data/catalogue";
import { img } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";
import { fadeUp } from "@/lib/motion";

export function FeaturedCollections() {
  return (
    <section id="collections" className="py-s6">
      <div className="wrap">
        <Reveal className="mb-s5 flex flex-wrap items-end justify-between gap-s4">
          <div>
            <Eyebrow className="mb-s3 block">The Collections</Eyebrow>
            <h2 className="font-display text-display-lg font-light">
              Three
              <br />
              Houses of Form
            </h2>
          </div>
          <p className="max-w-[36ch] text-[14px] leading-relaxed text-graphite">
            Each collection is a study in proportion — conceived for the cat, composed for the room
            it will quietly command.
          </p>
        </Reveal>

        <div className="grid gap-s3 md:grid-cols-3">
          {collections.map((c, i) => (
            <motion.div
              key={c.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/collections/${c.slug}`} className="group relative block overflow-hidden bg-noir">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={img(c.image, 900, 1200)}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale-[8%] transition-[transform,filter] duration-slow ease-luxe group-hover:scale-[1.06] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noir/75" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-s4 text-white">
                  <span className="mb-s2 block text-[10px] tracking-wide text-champagne">
                    {c.index}
                  </span>
                  <h3 className="font-display text-[1.9rem] font-light text-white">{c.name}</h3>
                  <span className="mt-s2 inline-flex translate-y-3 items-center gap-2.5 text-[11px] uppercase tracking-luxe text-white/85 opacity-0 transition-all duration-med ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                    Discover the line
                    <ArrowRight className="h-[9px] w-[15px]" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
