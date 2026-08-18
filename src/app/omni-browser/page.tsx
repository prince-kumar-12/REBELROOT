import Navbar from "@/components/omnibrowser/Navbar";
import Hero from "@/components/omnibrowser/Hero";
import StorySection from "@/components/omnibrowser/StorySection";
import Showcase from "@/components/omnibrowser/Showcase";
import QuickTools from "@/components/omnibrowser/QuickTools";
import Features from "@/components/omnibrowser/Features";
import Benchmark from "@/components/omnibrowser/Benchmark";
import FAQ from "@/components/omnibrowser/FAQ";
import FinalCTA from "@/components/omnibrowser/FinalCTA";

import { getProductBySlug } from "@/lib/products";
import { notFound } from "next/navigation";

export default function Home() {
  const product = getProductBySlug("omni-browser");

  if (!product) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-carbon-950">
      <Navbar />

      <Hero product={product} />
      <StorySection   />
      <Showcase  />
      <QuickTools />
      <Features  />
      <Benchmark   />
      <FAQ   />
      <FinalCTA  />
    </main>
  );
}