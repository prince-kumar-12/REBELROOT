export interface NavItem {
  title: string;
  path: string;
  desc: string;
  kw?: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface DocPage {
  path: string;
  section: string;
  title: string;
  description: string;
  updated: string;
  contentHtml: string;
}

export interface FlatNavEntry extends NavItem {
  section: string;
}

export interface TocItem {
  id: string;
  text: string;
  depth: 2 | 3;
}

export interface SearchResult extends FlatNavEntry {
  score: number;
}
