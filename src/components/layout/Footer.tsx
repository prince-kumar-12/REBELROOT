
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const columns = [
    {
      title: "Products",
      links: [
        {
          label: "Omni Browser",
          href: "/products/omni-browser",
        },
        {
          label: "MOCNovel",
          href: "/products/mocnovel",
        },
        {
          label: "CampCart",
          href: "/products/campcart",
        },
        {
          label: "Openved",
          href: "/products/openved",
        },
        {
          label: "MOC Office",
          href: "/products/moc-officex",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          label: "Documentation",
          href: "/docs",
        },
        {
          label: "About",
          href: "/about#philosophy",
        },
        {
          label: "Contact",
          href: "/contact#security",
        },
        {
          label: "All products",
          href: "/products",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/rebelroot",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/rebelroot/",
        },
        {
          label: "Support & Feedback",
          href: "/contact#support",
        },
      ],
    },
    {
      title: "RebelRoot",
      links: [
        {
          label: "Privacy Policy",
          href: "/privacy",
        },
        {
          label: "Cookies Policy",
          href: "/legal/cookies",
        },
        {
          label: "Omni Privacy Policy",
          href: "/products/omni-browser/privacy",
        },
        {
          label: "Openved Privacy Policy",
          href: "/products/rootlock/privacy",
        },
      ],
    },
  ];

  return (
    <footer className="relative px-4 py-10 sm:px-8">
      <div className="relative mx-auto max-w-6xl rounded-3xl border border-base-border bg-base-card px-10 py-12 sm:px-14">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm text-ink-muted">
                {col.title}
              </h3>

              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-medium text-ink transition-colors hover:text-ink-muted"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[15px] font-medium text-ink transition-colors hover:text-ink-muted"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow Us / Contact */}
          <div>
            <h3 className="mb-4 text-sm text-ink-muted">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              {/* X */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-ink transition-colors hover:text-ink-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/rebelroot/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ink transition-colors hover:text-ink-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="22"
                    rx="4"
                  />

                  <path
                    d="M7.2 9.6h2.6v8.2H7.2zM8.5 8.4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12.4 9.6h2.5v1.1h.03c.35-.65 1.2-1.35 2.47-1.35 2.65 0 3.13 1.7 3.13 3.9v4.55h-2.6v-4.03c0-.96-.02-2.2-1.35-2.2-1.35 0-1.56 1.03-1.56 2.13v4.1h-2.6z"
                    fill="var(--bg)"
                  />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/REBEL-ROOT"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ink transition-colors hover:text-ink-muted"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.38 2.89-.39.98.01 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </a>
            </div>

            {/* Contact */}
            <h3 className="mb-4 mt-8 text-sm text-ink-muted">
              Contact
            </h3>

            <a
              href="mailto:rebelroot.ltd@gmail.com"
              className="break-all text-[15px] font-medium text-ink transition-colors hover:text-ink-muted"
            >
              rebelroot.ltd@gmail.com
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-base-border pt-6 sm:flex-row sm:items-end">
          <div>
            {/* Dark Mode Logo */}
            <Image
              src="/rebelroot-logo-transparent.png"
              alt="RebelRoot"
              width={70}
              height={35}
              className="hidden dark:block"
            />

            {/* Light Mode Logo */}
            <Image
              src="/rebelroot-logo-dark-transparent.png"
              alt="RebelRoot"
              width={70}
              height={35}
              className="block dark:hidden"
            />
          </div>

          <div className="text-left text-sm text-ink-muted sm:text-right">
            <p>
              © {new Date().getFullYear()} RebelRoot. All rights reserved.
            </p>

            <p className="mt-1 flex flex-wrap gap-2 sm:justify-end">
              <Link
                href="/privacy"
                className="transition-colors hover:text-ink"
              >
                Privacy
              </Link>

              <span>·</span>

              <Link
                href="/legal/cookies"
                className="transition-colors hover:text-ink"
              >
                Cookies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
 
 