import { DocsHeader } from "@/components/docs/DocsHeader";
import { MobileDocsSidebar } from "@/components/docs/MobileDocsSidebar";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { ReadingProgress } from "@/components/docs/ReadingProgress";
import { BackToTop } from "@/components/docs/BackToTop";
import { ToastHost } from "@/components/docs/Toast";

/** Global chrome mounted once per docs route tree: skip link, ambient
 * background, reading-progress bar, sticky header, mobile drawer + bottom
 * nav, the Ctrl+K search dialog, toast host, and the back-to-top button. */
export function DocsChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>
      <div className="bg-ambient" aria-hidden="true" />
      <ReadingProgress />
      <DocsHeader />
      {children}
      <MobileDocsSidebar />
      <DocsSearch />
      <ToastHost />
      <BackToTop />
    </>
  );
}
