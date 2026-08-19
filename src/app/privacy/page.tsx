import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Badge";
import  Community  from "@/components/layout/joinCommunity";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the NovaRoot collective handles data across novaroot.dev and shared infrastructure.",
};

const sections = [
  {
    title: "Zero Telemetry & Tracking",
    body: "None of our applications (including Omni Browser, MOCNovel, and CampCart) contain hidden analytics trackers, crash-reporting SDKs, or background telemetry. We do not inspect, log, aggregate, or sell your browsing history, read lists, search queries, or transaction items.",
  },
  {
    title: " Local-First Storage",
    body: " By default, all user data—such as bookmarks, reading history, shopping carts, and logs—is stored directly on your physical device. We have no backend system database that collects this information.",
  },
  {
    title: "Optional End-to-End Encrypted Synchronization",
    body: "If you choose to use our synchronization features to link devices, your data is encrypted client-side using industry-standard cryptographic keys before it ever leaves your device. NovaRoot servers act strictly as transit brokers and cannot decrypt your data.",
  },
  {
    title: "Open Source Verification",
    body: "Since all of our codebases are open source under permissive licenses, you can inspect the compile scripts, review network call configurations, and verify these claims independently.",
  },
];

export default function PrivacyPage() {
  return (
    <section className=" section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto  text-center max-w-3xl min-h-[35vh] sm:min-h-[40vh] lg:min-h-[40vh]">
        <h1>Legal</h1>
        <h1 className="mt-6 text-4xl text-center font-medium text-ink sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-8 max-w-2xl text-center   leading-relaxed text-ink-muted">
          Read the official NovaRoot Privacy Policy. Learn how our
          zero-telemetry and local-first architecture protects your personal
          data across all products.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-5xl border-t pt-10 space-y-10">
        <h1 className="mt-6 text-4xl text-center font-medium text-ink sm:text-5xl">
          Our Commitment to Privacy
        </h1>
        <p className="mt-8 max-w-7xl text-center text-2xl leading-relaxed text-ink-muted">
          Read the official NovaRoot Privacy Policy. Learn how our
          zero-telemetry and local-first architecture protects your personal
          data across all products.
        </p>
        {sections.map((s) => (
          <div key={s.title} className="border-base-border pt-8">
            <h2 className="text-2xl font-medium text-center  text-ink">
              {s.title}
            </h2>
            <p className="mt-4 text-sm text-center leading-relaxed text-ink-muted sm:text-base">
              {s.body}
            </p>
          </div>
        ))}
      </div>
     <Community/>
    </section>
  );
}
