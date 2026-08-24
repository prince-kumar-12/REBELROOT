"use client";

import { Clock, Calendar, FileText as DocIcon, Link as LinkIcon, Share2, Printer } from "lucide-react";
import { showToast } from "@/components/docs/Toast";

interface PageMetaProps {
  minutes: number;
  words: number;
  updated?: string;
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch {
    /* ignore */
  }
  showToast("Link copied");
}

function printPage() {
  window.print();
}

async function sharePage() {
  const nav = navigator as Navigator & { share?: (data: ShareData) => Promise<void> };
  if (nav.share) {
    try {
      await nav.share({ title: document.title, url: window.location.href });
    } catch {
      /* user cancelled */
    }
  } else {
    copyLink();
  }
}

export function PageMeta({ minutes, words, updated }: PageMetaProps) {
  return (
    <div className="page-meta">
      <span className="page-meta__item">
        <Clock />
        {minutes} min read
      </span>
      {updated && (
        <span className="page-meta__item">
          <Calendar />
          Updated {updated}
        </span>
      )}
      <span className="page-meta__item">
        <DocIcon />
        {words.toLocaleString()} words
      </span>
      <span className="page-meta__actions">
        <button type="button" onClick={copyLink} title="Copy link">
          <LinkIcon />
          Copy link
        </button>
        <button type="button" onClick={sharePage} title="Share">
          <Share2 />
          Share
        </button>
        <button type="button" onClick={printPage} title="Print">
          <Printer />
          Print
        </button>
      </span>
    </div>
  );
}
