"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import { NAV } from "@/lib/docs/navigation";

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const activePath = pathname?.startsWith("/docs/") ? pathname.slice("/docs/".length) : "";
  const [filter, setFilter] = useState("");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const q = filter.trim().toLowerCase();

  const groups = useMemo(() => {
    return NAV.map((section) => {
      const items = section.items.filter((item) => !q || item.title.toLowerCase().includes(q));
      return { ...section, items, anyMatch: items.length > 0 };
    });
  }, [q]);

  return (
    <>
      <div className="sidebar__filter">
        <Search />
        <input
          type="search"
          placeholder="Filter…"
          aria-label="Filter navigation"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {groups.map((section) => {
        const isCollapsed = !!collapsed[section.title] && !q;
        if (q && !section.anyMatch) return null;
        return (
          <div key={section.title} className={`sidebar__group${isCollapsed ? " collapsed" : ""}`}>
            <button
              type="button"
              className="sidebar__heading"
              // aria-expanded={!isCollapsed}
              onClick={() =>
                setCollapsed((c) => ({ ...c, [section.title]: !c[section.title] }))
              }
            >
              <span>{section.title}</span>
              <span className="chev">
                <ChevronDown />
              </span>
            </button>
            <ul className="sidebar__links">
              {section.items.map((item) => (
                <li key={item.path}>
                  <Link
                    href={`/docs/${item.path}`}
                    className={`sidebar__link${item.path === activePath ? " active" : ""}`}
                    onClick={onNavigate}
                  >
                    <span>{item.title}</span>
                    {item.badge && <span className="badge badge--muted">{item.badge}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
