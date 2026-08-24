"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import type { HeadingInfo } from "@/lib/docs/parse-content";

export function TableOfContents({ headings }: { headings: HeadingInfo[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    if (!("IntersectionObserver" in window) || headings.length === 0) return;
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <aside className="toc thin-scroll" aria-label="On this page">
      <div className="toc__title">On this page</div>
      <ul className="toc__list">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              ref={(el) => {
                linkRefs.current[h.id] = el;
              }}
              href={`#${h.id}`}
              className={`toc__link depth-${h.depth}${activeId === h.id ? " active" : ""}`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" className="toc__top">
        <ArrowUp className="size-3.5" />
        Back to top
      </a>
    </aside>
  );
}
