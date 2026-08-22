import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description: "The complete list of cookies rebelroot.dev sets, and why.",
};

const cookies = [
  {
    name: "rebelroot-theme",
    purpose: "Remembers whether you prefer dark or light mode.",
    duration: "1 year",
    type: "Preference",
  },
  {
    name: "rebelroot-session",
    purpose: "Keeps the contact form working across a single visit.",
    duration: "Session only",
    type: "Essential",
  },
];

export default function CookiesPage() {
  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-6 text-4xl font-medium text-ink sm:text-5xl">
          Cookies Policy
        </h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated August 2026</p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-muted">
          rebelroot.dev sets exactly two cookies, both listed below in full. We do
          not use third-party advertising, analytics, or cross-site tracking
          cookies anywhere on this site.
        </p>

        <div className="mt-12 overflow-hidden rounded-xl2 border border-base-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-base-border bg-base-card/60 text-ink-faint">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Purpose</th>
                <th className="px-5 py-3 font-medium">Duration</th>
                <th className="px-5 py-3 font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {cookies.map((c) => (
                <tr key={c.name} className="border-b border-base-border last:border-0">
                  <td className="px-5 py-4 font-mono text-xs text-electric-soft">{c.name}</td>
                  <td className="px-5 py-4 text-ink-muted">{c.purpose}</td>
                  <td className="px-5 py-4 text-ink-muted">{c.duration}</td>
                  <td className="px-5 py-4 text-ink-muted">{c.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <h2 className="text-xl font-medium text-ink">Managing cookies</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Both cookies can be cleared through your browser's settings at any
              time. Clearing the session cookie mid-form will require you to
              re-enter your message; clearing the theme cookie simply resets the
              site to dark mode.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-medium text-ink">Product applications</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
              Desktop and mobile RebelRoot products, like Omni Browser or RootLock,
              do not use browser cookies at all — they store local application
              data instead, described in each product's own privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
