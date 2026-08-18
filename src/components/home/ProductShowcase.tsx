"use client";

import { motion } from "framer-motion";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, defaultViewport } from "@/lib/motion";

export function ProductShowcase() {
  return (
    <section id="products" className="relative section-pad py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we build"
            title="Six tools. One principle: your data stays yours."
            description="Each project ships with a real threat model, not a privacy pledge in a blog post."
          />
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
