import Link from "next/link";
import { Apple, ArrowRight, MonitorSmartphone } from "lucide-react";
import ScrollReveal from "@/components/omnibrowser/animations/ScrollReveal";

export default function FinalCTA() {
  return (
    <section id="download" className="relative mx-auto max-w-5xl px-6 pb-28 pt-8 lg:px-8">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-card border border-white/8 bg-carbon-900 px-8 py-16 text-center shadow-card sm:py-20">
          <div className="ambient-glow" aria-hidden="true" />

          <div className="relative z-10">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl lg:text-5xl">
              Your browser should feel this fast.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-balance text-lg leading-relaxed text-ink-500">
              Free to download. Ready in under a minute. No account required
              to get started.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-cinematic hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-glow"
              >
                <Apple className="h-4 w-4" />
                Download for macOS
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-ink-100 transition-all duration-300 ease-cinematic hover:-translate-y-0.5 hover:border-white/25"
              >
                <MonitorSmartphone className="h-4 w-4" />
                Other platforms
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="mt-16 flex flex-col items-center gap-4 text-center">
        <p className="text-xs text-ink-700">
          © {new Date().getFullYear()} Omni Browser. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-ink-500">
          <Link href="#" className="hover:text-ink-100">Privacy</Link>
          <Link href="#" className="hover:text-ink-100">Terms</Link>
          <Link href="#" className="hover:text-ink-100">Contact</Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
