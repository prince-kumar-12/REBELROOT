"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";
import { GitHubIcon } from "@/components/docs/icons";
import { ThemeToggle } from "@/components/docs/ThemeToggle";
import { OPEN_SEARCH_EVENT } from "@/components/docs/DocsSearch";

const REPO_API = "https://api.github.com/repos/REBEL-ROOT/omni-browser";
const REPO_URL = "https://github.com/REBEL-ROOT/omni-browser";

function OmniLogoMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <path d="M12 3v18" />
    </svg>
  );
}

export function DocsHeader() {
  const [stars, setStars] = useState<string>("—");
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Reads browser-only APIs; must run post-mount to stay SSR-safe.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMac(/Mac|iP/.test(navigator.platform));
    fetch(REPO_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d && typeof d.stargazers_count === "number") {
          const n = d.stargazers_count;
          setStars(n >= 1000 ? `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : String(n));
        } else {
          setStars("★");
        }
      })
      .catch(() => setStars("★"));
  }, []);

  return (
    <header className="site-header">
      <Link href="/docs" className="logo" aria-label="Omni Browser docs home">
        <span className="logo__mark">
          <OmniLogoMark />
        </span>
        <span className="logo__name">
          Omni Browser
          <small>Documentation</small>
        </span>
      </Link>
      <span className="logo__divider" />
      <div className="header-search">
        <button
          type="button"
          className="search-trigger"
          onClick={() => window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT))}
          aria-label="Search documentation"
        >
          <Search />
          <span className="search-trigger__label">Search the docs…</span>
          <kbd>{isMac ? "⌘" : "Ctrl"} K</kbd>
        </button>
      </div>
      <div className="header-actions">
        <select className="version-select" aria-label="Documentation version" defaultValue="v1.2.6">
          <option>v1.2.6</option>
          <option>v1.1.x</option>
          <option>v1.0.x</option>
        </select>
        <a className="header-link" href={REPO_URL} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="size-4" />
          <span>Star</span>
          <span className="stars">{stars}</span>
        </a>
        <ThemeToggle />
        <button
          type="button"
          className="icon-btn hamburger"
          aria-label="Toggle navigation"
          onClick={() => document.body.classList.toggle("sidebar-open")}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
