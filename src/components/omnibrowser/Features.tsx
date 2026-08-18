import { Zap, Shield, Layers, Gauge, Eye, Wand2 } from "lucide-react";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";
import type { FeatureItem } from "@/types";

const ICON_MAP: Record<FeatureItem["icon"], typeof Zap> = {
  zap: Zap,
  shield: Shield,
  layers: Layers,
  gauge: Gauge,
  eye: Eye,
  wand: Wand2,
};

const FEATURES: FeatureItem[] = [
  {
    id: "speed",
    title: "Built for raw speed",
    description: "A rendering engine tuned for low-latency page loads and instant tab switching.",
    icon: "gauge",
  },
  {
    id: "privacy",
    title: "Private by architecture",
    description: "No telemetry, no ad tracking, nothing sold. Privacy isn't a setting, it's the default.",
    icon: "shield",
  },
  {
    id: "ai",
    title: "On-device intelligence",
    description: "Summaries and search happen locally — nothing you read ever leaves your machine.",
    icon: "wand",
  },
  {
    id: "sync",
    title: "Seamless everywhere",
    description: "Tabs, history, and notes sync instantly across desktop and mobile, end to end encrypted.",
    icon: "layers",
  },
  {
    id: "focus",
    title: "Distraction-free by design",
    description: "A calm reading mode and quiet notifications keep the page — not the chrome — in focus.",
    icon: "eye",
  },
  {
    id: "extensible",
    title: "Extensible when you need it",
    description: "A lightweight extension model for the handful of tools you actually use daily.",
    icon: "zap",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <ScrollReveal className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">
          Features
        </span>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">
          The fundamentals, done right
        </h2>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => {
          const Icon = ICON_MAP[feature.icon];
          return (
            <ScrollReveal key={feature.id} delay={(i % 3) * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10  shrink-0 items-center justify-center rounded-lg border border-white/10 bg-carbon-800">
                  <Icon className="h-4.5 w-4.5 text-accent" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
