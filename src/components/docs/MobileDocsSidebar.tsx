"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { X, Menu, Search, Home } from "lucide-react";
import { GitHubIcon } from "@/components/docs/icons";
import { SidebarNav } from "@/components/docs/SidebarNav";
import { OPEN_SEARCH_EVENT } from "@/components/docs/DocsSearch";

const REPO_URL = "https://github.com/REBEL-ROOT/omni-browser";

function closeDrawer() {
  document.body.classList.remove("sidebar-open");
}

export function MobileDocsSidebar() {
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    closeDrawer();
  }, [pathname]);

  return (
    <>
      <div
        className="sidebar-backdrop"
        role="presentation"
        onClick={closeDrawer}
      />
      <div className="mobile-sidebar" role="dialog" aria-modal="true" aria-label="Documentation navigation">
        <div className="mobile-sidebar__header">
          <span className="logo__name" style={{ fontSize: "0.9rem" }}>
            Omni Browser
          </span>
          <button type="button" className="icon-btn" aria-label="Close navigation" onClick={closeDrawer}>
            <X />
          </button>
        </div>
        <div className="mobile-sidebar__body thin-scroll">
          <SidebarNav onNavigate={closeDrawer} />
        </div>
      </div>

      <nav className="mobile-nav" aria-label="Quick navigation">
        <button
          type="button"
          onClick={() => document.body.classList.toggle("sidebar-open")}
          aria-label="Toggle navigation"
        >
          <Menu />
          <span>Menu</span>
        </button>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent(OPEN_SEARCH_EVENT))}
          aria-label="Search"
        >
          <Search />
          <span>Search</span>
        </button>
        <Link href="/docs">
          <Home />
          <span>Home</span>
        </Link>
        <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="size-5" />
          <span>GitHub</span>
        </a>
      </nav>
    </>
  );
}
