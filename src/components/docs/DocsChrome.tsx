import { DocsHeader } from "@/components/docs/DocsHeader";
import { MobileDocsSidebar } from "@/components/docs/MobileDocsSidebar";
import { DocsSearch } from "@/components/docs/DocsSearch";
import { ReadingProgress } from "@/components/docs/ReadingProgress";
import { BackToTop } from "@/components/docs/BackToTop";
import { ToastHost } from "@/components/docs/Toast";
 
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
