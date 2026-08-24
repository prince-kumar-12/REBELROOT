export interface HtmlSegment {
  type: "html";
  html: string;
}

export interface CodeSegment {
  type: "code";
  lang: string;
  file?: string;
  highlight?: string;
  code: string;
}

export type ContentSegment = HtmlSegment | CodeSegment;

const CODE_BLOCK_RE =
  /<pre><code class="language-([\w-]+)"(?:\s+data-file="([^"]*)")?(?:\s+data-highlight="([^"]*)")?>([\s\S]*?)<\/code><\/pre>/g;

function decodeEntities(s: string): string {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

/**
 * Splits raw document HTML into HTML and code segments.
 */
export function parseContent(contentHtml: string): ContentSegment[] {
  const segments: ContentSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  CODE_BLOCK_RE.lastIndex = 0;

  while ((match = CODE_BLOCK_RE.exec(contentHtml)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "html",
        html: contentHtml.slice(lastIndex, match.index),
      });
    }

    const [, lang, file, highlight, rawCode] = match;

    segments.push({
      type: "code",
      lang,
      file: file || undefined,
      highlight: highlight || undefined,
      code: decodeEntities(rawCode),
    });

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < contentHtml.length) {
    segments.push({
      type: "html",
      html: contentHtml.slice(lastIndex),
    });
  }

  return segments;
}

export interface HeadingInfo {
  id: string;
  text: string;
  depth: 2 | 3;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const HEADING_RE = /<h([23])>(.*?)<\/h\1>/g;

export function extractHeadings(contentHtml: string): HeadingInfo[] {
  const headings: HeadingInfo[] = [];
  const seen = new Set<string>();

  let match: RegExpExecArray | null;

  HEADING_RE.lastIndex = 0;

  while ((match = HEADING_RE.exec(contentHtml)) !== null) {
    const depth = Number(match[1]) as 2 | 3;

    const text = match[2]
      .replace(/<[^>]+>/g, "")
      .trim();

    const id = slugify(text);

    let unique = id;
    let n = 2;

    while (seen.has(unique)) {
      unique = `${id}-${n++}`;
    }

    seen.add(unique);

    headings.push({
      id: unique,
      text,
      depth,
    });
  }

  return headings;
}

/**
 * Splits the leading h1 and optional lead paragraph
 * from the remaining document content.
 */
export function splitHeading(contentHtml: string): {
  heading: string | null;
  lead: string | null;
  rest: string;
} {
  const h1Match = contentHtml.match(
    /^\s*<h1>([\s\S]*?)<\/h1>/
  );

  if (!h1Match) {
    return {
      heading: null,
      lead: null,
      rest: contentHtml,
    };
  }

  let rest = contentHtml.slice(h1Match[0].length);

  const leadMatch = rest.match(
    /^\s*<p class="lead">([\s\S]*?)<\/p>/
  );

  let lead: string | null = null;

  if (leadMatch) {
    lead = leadMatch[1];
    rest = rest.slice(leadMatch[0].length);
  }

  return {
    heading: h1Match[1],
    lead,
    rest,
  };
}

/**
 * Adds IDs and anchor links to h2, h3 and h4 headings.
 */
export function addHeadingIds(contentHtml: string): string {
  const seen = new Set<string>();

  return contentHtml.replace(
    /<h([234])>(.*?)<\/h\1>/g,
    (full, level, inner) => {
      const text = inner
        .replace(/<[^>]+>/g, "")
        .trim();

      const id = slugify(text);

      let unique = id;
      let n = 2;

      while (seen.has(unique)) {
        unique = `${id}-${n++}`;
      }

      seen.add(unique);

      return `<h${level} id="${unique}">${inner}<a class="heading-anchor" href="#${unique}" aria-label="Link to this section">#</a></h${level}>`;
    }
  );
}