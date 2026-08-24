import Link from "next/link";

export function Breadcrumbs({ section, title }: { section: string; title: string }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/docs">Docs</Link>
      <span className="sep">/</span>
      <span>{section}</span>
      <span className="sep">/</span>
      <span className="current">{title}</span>
    </nav>
  );
}
