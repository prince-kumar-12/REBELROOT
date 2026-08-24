import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Extensions
export const extensionsPages: DocPage[] = [
  {
    path: "extensions/overview",
    section: "Extensions",
    title: "Extensions",
    description: "Firefox WebExtension support in Omni Browser: real .xpi add-ons from addons.mozilla.org, powered by the Gecko engine.",
    updated: "Jul 2026",
    contentHtml: `<h1>Extensions</h1>
<p class="lead">Because Omni runs the real Gecko engine, it supports genuine Firefox WebExtensions — the same .xpi add-ons you install on desktop Firefox.</p>
<h2>Why this matters</h2>
<p>Most “extension-capable” Android browsers have no extension support or a tiny curated store. Omni inherits GeckoView’s full WebExtension runtime:</p>
<ul>
<li>Install add-ons directly from <a href="https://addons.mozilla.org" rel="noopener" target="_blank">addons.mozilla.org</a>.</li>
<li>Run <strong>Manifest V2</strong> extensions with background scripts, content scripts and the standard <code>browser.*</code> APIs.</li>
<li>Use extensions in private browsing (per-extension opt-in).</li>
</ul>
<h2>The extension surface</h2>
<div class="card-grid">
<a class="card" href="/docs/extensions/bundled"><span class="card__title">Bundled extensions <span class="arrow">→</span></span><span class="card__desc">The three add-ons that ship inside the APK.</span></a>
<a class="card" href="/docs/extensions/install"><span class="card__icon">⬇️</span><span class="card__title">Installing add-ons <span class="arrow">→</span></span><span class="card__desc">Step-by-step from addons.mozilla.org.</span></a>
</div>
<h2>How they’re managed</h2>
<p>Extension lifecycle lives in <code>browser/extensions/</code>. <code>BuiltInExtensionManager</code> installs the bundled set; runtime registration happens on the shared <code>GeckoRuntime</code>, so extensions persist across tabs and sessions.</p>
<h2>Limitations</h2>
<ul>
<li>Manifest V3 support follows GeckoView’s evolving implementation; MV2 is fully supported.</li>
<li>Extensions needing desktop-only APIs may degrade gracefully.</li>
<li>No auto-update store UI — bundled extensions update with app releases.</li>
</ul>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Extensions run with real permissions</span><p>A WebExtension can read and modify every page you visit. Only install add-ons you trust, and prefer well-known ones from AMO.</p></div>
</div>`,
  },
  {
    path: "extensions/bundled",
    section: "Extensions",
    title: "Bundled Extensions",
    description: "The three WebExtensions that ship inside Omni Browser: Media Grabber, AI Blocker and Universal Copy.",
    updated: "Jul 2026",
    contentHtml: `<h1>Bundled Extensions</h1>
<p class="lead">Three extensions are pre-installed from APK assets, each solving a specific problem. All are allowed in private browsing.</p>
<h2>The trio</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Extension</th><th>Version</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><strong>Omni Media Grabber</strong></td><td>2.1.0</td><td>Sniffs HLS/DASH/MSE streams and reports them to the app via native messaging.</td></tr>
<tr><td><strong>Omni AI Blocker</strong></td><td>1.1.0</td><td>Hides AI overviews on Google, Bing, DuckDuckGo, Brave, Yahoo and more.</td></tr>
<tr><td><strong>Omni Universal Copy</strong></td><td>1.0.0</td><td>Restores text selection on sites that block it.</td></tr>
</tbody>
</table>
</div>
<p>Each has a stable GeckoView ID (e.g. <code>omni-media-grabber@omnibrowser.app</code>) so updates replace rather than duplicate them.</p>
<h2>Media Grabber</h2>
<p>The workhorse behind the <a href="/docs/media/stream-sniffer">Stream Sniffer</a>. It watches network requests and hooks <code>MediaSource</code>/blob playback, then sends candidates to the app over the <code>omniApp</code> native-messaging channel.</p>
<h2>AI Blocker</h2>
<p>Hides AI-generated answer blocks on search engines via <code>override.css</code> plus a background script that catches dynamically injected blocks. Toggle it in Quick Tools or with <kbd>Ctrl</kbd> <kbd>B</kbd>. See <a href="/docs/ai/ai-blocker">AI Blocker</a>.</p>
<h2>Universal Copy</h2>
<p>Defeats <code>user-select: none</code> and script traps that stop you copying text. Enable it once and selection works everywhere.</p>
<h2>Managing them</h2>
<p>Open the <strong>Extensions</strong> panel to toggle any bundled extension on or off. They’re updated automatically with app releases.</p>`,
  },
  {
    path: "extensions/install",
    section: "Extensions",
    title: "Installing Add-ons",
    description: "How to install Firefox WebExtensions from addons.mozilla.org in Omni Browser, grant permissions, and manage them.",
    updated: "Jul 2026",
    contentHtml: `<h1>Installing Add-ons</h1>
<p class="lead">Installing an extension in Omni is just like desktop Firefox — because under the hood, it is.</p>
<h2>Step by step</h2>
<ol class="steps">
<li><h3>Open the extensions panel</h3><p>Menu → <strong>Extensions</strong>, or Quick Tools → Extensions.</p></li>
<li><h3>Browse addons.mozilla.org</h3><p>Navigate to AMO in a normal tab. Find an add-on and tap <strong>Add to Firefox</strong> — GeckoView intercepts the install.</p></li>
<li><h3>Grant permissions</h3><p>Review the requested permissions and confirm.</p></li>
<li><h3>Manage it</h3><p>Toggle, update or remove it from the Extensions panel. Options pages open in a tab.</p></li>
</ol>
<h2>Good first add-ons</h2>
<ul>
<li><strong>uBlock Origin</strong> — if you want blocking beyond the built-in engine.</li>
<li><strong>Dark Reader</strong> — force dark mode on any site.</li>
<li><strong>Privacy Badger</strong> — heuristic tracker learning.</li>
<li><strong>Violentmonkey</strong> — run userscripts.</li>
</ul>
<h2>Private browsing</h2>
<p>By default, third-party extensions are <em>not</em> allowed in private tabs. You can opt an extension in from its entry in the Extensions panel. Bundled extensions are allowed by default.</p>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Audit before you install</span><p>Check an add-on’s ratings, user count and last-updated date. An extension with broad permissions can see everything you browse.</p></div>
</div>`,
  },
];
