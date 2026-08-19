import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedProduct } from "@/components/home/FeaturedProduct";
import { Metrics } from "@/components/home/Metrics";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import  Community  from "@/components/layout/joinCommunity";

export const metadata: Metadata = {
  title: "RebelRoot — Software Built for Sovereign Users",
  description:
    "An independent open-source collective building local-first, zero-telemetry, auditable software including Omni Browser, MOCNovel, CampCart, Openved, MOC Office, and RootLock.",
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
