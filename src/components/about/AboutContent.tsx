"use client";

import { motion } from "framer-motion";
import { HardDrive, EyeOff, File } from "lucide-react";
import { Eyebrow } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, defaultViewport } from "@/lib/motion";
import Image from "next/image";
import { Button } from "../ui/Button";
const timeline = [
  {
    year: "2022",
    title: "The first project",
    description:
      "One Engineer began as the first step toward building software independently, with a focus on privacy, security, and giving users more control.",
  },
  {
    year: "2023",
    title: "A bigger vision",
    description:
      "The work evolved into RebelRoot, laying the foundation for a broader ecosystem of independent digital products.",
  },
  {
    year: "2024",
    title: "Omni Browser",
    description:
      "Development began on Omni Browser — a privacy-focused browser designed to make everyday browsing faster, simpler, and more user-controlled.",
  },
  {
    year: "2025",
    title: "The ecosystem expands",
    description:
      "New projects including MOCNovel, CampCart, and MOC Office began taking shape, each exploring a different problem through independent software.",
  },
  {
    year: "2026",
    title: "Building what comes next",
    description:
      "With multiple products in development, RebelRoot continues turning ideas into practical software — one project at a time.",
  },
];

const values = [
  {
    icon: HardDrive,
    title: "Local-First By Design",
    description: "We build apps that store data directly on your physical device. We host no massive databases, no cloud accounts, and no logging systems for your activity.",
  },
  {
    icon: EyeOff,
    title: "Zero Telemetry & Trackers",
    description: "We completely strip out all diagnostic telemetry, usage tracking, analytics, and crash-reporting SDKs. Our applications never report back.",
  },
  {
    icon: File,
    title: "Auditable & Open Software",
    description: "Our client projects are open-source and transparent. Anyone can inspect network behavior, audit compile scripts, or host their own services.",
  },
  // {
  //   icon: Users,
  //   title: "Built in public",
  //   description: "Roadmaps, incidents, and decisions are discussed where anyone can read them.",
  // },
];

export function AboutContent() {
  return (
    <>
      <section className="section-pad pb-16 pt-40 lg:pt-48">
        <div className="mx-auto max-w-4xl">
          <Eyebrow>About RebelRoot</Eyebrow>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl lg:text-6xl"
          >
            About RebelRoot (Rebel Root) | Privacy-First Digital Collective
          </motion.h1>
        </div>
      </section>

      <section id="philosophy" className="section-pad py-16">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
          <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={defaultViewport}>
            <h2 className="text-2xl font-medium text-ink sm:text-3xl">
              Why digital sovereignty matters
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
              <p>
                Most software today is built to extract something from you: attention,
                behavioral data, or a recurring fee tied to a service you can't leave
                without losing your own files. That arrangement asks you to trust a
                company you can't audit, indefinitely.
              </p>
              <p>
                Digital sovereignty means the opposite default. Your notes, your
                reading history, your passwords, and your health records should work
                for you even if our servers disappear tomorrow — because they were
                never the thing holding your data hostage in the first place.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="rounded-xl2 border border-base-border bg-base-card/60 p-8"
          >
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-electric-soft">
              Manifesto, condensed
            </p>
            <ul className="mt-6 space-y-5">
              {[
                "Software should work without a connection to us.",
                "A feature that requires tracking is a feature we don't ship.",
                "Every build should be reproducible by a stranger.",
                "Independence means we answer to users, not investors.",
              ].map((line) => (
                <li key={line} className="border-l-2 border-electric/40 pl-4 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-pad py-16">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Origins" title="Started by one engineer, kept honest by many." />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10 flex flex-col gap-6 rounded-xl2 border border-base-border bg-base-card/60 p-8 sm:flex-row sm:items-center"
          >
           <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full">
  <Image
    src="/founder.png"
    alt="Paras Agarwal"
    width={140}
    height={140}
    priority
    className="h-full w-full object-cover"
  />
</div>
            <div>
              <p className="text-lg font-medium text-ink"> Paras Agarwal</p>
              <p className="text-sm text-electric-soft">Founder, RebelRoot</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                Paras Agarwal founded RebelRoot to establish an ecosystem of digital tools that prioritize the user above all else. As an open-source advocate and developer, he believes that software should serve its users honestly, transparently, and securely without hiding backdoors or profit-driven analytics trackers. He coordinates the development of flagship products like Omni Browser and MOCNovel, pushing for a future built on sovereign code.
              </p><br />
               <Button href="https://github.com/ParasxAgarwal" target="_blank" size="sm" className="bg-green-400">
                            FOLLOW ON GITHUB 
                            <ArrowRight size={18} color="white" />
                         </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Timeline" title="How the collective grew" />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-12 space-y-10 border-l border-base-border pl-8"
          >
            {timeline.map((entry) => (
              <motion.div key={entry.year} variants={fadeUp} className="relative">
                <span className="absolute -left-9.25 top-1.5 h-2.5 w-2.5 rounded-full bg-linear-to-r from-electric to-violet" />
                <p className="font-mono text-xs text-electric-soft">{entry.year}</p>
                <h3 className="mt-1 text-lg font-medium text-ink">{entry.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad py-16 pb-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our Mindset & Philosophy" title="Empowering Digital Sovereignty" description="RebelRoot is an independent, developer-led collective born out of a simple conviction: your data belongs to you. In an era of unchecked tracking, intrusive advertising, and centralized corporate data storage, we stand for digital sovereignty. We build tools that respect your privacy, work offline-first, and run entirely under your own control." />
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="rounded-xl2 border border-base-border bg-base-card/60 p-6"
              >
                <value.icon className="h-5 w-5 text-violet-soft" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-medium text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
