import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: AI
export const aiPages: DocPage[] = [
  {
    path: "ai/ai-blocker",
    section: "AI",
    title: "AI Blocker",
    description: "The Omni AI Blocker: hide AI-generated overviews on Google, Bing, DuckDuckGo and other search engines.",
    updated: "Jul 2026",
    contentHtml: `<h1>AI Blocker</h1>
<p class="lead">Search engines now inject large AI answer blocks above the results. If you’d rather see the actual web, the AI Blocker turns them off.</p>
<h2>What it hides</h2>
<p>The bundled <strong>Omni AI Blocker</strong> extension removes AI-overview containers on:</p>
<ul>
<li>Google</li>
<li>Bing</li>
<li>DuckDuckGo</li>
<li>Brave Search</li>
<li>Yahoo</li>
<li>…and other engines as they add AI blocks</li>
</ul>
<h2>Toggle it</h2>
<ul>
<li><strong>Quick Tools → AI Blocker</strong> for a one-tap toggle.</li>
<li>The <strong>Extensions panel</strong> to disable it entirely.</li>
<li><kbd>Ctrl</kbd> <kbd>B</kbd> with an external keyboard.</li>
</ul>
<h2>How it works</h2>
<p>A Manifest V2 content script plus an <code>override.css</code> stylesheet. The CSS hides known selectors immediately at <code>document_start</code>; a background script watches for dynamically injected blocks so they’re removed even on single-page search UIs.</p>
<pre><code class="language-json" data-file="ai_blocker/manifest.json">{
  "manifest_version": 2,
  "name": "Omni AI Blocker",
  "version": "1.1.0",
  "content_scripts": [{
    "matches": ["*://*.google.com/*", "*://*.bing.com/*"],
    "css": ["override.css"],
    "js": ["background.js"],
    "run_at": "document_start"
  }]
}</code></pre>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Local, not a filter service</span><p>The blocker runs entirely on your device. Nothing about your searches is sent anywhere — there is no server involved.</p></div>
</div>
<h2>The philosophy</h2>
<p>Omni keeps AI <em>optional and local</em>. There’s no always-on assistant building a profile of your browsing. The AI that is present exists to be turned <strong>off</strong> — and the rest runs on your terms.</p>`,
  },
];
