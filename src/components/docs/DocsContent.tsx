"use client";

import { motion } from "framer-motion";
import { Terminal, GitPullRequest, ShieldAlert, BookMarked } from "lucide-react";
import { Eyebrow } from "@/components/ui/Badge";
import { fadeUp, defaultViewport } from "@/lib/motion";

const sections = [
  { id: "getting-started", label: "Getting started", icon: Terminal },
  { id: "contributing", label: "Contributing", icon: GitPullRequest },
  { id: "security", label: "Security disclosure", icon: ShieldAlert },
  { id: "changelog", label: "Changelog", icon: BookMarked },
];

export function DocsContent() {
  return (
    <section className="section-pad pb-24 pt-40 lg:pt-48">
      <div className="mx-auto max-w-6xl">
        <Eyebrow>Documentation</Eyebrow>
        <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
          Everything you need to build with RebelRoot.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
          Full API references and per-product guides are being migrated to this
          section. In the meantime, here&rsquo;s what&rsquo;s available today.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav
            aria-label="Documentation sections"
            className="sticky top-28 hidden h-fit space-y-1 lg:block"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-white/4 hover:text-ink"
              >
                <s.icon className="h-4 w-4" strokeWidth={1.75} />
                {s.label}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            <DocSection
              id="getting-started"
              icon={Terminal}
              title="Getting started"
              body="Each product ships a standalone README with install steps for macOS, Linux, and Windows. Docker Compose files are provided for anything with a server component, like CampCart and RootLock sync."
            />
            <DocSection
              id="contributing"
              icon={GitPullRequest}
              title="Contributing"
              body="We accept pull requests from anyone. Start with an issue labeled 'good first issue' in the relevant repository, and read the CONTRIBUTING.md for code style and review expectations before opening a PR."
            />
            <DocSection
              id="security"
              icon={ShieldAlert}
              title="Security disclosure"
              body="Report vulnerabilities to security@rebelroot.dev with a proof of concept where possible. We acknowledge reports within 24 hours and credit researchers in the public changelog once a fix ships, unless anonymity is requested."
            />
            <DocSection
              id="changelog"
              icon={BookMarked}
              title="Changelog"
              body="Release notes for every product are published in each repository's CHANGELOG.md. A unified, searchable changelog across the whole collective is planned for a future documentation update."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DocSection({
  id,
  icon: Icon,
  title,
  body,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="scroll-mt-28 border-t border-base-border pt-10"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-electric-soft" strokeWidth={1.75} />
        <h2 className="text-xl font-medium text-ink">{title}</h2>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
        {body}
      </p>
    </motion.div>
  );
}
