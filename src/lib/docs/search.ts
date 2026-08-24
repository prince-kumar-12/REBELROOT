import { FLAT_NAV } from "./navigation";
import { FlatNavEntry, SearchResult } from "./types";

/** Substring-first fuzzy scorer: exact/prefix substrings score highest,
 * scattered character matches score lower. Mirrors the original docs' search. */
function fuzzyScore(query: string, text: string): number {
  const q = query.toLowerCase();
  const t = text.toLowerCase();
  if (!q) return 1;
  const idx = t.indexOf(q);
  if (idx !== -1) return 1000 - idx + (t.startsWith(q) ? 500 : 0);
  let qi = 0;
  let score = 0;
  let last = -2;
  for (let ti = 0; ti < t.length && qi < q.length; ti++) {
    if (t[ti] === q[qi]) {
      score += ti === last + 1 ? 8 : 1;
      last = ti;
      qi++;
    }
  }
  return qi === q.length ? score : -1;
}

export function searchDocs(query: string, limit = 12): SearchResult[] {
  const q = query.trim();
  if (!q) return [];
  const scored = FLAT_NAV.map((item) => {
    const score = Math.max(
      fuzzyScore(q, item.title) * 2,
      fuzzyScore(q, item.kw || ""),
      fuzzyScore(q, item.desc) * 0.5,
      fuzzyScore(q, item.section) * 0.3
    );
    return { ...item, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
  return scored;
}

export const POPULAR_PATHS = [
  "privacy/overview",
  "media/overview",
  "developer/architecture",
  "getting-started/quick-start",
  "extensions/overview",
];

export function getPopularResults(): FlatNavEntry[] {
  return POPULAR_PATHS.map((p) => FLAT_NAV.find((x) => x.path === p)).filter(
    (x): x is FlatNavEntry => Boolean(x)
  );
}
