"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { img } from "@/lib/utils";
import { stagger, staggerItem, luxeEase } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: image drifts slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[680px] items-end overflow-hidden bg-noir">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src={img("photo-1618219908412-a29a1bb7b86e", 2400, 1400)}
          alt="Designer cat furniture in a modern penthouse interior at dusk"
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover brightness-[0.82] contrast-[1.04] grayscale-[18%]"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-noir/50 via-noir/15 to-noir/85"
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full wrap pb-[clamp(56px,8vh,110px)]"
      >
        <motion.span
          variants={staggerItem}
          className="eyebrow kicker mb-s3 !text-white/75 before:bg-champagne"
        >
          The Feline Atelier
        </motion.span>

        <motion.h1
          variants={staggerItem}
          className="max-w-[15ch] font-display text-display-2xl font-light text-white"
        >
          Designed for Cats.
          <br />
          <em className="italic text-champagne">Made for Homes.</em>
        </motion.h1>
        
       {/*  <motion.h1
          variants={staggerItem}
          className="max-w-[15ch] font-display text-display-2xl font-light text-white"
        >
          Furniture Worthy
          <br />
          of <em className="italic text-champagne">Nine Lives</em>
        </motion.h1> */}



        <motion.p
          variants={staggerItem}
          className="my-s4 max-w-[48ch] text-[clamp(15px,1.4vw,18px)] font-light leading-relaxed text-white/85"
        >
          Furniture of uncompromising craft — designed to belong in the room,
          built to be lived on.
        </motion.p>
        <motion.div variants={staggerItem} className="flex flex-wrap gap-s2">
          <Link href="/collections" className="btn btn-ghost">
            Shop Collection
          </Link>
          {/*  <Link href="/marketplace" className="btn btn-ghost">
            Explore Resale Market
          </Link> */}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: luxeEase }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 text-[9px] uppercase tracking-wide text-white/60"
      >
        <span>Scroll</span>
        <span className="relative block h-[42px] w-px overflow-hidden bg-white/40">
          <motion.span
            className="absolute left-0 top-0 block h-[42px] w-px bg-champagne"
            animate={{ y: [-42, 42] }}
            transition={{ duration: 2.4, ease: luxeEase, repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  );
}
