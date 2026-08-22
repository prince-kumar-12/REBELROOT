import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductsGrid } from "@/components/products/ProductsGrid";
import { Eyebrow } from "@/components/ui/Badge";
 

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse every RebelRoot product: browsers, reading tools, commerce infrastructure, health journals, office software, and password management — all open source.",
};

export default function ProductsPage() {
  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <Eyebrow>Privacy-first tools, built for you</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
          A better way to build and use digital tools.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Explore RebelRoot's open-source product suite of privacy-preserving digital tools, including Omni Browser, MOCNovel, CampCart, Openved, and RootLock.
        </p>

        <div className="mt-12">
          <ProductsGrid products={products} />
        </div>
      </div>
      
    </section>
  );
}
