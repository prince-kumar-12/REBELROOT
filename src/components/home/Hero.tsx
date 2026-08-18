"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { fadeUp, staggerContainer, NOVA_EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative section-pad pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Independent &amp; Open Source Collective</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.75rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          >
           Software Built for Rebels. By Rebels.
           
          </motion.h1>

          <motion.p
            variants={fadeUp}
          className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
           We are a parent group of independent developers building high-quality, privacy-focused, and fully auditable applications to solve the root problems of digital sovereignty. Powering products like Omni Browser, MOCNovel, CampCart, Ved Astra, and MOC Office.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap  gap-4">
            <button className="w-full max-w-[320px] h-12 min-[565px]:w-80 min-[565px]:h-14 rounded-[7px] bg-green-400 text-[15px] uppercase tracking-[4px] text-white hover:shadow-[0_0_5px_rgba(74,222,128,1),0_0_25px_rgba(74,222,128,1),0_0_50px_rgba(74,222,128,1),0_0_100px_rgba(74,222,128,1)]">
            {" "}
            EXPLORE PRODUCTS 
          </button>
            <button className="w-full max-w-[320px] h-12 min-[565px]:w-50 min-[565px]:h-14 rounded-[7px] text-[15px] text-black dark:text-white dark:border-2 uppercase tracking-[4px]     transition-shadowz duration-500 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),0px_30px_60px_-30px_rgba(0,0,0,0.3),inset_0px_-2px_6px_0px_rgba(10,37,64,0.35)]  hover:shadow-[0px_54px_55px_rgba(0,0,0,0.25),0px_-12px_30px_rgba(0,0,0,0.12),0px_4px_6px_rgba(0,0,0,0.12),0px_12px_13px_rgba(0,0,0,0.17),0px_-3px_5px_rgba(0,0,0,0.09)]">
            OUR PRODUCT
          </button>
          </motion.div>
        </motion.div>

        <OrbitIllustration />
      </div>
    </section>
  );
}

function OrbitIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: NOVA_EASE, delay: 0.2 }}
      className="relative mx-auto aspect-square w-full max-w-md"
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-nova-radial blur-2xl" />

      <svg viewBox="0 0 400 400" className="relative h-full w-full" fill="none">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4C8DFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <radialGradient id="coreGrad">
            <stop offset="0%" stopColor="#7FB0FF" />
            <stop offset="100%" stopColor="#4C8DFF" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {[160, 130, 95].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="url(#ringGrad)"
            strokeOpacity={0.18 + i * 0.08}
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 8" : undefined}
          />
        ))}

        <circle cx="200" cy="200" r="46" fill="url(#coreGrad)" opacity="0.9" />
        <circle cx="200" cy="200" r="46" stroke="#EAF0FB" strokeOpacity="0.15" />

        <g className="origin-center animate-spin-slow">
          <circle cx="200" cy="40" r="6" fill="#4C8DFF" />
          <circle cx="200" cy="40" r="12" fill="#4C8DFF" fillOpacity="0.15" />
        </g>

        <g
          className="origin-center animate-spin-slow"
          style={{ animationDirection: "reverse", animationDuration: "12s" }}
        >
          <circle cx="330" cy="260" r="5" fill="#8B5CF6" />
          <circle cx="330" cy="260" r="10" fill="#8B5CF6" fillOpacity="0.18" />
        </g>

        <g
          className="origin-center animate-spin-slow"
          style={{ animationDuration: "22s" }}
        >
          <circle cx="90" cy="270" r="4" fill="#EAF0FB" fillOpacity="0.7" />
        </g>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-electric-soft glow-dot" />
      </div>
    </motion.div>
  );
}
