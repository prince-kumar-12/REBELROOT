"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Layers, Shield } from "lucide-react";
import Link from "next/link";
import Benchmark from "@/components/omnibrowser/Benchmark"
import { Product } from "@/types";
import { resolveIcon } from "@/lib/icon-map";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import  Hero from "@/components/omnibrowser/Hero"
import { accentToClasses, cn } from "@/lib/utils";
import { fadeUp, staggerContainer, defaultViewport } from "@/lib/motion";

export function ProductDetail({ product }: { product: Product }) {
  const Icon = resolveIcon(product.icon);

  const accent = accentToClasses(product.accent);

  return (
    <div>
      {/* =========================================================
          HERO
      ========================================================= */}

       {/* <Hero/> */}
     
      <section className="section-pad py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Interface" title="A closer look" />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              mt-10
              grid
              grid-cols-1
              gap-5
              min-[640px]:grid-cols-2
              min-[770px]:grid-cols-3
            "
          >
            {product.screenshots.map((shot) => (
              <motion.div
                key={shot.label}
                variants={fadeUp}
                className="
                  group
                  overflow-hidden
                  rounded-xl2
                  border
                  border-base-border
                  bg-base-card
                  payment-shadow
                  min-[640px]:h-100
                  min-[770px]:h-auto
                "
              >
                <div
                  className="
                    relative
                    aspect-4/3
                    w-full
                    overflow-hidden
                    bg-base-raised
                  "
                >
                  <Image
                    src={shot.image}
                    alt={shot.label}
                    fill
                    className="
                      object-contain
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 769px) 50vw,
                      33vw
                    "
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm font-medium text-ink">{shot.label}</p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-relaxed
                      text-ink-muted
                    "
                  >
                    {shot.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="section-pad py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything you need. Nothing you don't."
            description="Built natively on GeckoView 145 with low-level Android performance and Firefox WebExtensions support."
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10"
          >
            {product.features.map((feature, i) => {
               

              const FeatureIcon = resolveIcon(feature.icon);

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  className="
                    flex
                    gap-5
                    border-t
                    border-base-border
                    py-6
                    first:border-t-0
                    sm:gap-6
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      w-8
                      shrink-0
                      pt-1
                      font-mono
                      text-xs
                      text-ink-faint
                    "
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Feature icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-base-border
                      bg-base-raised
                    "
                  >
                    <FeatureIcon
                      className={cn("h-5 w-5", accent.text)}
                      strokeWidth={1.75}
                    />
                  </div>

                  {/* Feature content */}

                  <div className="min-w-0">
                    <h3
                      className="
                        text-base
                        font-medium
                        text-ink
                        sm:text-lg
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-relaxed
                        text-ink-muted
                        sm:text-base
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

       {/* =========================================================
          POWER UTILITIES
      ========================================================= */}

<section className="section-pad py-20 sm:py-24">
  <div className="mx-auto max-w-6xl">
    {/* Heading */}
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
    > 
<SectionHeading
            eyebrow="POWER UTILITIES"
            title="16 Built-in Quick Tools."
          />
      <motion.h2
        variants={fadeUp}
        className="
          mt-5
          max-w-4xl
          text-4xl
          font-semibold
          leading-[1.05]
          tracking-tight
          text-ink
          sm:text-5xl
          lg:text-6xl
        "
      >
         
        <span className="text-ink-muted">
          Zero third-party apps needed.
        </span>
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="
          mt-6
          max-w-2xl
          text-base
          leading-relaxed
          text-ink-muted
          sm:text-lg
        "
      >
        Long-press &amp; drag to reorder your favorite browser
        utilities in the bottom drawer.
      </motion.p>
    </motion.div>

    {/* Tools */}
    <motion.div
      variants={staggerContainer(0.07)}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="
        mt-12
        grid
        grid-cols-1
        gap-5
        min-[640px]:grid-cols-2
        lg:grid-cols-4
      "
    >
      {product.quickTools.map((tool) => {
        const ToolIcon = resolveIcon(tool.icon);

        return (
          <motion.div
            key={tool.title}
            variants={fadeUp}
            className="
              group
              flex
              min-h-72.5
              flex-col
              overflow-hidden
              rounded-[22px]
              border
              border-base-border
              payment-shadow
              bg-base-card
              p-7
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-red-500/30
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
               payment-shadow
                
                transition-all
                duration-300
                group-hover:border-red-500/50
                group-hover:bg-red-500/10
              "
            >
              <ToolIcon
                className="h-5 w-5"
                strokeWidth={1.7}
              />
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3
                className="
                  text-lg
                  font-semibold
                  tracking-tight
                  text-ink
                  sm:text-xl
                "
              >
                {tool.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-ink-muted
                  sm:text-[15px]
                "
              >
                {tool.description}
              </p>
            </div>

            {/* Documentation */}
            <div className="mt-auto pt-7">
              {tool.href ? (
                <Link
                  href={tool.href}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    font-mono
                    text-xs
                    font-medium
                   
                    transition-colors
                    hover:text-red-400
                  "
                >
                  Documentation
                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              ) : (
                <span
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    font-mono
                    text-xs
                    font-medium
                    text-red-500
                  "
                >
                  Documentation
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  </div>
</section>

<Benchmark/>

    {/* Architecture */}
      <section className="section-pad py-16">
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-8
            md:grid-cols-2
          "
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              rounded-xl2
              border
              border-base-border
              bg-base-card/60
              p-8
            "
          >
            <div className="flex items-center gap-3">
              <Layers
                className="h-5 w-5 text-electric-soft"
                strokeWidth={1.75}
              />

              <h3 className="text-lg font-medium text-ink">Architecture</h3>
            </div>

            <ul className="mt-6 space-y-4">
              {product.architecture.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-sm
                    leading-relaxed
                    text-ink-muted
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-electric
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Security */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="
              rounded-xl2
              border
              border-base-border
              bg-base-card/60
              p-8
            "
          >
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-violet-soft" strokeWidth={1.75} />

              <h3 className="text-lg font-medium text-ink">Security</h3>
            </div>

            <ul className="mt-6 space-y-4">
              {product.security.map((item) => (
                <li
                  key={item}
                  className="
                    flex
                    gap-3
                    text-sm
                    leading-relaxed
                    text-ink-muted
                  "
                >
                  <span
                    className="
                      mt-1.5
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-violet
                    "
                  />

                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>



      {/* =========================================================
          FAQ
      ========================================================= */}

      <section className="section-pad py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked" />

          <div className="mt-10">
            <Accordion items={product.faq} />
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section id="cta" className="section-pad py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="
            mx-auto
            max-w-4xl
            rounded-xl2
            border
            border-base-border
            bg-linear-to-br
            from-base-card
            to-base-raised
            p-10
            text-center
            sm:p-16
          "
        >
          <h2
            className="
              text-3xl
              font-medium
              text-ink
              sm:text-4xl
            "
          >
            Ready to try {product.name}?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-relaxed
              text-ink-muted
              sm:text-base
            "
          >
            Free, open source, and yours to inspect line by line.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact#support"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Get started
            </Button>

            <Button href="/docs" variant="secondary">
              Read the docs
            </Button>
          </div>

          <p className="mt-6 text-xs text-ink-faint">
            Read the{" "}
            <Link
              href={`/products/${product.slug}/privacy`}
              className="
                underline
                underline-offset-2
                hover:text-ink-muted
              "
            >
              {product.name} Privacy Policy
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
