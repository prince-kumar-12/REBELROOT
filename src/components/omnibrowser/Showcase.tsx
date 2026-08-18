import { Layers, Search, Shield, SplitSquareHorizontal, BookOpen, Zap } from "lucide-react";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";
import type { ShowcaseItem } from "@/types";

const ITEMS: (ShowcaseItem & { icon: typeof Zap })[] = [
  {
    id: "speed",
    tag: "Performance",
    title: "Loads pages before you finish typing",
    description: "A predictive rendering engine that pre-warms the pages you're most likely to visit next.",
    icon: Zap,
  },
  {
    id: "tabs",
    tag: "Organization",
    title: "Tab groups that build themselves",
    description: "Omni clusters related tabs by topic automatically, so your window never feels chaotic.",
    icon: Layers,
  },
  {
    id: "search",
    tag: "Discovery",
    title: "One box for everything",
    description: "Search, math, unit conversion, and AI answers all live in a single address bar.",
    icon: Search,
  },
  {
    id: "reader",
    tag: "Focus",
    title: "Reader mode with real summaries",
    description: "Strip the clutter and get a four-line summary generated entirely on-device.",
    icon: BookOpen,
  },
  {
    id: "split",
    tag: "Multitasking",
    title: "Split view for side-by-side work",
    description: "Drag a tab to the edge to compare documents, references, and drafts at once.",
    icon: SplitSquareHorizontal,
  },
  {
    id: "shield",
    tag: "Privacy",
    title: "A shield that's always on",
    description: "Trackers, fingerprinting, and third-party cookies are blocked by default — no setup.",
    icon: Shield,
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <ScrollReveal className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Showcase
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
          Everything you&rsquo;d expect. A few things you wouldn&rsquo;t.
        </h2>
        <p className="mt-4 text-balance text-lg leading-relaxed text-ink-500">
          Omni handles the browser basics flawlessly, then adds the small
          conveniences that add up to hours saved every week.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item, i) => (
          <ScrollReveal key={item.id} delay={(i % 3) * 0.1}>
            <div className="group relative overflow-hidden rounded-card border border-white/8 bg-carbon-900 p-6 shadow-card transition-all duration-300 ease-cinematic hover:-translate-y-1.5 hover:border-white/15 hover:bg-carbon-850 hover:shadow-xl">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/12 transition-transform duration-300 ease-cinematic group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <item.icon className="h-5 w-5 text-accent" strokeWidth={2} />
              </div>
              <span className="text-[11px] font-medium uppercase tracking-widest text-ink-700">
                {item.tag}
              </span>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-ink-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
