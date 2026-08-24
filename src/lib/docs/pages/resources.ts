import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Resources
export const resourcesPages: DocPage[] = [
  {
    path: "resources/faq",
    section: "Resources",
    title: "FAQ",
    description: "Frequently asked questions about Omni Browser: privacy, extensions, media, licensing and more.",
    updated: "Jul 2026",
    contentHtml: `<h1>FAQ</h1>
<p class="lead">The questions we hear most, answered. Can’t find yours? Open a discussion on GitHub.</p>
<h2>General</h2>
<div class="accordion">
<div class="accordion-item open">
<button aria-expanded="true" class="accordion-trigger">What is Omni Browser?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel" style="max-height:400px"><div class="accordion-panel__inner">
<p>Omni is a free, open-source Android browser built on Mozilla’s GeckoView engine (the one in Firefox) with a 100% native Jetpack Compose interface. It combines strong privacy defaults — ad/tracker blocking, Tor, a WireGuard VPN, an encrypted vault — with power tools like a stream sniffer, native video player and Firefox extension support.</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Is Omni really open source?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Yes. The app is licensed <strong>GPLv3</strong> and the full source is on GitHub. Note that the <em>names</em> “Omni Browser” and “RebelRoot” are trademarks — if you fork and distribute, you must rebrand (see the trademark policy).</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Does Omni collect any data?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>No. There are no analytics SDKs, no crash reporters, no accounts and no telemetry. Your history, bookmarks and vault never leave your device. The only network calls Omni makes are the ones <em>you</em> initiate (loading pages, updating filter lists, downloading FFmpeg on demand).</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Is it stable enough for daily use?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Omni is marked <strong>experimental</strong>. It’s actively developed and many people use it daily, but expect rough edges and breaking changes between releases. Keep your important data backed up and report issues.</p>
</div></div>
</div>
</div>
<h2>Features</h2>
<div class="accordion">
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Does it support Firefox WebExtensions?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Yes — real <code>.xpi</code> add-ons from addons.mozilla.org, because Omni runs the actual Gecko engine. Three are bundled: Media Grabber, AI Blocker and Universal Copy. See <a href="/docs/extensions/overview">Extensions</a>.</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">How does the stream sniffer work?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Two cooperating paths: the Media Grabber extension watches network requests and MSE/blob playback, and the native <code>MediaInterceptor</code> looks for HLS/DASH manifests. Detected streams can be played in the native player or downloaded. See <a href="/docs/media/overview">Media Hub</a>.</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Is translation offline?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Not currently. Earlier builds used on-device ML Kit, but that was removed for FOSS compliance. Translation now uses a free online endpoint, so translated text leaves your device. Don’t translate sensitive content.</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">What’s in the encrypted vault?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>The vault stores sensitive pages, images and notes behind biometric/PIN. The database is encrypted with SQLCipher (AES-256) and files with AES-256-GCM via the Android Keystore. See <a href="/docs/privacy/overview#the-encrypted-vault">Privacy &amp; Security</a>.</p>
</div></div>
</div>
</div>
<h2>Licensing &amp; distribution</h2>
<div class="accordion">
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Can I fork Omni and publish my own version?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>The code is GPLv3, so yes — but you must <strong>rename and rebrand</strong>. “Omni Browser” and “RebelRoot” are trademarks, and GPLv3 §7(b) requires attribution (repo link, in-app credit, preserved copyright headers). Read <a href="/docs/resources/license">License</a>.</p>
</div></div>
</div>
<div class="accordion-item">
<button aria-expanded="false" class="accordion-trigger">Where do I download it?
            <svg class="chev" fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></button>
<div class="accordion-panel"><div class="accordion-panel__inner">
<p>Only from the official GitHub Releases or F-Droid. Avoid third-party APK mirrors. See <a href="/docs/getting-started/installation">Installation</a>.</p>
</div></div>
</div>
</div>
<h2>Still stuck?</h2>
<div class="card-grid">
<a class="card" href="/docs/getting-started/troubleshooting"><span class="card__title">Troubleshooting <span class="arrow">→</span></span><span class="card__desc">Fix common problems.</span></a>
<a class="card" href="/docs/resources/contributing"><span class="card__title">Contributing <span class="arrow">→</span></span><span class="card__desc">Ask questions and get involved.</span></a>
</div>`,
  },
  {
    path: "resources/changelog",
    section: "Resources",
    title: "WireGuard VPN",
    description: "Run a WireGuard VPN tunnel in Omni Browser: import a config, connect, and route browser traffic through an encrypted tunnel.",
    updated: "Jul 2026",
    contentHtml: `<h1>WireGuard VPN</h1>
<p class="lead">Omni can run a WireGuard tunnel using the official WireGuard Android library. Import a config and your browser traffic flows through it.</p>
<h2>Set it up</h2>
<ol class="steps">
<li><h3>Get a config</h3><p>Export a <code>.conf</code> file from your VPN provider or a self-hosted WireGuard server.</p></li>
<li><h3>Import it</h3><p><strong>Settings → Privacy &amp; security → VPN → Import config</strong>.</p></li>
<li><h3>Connect</h3><p>Toggle the tunnel on. A key icon appears in the toolbar while active.</p></li>
</ol>
<h2>How it works</h2>
<p>Omni uses the official <code>com.wireguard.android:tunnel</code> library with the Go backend. The tunnel is a real Android VPN service scoped to the browser — your traffic is encrypted from your device to the WireGuard endpoint.</p>
<h2>What a VPN protects</h2>
<ul>
<li>Encrypts traffic on untrusted networks (cafés, airports, hotels).</li>
<li>Hides your destinations from your ISP.</li>
<li>Does <strong>not</strong> make you anonymous — your VPN provider can see your traffic.</li>
</ul>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Self-host for best privacy</span><p>The strongest setup is a WireGuard server you control (on a VPS or at home). Then there’s no third-party provider in the loop.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/privacy/tor"><span class="card__title">Tor <span class="arrow">→</span></span><span class="card__desc">When you need anonymity, not just encryption.</span></a>
</div>`,
  },
  {
    path: "resources/contributing",
    section: "Resources",
    title: "WireGuard VPN",
    description: "Run a WireGuard VPN tunnel in Omni Browser: import a config, connect, and route browser traffic through an encrypted tunnel.",
    updated: "Jul 2026",
    contentHtml: `<h1>WireGuard VPN</h1>
<p class="lead">Omni can run a WireGuard tunnel using the official WireGuard Android library. Import a config and your browser traffic flows through it.</p>
<h2>Set it up</h2>
<ol class="steps">
<li><h3>Get a config</h3><p>Export a <code>.conf</code> file from your VPN provider or a self-hosted WireGuard server.</p></li>
<li><h3>Import it</h3><p><strong>Settings → Privacy &amp; security → VPN → Import config</strong>.</p></li>
<li><h3>Connect</h3><p>Toggle the tunnel on. A key icon appears in the toolbar while active.</p></li>
</ol>
<h2>How it works</h2>
<p>Omni uses the official <code>com.wireguard.android:tunnel</code> library with the Go backend. The tunnel is a real Android VPN service scoped to the browser — your traffic is encrypted from your device to the WireGuard endpoint.</p>
<h2>What a VPN protects</h2>
<ul>
<li>Encrypts traffic on untrusted networks (cafés, airports, hotels).</li>
<li>Hides your destinations from your ISP.</li>
<li>Does <strong>not</strong> make you anonymous — your VPN provider can see your traffic.</li>
</ul>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Self-host for best privacy</span><p>The strongest setup is a WireGuard server you control (on a VPS or at home). Then there’s no third-party provider in the loop.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/privacy/tor"><span class="card__title">Tor <span class="arrow">→</span></span><span class="card__desc">When you need anonymity, not just encryption.</span></a>
</div>`,
  },
  {
    path: "resources/security",
    section: "Resources",
    title: "Security",
    description: "Omni Browser security policy: supported versions, responsible disclosure, and notes on the security architecture.",
    updated: "Jul 2026",
    contentHtml: `<h1>Security</h1>
<p class="lead">How Omni handles security — what’s supported, how to report a vulnerability, and the architecture that protects your data.</p>
<h2>Supported versions</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Version</th><th>Supported</th></tr></thead>
<tbody>
<tr><td><strong>v1.2.x</strong></td><td><span class="yes"> Current — receives fixes</span></td></tr>
<tr><td><strong>v1.1.x</strong></td><td><span class="partial">Critical fixes only</span></td></tr>
<tr><td><strong>&lt; v1.1</strong></td><td><span class="no"> End of life</span></td></tr>
</tbody>
</table>
</div>
<h2>Reporting a vulnerability</h2>
<p>Please disclose privately — don’t open a public issue. The process:</p>
<ol>
<li><strong>Acknowledgement</strong> within 72 hours.</li>
<li><strong>Assessment</strong> within 7 days.</li>
<li><strong>Fix target</strong> of 30 days for confirmed issues.</li>
</ol>
<p>Report via the security contact in the repository’s <code>SECURITY.md</code> / <code>docs/SECURITY.md</code>.</p>
<h2>Security architecture</h2>
<ul>
<li><strong>Encrypted vault</strong> — SQLCipher (AES-256) database + AES-256-GCM files, keys in the hardware Keystore.</li>
<li><strong>Private browsing</strong> — isolated GeckoView private contexts.</li>
<li><strong>Sandboxed extensions</strong> — WebExtensions run in a separate process (<code>extensionsProcess(true)</code>).</li>
<li><strong>No cleartext traffic</strong> — the app’s own requests refuse HTTP.</li>
<li><strong>Log stripping</strong> — R8 strips logs in release builds.</li>
</ul>
<div class="callout callout--danger">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 22c4.4 0 8-3.6 8-8 0-5-4-8-5-11-2 2-3 4-3 6-1.5-1-2.5-2.5-3-4.5C6.5 7 4 10 4 14c0 4.4 3.6 8 8 8Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Security issues are private</span><p>Public disclosure before a fix puts every user at risk. Use the private channel.</p></div>
</div>`,
  },
  {
    path: "resources/license",
    section: "Resources",
    title: "License & Trademark",
    description: "Omni Browser licensing (GPLv3) and the RebelRoot trademark policy for forks.",
    updated: "Jul 2026",
    contentHtml: `<h1>License &amp; Trademark</h1>
<p class="lead">Omni Browser is free software. The code is yours to use, modify and share — with a couple of important conditions.</p>
<h2>GPLv3</h2>
<p>The application is licensed under the <strong>GNU General Public License v3</strong>. That means:</p>
<ul>
<li>You can run, study, modify and redistribute it.</li>
<li>Derivative works must also be GPLv3 (copyleft).</li>
<li>You must provide source (or an offer) when you distribute.</li>
</ul>
<h2>Trademark policy</h2>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">The names are protected</span><p>“Omni Browser” and “RebelRoot” are trademarks. If you fork and distribute, you must <strong>rename and rebrand</strong> — you may not ship a modified build under the Omni Browser name.</p></div>
</div>
<p>This is the standard free-software arrangement: the code is free, the brand is not. It protects users from confused, unofficial builds.</p>
<h2>GPLv3 §7(b) attribution</h2>
<p>If you build on Omni, preserve copyright headers, include a link to the original repository, and keep the in-app credit. Full details are in the repository’s <code>TRADEMARK.md</code>.</p>
<h2>Third-party components</h2>
<p>Omni builds on GeckoView (MPL), AndroidX (Apache 2.0), ExoPlayer (Apache 2.0), ZXing (Apache 2.0), SQLCipher (BSD) and others. Their licenses are respected and listed in the repository.</p>
<div class="card-grid">
<a class="card" href="/docs/resources/contributing"><span class="card__title">Contributing <span class="arrow">→</span></span><span class="card__desc">How to give back under these terms.</span></a>
</div>`,
  },
];
