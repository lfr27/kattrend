import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { MaisonStatement } from "@/components/sections/MaisonStatement";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { Marketplace } from "@/components/sections/Marketplace";
import { BestSellers } from "@/components/sections/BestSellers";
import { BrandStory } from "@/components/sections/BrandStory";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <MaisonStatement />
      <FeaturedCollections />
      <Marketplace />
      <BestSellers />
      <BrandStory />
      <JournalPreview />
      <Testimonials />
    </>
  );
}
