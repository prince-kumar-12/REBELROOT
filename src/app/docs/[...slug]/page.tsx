import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDocPage } from "@/lib/docs/pages-index";
import { getAllPaths, getAdjacentPages } from "@/lib/docs/navigation";
import { extractHeadings, splitHeading } from "@/lib/docs/parse-content";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocsContent } from "@/components/docs/DocsContent";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { PageMeta } from "@/components/docs/PageMeta";
import { DocsPagination } from "@/components/docs/DocsPagination";
import { Feedback } from "@/components/docs/Feedback";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export function generateStaticParams() {
  return getAllPaths().map((path) => ({ slug: path.split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  const page = getDocPage(path);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://www.rebelroot.xyz/docs/${page.path}` },
    openGraph: {
      type: "article",
      title: `${page.title} — Omni Browser`,
      description: page.description,
      url: `https://www.rebelroot.xyz/docs/${page.path}`,
    },
  };
}

function wordCount(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ").trim();
  if (!text) return 0;
  return text.split(/\s+/).length;
}

export default async function DocPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const path = slug.join("/");
  const page = getDocPage(path);
  if (!page) notFound();

  const headings = extractHeadings(page.contentHtml);
  const words = wordCount(page.contentHtml);
  const minutes = Math.max(1, Math.round(words / 200));
  const { prev, next } = getAdjacentPages(path);
  const { heading, lead, rest } = splitHeading(page.contentHtml);

  return (
    <DocsLayout headings={headings}>
      <Breadcrumbs section={page.section} title={page.title} />
      <article className="prose">
        {heading && <h1 dangerouslySetInnerHTML={{ __html: heading }} />}
        {lead && <p className="lead" dangerouslySetInnerHTML={{ __html: lead }} />}
        <PageMeta minutes={minutes} words={words} updated={page.updated} />
        <DocsContent contentHtml={rest} />
        <DocsPagination prev={prev} next={next} />
        <Feedback path={page.path} />
      </article>
    </DocsLayout>
  );
}
