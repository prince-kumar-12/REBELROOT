"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, ArrowRight } from "lucide-react";
import { searchDocs, getPopularResults } from "@/lib/docs/search";
import { FlatNavEntry } from "@/lib/docs/types";

export const OPEN_SEARCH_EVENT = "omni-docs:open-search";

export function docPath(path: string): string {
  return `/docs/${path}`;
}

function highlightMatch(title: string, q: string) {
  if (!q) return title;
  const i = title.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return title;
  return (
    <>
      {title.slice(0, i)}
      <mark>{title.slice(i, i + q.length)}</mark>
      {title.slice(i + q.length)}
    </>
  );
}

export function DocsSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results: FlatNavEntry[] = query.trim() ? searchDocs(query) : getPopularResults();

  const close = useCallback(() => setOpen(false), []);

  const go = useCallback(
    (path: string) => {
      close();
      router.push(docPath(path));
    },
    [close, router]
  );

  useEffect(() => {
    function onOpenEvent() {
      setOpen(true);
    }
    function onKeydown(e: KeyboardEvent) {
      const isMod = e.ctrlKey || e.metaKey;
      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (
        e.key === "/" &&
        !/input|textarea|select/i.test((document.activeElement as HTMLElement)?.tagName || "")
      ) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener(OPEN_SEARCH_EVENT, onOpenEvent);
    document.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener(OPEN_SEARCH_EVENT, onOpenEvent);
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  useEffect(() => {
    if (open) {
      // Resets dialog-local state on open; must run post-mount.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setQuery("");
      setActive(0);
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActive(0);
  }, [query]);

  function onInputKeydown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(results.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + Math.max(results.length, 1)) % Math.max(results.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[active]) go(results[active].path);
    }
  }

  if (!open) return null;

  const groups: { section: string; items: FlatNavEntry[] }[] = [];
  results.forEach((item) => {
    const last = groups[groups.length - 1];
    if (last && last.section === item.section) last.items.push(item);
    else groups.push({ section: item.section, items: [item] });
  });

  let runningIndex = -1;

  return (
    <div
      className="search-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="search-modal" role="dialog" aria-modal="true" aria-label="Search documentation">
        <div className="search-modal__input-wrap">
          <Search />
          <input
            ref={inputRef}
            type="search"
            placeholder="Search pages, features, APIs…"
            aria-label="Search"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeydown}
          />
          <kbd className="search-modal__esc">Esc</kbd>
        </div>
        <div className="search-results">
          {results.length === 0 ? (
            <div className="search-empty">
              No results for “{query}”.
              <br />
              Try “privacy”, “geckoview” or “downloads”.
            </div>
          ) : (
            groups.map((group) => (
              <div key={group.section}>
                <div className="search-results__group">
                  {query.trim() ? group.section : "Popular"}
                </div>
                {group.items.map((item) => {
                  runningIndex++;
                  const idx = runningIndex;
                  return (
                    <div
                      key={item.path}
                      className={`search-result${idx === active ? " active" : ""}`}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => go(item.path)}
                    >
                      <span className="search-result__icon">
                        <FileText />
                      </span>
                      <span className="search-result__body">
                        <span className="search-result__title">
                          {highlightMatch(item.title, query)}
                        </span>
                        <span className="search-result__desc">{item.desc}</span>
                      </span>
                      <span className="search-result__enter">
                        <ArrowRight />
                      </span>
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
        <div className="search-modal__footer">
          <span>
            <kbd>↑</kbd>
            <kbd>↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>Ctrl K</kbd> toggle
          </span>
        </div>
      </div>
    </div>
  );
}
