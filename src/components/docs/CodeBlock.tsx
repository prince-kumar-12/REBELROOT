"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { highlightCode } from "@/lib/docs/highlight";

interface CodeBlockProps {
  lang: string;
  file?: string;
  highlight?: string;
  code: string;
}

export function CodeBlock({ lang, file, highlight, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = highlightCode(code, lang, highlight);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Fallback for browsers without async clipboard support
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__dots">
          <span />
          <span />
          <span />
        </span>
        {file && <span className="code-block__file">{file}</span>}
        <span className="code-block__lang">{lang}</span>
        <button
          type="button"
          className={`code-block__copy${copied ? " copied" : ""}`}
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? <Check /> : <Copy />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <div className="code-block__body">
        <pre>
          {lines.map((line, i) => (
            <span
              key={i}
              className={`code-line${line.highlighted ? " highlight" : ""}`}
              dangerouslySetInnerHTML={{ __html: line.html }}
            />
          ))}
        </pre>
      </div>
    </div>
  );
}
