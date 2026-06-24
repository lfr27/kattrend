"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/catalogue";
import { Eyebrow } from "@/components/ui/primitives";
import { fadeUp } from "@/lib/motion";

export function Testimonials() {
  return (
    <section className="bg-ivory py-s7">
      <div className="wrap">
        <Eyebrow center className="mb-s5 block text-center">
          In Their Words
        </Eyebrow>
        <div className="grid gap-s3 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col border border-mist bg-paper p-s4 transition-[transform,box-shadow] duration-med ease-luxe hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="mb-s3 h-8 font-display text-[4rem] leading-[0.5] text-champagne">
                &ldquo;
              </div>
              <blockquote className="mb-s4 flex-1 font-display text-[1.5rem] font-light leading-snug text-ink">
                {t.quote} <em className="italic text-champagne-deep">{t.emphasis}</em>
              </blockquote>
              <figcaption className="flex items-center gap-3.5 border-t border-mist pt-s3">
                <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-noir font-display text-lg text-pearl">
                  {t.initial}
                </span>
                <div>
                  <div className="text-[12px] font-medium uppercase tracking-wide text-ink">
                    {t.name}
                  </div>
                  <div className="mt-0.5 text-[11px] text-ash">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
