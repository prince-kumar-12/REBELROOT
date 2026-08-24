"use client";

import { parseContent, addHeadingIds } from "@/lib/docs/parse-content";
import { CodeBlock } from "@/components/docs/CodeBlock";

function renderSegments(html: string) {
  const segments = parseContent(html);

  return segments.map((segment, i) =>
    segment.type === "code" ? (
      <CodeBlock
        key={i}
        lang={segment.lang}
        file={segment.file}
        highlight={segment.highlight}
        code={segment.code}
      />
    ) : (
      <div
        key={i}
        className="contents"
        dangerouslySetInnerHTML={{ __html: segment.html }}
      />
    )
  );
}

/**
 * Renders a fragment of doc content (already heading-id-tagged),
 * mixing raw HTML segments with interactive CodeBlock components.
 */
export function DocsContent({ contentHtml }: { contentHtml: string }) {
  return <>{renderSegments(addHeadingIds(contentHtml))}</>;
}