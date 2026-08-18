"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Product } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { cn } from "@/lib/utils";
import { NOVA_EASE } from "@/lib/motion";

const filters = [
  "All",
  "Live",
  "Beta",
  "In Development",
  "Mobile",
  "Web",
] as const;

type Filter = (typeof filters)[number];

export function ProductsGrid({
  products,
}: {
  products: Product[];
}) {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return products;
    }

    // Status filters
    if (
      active === "Live" ||
      active === "Beta" ||
      active === "In Development"
    ) {
      return products.filter(
        (product) => product.status === active
      );
    }

    // Platform filters
    if (active === "Mobile" || active === "Web") {
      return products.filter((product) =>
        product.platforms.includes(active)
      );
    }

    return products;
  }, [active, products]);

  return (
    <div>
      {/* Filters */}
      <LayoutGroup>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter products"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === filter
                  ? "text-red-700"
                  : "text-ink-muted hover:text-ink"
              )}
            >
              {active === filter && (
                <motion.span
                  layoutId="active-filter-pill"
                  transition={{
                    duration: 0.35,
                    ease: NOVA_EASE,
                  }}
                  className="absolute inset-0 rounded-full bg-linear-to-r from-electric to-violet"
                />
              )}

              <span className="relative z-10">
                {filter}
              </span>
            </button>
          ))}
        </div>
      </LayoutGroup>

      {/* Products */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.slug}
              layout
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -16,
              }}
              transition={{
                duration: 0.3,
                ease: NOVA_EASE,
                delay: i * 0.03,
              }}
            >
              <ProductCard
                product={product}
                index={i}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-ink-muted">
          No products match this filter yet.
        </p>
      )}
    </div>
  );
}