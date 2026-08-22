"use client";

import Link from "next/link";
import { useEffect, useRef,useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { NOVA_EASE } from "@/lib/motion";


const links = [
  { href: "/products", label: "Products" },
  { href: "/docs", label: "Omni Docs" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support & Feedback" },
  { href: "/contact", label: "Contact" },
];

 

export function Navbar() {
  const pathname = usePathname();
  const isProductDetailPage = pathname.startsWith("/products/omni-browser");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  if (!isProductDetailPage) return;

  async function getStars() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/REBEL-ROOT/omni-browser"
      );

      if (!res.ok) return;

      const data = await res.json();
      setStars(data.stargazers_count);
    } catch (error) {
      console.error("Failed to fetch GitHub stars:", error);
    }
  }

  getStars();
}, [isProductDetailPage]);


  useEffect(() => {
  if (!open) return;

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as Node;

    if (menuRef.current && !menuRef.current.contains(target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: NOVA_EASE }}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border border-base-border bg-base-card px-4 py-2.5 shadow-lg transition-all duration-300",
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 pl-1.5"
          aria-label="RebelRoot home"
        >
          <span className="relative flex h-7 w-7 items-center justify-center">
 
 <span className="relative flex h-7 w-7 items-center justify-center">
  
  <Image
    src="/rebelroot-logo-transparent.png"
    alt="RebelRoot"
    width={35}
    height={35}
  className="hidden dark:block"
    />

 
  <Image
    src="/rebelroot-logo-dark-transparent.png"
    alt="RebelRoot"
    width={35}
    height={35}
    className="block dark:hidden"
  />
</span>
</span>
          <span className="font-display text-sm font-semibold tracking-tight text-ink">
           REBELROOT
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 lg:flex">
  {links.map((link) => {
    const active =
      pathname === link.href ||
      pathname.startsWith(link.href + "/");

    return (
      <li key={link.href}>
        <Link
          href={link.href}
          className={cn(
            "rounded-full px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap",
            active
              ? "text-ink"
              : "text-ink-muted hover:text-ink",
          )}
        >
          {link.label}
        </Link>
      </li>
    );
  })}

  {isProductDetailPage && (
  <li className="border rounded-2xl">
    <a
      href="https://github.com/REBEL-ROOT/omni-browser"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full bg-gray-300 dark:bg-black px-4 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
    >
      <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 "
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
      <span>{stars ?? "—"}</span>
    </a>
  </li>
)}
</ul>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button href="/contact#support" size="sm" className="bg-green-400">
          
            Contribute
          </Button>
        </div>

  <button
  type="button"
  aria-label={open ? "Close menu" : "Open menu"}
  className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full text-ink lg:hidden"
  onMouseEnter={() => setOpen(true)}
  onClick={() => setOpen((o) => !o)}
>
  {open ? (
    <X className="h-5 w-5" aria-hidden="true" />
  ) : (
    <Menu className="h-5 w-5" aria-hidden="true" />
  )}
</button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
           ref={menuRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: NOVA_EASE }}
            className="glass-strong absolute left-4 right-4 top-4.25rem z-40 rounded-2xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-ink-muted hover:bg-white/4 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center justify-between border-t border-base-border px-2 pt-4">
              <ThemeToggle />
              <Button
                href="/contact#support"
                size="sm"
                className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors duration-300"
              >
                Support Open Source 
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
