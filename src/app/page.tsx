import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { Metrics } from "@/components/home/Metrics";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import  Community  from "@/components/layout/joinCommunity";

export const metadata: Metadata = {
  title: "RebelRoot (Rebel Root) | Open-Source &amp; Privacy-First Digital Tools",
  description:
    "RebelRoot is an independent open-source collective designing secure, privacy-first digital tools like Omni Browser, MOCNovel, CampCart, and RootLock.",
};

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <ProductShowcase />
      <TrustSection />
      <FeaturedProduct />
      <Metrics />
      <Community/>
    </>
  );
}
