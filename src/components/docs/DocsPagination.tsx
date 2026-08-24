import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FlatNavEntry } from "@/lib/docs/types";

export function DocsPagination({ prev, next }: { prev?: FlatNavEntry; next?: FlatNavEntry }) {
  if (!prev && !next) return null;
  return (
    <nav className="pager" aria-label="Pagination">
      {prev ? (
        <Link className="pager__item" href={`/docs/${prev.path}`}>
          <span className="pager__label">
            <ArrowLeft />
            Previous
          </span>
          <span className="pager__title">{prev.title}</span>
        </Link>
      ) : (
        <span className="pager__item empty" />
      )}
      {next ? (
        <Link className="pager__item pager__item--next" href={`/docs/${next.path}`}>
          <span className="pager__label">
            Next
            <ArrowRight />
          </span>
          <span className="pager__title">{next.title}</span>
        </Link>
      ) : (
        <span className="pager__item empty" />
      )}
    </nav>
  );
}
