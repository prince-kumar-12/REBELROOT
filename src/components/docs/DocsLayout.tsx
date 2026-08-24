import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { TableOfContents } from "@/components/docs/TableOfContents";
import type { HeadingInfo } from "@/lib/docs/parse-content";

export function DocsLayout({
  children,
  headings = [],
}: {
  children: React.ReactNode;
  headings?: HeadingInfo[];
}) {
  return (
    <div className="docs-layout">
      <DocsSidebar />
      <main id="content" className="content">
        <div className="content__inner">{children}</div>
      </main>
      <TableOfContents headings={headings} />
    </div>
  );
}
