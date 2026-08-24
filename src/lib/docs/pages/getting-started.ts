import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Getting Started
export const getting_startedPages: DocPage[] = [
  {
    path: "getting-started/introduction",
    section: "Getting Started",
    title: "Introduction",
    description: "What Omni Browser is, why it exists, and what makes it different from Chrome, Brave and Firefox on Android.",
    updated: "Jul 2026",
    contentHtml: `<h1>Introduction</h1>
<p class="lead">Omni Browser is a private, fast and powerful open-source browser for Android, built on Mozilla’s GeckoView engine and a 100% native Jetpack Compose interface.</p>
<p>Most mobile browsers fall into one of two camps. The big commercial browsers are fast and polished, but they are built on an advertising company’s engine and quietly work against your interests. The privacy browsers that do exist are often thin wrappers around the system WebView — underpowered, with a fraction of the web platform and none of the polish.</p>
<p>Omni is a third option: a <strong>real browser engine</strong> (the same one that powers Firefox), wrapped in a <strong>native, privacy-first app</strong> that collects nothing and ships serious power-user tools — a stream sniffer, an encrypted vault, Firefox extensions, Tor and a WireGuard VPN — as first-class features.</p>
<h2>Why Omni exists</h2>
<p>Omni started from a simple observation: the browser is the most-used app on most phones, yet it is the one app almost nobody actually controls. Every mainstream browser ships telemetry, syncs your data to someone’s cloud, and renders the web through an engine designed to serve ads.</p>
<p>RebelRoot built Omni to prove you don’t have to accept that trade-off. You can have:</p>
<ul>
<li><strong>A full web engine</strong> — GeckoView 145, with real WebExtension support, not a WebView shell.</li>
<li><strong>Zero data collection</strong> — no analytics, no telemetry, no accounts. Your history never leaves your device.</li>
<li><strong>Real power tools</strong> — media capture, an encrypted vault, on-device translation, a developer console and more.</li>
<li><strong>A native feel</strong> — Jetpack Compose and Material 3, designed for one-handed use.</li>
</ul>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Open source, GPLv3</span>
<p>Omni Browser is free and open source under the GPLv3. The full source lives at <a href="https://github.com/REBEL-ROOT/omni-browser" rel="noopener" target="_blank">github.com/REBEL-ROOT/omni-browser</a>. Note that “Omni Browser” and “RebelRoot” are trademarks — forks must rebrand.</p>
</div>
</div>
<h2>What makes it different</h2>
<p>Here’s how Omni compares to the browsers you’re probably using today:</p>
<div class="table-wrap">
<table>
<thead>
<tr><th>Capability</th><th>Omni</th><th>Chrome</th><th>Brave</th><th>Firefox Android</th></tr>
</thead>
<tbody>
<tr><td><strong>Engine</strong></td><td>GeckoView 145</td><td>Blink</td><td>Blink</td><td>GeckoView</td></tr>
<tr><td><strong>Open source</strong></td><td><span class="yes"> GPLv3</span></td><td><span class="no"></span></td><td><span class="partial">Partial</span></td><td><span class="yes"> MPL</span></td></tr>
<tr><td><strong>Ad &amp; tracker blocking</strong></td><td><span class="yes"> Built-in</span></td><td><span class="no"></span></td><td><span class="yes"></span></td><td><span class="partial">Basic</span></td></tr>
<tr><td><strong>Firefox WebExtensions</strong></td><td><span class="yes"> Full .xpi</span></td><td><span class="no"></span></td><td><span class="no"></span></td><td><span class="yes"></span></td></tr>
<tr><td><strong>Stream sniffer + native player</strong></td><td><span class="yes"></span></td><td><span class="no"></span></td><td><span class="no"></span></td><td><span class="no"></span></td></tr>
<tr><td><strong>Encrypted vault (biometric)</strong></td><td><span class="yes"></span></td><td><span class="no"></span></td><td><span class="no"></span></td><td><span class="no"></span></td></tr>
<tr><td><strong>Tor + WireGuard VPN</strong></td><td><span class="yes"></span></td><td><span class="no"></span></td><td><span class="no"></span></td><td><span class="no"></span></td></tr>
<tr><td><strong>Telemetry</strong></td><td><span class="yes">None</span></td><td><span class="no">Yes</span></td><td><span class="partial">Optional</span></td><td><span class="partial">Optional</span></td></tr>
</tbody>
</table>
</div>
<h2>Core ideas</h2>
<h3>Privacy is the default, not a setting</h3>
<p>Ad and tracker blocking is on from the first launch. HTTPS is enforced where possible. Incognito tabs run in a genuinely private GeckoView context. And the <strong>Fire Button</strong> burns your session — tabs, cookies, cache and history — in one tap.</p>
<h3>Power tools belong in the browser</h3>
<p>Omni treats the browser as a workbench. A network-level <a href="/docs/media/overview">stream sniffer</a> hands video to a native player. A <a href="/docs/media/downloads">download manager</a> queues and resumes anything. An <a href="/docs/privacy/overview">encrypted vault</a> keeps sensitive pages and notes behind biometrics. A live <a href="/docs/tools/dev-console">developer console</a> runs JavaScript on any page.</p>
<h3>Native first, no web-app compromises</h3>
<p>The whole UI is Jetpack Compose with Material 3 — no embedded web views for the chrome, no hybrid shortcuts. It’s fast, it respects your system theme, and it works beautifully one-handed with a customizable bottom toolbar.</p>
<h2>Who Omni is for</h2>
<div class="card-grid">
<a class="card" href="/docs/privacy/overview"><span class="card__icon">️</span><span class="card__title">Privacy-first users</span><span class="card__desc">You want real blocking, Tor and a VPN without trusting a big company.</span></a>
<a class="card" href="/docs/media/overview"><span class="card__title">Media power users</span><span class="card__desc">You download streams, watch in PiP and want a real player, not a web one.</span></a>
<a class="card" href="/docs/developer/architecture"><span class="card__icon">‍</span><span class="card__title">Developers</span><span class="card__desc">You want a browser you can read, build on and extend with WebExtensions.</span></a>
</div>
<h2>Next steps</h2>
<div class="card-grid">
<a class="card" href="/docs/getting-started/installation"><span class="card__title">Install Omni <span class="arrow">→</span></span><span class="card__desc">Get the APK from GitHub Releases or F-Droid.</span></a>
<a class="card" href="/docs/getting-started/quick-start"><span class="card__title">Quick start <span class="arrow">→</span></span><span class="card__desc">Your first five minutes with Omni.</span></a>
<a class="card" href="/docs/privacy/overview"><span class="card__icon">️</span><span class="card__title">Privacy &amp; security <span class="arrow">→</span></span><span class="card__desc">Understand the protections built in.</span></a>
</div>`,
  },
  {
    path: "getting-started/installation",
    section: "Getting Started",
    title: "Installation",
    description: "Download and install Omni Browser on Android from GitHub Releases or F-Droid. Requirements, APK variants and verification.",
    updated: "Jul 2026",
    contentHtml: `<h1>Installation</h1>
<p class="lead">Omni Browser ships as signed APKs you can sideload in under a minute. Here’s how to get it, which variant to pick, and how to verify what you downloaded.</p>
<h2>Requirements</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Requirement</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Android version</strong></td><td>Android 8.0 (API 26) or later</td></tr>
<tr><td><strong>Architecture</strong></td><td>arm64-v8a (recommended), armeabi-v7a, or universal</td></tr>
<tr><td><strong>Storage</strong></td><td>~120 MB free (engine + on-demand FFmpeg libraries)</td></tr>
<tr><td><strong>RAM</strong></td><td>2 GB minimum, 4 GB+ recommended</td></tr>
</tbody>
</table>
</div>
<h2>Download the APK</h2>
<p>Official builds are published as GitHub Releases, tagged by version. The latest stable release is <strong>v1.2.6.4</strong>.</p>
<ol class="steps">
<li>
<h3>Open the releases page</h3>
<p>Go to <a href="https://github.com/REBEL-ROOT/omni-browser/releases" rel="noopener" target="_blank">github.com/REBEL-ROOT/omni-browser/releases</a> on your phone or computer.</p>
</li>
<li>
<h3>Pick your ABI variant</h3>
<p>Each release ships three APKs. Choose the one that matches your device:</p>
<div class="table-wrap">
<table>
<thead><tr><th>File</th><th>For</th><th>Size</th></tr></thead>
<tbody>
<tr><td><code>omni-aarch64-*.apk</code></td><td>Modern 64-bit phones (most devices since 2017)</td><td>Smallest</td></tr>
<tr><td><code>omni-arm-*.apk</code></td><td>Older 32-bit devices</td><td>Small</td></tr>
<tr><td><code>omni-universal-*.apk</code></td><td>Any device (contains all ABIs)</td><td>Largest</td></tr>
</tbody>
</table>
</div>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Not sure which one?</span>
<p>Download the <strong>universal</strong> APK — it runs on everything, at the cost of a larger file.</p>
</div>
</div>
</li>
<li>
<h3>Allow installation from your browser</h3>
<p>Android will prompt you to allow your browser to install unknown apps. Grant it for this install, then revoke it afterwards if you like.</p>
</li>
<li>
<h3>Install and launch</h3>
<p>Open the downloaded APK and tap <strong>Install</strong>. Launch Omni and you’ll be greeted by the onboarding flow — pick your language and you’re in.</p>
</li>
</ol>
<h2>Verify the signature</h2>
<p>Every release APK is signed with the project’s release key. To confirm integrity, compare the APK’s SHA-256 checksum against the one published in the release notes:</p>
<pre><code class="language-bash" data-file="terminal"># Compute the checksum of the file you downloaded
sha256sum omni-aarch64-release.apk

# Compare the output to the SHA-256 listed on the GitHub release</code></pre>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Only download from official sources</span>
<p>Omni is only distributed via the official GitHub repository and F-Droid. APKs from third-party mirror sites may be repackaged or tampered with.</p>
</div>
</div>
<h2>F-Droid</h2>
<p>Omni maintains F-Droid metadata (<code>com.rebelroot.omni.yml</code>) and is built reproducibly for the F-Droid pipeline. If you prefer F-Droid, add the repository and search for <strong>Omni Browser</strong>. F-Droid builds are signed with the F-Droid key rather than the project key, so updates between the two channels are not interchangeable.</p>
<h2>Make Omni your default browser</h2>
<p>Omni can handle <code>http</code>/<code>https</code> links and web-search intents. To set it as default:</p>
<ol class="steps">
<li><h3>Open Android Settings</h3><p>Go to <strong>Settings → Apps → Default apps → Browser app</strong>.</p></li>
<li><h3>Select Omni Browser</h3><p>Links will now open in Omni. You can also do this from inside Omni via <strong>Settings → Set as default browser</strong>.</p></li>
</ol>
<h2>Updating</h2>
<p>Omni includes an in-app update checker that tells you when a new release is available. You can also watch the GitHub repository to get notified of new tags. Because all builds are signed with the same key, installing a newer APK over an older one preserves your data.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Experimental software</span>
<p>Omni is under active development and marked experimental. Back up anything important and report issues on the <a href="https://github.com/REBEL-ROOT/omni-browser/issues" rel="noopener" target="_blank">issue tracker</a>.</p>
</div>
</div>
<h2>Next steps</h2>
<div class="card-grid">
<a class="card" href="/docs/getting-started/quick-start"><span class="card__title">Quick start <span class="arrow">→</span></span><span class="card__desc">Take Omni for a spin in five minutes.</span></a>
<a class="card" href="/docs/getting-started/troubleshooting"><span class="card__title">Troubleshooting <span class="arrow">→</span></span><span class="card__desc">Fix common install and launch issues.</span></a>
</div>`,
  },
  {
    path: "getting-started/first-launch",
    section: "Getting Started",
    title: "First Launch",
    description: "What happens the first time you open Omni Browser: language selection, onboarding, and setting yourself up.",
    updated: "Jul 2026",
    contentHtml: `<h1>First Launch</h1>
<p class="lead">The first time you open Omni you’ll go through a short, fully offline setup. Nothing here phones home — it only writes your preferences to local storage.</p>
<h2>Pick your language</h2>
<p>Omni bundles <strong>10 languages</strong>: English, Hindi, Spanish, French, German, Portuguese, Russian, Japanese, Chinese and Arabic. Choose one on the very first screen — the whole interface, including settings and menus, is translated. You can change it later in <strong>Settings → Language</strong>.</p>
<h2>The onboarding tour</h2>
<p>A few slides introduce the essentials: the address bar, the Fire Button, Quick Tools and the media grabber. It’s skippable and you can revisit any of it from the docs.</p>
<h2>Set as default browser</h2>
<p>Omni can handle <code>http</code>/<code>https</code> links and web-search intents. You’ll be offered the option during onboarding, or you can do it later:</p>
<ol class="steps">
<li><h3>Open Android settings</h3><p>Go to <strong>Settings → Apps → Default apps → Browser app</strong>.</p></li>
<li><h3>Choose Omni Browser</h3><p>Links and searches will now open in Omni.</p></li>
</ol>
<h2>Your home screen</h2>
<p>You land on the home screen: a search bar with your default engine, quick-access shortcuts to your favourite sites, and a <a href="/docs/home/discover">Discover feed</a> of news. Tap the address bar to start browsing.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">No account, no sign-in</span><p>Omni has no accounts and no sync server. Your data stays on your device from the very first launch.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/getting-started/quick-start"><span class="card__title">Quick start <span class="arrow">→</span></span><span class="card__desc">Five minutes with Omni’s core features.</span></a>
<a class="card" href="/docs/home/home-screen"><span class="card__title">Home screen <span class="arrow">→</span></span><span class="card__desc">Shortcuts, search and the Discover feed.</span></a>
</div>`,
  },
  {
    path: "getting-started/quick-start",
    section: "Getting Started",
    title: "Quick Start",
    description: "Your first five minutes with Omni Browser: tabs, search, the fire button, quick tools and your first extension.",
    updated: "Jul 2026",
    contentHtml: `<h1>Quick Start</h1>
<p class="lead">From first launch to power user in about five minutes. This tour covers the essentials you’ll use every day.</p>
<h2>1 · First launch</h2>
<p>When you open Omni for the first time you’ll see a language picker (10 languages are bundled) followed by a short onboarding. Nothing here phones home — it only writes your preferences to local storage.</p>
<p>You land on the <strong>home screen</strong>: a search bar, your quick-access shortcuts, and a Discover feed of news you can switch between Trending, World, Tech and Sports.</p>
<h2>2 · Browse and search</h2>
<p>Tap the address bar and type a URL or a search query. Omni uses your chosen search engine — Google, DuckDuckGo, Brave, Bing, Yandex, Ecosia or Startpage — and shows live suggestions as you type.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Switch engines on the fly</span>
<p>Tap the engine icon inside the search bar to change your default search engine, or add a custom one.</p>
</div>
</div>
<h2>3 · Master the tabs</h2>
<p>Omni gives you a tab strip plus a visual tab switcher. A few things worth knowing:</p>
<ul>
<li><strong>New tab</strong> — tap the <code>+</code> in the tab strip.</li>
<li><strong>Incognito</strong> — incognito tabs live in their own group and run in a private GeckoView context.</li>
<li><strong>Smart grouping</strong> — Omni can auto-group tabs by domain into Social, Shopping, Video, News, Dev and Work.</li>
<li><strong>Desktop mode</strong> — toggle a full desktop user-agent per tab from the menu.</li>
</ul>
<h2>4 · Meet the Fire Button</h2>
<p>The flame icon is Omni’s signature privacy tool. One tap <strong>burns your session</strong> — closing tabs and clearing cookies, cache and history. It’s the fastest way to hand your phone to someone else.</p>
<div class="callout callout--danger">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 22c4.4 0 8-3.6 8-8 0-5-4-8-5-11-2 2-3 4-3 6-1.5-1-2.5-2.5-3-4.5C6.5 7 4 10 4 14c0 4.4 3.6 8 8 8Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">It’s immediate</span>
<p>The Fire Button doesn’t ask twice. Anything not saved to bookmarks or the vault is gone.</p>
</div>
</div>
<h2>5 · Open Quick Tools</h2>
<p>Swipe up on the bottom toolbar (or tap the grid icon) to open the <strong>Quick Tools</strong> sheet — your one-tap access to 14+ native tools: QR scanner, translator, PDF printer, dev notes, page editor, the vault and more. You can drag to reorder them.</p>
<h2>6 · Install your first extension</h2>
<p>Omni supports real Firefox WebExtensions. Open the menu → <strong>Extensions</strong>, then browse to <a href="https://addons.mozilla.org" rel="noopener" target="_blank">addons.mozilla.org</a> and install any <code>.xpi</code>. Three extensions come pre-bundled:</p>
<ul>
<li><strong>Omni Media Grabber</strong> — sniffs video and audio streams.</li>
<li><strong>Omni AI Blocker</strong> — hides AI overviews on search engines.</li>
<li><strong>Omni Universal Copy</strong> — copies text from sites that block selection.</li>
</ul>
<h2>7 · Try the media player</h2>
<p>Play a video on any site. When the Media Grabber detects a stream, Omni offers to open it in the <strong>native player</strong> — with picture-in-picture, swipe gestures for brightness and volume, playback speeds from 0.25× to 3×, and background audio.</p>
<h2>Where to go next</h2>
<div class="card-grid">
<a class="card" href="/docs/getting-started/keyboard-shortcuts"><span class="card__icon">⌨️</span><span class="card__title">Shortcuts <span class="arrow">→</span></span><span class="card__desc">Speed things up with the command palette.</span></a>
<a class="card" href="/docs/privacy/overview"><span class="card__icon">️</span><span class="card__title">Privacy <span class="arrow">→</span></span><span class="card__desc">Lock down blocking, the vault and the VPN.</span></a>
<a class="card" href="/docs/media/overview"><span class="card__title">Media Hub <span class="arrow">→</span></span><span class="card__desc">Capture and play any stream.</span></a>
</div>`,
  },
  {
    path: "getting-started/common-workflows",
    section: "Getting Started",
    title: "Common Workflows",
    description: "How to do the everyday things in Omni Browser: save a page, grab a video, copy blocked text, translate, and more.",
    updated: "Jul 2026",
    contentHtml: `<h1>Common Workflows</h1>
<p class="lead">The tasks people do most, and the fastest way to do each one in Omni.</p>
<h2>Save a page to read later</h2>
<ul>
<li><strong>Bookmark it</strong> — tap the bookmark icon in the address bar.</li>
<li><strong>Save as PDF</strong> — menu → <strong>Save as PDF</strong> for an offline, ad-stripped copy.</li>
<li><strong>To the vault</strong> — save sensitive pages behind biometrics via the <a href="/docs/privacy/private-vault">encrypted vault</a>.</li>
</ul>
<h2>Download a video</h2>
<p>Play the video, wait for the grabber chip, then tap it and choose <strong>Download</strong>. See <a href="/docs/media/stream-sniffer">Stream Sniffer</a> for the details.</p>
<h2>Copy text from a site that blocks it</h2>
<p>Long-press the text and choose <strong>Universal Copy</strong>, or enable the bundled <a href="/docs/extensions/bundled">Omni Universal Copy</a> extension to restore selection everywhere.</p>
<h2>Translate a page or selection</h2>
<p>Select text and tap <strong>Translate</strong>, or use the <a href="/docs/tools/translator">Translator</a> from Quick Tools for the whole page.</p>
<h2>Scan a QR code</h2>
<p>Quick Tools → <strong>QR Scanner</strong>. You can also generate codes from any text or URL. See <a href="/docs/tools/qr">QR Scanner &amp; Generator</a>.</p>
<h2>Browse privately</h2>
<p>Open a <a href="/docs/tabs/private-tabs">private tab</a>, and when you’re done, hit the <a href="/docs/privacy/fire-button">Fire Button</a> to burn the whole session.</p>
<h2>Keep watching while you browse</h2>
<p>In the native player, tap the PiP icon. Audio can keep playing with the screen off — see <a href="/docs/media/video-player">Video Player</a>.</p>`,
  },
  {
    path: "getting-started/migration",
    section: "Getting Started",
    title: "Switching from Another Browser",
    description: "Moving to Omni Browser from Chrome, Firefox or Brave: what carries over, what\u2019s different, and how to get comfortable fast.",
    updated: "Jul 2026",
    contentHtml: `<h1>Switching from Another Browser</h1>
<p class="lead">Omni is different by design. Here’s what to expect coming from a mainstream browser, and how to map your habits over.</p>
<h2>What you can bring</h2>
<div class="table-wrap">
<table>
<thead><tr><th>From</th><th>Bookmarks</th><th>Passwords</th><th>History</th><th>Extensions</th></tr></thead>
<tbody>
<tr><td><strong>Firefox / Gecko browsers</strong></td><td><span class="partial">Manual export/import</span></td><td><span class="no">Not yet</span></td><td><span class="no">No</span></td><td><span class="yes">Same .xpi add-ons</span></td></tr>
<tr><td><strong>Chrome</strong></td><td><span class="partial">Manual export/import</span></td><td><span class="no">Not yet</span></td><td><span class="no">No</span></td><td><span class="no">Chrome extensions don’t run</span></td></tr>
<tr><td><strong>Brave</strong></td><td><span class="partial">Manual export/import</span></td><td><span class="no">Not yet</span></td><td><span class="no">No</span></td><td><span class="no">Chrome extensions don’t run</span></td></tr>
</tbody>
</table>
</div>
<p>There is no cloud sync (by design — Omni has no servers). Export bookmarks from your old browser as HTML and import them via <strong>Bookmarks → Import</strong>.</p>
<h2>Habit map</h2>
<div class="table-wrap">
<table>
<thead><tr><th>You’re used to…</th><th>In Omni…</th></tr></thead>
<tbody>
<tr><td>Chrome’s omnibox</td><td>The address bar — same idea, with an engine switcher inside</td></tr>
<tr><td>Incognito mode</td><td><a href="/docs/tabs/private-tabs">Private tabs</a> (a real isolated GeckoView context)</td></tr>
<tr><td>Brave Shields</td><td><a href="/docs/privacy/ad-blocking">Ad &amp; tracker blocking</a> — on by default</td></tr>
<tr><td>“Clear browsing data”</td><td>The <a href="/docs/privacy/fire-button">Fire Button</a> — one tap</td></tr>
<tr><td>Chrome extensions</td><td><a href="/docs/extensions/overview">Firefox WebExtensions</a> from addons.mozilla.org</td></tr>
<tr><td>Built-in translate</td><td><a href="/docs/tools/translator">Translator</a> in Quick Tools</td></tr>
<tr><td>Reading list</td><td>Bookmarks + <a href="/docs/tools/pdf">Save as PDF</a></td></tr>
</tbody>
</table>
</div>
<h2>Things that will feel new</h2>
<ul>
<li>A <strong>stream sniffer</strong> that finds video the page hides — see <a href="/docs/media/overview">Media Hub</a>.</li>
<li>An <strong>encrypted vault</strong> for sensitive pages and files.</li>
<li>A <strong>command palette</strong> (<kbd>Ctrl</kbd> <kbd>K</kbd>) that does almost everything.</li>
<li><strong>Tor and a WireGuard VPN</strong> built into the browser.</li>
</ul>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">One thing you can’t migrate</span><p>Omni deliberately has no account or sync. That’s the point — nothing about your browsing lives anywhere but your phone.</p></div>
</div>`,
  },
  {
    path: "getting-started/keyboard-shortcuts",
    section: "Getting Started",
    title: "Keyboard Shortcuts",
    description: "Every Omni Browser shortcut, the command palette, and external keyboard support.",
    updated: "Jul 2026",
    contentHtml: `<h1>Keyboard Shortcuts</h1>
<p class="lead">Omni is built for speed. With an external keyboard — or the on-screen command palette — you can drive the whole browser without touching the toolbar.</p>
<h2>The command palette</h2>
<p>The fastest way to do anything in Omni is the <a href="/docs/power/command-palette">command palette</a>. Press <kbd>Ctrl</kbd> <kbd>K</kbd> and type what you want to do — the palette fuzzy-searches every action, open tab and setting.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Works with touch too</span>
<p>On a phone without a keyboard, open the palette from Quick Tools or the menu. It is the same fuzzy search.</p>
</div>
</div>
<h2>Tabs</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Action</th><th>Shortcut</th></tr></thead>
<tbody>
<tr><td>New tab</td><td><kbd>Ctrl</kbd> <kbd>T</kbd></td></tr>
<tr><td>New private tab</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>N</kbd></td></tr>
<tr><td>Close tab</td><td><kbd>Ctrl</kbd> <kbd>W</kbd></td></tr>
<tr><td>Reopen closed tab</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>T</kbd></td></tr>
<tr><td>Next tab</td><td><kbd>Ctrl</kbd> <kbd>Tab</kbd></td></tr>
<tr><td>Previous tab</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Tab</kbd></td></tr>
<tr><td>Jump to tab 1-8</td><td><kbd>Ctrl</kbd> <kbd>1</kbd> to <kbd>8</kbd></td></tr>
<tr><td>Last tab</td><td><kbd>Ctrl</kbd> <kbd>9</kbd></td></tr>
</tbody>
</table>
</div>
<h2>Navigation</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Action</th><th>Shortcut</th></tr></thead>
<tbody>
<tr><td>Focus address bar</td><td><kbd>Ctrl</kbd> <kbd>L</kbd></td></tr>
<tr><td>Reload</td><td><kbd>Ctrl</kbd> <kbd>R</kbd></td></tr>
<tr><td>Hard reload</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>R</kbd></td></tr>
<tr><td>Back / Forward</td><td><kbd>Alt</kbd> <kbd>Left</kbd> / <kbd>Right</kbd></td></tr>
<tr><td>Find in page</td><td><kbd>Ctrl</kbd> <kbd>F</kbd></td></tr>
</tbody>
</table>
</div>
<h2>Tools and panels</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Action</th><th>Shortcut</th></tr></thead>
<tbody>
<tr><td>Command palette</td><td><kbd>Ctrl</kbd> <kbd>K</kbd></td></tr>
<tr><td>Downloads</td><td><kbd>Ctrl</kbd> <kbd>J</kbd></td></tr>
<tr><td>History</td><td><kbd>Ctrl</kbd> <kbd>H</kbd></td></tr>
<tr><td>Toggle AI Blocker</td><td><kbd>Ctrl</kbd> <kbd>B</kbd></td></tr>
<tr><td>Developer console</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd></td></tr>
<tr><td>Burn session</td><td><kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Del</kbd></td></tr>
</tbody>
</table>
</div>
<h2>Media player</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Action</th><th>Shortcut</th></tr></thead>
<tbody>
<tr><td>Play / pause</td><td><kbd>Space</kbd></td></tr>
<tr><td>Seek 10 seconds</td><td><kbd>Left</kbd> / <kbd>Right</kbd></td></tr>
<tr><td>Volume</td><td><kbd>Up</kbd> / <kbd>Down</kbd></td></tr>
<tr><td>Fullscreen</td><td><kbd>F</kbd></td></tr>
<tr><td>Picture-in-picture</td><td><kbd>P</kbd></td></tr>
</tbody>
</table>
</div>
<div class="callout callout--experimental">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Shortcuts are evolving</span>
<p>Key bindings are being refined in the v1.3 series. The command palette always reflects the current build.</p>
</div>
</div>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/power/command-palette"><span class="card__icon">⌘</span><span class="card__title">Command palette <span class="arrow">→</span></span><span class="card__desc">Fuzzy-search every action in Omni.</span></a>
</div>`,
  },
  {
    path: "getting-started/troubleshooting",
    section: "Getting Started",
    title: "Troubleshooting",
    description: "Fix common Omni Browser problems: crashes, video playback, extension conflicts, download failures and performance.",
    updated: "Jul 2026",
    contentHtml: `<h1>Troubleshooting</h1>
<p class="lead">Solutions to the problems users hit most often. If yours isn’t here, grab logs and file an issue — that’s how the browser gets better.</p>
<h2>First steps for any problem</h2>
<ol class="steps">
<li><h3>Reproduce in a private tab</h3><p>Extensions and site data cause many issues. If it disappears in private mode, an extension or cached state is the culprit.</p></li>
<li><h3>Toggle extensions off</h3><p>Disable all extensions, then re-enable one at a time.</p></li>
<li><h3>Clear site data</h3><p>Settings → Privacy → Clear data for the affected site.</p></li>
<li><h3>Check for an update</h3><p>Many bugs are already fixed in the latest release.</p></li>
</ol>
<h2>Video won’t play or download</h2>
<ul>
<li><strong>Grabber chip doesn’t appear</strong> — the stream may be DRM-protected (Omni won’t and can’t strip DRM) or the site uses a transport the sniffer doesn’t recognize yet.</li>
<li><strong>Playback stutters</strong> — lower the quality in the player, or disable other extensions that hook media.</li>
<li><strong>Download stalls at a percentage</strong> — HLS segment downloads resume automatically; if it’s truly stuck, cancel and restart. Check free storage.</li>
<li><strong>No audio extraction</strong> — FFmpeg downloads on first use. Make sure you were online the first time you tapped “Extract audio”.</li>
</ul>
<h2>An extension broke a site</h2>
<p>Content blockers and script extensions can over-block. To isolate:</p>
<pre><code class="language-bash" data-file="diagnose"># In Omni:
# 1. Open the Extensions panel
# 2. Toggle off the suspect extension
# 3. Hard-reload the page (Ctrl+Shift+R)
# 4. If fixed, report the site to the extension author
#    and/or file an Omni issue with the URL</code></pre>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Per-site disable</span>
<p>For a blocker that breaks one site, disable it just for that domain from the shield icon in the address bar rather than turning it off globally.</p>
</div>
</div>
<h2>Crashes on launch</h2>
<ul>
<li><strong>After an update</strong> — a corrupted session restore can crash on start. Clear Omni’s cache (Android Settings → Apps → Omni → Storage → Clear cache), which preserves your data but resets the restore point.</li>
<li><strong>On a specific device</strong> — GeckoView needs a reasonably modern GPU driver. Very old or heavily modified ROMs may not be supported.</li>
<li><strong>Repeated crashes</strong> — Omni has a crash-loop guard that resets the last session after repeated failures. If you’re stuck, clear cache as above.</li>
</ul>
<h2>Downloads fail</h2>
<ul>
<li><strong>Permission denied</strong> — grant Storage/Files access in Android Settings → Apps → Omni → Permissions.</li>
<li><strong>Vault save fails</strong> — the vault needs biometric/PIN enrolled. Set one up in Settings → Privacy → Vault.</li>
<li><strong>“Insufficient space”</strong> — streams need headroom for segment assembly; keep at least 2× the file size free.</li>
</ul>
<h2>Slow performance</h2>
<ul>
<li>Too many open tabs — enable smart tab grouping or close old ones.</li>
<li>A heavy extension (some ad-blockers with huge lists) — try Omni’s built-in blocker instead.</li>
<li>Low-end device — disable dynamic color and reduce the UI scale in Settings → Appearance.</li>
</ul>
<h2>Filing a great bug report</h2>
<p>Open an issue at <a href="https://github.com/REBEL-ROOT/omni-browser/issues" rel="noopener" target="_blank">github.com/REBEL-ROOT/omni-browser/issues</a> using the bug template. Include:</p>
<ul>
<li>Omni version (Settings → About) and Android version</li>
<li>Device model and ABI</li>
<li>Steps to reproduce, and what you expected vs. what happened</li>
<li>The URL (if not sensitive) and which extensions are active</li>
</ul>
<div class="callout callout--danger">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 22c4.4 0 8-3.6 8-8 0-5-4-8-5-11-2 2-3 4-3 6-1.5-1-2.5-2.5-3-4.5C6.5 7 4 10 4 14c0 4.4 3.6 8 8 8Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Security issues are private</span>
<p>Don’t post vulnerabilities publicly. Follow the responsible-disclosure process in <a href="/docs/resources/security">Security</a>.</p>
</div>
</div>`,
  },
];
