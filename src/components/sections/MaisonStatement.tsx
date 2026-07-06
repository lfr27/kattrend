import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/primitives";

export function MaisonStatement() {
  return (
    <section className="bg-pearl py-s7 text-center">
      <div className="wrap">
        <Eyebrow center className="mb-s4">
          Est. Aalborg
        </Eyebrow>
        <Reveal>
          <p className="mx-auto max-w-[18ch] font-display text-display-md font-light text-balance text-ink">
            A home is shaped not only by the objects we choose, but by the lives
            that move quietly around them.{" "}
            <em className="italic text-champagne-deep">Furniture</em> becomes
            part of the room, and part of the animal’s daily rituals.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-s4 max-w-[52ch] text-[15px] leading-loose text-graphite">
            We create refined cat furniture with a devotion to proportion,
            material, comfort, and permanence. Pieces made not to interrupt the
            home, but to deepen its sense of calm, beauty, and belonging.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
