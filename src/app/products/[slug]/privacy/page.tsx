import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { Eyebrow } from "@/components/ui/Badge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Privacy Policy`,
    description: `How ${product.name} handles data, what it stores locally, and what it never collects.`,
  };
}

export default async function ProductPrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>{product.name} · Legal</Eyebrow>
        <h1 className="mt-6 text-4xl font-medium text-ink sm:text-5xl">
          {product.name} Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated August 2026</p>

        <div className="prose-invert mt-12 space-y-10">
          <PolicySection title="Data collected by default">
            <p>
              {product.name} is designed to function without transmitting personal
              data to NovaRoot servers. Data created while using {product.name}{" "}
              — {product.architecture[0]?.toLowerCase()} — stays on your device
              unless you explicitly enable a sync or backup feature.
            </p>
          </PolicySection>

          <PolicySection title="What we never collect">
            <ul className="list-disc space-y-2 pl-5 text-ink-muted">
              <li>Behavioral analytics or usage pattern tracking</li>
              <li>Advertising identifiers or cross-site tracking cookies</li>
              <li>Content you create, unless you explicitly export or share it</li>
            </ul>
          </PolicySection>

          <PolicySection title="Optional sync and cloud features">
            <p>
              If {product.name} offers a sync or backup feature, it is opt-in and
              detailed under Architecture on the product page. Where encryption is
              part of the design, keys are generated and held on your device.
            </p>
          </PolicySection>

          <PolicySection title="Security practices">
            <ul className="list-disc space-y-2 pl-5 text-ink-muted">
              {product.security.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </PolicySection>

          <PolicySection title="Your rights">
            <p>
              Because {product.name} stores data locally by default, exporting or
              deleting your data is typically a matter of removing it from your
              own device. Where a NovaRoot server is involved, contact us to
              request deletion of any account-linked metadata.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:privacy@novaroot.dev" className="text-electric-soft underline underline-offset-2">
                privacy@novaroot.dev
              </a>
              . This policy is specific to {product.name}; see our{" "}
              <a href="/privacy" className="text-electric-soft underline underline-offset-2">
                general Privacy Policy
              </a>{" "}
              for collective-wide practices.
            </p>
          </PolicySection>
        </div>
      </div>
    </section>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-base-border pt-8">
      <h2 className="text-xl font-medium text-ink">{title}</h2>
      <div className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">
        {children}
      </div>
    </div>
  );
}
