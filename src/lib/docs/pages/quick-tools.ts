import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Quick Tools
export const quick_toolsPages: DocPage[] = [
  {
    path: "tools/overview",
    section: "Quick Tools",
    title: "Quick Tools",
    description: "The Omni Browser Quick Tools panel: one-tap access to 14+ native tools, reorderable to your workflow.",
    updated: "Jul 2026",
    contentHtml: `<h1>Quick Tools</h1>
<p class="lead">Swipe up on the bottom toolbar and you’ll find the Quick Tools sheet — Omni’s toolbox. Every native tool, one tap away.</p>
<h2>What’s inside</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Tool</th><th>What it does</th></tr></thead>
<tbody>
<tr><td><strong>QR Scanner</strong></td><td>Scan codes with the camera or an image</td></tr>
<tr><td><strong>QR Generator</strong></td><td>Make codes from text, URLs, Wi-Fi</td></tr>
<tr><td><strong>Translator</strong></td><td>Translate pages and selections</td></tr>
<tr><td><strong>Save as PDF</strong></td><td>Clean, ad-stripped page export</td></tr>
<tr><td><strong>Dev Console</strong></td><td>Live JavaScript REPL for the page</td></tr>
<tr><td><strong>Dev Notes</strong></td><td>Offline scratchpad</td></tr>
<tr><td><strong>Site Style</strong></td><td>Per-site font, spacing, dark mode</td></tr>
<tr><td><strong>Page Editor</strong></td><td>Make any page editable</td></tr>
<tr><td><strong>Media Grabber</strong></td><td>Find and save streams</td></tr>
<tr><td><strong>Vault</strong></td><td>Encrypted private storage</td></tr>
<tr><td><strong>Downloads</strong></td><td>Your download library</td></tr>
<tr><td><strong>Speak Aloud</strong></td><td>Read text out loud</td></tr>
</tbody>
</table>
</div>
<h2>Make it yours</h2>
<p>Drag tools to reorder them — the sheet remembers your layout. Your most-used tools stay at the top.</p>
<h2>Open it</h2>
<ul>
<li>Swipe up on the bottom toolbar.</li>
<li>Tap the grid icon.</li>
<li><kbd>Ctrl</kbd> <kbd>.</kbd> with an external keyboard.</li>
</ul>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Everything is native</span><p>These aren’t web pages in a webview — they’re native Compose screens. They work offline and respect your theme.</p></div>
</div>`,
  },
  {
    path: "power/command-palette",
    section: "Quick Tools",
    title: "Command Palette",
    description: "The Omni Browser command palette: fuzzy-search every action, tab and setting from a single prompt.",
    updated: "Jul 2026",
    contentHtml: `<h1>Command Palette</h1>
<p class="lead">The command palette is the fastest way to drive Omni. One prompt, fuzzy-matched against every action, open tab and setting — no menu diving.</p>
<h2>Open it</h2>
<ul>
<li><strong>Keyboard:</strong> <kbd>Ctrl</kbd> <kbd>K</kbd> (or <kbd>⌘</kbd> <kbd>K</kbd>).</li>
<li><strong>Touch:</strong> Quick Tools → <strong>Command Palette</strong>, or from the overflow menu.</li>
</ul>
<h2>What you can do</h2>
<p>Start typing and the palette ranks matches across three domains:</p>
<div class="table-wrap">
<table>
<thead><tr><th>Domain</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>Actions</strong></td><td>“new private tab”, “burn session”, “toggle AI blocker”, “save as PDF”, “translate page”</td></tr>
<tr><td><strong>Tabs</strong></td><td>Jump to any open tab by title or URL — “github”, “inbox”, “youtube”</td></tr>
<tr><td><strong>Settings</strong></td><td>Deep-link into any settings screen — “dark mode”, “ad blocking”, “default browser”</td></tr>
</tbody>
</table>
</div>
<h2>Fuzzy matching</h2>
<p>You don’t need exact wording. The matcher scores substring and subsequence matches, so <code>privtab</code> finds <em>New private tab</em> and <code>aiblock</code> finds <em>Toggle AI Blocker</em>. Recent commands are boosted to the top.</p>
<pre><code class="language-kotlin" data-file="CommandPalette.kt" data-highlight="4">// Rank candidates for the typed query
fun rank(query: String, commands: List&lt;Command&gt;): List&lt;Command&gt; =
    commands
        .map { it to fuzzyScore(query, it.title) }   // substring + subsequence
        .filter { it.second &gt; 0 }
        .sortedByDescending { it.second + recencyBoost(it.first) }
        .map { it.first }</code></pre>
<h2>Keyboard navigation</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Key</th><th>Action</th></tr></thead>
<tbody>
<tr><td><kbd>↑</kbd> / <kbd>↓</kbd></td><td>Move through results</td></tr>
<tr><td><kbd>Enter</kbd></td><td>Run the highlighted command</td></tr>
<tr><td><kbd>Esc</kbd></td><td>Dismiss the palette</td></tr>
<tr><td><kbd>Tab</kbd></td><td>Autocomplete the top result into the field</td></tr>
</tbody>
</table>
</div>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Run URLs and searches too</span>
<p>If nothing matches, hitting <kbd>Enter</kbd> treats your query as a search or URL — the palette doubles as a launcher.</p>
</div>
</div>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/getting-started/keyboard-shortcuts"><span class="card__icon">⌨️</span><span class="card__title">Keyboard shortcuts <span class="arrow">→</span></span><span class="card__desc">The full binding reference.</span></a>
<a class="card" href="/docs/getting-started/keyboard-shortcuts"><span class="card__title">Experimental flags <span class="arrow">→</span></span><span class="card__desc">Palette commands for bleeding-edge features.</span></a>
</div>`,
  },
  {
    path: "tools/qr",
    section: "Quick Tools",
    title: "QR Scanner & Generator",
    description: "Scan and generate QR codes in Omni Browser with the pure-FOSS ZXing engine \u2014 no Play Services required.",
    updated: "Jul 2026",
    contentHtml: `<h1>QR Scanner &amp; Generator</h1>
<p class="lead">A full QR suite built on ZXing and CameraX: scan from the camera or a saved image, and generate codes from anything.</p>
<h2>Scan a code</h2>
<ol class="steps">
<li><h3>Open the scanner</h3><p>Quick Tools → <strong>QR Scanner</strong>.</p></li>
<li><h3>Point or pick</h3><p>Scan live with the camera, or choose an image from your gallery.</p></li>
<li><h3>Act on it</h3><p>Omni reads the payload — a URL opens, Wi-Fi creds offer to connect, text is shown for copying.</p></li>
</ol>
<h2>Generate a code</h2>
<p>Quick Tools → <strong>QR Generator</strong>. Enter text, a URL, or Wi-Fi credentials and Omni renders a scannable code you can share or save as an image.</p>
<h2>Pure FOSS</h2>
<p>Scanning uses <strong>ZXing</strong> — no Google Play Services. Earlier builds offered the Play Services code scanner as an option; that was removed for FOSS compliance, so the ZXing path is now the only one.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Camera permission</span><p>The scanner needs the Camera permission. If it won’t start, check Android’s app permissions for Omni.</p></div>
</div>`,
  },
  {
    path: "tools/translator",
    section: "Quick Tools",
    title: "Translator",
    description: "Translate pages and selected text in Omni Browser across many languages.",
    updated: "Jul 2026",
    contentHtml: `<h1>Translator</h1>
<p class="lead">Select any text and translate it, or translate a whole page — without leaving Omni.</p>
<h2>Translate a selection</h2>
<p>Long-press to select text, then tap <strong>Translate</strong> in the selection menu. The translation appears in a sheet.</p>
<h2>Translate a page</h2>
<p>Open Quick Tools → <strong>Translator</strong> to translate the current page’s content across many languages.</p>
<h2>How it works today</h2>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Currently online</span><p>Earlier builds used on-device ML Kit translation, but that was removed for FOSS compliance. Translation now uses a free online endpoint, so translated text leaves your device. Avoid translating sensitive content.</p></div>
</div>
<p>The translation logic lives in <code>tools/TranslationManager.kt</code>.</p>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/tools/read-aloud"><span class="card__title">Speak Aloud <span class="arrow">→</span></span><span class="card__desc">Hear text read out loud.</span></a>
</div>`,
  },
  {
    path: "tools/pdf",
    section: "Quick Tools",
    title: "Save as PDF",
    description: "Export any web page as a clean, ad-stripped PDF in Omni Browser via the Android PrintManager.",
    updated: "Jul 2026",
    contentHtml: `<h1>Save as PDF</h1>
<p class="lead">Keep an offline, readable copy of any page — cleaned of ads and banners, rendered to PDF.</p>
<h2>Save a page</h2>
<p>Menu → <strong>Save as PDF</strong>, or Quick Tools → <strong>PDF</strong>. Omni renders the page through the Android <code>PrintManager</code> and writes a PDF.</p>
<h2>What gets stripped</h2>
<p>Before rendering, Omni applies its blocking engine to remove ads, banners and clutter — so the PDF is the <em>content</em>, not the chrome around it.</p>
<h2>Where it goes</h2>
<ul>
<li><strong>Downloads</strong> — the public folder, shareable anywhere.</li>
<li><strong>Private Vault</strong> — encrypted, behind biometrics.</li>
</ul>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Great for reading lists</span><p>Save long reads as PDF and they’re yours offline forever — no account, no sync, no expiry.</p></div>
</div>`,
  },
  {
    path: "tools/dev-console",
    section: "Quick Tools",
    title: "Developer Console",
    description: "The Omni Browser developer console: a live JavaScript REPL for the current page, with quick actions.",
    updated: "Jul 2026",
    contentHtml: `<h1>Developer Console</h1>
<p class="lead">Run JavaScript on any page, live. The DevTools inspector includes a console REPL with a few party tricks.</p>
<h2>Open it</h2>
<p>Quick Tools → <strong>Dev Console</strong>, or <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd>. You’ll find four panels, including the console.</p>
<h2>The REPL</h2>
<p>Type any JavaScript and it executes in the current page’s context. Results print inline. It’s backed by GeckoView’s console output (<code>consoleOutput(true)</code> on the runtime).</p>
<h2>Quick actions</h2>
<ul>
<li><strong>Toggle contentEditable</strong> — make the whole page editable (pairs with <a href="/docs/tools/site-styles">Page Editor</a>).</li>
<li><strong>Inspect element</strong> — peek at the DOM under your finger.</li>
<li><strong>Read network/log output</strong> — see what the page is doing.</li>
</ul>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">A real console, not a toy</span><p>Because it runs in the page’s actual JS context, anything you can do in a desktop DevTools console, you can do here — including debugging your own sites on-device.</p></div>
</div>`,
  },
  {
    path: "tools/dev-notes",
    section: "Quick Tools",
    title: "Dev Notes",
    description: "The Omni Browser offline scratchpad: filterable, searchable notes that live in your vault.",
    updated: "Jul 2026",
    contentHtml: `<h1>Dev Notes</h1>
<p class="lead">A quick scratchpad for the things you jot down while browsing — offline, filterable, and optionally vault-protected.</p>
<h2>The basics</h2>
<ul>
<li>Create, edit and delete notes.</li>
<li><strong>Filterable chips</strong> to tag and group notes.</li>
<li><strong>Fuzzy local search</strong> across everything.</li>
<li>A voice scratchpad for dictating notes.</li>
</ul>
<h2>Where notes live</h2>
<p>Notes are stored locally. Sensitive notes can be kept inside the <a href="/docs/privacy/private-vault">encrypted vault</a>, behind biometrics.</p>
<h2>Open it</h2>
<p>Quick Tools → <strong>Dev Notes</strong>.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Pairs with Research Mode</span><p>Jot findings as you read — notes stay with you even after you burn the session.</p></div>
</div>`,
  },
  {
    path: "tools/site-styles",
    section: "Quick Tools",
    title: "Site Styles & Page Editor",
    description: "Customize how any site looks in Omni Browser: font size, line spacing, dark mode, and make pages editable.",
    updated: "Jul 2026",
    contentHtml: `<h1>Site Styles &amp; Page Editor</h1>
<p class="lead">Omni can restyle any website to your taste — bigger text, more spacing, forced dark — and even let you edit it.</p>
<h2>Site style</h2>
<p>Open the page menu → <strong>Site style</strong> (or Quick Tools). Per site, you can adjust:</p>
<ul>
<li><strong>Font size</strong> — scale text up or down.</li>
<li><strong>Line spacing</strong> — loosen or tighten leading.</li>
<li><strong>Dark mode</strong> — force a dark rendering of the page.</li>
</ul>
<p>Settings are remembered per domain, so your news site stays large-print while everything else is normal.</p>
<h2>Page editor</h2>
<p>Toggle <strong>Page editor</strong> to set <code>contentEditable</code> on the page — you can then type directly into any site. Handy for drafting into a web form, mocking up edits, or pranking (your own) pages.</p>
<h2>Under the hood</h2>
<p>Site style injection is handled by <code>BrowserViewModel_SiteStyle.kt</code>, which injects CSS into the session. The page editor flips <code>document.designMode</code>.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Cosmetic only</span><p>These changes are local rendering tweaks — they don’t modify the site or persist anything server-side.</p></div>
</div>`,
  },
  {
    path: "tools/read-aloud",
    section: "Quick Tools",
    title: "Speak Aloud",
    description: "Have Omni Browser read selected text out loud using the system text-to-speech engine.",
    updated: "Jul 2026",
    contentHtml: `<h1>Speak Aloud</h1>
<p class="lead">Select text and let Omni read it to you — useful for accessibility, long reads, or eyes-free moments.</p>
<h2>Use it</h2>
<p>Select any text and choose <strong>Speak Aloud</strong> from the selection menu. The system text-to-speech engine reads it out.</p>
<h2>Voices and languages</h2>
<p>Speak Aloud uses Android’s TTS, so the available voices and languages are whatever your device provides. Install more voices in Android’s TTS settings for better results.</p>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/tools/translator"><span class="card__title">Translator <span class="arrow">→</span></span><span class="card__desc">Translate, then listen.</span></a>
<a class="card" href="/docs/customization/accessibility"><span class="card__title">Accessibility <span class="arrow">→</span></span><span class="card__desc">More ways Omni adapts to you.</span></a>
</div>`,
  },
  {
    path: "tools/web-apps",
    section: "Quick Tools",
    title: "Web Apps",
    description: "Pin websites to your home screen as app-like shortcuts in Omni Browser.",
    updated: "Jul 2026",
    contentHtml: `<h1>Web Apps</h1>
<p class="lead">Turn the sites you use every day into one-tap home-screen apps.</p>
<h2>Pin a web app</h2>
<ol class="steps">
<li><h3>Open the site</h3><p>Navigate to the web app (mail, docs, a dashboard).</p></li>
<li><h3>Pin it</h3><p>Menu → <strong>Add to Home screen</strong>.</p></li>
<li><h3>Launch like an app</h3><p>The shortcut opens in its own task, full-screen where the site supports it.</p></li>
</ol>
<h2>How it works</h2>
<p>Omni uses <code>ShortcutManagerCompat</code> to create a launcher shortcut that opens directly to that site. Sites with a web-app manifest get an icon and a more app-like presentation.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Great for single-purpose browsing</span><p>Pin your budgeting tool or habit tracker and it stays out of your normal tab clutter.</p></div>
</div>`,
  },
];
