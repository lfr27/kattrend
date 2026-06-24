import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/primitives";

export function MaisonStatement() {
  return (
    <section className="bg-pearl py-s7 text-center">
      <div className="wrap">
        <Eyebrow center className="mb-s4">
          Est. Copenhagen
        </Eyebrow>
        <Reveal>
          <p className="mx-auto max-w-[18ch] font-display text-display-md font-light text-balance text-ink">
            A house built on the belief that comfort is a{" "}
            <em className="italic text-champagne-deep">discipline</em>, and that the home of a
            discerning cat deserves nothing ordinary.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-s4 max-w-[52ch] text-[15px] leading-loose text-graphite">
            KATTREND assembles the world&apos;s most considered feline furniture — objects designed by
            architects, fabricated by ateliers, and finished to the standards of haute interiors. We
            do not make pet products. We make heirlooms with a pulse.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
