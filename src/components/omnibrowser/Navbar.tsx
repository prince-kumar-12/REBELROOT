"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Globe2 } from "lucide-react";
import { useNavbarScroll } from "@/components/omnibrowser/animations/NavbarScroll";

const NAV_LINKS = [
  { label: "Product", href: "#story" },
  { label: "Showcase", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "Benchmark", href: "#benchmark" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { isSolid, isHidden } = useNavbarScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (

    
    <header
      data-hero="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-cinematic will-change-transform ${
        isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          isSolid || isOpen
            ? "border-b border-white/10 bg-carbon-950/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
              <Globe2 className="h-4 w-4 text-accent" strokeWidth={2.25} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-ink-100">
              Omni
            </span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-300 transition-colors duration-200 hover:text-ink-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#download"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-ink-100 transition-all duration-200 ease-cinematic hover:-translate-y-px hover:border-white/25"
            >
              Sign in
            </Link>
            <Link
              href="#download"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all duration-200 ease-cinematic hover:-translate-y-px hover:scale-[1.01] hover:shadow-glow"
            >
              Get Omni
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-100 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-carbon-950/98 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-cinematic lg:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-3 text-base text-ink-300 transition-colors duration-200 hover:bg-white/5 hover:text-ink-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 flex gap-3 px-3">
            <Link
              href="#download"
              onClick={handleLinkClick}
              className="flex-1 rounded-full border border-white/10 px-4 py-2.5 text-center text-sm text-ink-100"
            >
              Sign in
            </Link>
            <Link
              href="#download"
              onClick={handleLinkClick}
              className="flex-1 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-white"
            >
              Get Omni
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
