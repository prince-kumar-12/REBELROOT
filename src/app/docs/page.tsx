import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Shield, Zap, Puzzle } from "lucide-react";
import { GitHubIcon } from "@/components/docs/icons";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { NAV } from "@/lib/docs/navigation";

export const metadata: Metadata = {
  title: "Omni Browser Documentation",
  description:
    "Documentation for Omni Browser: a private, fast, open-source browser for Android built on GeckoView, by RebelRoot.",
};

export default function DocsHomePage() {
  return (
    <DocsLayout>
      <article className="prose">
        <h1>Omni Browser Documentation</h1>
        <p className="lead">
          A private, fast and powerful open-source browser for Android — built on
          Mozilla&rsquo;s GeckoView engine, with a 100% native Jetpack Compose interface.
        </p>

        <div className="card-grid" style={{ marginTop: "1.5rem" }}>
          <Link className="card" href="/docs/getting-started/introduction">
            <span className="card__icon">
              <Zap className="size-5" />
            </span>
            <span className="card__title">
              Get started <ArrowRight className="arrow size-4" />
            </span>
            <span className="card__desc">Install Omni and take your first five minutes.</span>
          </Link>
          <Link className="card" href="/docs/privacy/overview">
            <span className="card__icon">
              <Shield className="size-5" />
            </span>
            <span className="card__title">
              Privacy &amp; security <ArrowRight className="arrow size-4" />
            </span>
            <span className="card__desc">The full privacy stack: blocking, isolation, Fire Button.</span>
          </Link>
          <Link className="card" href="/docs/extensions/overview">
            <span className="card__icon">
              <Puzzle className="size-5" />
            </span>
            <span className="card__title">
              Extensions <ArrowRight className="arrow size-4" />
            </span>
            <span className="card__desc">Real Firefox WebExtension support, powered by Gecko.</span>
          </Link>
          <a
            className="card"
            href="https://github.com/REBEL-ROOT/omni-browser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="card__icon">
              <GitHubIcon className="size-5" />
            </span>
            <span className="card__title">
              View source <ArrowRight className="arrow size-4" />
            </span>
            <span className="card__desc">GPLv3 — browse the code on GitHub.</span>
          </a>
        </div>

        <h2>Browse the docs</h2>
        <p>Every section, all in one place.</p>

        {NAV.map((section) => (
          <div key={section.title} style={{ marginBottom: "0.5rem" }}>
            <h3>{section.title}</h3>
            <div className="card-grid">
              {section.items.map((item) => (
                <Link key={item.path} className="card" href={`/docs/${item.path}`}>
                  <span className="card__title">
                    {item.title} <ArrowRight className="arrow size-4" />
                  </span>
                  <span className="card__desc">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </article>
    </DocsLayout>
  );
}
