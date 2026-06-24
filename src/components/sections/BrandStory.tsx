import Image from "next/image";
import { img, cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

const chapters = [
  {
    num: "I.",
    title: ["Luxury Meets", "Feline Comfort"],
    image: "photo-1583511655857-d19b40a7a54e",
    alt: "Cat resting on luxury furniture",
    body: [
      "We begin where most pet furniture ends: with the cat's actual instinct. Height, refuge, the warmth of the right material under a paw. Every KATTREND piece is engineered around feline behaviour, then dressed in the language of fine furniture.",
      "The result rarely looks like something made for an animal. That is precisely the point.",
    ],
  },
  {
    num: "II.",
    title: ["Sustainability", "Through Resale"],
    image: "photo-1493663284031-b7e3aefcae8e",
    alt: "Restored designer furniture",
    body: [
      "True luxury endures. Our resale atelier restores and recirculates exceptional pieces, so that craftsmanship is preserved rather than discarded. Owning a KATTREND object means joining a longer story — one that does not end when your home changes.",
      "Beautiful things should outlive trends. We make certain they do.",
    ],
  },
  {
    num: "III.",
    title: ["A Design-First", "Philosophy"],
    image: "photo-1524758631624-e2822e304c36",
    alt: "Architectural interior",
    body: [
      "We collaborate only with studios who treat restraint as the highest form of expression. No surplus, no noise — only essential form, honest materials, and proportion that earns its place in a considered room.",
    ],
    signature: "Comfort, composed.",
  },
];

export function BrandStory() {
  return (
    <section id="story" className="bg-paper py-s7">
      <div className="wrap space-y-s7">
        {chapters.map((ch, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={ch.num}
              className="grid items-center gap-[clamp(40px,6vw,110px)] md:grid-cols-2"
            >
              <Reveal
                className={cn("relative aspect-[5/6] overflow-hidden", flipped && "md:order-2")}
              >
                <Image
                  src={img(ch.image, 1000, 1200)}
                  alt={ch.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[14%]"
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mb-s3 font-display text-[1.3rem] italic text-champagne-deep">
                  — {ch.num}
                </div>
                <h3 className="mb-s3 font-display text-display-md font-light leading-tight">
                  {ch.title[0]}
                  <br />
                  <em className="italic text-champagne-deep">{ch.title[1]}</em>
                </h3>
                {ch.body.map((p, j) => (
                  <p key={j} className="mb-s3 max-w-[44ch] text-[15px] leading-loose text-graphite">
                    {p}
                  </p>
                ))}
                {ch.signature && (
                  <p className="mt-s4 font-display text-[1.15rem] italic text-ink">
                    &ldquo;{ch.signature}&rdquo;
                    <span className="mt-1.5 block font-sans text-[10px] uppercase not-italic tracking-luxe text-ash">
                      The KATTREND Maison
                    </span>
                  </p>
                )}
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
