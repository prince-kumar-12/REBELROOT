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

/** Splits a doc page's raw content HTML into alternating HTML and code
 * segments, so code blocks can be rendered as an interactive React
 * component while everything else stays as data-driven markup. */
export function parseContent(contentHtml: string): ContentSegment[] {
  const segments: ContentSegment[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  CODE_BLOCK_RE.lastIndex = 0;
  while ((match = CODE_BLOCK_RE.exec(contentHtml)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "html", html: contentHtml.slice(lastIndex, match.index) });
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
    segments.push({ type: "html", html: contentHtml.slice(lastIndex) });
  }
  return segments;
}

/** Extracts h2/h3 headings (id + text) from content HTML for the TOC.
 * IDs mirror the original slugify() used by app.js. */
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
    const text = match[2].replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    let unique = id;
    let n = 2;
    while (seen.has(unique)) {
      unique = `${id}-${n++}`;
    }
    seen.add(unique);
    headings.push({ id: unique, text, depth });
  }
  return headings;
}

/** Splits off the leading <h1> (and an immediately-following lead
 * paragraph, if present) so page chrome like PageMeta can be inserted
 * between the title and the rest of the content, matching the original
 * layout engine's placement. */
export function splitHeading(contentHtml: string): {
  heading: string | null;
  lead: string | null;
  rest: string;
} {
  const h1Match = contentHtml.match(/^\s*<h1>([\s\S]*?)<\/h1>/);
  if (!h1Match) return { heading: null, lead: null, rest: contentHtml };
  let rest = contentHtml.slice(h1Match[0].length);
  const leadMatch = rest.match(/^\s*<p class="lead">([\s\S]*?)<\/p>/);
  let lead: string | null = null;
  if (leadMatch) {
    lead = leadMatch[1];
    rest = rest.slice(leadMatch[0].length);
  }
  return { heading: h1Match[1], lead, rest };
}

/** Injects id="..." attributes into h2/h3/h4 tags matching extractHeadings,
 * plus a trailing anchor link, so scroll-to-hash and the TOC work without
 * client-side DOM mutation. */
export function addHeadingIds(contentHtml: string): string {
  const seen = new Set<string>();
  return contentHtml.replace(/<h([234])>(.*?)<\/h\1>/g, (full, level, inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    const id = slugify(text);
    let unique = id;
    let n = 2;
    while (seen.has(unique)) {
      unique = `${id}-${n++}`;
    }
    seen.add(unique);
    return `<h${level} id="${unique}">${inner}<a class="heading-anchor" href="#${unique}" aria-label="Link to this section">#</a></h${level}>`;
  });
}
