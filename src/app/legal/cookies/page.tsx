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
           Read the official RebelRoot Cookies Policy. We use zero tracking or advertising cookies and rely only on local preferences for dark mode.
        </p>

      
        <div className="mt-12 space-y-8">
  <div>
    <h2 className="text-xl font-medium text-ink">
      1. Do We Use Cookies?
    </h2>

    <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
      <strong className="font-semibold text-ink">No.</strong> RebelRoot does
      not write any tracking, advertising, profiling, or third-party cookies
      on your device when you visit our website.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-medium text-ink">
      2. Essential Local State
    </h2>

    <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
      We use the browser&apos;s standard{" "}
      <strong className="font-semibold text-ink">localStorage</strong>{" "}
      mechanisms strictly to store your active preferences. This includes:
    </p>

    <ul className="mt-5 space-y-2">
      <li className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted sm:text-base">
        <span className="text-red-500">✓</span>
        <span>
          <strong className="font-semibold text-ink">
            Theme Preference:
          </strong>{" "}
          Saving your selection of Light Mode or Dark Mode.
        </span>
      </li>

      <li className="flex items-start gap-2 text-sm leading-relaxed text-ink-muted sm:text-base">
        <span className="text-red-500">✓</span>
        <span>
          <strong className="font-semibold text-ink">
            Newsletter States:
          </strong>{" "}
          Remembering if you have closed the newsletter drawer to avoid
          bothering you again.
        </span>
      </li>
    </ul>

    <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
      This data never leaves your browser and is not uploaded to any analytics
      endpoint.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-medium text-ink">
      3. Third-Party Web Links
    </h2>

    <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
      Our site contains links to other independent platforms (e.g., GitHub,
      Sponsor pages). These services have their own cookie policies once you
      navigate to their domains.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
