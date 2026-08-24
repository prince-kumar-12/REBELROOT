"use client";

import { parseContent, addHeadingIds } from "@/lib/docs/parse-content";
import { CodeBlock } from "@/components/docs/CodeBlock";

function renderSegments(html: string) {
  const segments = parseContent(html);

  return segments.map((segment, index) => {
    if (segment.type === "code") {
      return (
        <CodeBlock
          key={index}
          lang={segment.lang}
          file={segment.file}
          highlight={segment.highlight}
          code={segment.code}
        />
      );
    }

    return (
      <div
        key={index}
        className="contents"
        dangerouslySetInnerHTML={{
          __html: segment.html,
        }}
      />
    );
  });
}

export function DocsContent({
  contentHtml,
}: {
  contentHtml: string;
}) {
  const processedContent = addHeadingIds(contentHtml);

  return <>{renderSegments(processedContent)}</>;
}