import { Search, Languages, StickyNote, Camera } from "lucide-react";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";
import type { QuickToolItem } from "@/types";

const TOOLS: (Omit<QuickToolItem, "icon"> & { icon: typeof Search })[] = [
  {
    id: "search",
    title: "Quick Search",
    description: "Highlight any text to search it instantly in a floating panel.",
    icon: Search,
  },
  {
    id: "translate",
    title: "Live Translate",
    description: "Full pages translate in place, keeping the original layout intact.",
    icon: Languages,
  },
  {
    id: "note",
    title: "Page Notes",
    description: "Jot a note against any page — it resurfaces next time you visit.",
    icon: StickyNote,
  },
  {
    id: "capture",
    title: "Smart Capture",
    description: "Screenshot a region and Omni cleans it up and extracts the text.",
    icon: Camera,
  },
];

export default function QuickTools() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-card border border-white/8 bg-carbon-900/60 p-8 sm:p-10">
        <ScrollReveal>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Quick Tools
          </span>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">
            Small tools you&rsquo;ll reach for daily
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((tool, i) => (
            <ScrollReveal key={tool.id} delay={i * 0.08} className="flex flex-col items-start">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-carbon-800">
                <tool.icon className="h-4 w-4 text-ink-100" strokeWidth={2} />
              </div>
              <h3 className="text-sm font-semibold text-ink-100">{tool.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {tool.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
