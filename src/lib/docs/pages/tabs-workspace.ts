import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Tabs & Workspace
export const tabs_workspacePages: DocPage[] = [
  {
    path: "tabs/tab-management",
    section: "Tabs & Workspace",
    title: "Tab Management",
    description: "Create, switch, close and restore tabs in Omni Browser; use the tab strip, the visual switcher and desktop mode.",
    updated: "Jul 2026",
    contentHtml: `<h1>Tab Management</h1>
<p class="lead">Omni gives you a persistent tab strip plus a visual tab switcher, with a few power features mainstream browsers leave out.</p>
<h2>The tab strip</h2>
<p>Tabs live in a horizontal strip above the page. Tap <strong>+</strong> to open a new tab, tap a tab to switch, and long-press a tab for options (close, duplicate, send to group).</p>
<h2>The visual switcher</h2>
<p>Tap the tab-count button to open the visual switcher — a grid of live thumbnails. Swipe a card away to close it, or use <strong>Close all</strong>.</p>
<h2>Restore closed tabs</h2>
<p>Closed tabs are kept in a recently-closed list. Reopen one from the switcher menu, or with <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>T</kbd> on a keyboard.</p>
<h2>Session restore</h2>
<p>Omni remembers your open tabs across app restarts. If a crash loop is detected, the last session is reset automatically so you’re never locked out — see <a href="/docs/getting-started/troubleshooting">Troubleshooting</a>.</p>
<h2>Desktop mode</h2>
<p>Per tab, you can request the full desktop version of a site. Open the tab menu and toggle <strong>Desktop mode</strong> — Omni reloads with a desktop user-agent and viewport. See <a href="/docs/tabs/desktop-mode">Desktop Mode</a>.</p>
<h2>Keyboard shortcuts</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Action</th><th>Shortcut</th></tr></thead>
<tbody>
<tr><td>New tab</td><td><kbd>Ctrl</kbd> <kbd>T</kbd></td></tr>
<tr><td>Close tab</td><td><kbd>Ctrl</kbd> <kbd>W</kbd></td></tr>
<tr><td>Reopen closed</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>T</kbd></td></tr>
<tr><td>Next / previous</td><td><kbd>Ctrl</kbd> <kbd>Tab</kbd> / <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Tab</kbd></td></tr>
<tr><td>Jump to tab 1–9</td><td><kbd>Ctrl</kbd> <kbd>1</kbd> … <kbd>9</kbd></td></tr>
</tbody>
</table>
</div>
<div class="card-grid">
<a class="card" href="/docs/tabs/tab-groups"><span class="card__icon">️</span><span class="card__title">Smart tab groups <span class="arrow">→</span></span><span class="card__desc">Auto-group tabs by what they are.</span></a>
<a class="card" href="/docs/tabs/private-tabs"><span class="card__icon">️</span><span class="card__title">Private tabs <span class="arrow">→</span></span><span class="card__desc">Genuinely isolated browsing.</span></a>
</div>`,
  },
  {
    path: "tabs/tab-groups",
    section: "Tabs & Workspace",
    title: "Smart Tab Groups",
    description: "How Omni\u2019s Smart Tab Manager automatically groups your tabs by domain into categories like Social, Shopping, Video, News, Dev and Work.",
    updated: "Jul 2026",
    contentHtml: `<h1>Smart Tab Groups</h1>
<p class="lead">A hundred tabs is fine when they’re organised. Omni’s Smart Tab Manager groups them for you, by what they are.</p>
<h2>How auto-grouping works</h2>
<p>As you browse, <code>SmartTabManager</code> looks at each tab’s domain and files it into a category. Grouping is local and instant — nothing is sent anywhere.</p>
<div class="table-wrap">
<table>
<thead><tr><th>Category</th><th>Example domains</th></tr></thead>
<tbody>
<tr><td><strong>Social</strong></td><td>instagram.com, x.com, facebook.com, reddit.com</td></tr>
<tr><td><strong>Shopping</strong></td><td>amazon.*, flipkart.com, ebay.com</td></tr>
<tr><td><strong>Video</strong></td><td>youtube.com, vimeo.com, streaming sites</td></tr>
<tr><td><strong>News</strong></td><td>news outlets, blogs</td></tr>
<tr><td><strong>Dev</strong></td><td>github.com, stackoverflow.com, docs sites</td></tr>
<tr><td><strong>Work</strong></td><td>mail, docs, calendars, SaaS tools</td></tr>
</tbody>
</table>
</div>
<h2>Working with groups</h2>
<ul>
<li>Open the tab switcher and tap a group header to see just those tabs.</li>
<li>Collapse a group to get it out of the way without closing anything.</li>
<li>Move a tab out of its group with a long-press if the guess was wrong.</li>
</ul>
<h2>Turn it off</h2>
<p>If you’d rather keep a flat list, disable auto-grouping in <strong>Settings → Tabs → Smart grouping</strong>.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Pairs well with the Fire Button</span><p>Groups make it easy to burn a whole category — e.g. close all Shopping tabs in one go before you hand your phone to someone.</p></div>
</div>`,
  },
  {
    path: "tabs/private-tabs",
    section: "Tabs & Workspace",
    title: "Private Tabs",
    description: "Private browsing in Omni Browser: how incognito tabs use a genuinely isolated GeckoView private context, and what they do and don\u2019t hide.",
    updated: "Jul 2026",
    contentHtml: `<h1>Private Tabs</h1>
<p class="lead">Private tabs in Omni aren’t a label — they run in a separate GeckoView private context with real isolation.</p>
<h2>Open a private tab</h2>
<p>Tap <strong>+</strong> and choose <strong>New private tab</strong>, or press <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>N</kbd>. Private tabs are visually distinct and live in their own group in the switcher.</p>
<h2>What’s isolated</h2>
<ul>
<li><strong>Cookies &amp; site data</strong> — a separate, in-memory cookie jar.</li>
<li><strong>Cache</strong> — nothing is written to disk.</li>
<li><strong>History</strong> — private tabs don’t record history.</li>
<li><strong>Storage</strong> — localStorage/IndexedDB are ephemeral.</li>
</ul>
<p>When the last private tab closes, all of it is gone.</p>
<h2>Extensions in private tabs</h2>
<p>Bundled extensions (Media Grabber, AI Blocker, Universal Copy) are allowed in private browsing by design — they run locally and send nothing out. Third-party extensions follow their own per-extension setting.</p>
<h2>What private tabs do NOT hide</h2>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Private ≠ anonymous</span><p>Your ISP, your employer’s network, and the sites you visit can still see your traffic. For anonymity, route through <a href="/docs/privacy/tor">Tor</a>; for encryption from your device, use the <a href="/docs/privacy/vpn">VPN</a>.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/privacy/fire-button"><span class="card__title">Fire Button <span class="arrow">→</span></span><span class="card__desc">Burn everything in one tap.</span></a>
<a class="card" href="/docs/privacy/tor"><span class="card__title">Tor <span class="arrow">→</span></span><span class="card__desc">Real anonymity for when it matters.</span></a>
</div>`,
  },
  {
    path: "tabs/desktop-mode",
    section: "Tabs & Workspace",
    title: "Desktop Mode",
    description: "Load full desktop versions of websites in Omni Browser with a per-tab desktop user-agent and viewport.",
    updated: "Jul 2026",
    contentHtml: `<h1>Desktop Mode</h1>
<p class="lead">Some sites only offer their full experience to desktop browsers. Omni can request the desktop version per tab.</p>
<h2>Enable it for a tab</h2>
<p>Open the tab menu (or the page menu) and toggle <strong>Desktop mode</strong>. Omni reloads the page with a desktop user-agent and a wide viewport. The setting is remembered per tab.</p>
<h2>When to use it</h2>
<ul>
<li>Sites that hide features behind a “get the app” wall.</li>
<li>Complex web apps (spreadsheets, editors, dashboards) that assume a mouse.</li>
<li>Reading layouts that are better in their desktop form.</li>
</ul>
<h2>Force zoom</h2>
<p>Alongside desktop mode, Omni offers <strong>Force zoom</strong> — it lets you pinch-zoom even on pages that disable it. Useful for small text on desktop-mode pages.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Per tab, not global</span><p>Desktop mode is a per-tab toggle, so your banking site can stay mobile while your editor runs in desktop form.</p></div>
</div>`,
  },
  {
    path: "tabs/find-in-page",
    section: "Tabs & Workspace",
    title: "Find in Page",
    description: "Search for text within the current page in Omni Browser, with match highlighting and keyboard support.",
    updated: "Jul 2026",
    contentHtml: `<h1>Find in Page</h1>
<p class="lead">Find any word or phrase on the current page, with matches highlighted and counted.</p>
<h2>Open find-in-page</h2>
<p>Use the page menu → <strong>Find in page</strong>, or press <kbd>Ctrl</kbd> <kbd>F</kbd>. A bar appears with a field and up/down controls.</p>
<h2>Navigate matches</h2>
<ul>
<li>Type to jump to the first match; the match count is shown (e.g. <em>3 of 17</em>).</li>
<li>Use the up/down arrows to move between matches.</li>
<li>The current match is highlighted distinctly from the others.</li>
</ul>
<p>Find-in-page is backed by GeckoView’s <code>SessionFinder</code>, so it works even inside frames and shadow DOM on most sites.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Combine with Universal Copy</span><p>Found something on a site that blocks selection? Turn on <a href="/docs/extensions/bundled">Universal Copy</a> to grab it.</p></div>
</div>`,
  },
];
