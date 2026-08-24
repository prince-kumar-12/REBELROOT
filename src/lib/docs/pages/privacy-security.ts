import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Privacy & Security
export const privacy_securityPages: DocPage[] = [
  {
    path: "privacy/overview",
    section: "Privacy & Security",
    title: "Privacy & Security Overview",
    description: "The full picture of Omni Browser\u2019s privacy protections: blocking, isolation, transport, storage and session control.",
    updated: "Jul 2026",
    contentHtml: `<h1>Privacy &amp; Security Overview</h1>
<p class="lead">Privacy in Omni isn’t a mode you turn on — it’s the default state. Here’s the whole stack, layer by layer.</p>
<h2>The five layers</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Layer</th><th>What it does</th><th>Default</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Content blocking</strong></td><td>Blocks ads, trackers, popups</td><td><span class="yes">On</span></td><td><a href="/docs/privacy/ad-blocking">Ad blocking</a></td></tr>
<tr><td><strong>Isolation</strong></td><td>Private tabs in a separate context</td><td><span class="yes">On</span></td><td><a href="/docs/tabs/private-tabs">Private tabs</a></td></tr>
<tr><td><strong>Transport</strong></td><td>Tor routing, WireGuard VPN</td><td><span class="partial">Off</span></td><td><a href="/docs/privacy/tor">Tor</a> · <a href="/docs/privacy/vpn">VPN</a></td></tr>
<tr><td><strong>Storage</strong></td><td>AES-256-GCM encrypted vault</td><td><span class="partial">Opt-in</span></td><td><a href="/docs/privacy/private-vault">Vault</a></td></tr>
<tr><td><strong>Session control</strong></td><td>Burn everything in one tap</td><td><span class="yes">Ready</span></td><td><a href="/docs/privacy/fire-button">Fire Button</a></td></tr>
</tbody>
</table>
</div>
<h2>Zero data collection</h2>
<p>Omni ships <strong>no analytics, no crash reporting, no telemetry and no accounts</strong>. There is no Firebase, no OpenCensus, nothing that phones home. Your history, bookmarks, passwords and vault never leave your device.</p>
<p>The only network requests Omni makes are the ones <em>you</em> initiate: loading pages, updating filter lists, downloading FFmpeg on demand.</p>
<h2>Encryption at rest</h2>
<ul>
<li>The vault database is encrypted with <strong>SQLCipher</strong> (AES-256).</li>
<li>Vault files use <strong>AndroidX EncryptedFile</strong> (AES-256-GCM) with keys in the hardware-backed Keystore.</li>
<li>Passwords are stored in Keystore-backed encrypted preferences.</li>
</ul>
<h2>Choose your depth</h2>
<div class="card-grid">
<a class="card" href="/docs/privacy/ad-blocking"><span class="card__icon">️</span><span class="card__title">Everyday privacy <span class="arrow">→</span></span><span class="card__desc">Blocking + Fire Button is enough for most people.</span></a>
<a class="card" href="/docs/privacy/tor"><span class="card__title">High risk <span class="arrow">→</span></span><span class="card__desc">Add Tor or the VPN and lock down permissions.</span></a>
<a class="card" href="/docs/privacy/private-vault"><span class="card__title">Sensitive data <span class="arrow">→</span></span><span class="card__desc">Keep it in the encrypted vault.</span></a>
</div>`,
  },
  {
    path: "privacy/ad-blocking",
    section: "Privacy & Security",
    title: "Ad & Tracker Blocking",
    description: "How Omni Browser\u2019s built-in ad and tracker blocker works: domain lists, cosmetic filtering, popup blocking, and how to manage filter lists.",
    updated: "Jul 2026",
    contentHtml: `<h1>Ad &amp; Tracker Blocking</h1>
<p class="lead">Omni ships a real blocking engine — not a WebView shim. It’s on by default and works at three levels.</p>
<h2>Three blocking techniques</h2>
<ul>
<li><strong>Network-level domain blocking</strong> — a bundled list of <strong>180+ ad and tracker domains</strong>, plus downloadable filter lists.</li>
<li><strong>Cosmetic filtering</strong> — a <code>MutationObserver</code> removes ad elements from the page as they appear.</li>
<li><strong>Popup interception</strong> — engine-level <code>onNewSession</code> blocking stops <code>window.open</code> popups before they render.</li>
</ul>
<h2>Filter list providers</h2>
<p>Beyond the bundled list, you can enable well-known providers in <strong>Settings → Privacy &amp; security → Ad blocking</strong>:</p>
<div class="table-wrap">
<table>
<thead><tr><th>Provider</th><th>Focus</th></tr></thead>
<tbody>
<tr><td><strong>EasyList</strong></td><td>General advertising</td></tr>
<tr><td><strong>AdGuard Base</strong></td><td>Ads + annoyances</td></tr>
<tr><td><strong>Peter Lowe’s</strong></td><td>Trackers and analytics</td></tr>
<tr><td><strong>Steven Black</strong></td><td>Hosts-style combined blocklist</td></tr>
<tr><td><strong>Fanboy Social</strong></td><td>Social widgets and embeds</td></tr>
</tbody>
</table>
</div>
<p>Lists are downloaded and updated on device. A live counter shows how many requests have been blocked.</p>
<h2>When a site breaks</h2>
<p>Occasionally blocking interferes with a site (a login, a video, a payment). Before disabling anything globally:</p>
<ol class="steps">
<li><h3>Use the per-site toggle</h3><p>Tap the shield icon in the address bar to disable blocking just for that domain.</p></li>
<li><h3>Try a smaller list</h3><p>Switch from a combined list to EasyList-only.</p></li>
<li><h3>Report it</h3><p>If a popular site is broken, file an issue — it’s usually a fixable filter rule.</p></li>
</ol>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Blocking is per-profile</span><p>Each browser profile keeps its own blocking state, so a strict work profile and a relaxed personal profile don’t interfere.</p></div>
</div>`,
  },
  {
    path: "privacy/fire-button",
    section: "Privacy & Security",
    title: "Fire Button",
    description: "The Omni Browser Fire Button: burn your entire browsing session \u2014 tabs, cookies, cache and history \u2014 in one tap.",
    updated: "Jul 2026",
    contentHtml: `<h1>Fire Button</h1>
<p class="lead">The flame on your toolbar is a one-tap panic button. When you hit it, your session is gone — immediately and irreversibly.</p>
<h2>What it burns</h2>
<ul>
<li>Closes <strong>all open tabs</strong> (normal and private).</li>
<li>Clears <strong>cookies and site data</strong>.</li>
<li>Empties the <strong>cache</strong>.</li>
<li>Wipes <strong>browsing history</strong>.</li>
</ul>
<h2>How to use it</h2>
<p>Tap the <strong>flame icon</strong> in the toolbar, or press <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>Del</kbd> on a keyboard. There is no confirmation dialog — that’s deliberate.</p>
<div class="callout callout--danger">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 22c4.4 0 8-3.6 8-8 0-5-4-8-5-11-2 2-3 4-3 6-1.5-1-2.5-2.5-3-4.5C6.5 7 4 10 4 14c0 4.4 3.6 8 8 8Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">It does not ask twice</span><p>Anything not saved to bookmarks or the vault is gone the moment you tap. The Fire Button is designed for speed, in case you need to hand your phone to someone <em>right now</em>.</p></div>
</div>
<h2>What it does NOT touch</h2>
<ul>
<li><strong>Bookmarks</strong> — kept.</li>
<li><strong>The encrypted vault</strong> — kept (it’s protected separately).</li>
<li><strong>Saved passwords</strong> — kept.</li>
<li><strong>Downloads</strong> — kept.</li>
</ul>
<h2>Under the hood</h2>
<p>The Fire Button is implemented in <code>privacy/FireButton.kt</code>. It calls into the GeckoRuntime to clear data and resets the tab list in the ViewModel — a single, atomic operation.</p>
<div class="card-grid">
<a class="card" href="/docs/tabs/private-tabs"><span class="card__icon">️</span><span class="card__title">Private tabs <span class="arrow">→</span></span><span class="card__desc">For browsing you’d rather not save at all.</span></a>
<a class="card" href="/docs/privacy/private-vault"><span class="card__title">Encrypted vault <span class="arrow">→</span></span><span class="card__desc">What the Fire Button leaves behind.</span></a>
</div>`,
  },
  {
    path: "privacy/private-vault",
    section: "Privacy & Security",
    title: "Encrypted Vault",
    description: "The Omni Browser private vault: biometric-protected, AES-256 encrypted storage for sensitive pages, images and notes.",
    updated: "Jul 2026",
    contentHtml: `<h1>Encrypted Vault</h1>
<p class="lead">The vault is a locked room inside Omni for the things you don’t want lying around — encrypted at rest, opened only by you.</p>
<h2>What lives in the vault</h2>
<ul>
<li><strong>Saved pages</strong> — keep a private copy of a web page.</li>
<li><strong>Images</strong> — save downloads straight to the vault.</li>
<li><strong>Dev Notes</strong> — an offline scratchpad for sensitive text.</li>
</ul>
<h2>Open it</h2>
<p>Quick Tools → <strong>Vault</strong>, or navigate to it from the menu. You’ll authenticate with your <strong>fingerprint, face or PIN</strong>. The vault locks again when you leave it.</p>
<h2>How it’s encrypted</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Data</th><th>Mechanism</th><th>Key storage</th></tr></thead>
<tbody>
<tr><td>Vault database</td><td>SQLCipher (AES-256)</td><td>Derived, Keystore-backed</td></tr>
<tr><td>Vault files</td><td>EncryptedFile (AES-256-GCM)</td><td>Android Keystore (hardware)</td></tr>
</tbody>
</table>
</div>
<p>Nothing is ever written to disk in plaintext. Even with physical access to your phone’s storage, the vault is unreadable without your biometric.</p>
<h2>Saving to the vault</h2>
<p>When you download an image or save a page as PDF, the dialog offers two destinations: <strong>Downloads</strong> (public, visible to other apps) or <strong>Private Vault</strong> (encrypted). Choose the vault for anything sensitive.</p>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Set up a screen lock first</span><p>The vault relies on Android’s biometric/PIN. If your device has no screen lock, set one up — the vault is only as strong as your lock screen.</p></div>
</div>`,
  },
  {
    path: "privacy/tor",
    section: "Privacy & Security",
    title: "Tor",
    description: "Route Omni Browser traffic through the Tor network: bootstrap, bridges and Snowflake, .onion support, and what Tor does and doesn\u2019t protect.",
    updated: "Jul 2026",
    contentHtml: `<h1>Tor</h1>
<p class="lead">Omni includes a real Tor client. When anonymity matters more than speed, route your browsing through the Tor network.</p>
<h2>Enable Tor</h2>
<p>Turn it on in <strong>Settings → Privacy &amp; security → Tor</strong>. Omni bootstraps a Tor circuit — you’ll see live progress as it connects to the network.</p>
<h2>What you get</h2>
<ul>
<li>Traffic routed through three Tor relays — your ISP sees Tor, not your destinations.</li>
<li>Access to <strong>.onion</strong> addresses.</li>
<li><strong>Bridges and Snowflake</strong> for networks that block Tor.</li>
</ul>
<h2>Circumventing censorship</h2>
<p>If your network blocks Tor, enable a <strong>bridge</strong> (obfuscated entry node) or <strong>Snowflake</strong> (WebRTC-based pluggable transport) in the Tor settings. Both are built into <code>privacy/TorManager.kt</code>.</p>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Tor is slower by design</span><p>Expect noticeably higher latency. Tor is for when anonymity matters — combine it with the ad blocker for the cleanest experience, and avoid logging into personal accounts over it.</p></div>
</div>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Tor vs VPN</span><p>Tor anonymises (hides <em>who</em> you are, even from the network). A <a href="/docs/privacy/vpn">VPN</a> encrypts (hides your traffic from your ISP, but the VPN provider sees it). Use Tor for anonymity, VPN for a fast private tunnel.</p></div>
</div>`,
  },
  {
    path: "privacy/vpn",
    section: "Privacy & Security",
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
    path: "privacy/site-permissions",
    section: "Privacy & Security",
    title: "Site Permissions",
    description: "Control what websites can access in Omni Browser: camera, microphone, location and notifications, per site.",
    updated: "Jul 2026",
    contentHtml: `<h1>Site Permissions</h1>
<p class="lead">Omni asks before a site can touch your camera, mic, location or notifications — and you can change your mind per site, any time.</p>
<h2>The permission prompt</h2>
<p>When a site requests a permission, Omni shows a prompt. You can <strong>Allow</strong>, <strong>Block</strong>, or allow for the current session only.</p>
<h2>Manage per-site permissions</h2>
<p>Open the page menu → <strong>Site settings</strong> (or the shield/lock icon) to see and change what the current site is allowed:</p>
<div class="table-wrap">
<table>
<thead><tr><th>Permission</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>Camera</strong></td><td>For video calls, QR login flows</td></tr>
<tr><td><strong>Microphone</strong></td><td>Voice search, calls</td></tr>
<tr><td><strong>Location</strong></td><td>Maps, local content</td></tr>
<tr><td><strong>Notifications</strong></td><td>Push from the site</td></tr>
</tbody>
</table>
</div>
<h2>See everything</h2>
<p><strong>Settings → Privacy &amp; security → Site permissions</strong> lists every site with a stored decision, so you can audit and revoke in one place.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Android permissions still apply</span><p>Omni must also hold the corresponding Android permission (e.g. Camera) before a site can use it. If a prompt seems to do nothing, check Android’s app permissions.</p></div>
</div>`,
  },
  {
    path: "privacy/passwords",
    section: "Privacy & Security",
    title: "Passwords",
    description: "How Omni Browser stores and autofills passwords locally, encrypted with the Android Keystore.",
    updated: "Jul 2026",
    contentHtml: `<h1>Passwords</h1>
<p class="lead">Omni can remember your logins — stored on-device, encrypted, with no cloud involved.</p>
<h2>Saving a password</h2>
<p>When you log in to a site, Omni offers to save the credential. Accept and it’s stored in Keystore-backed encrypted preferences — handled by <code>BrowserViewModel_Passwords.kt</code>.</p>
<h2>Autofill</h2>
<p>On your next visit, Omni offers to fill the login. Confirm with the autofill prompt and the fields are populated.</p>
<h2>Manage saved passwords</h2>
<p><strong>Settings → Privacy &amp; security → Passwords</strong> lists saved credentials. You can view, delete, or export them.</p>
<h2>Security model</h2>
<ul>
<li>Credentials are encrypted at rest with a key in the <strong>Android Keystore</strong>.</li>
<li>Nothing syncs anywhere — passwords stay on this device.</li>
<li>The Fire Button does <strong>not</strong> delete saved passwords (they’re considered intentional, not session data).</li>
</ul>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">A password manager is stronger</span><p>Omni’s built-in storage is convenient, but a dedicated password manager (with a full-strength master password and audits) is the better long-term home for your credentials.</p></div>
</div>`,
  },
  {
    path: "privacy/https-only",
    section: "Privacy & Security",
    title: "HTTPS-Only Mode",
    description: "Omni Browser\u2019s HTTPS enforcement: upgrading connections and refusing cleartext traffic.",
    updated: "Jul 2026",
    contentHtml: `<h1>HTTPS-Only Mode</h1>
<p class="lead">Wherever a site supports it, Omni connects over encrypted HTTPS — and its own requests never go out in cleartext.</p>
<h2>What it does</h2>
<ul>
<li>Upgrades <code>http://</code> navigations to <code>https://</code> where the site supports it.</li>
<li>Warns before you proceed on a site with no HTTPS at all.</li>
<li>Omni’s own network calls (filter-list updates, FFmpeg download) refuse cleartext — <code>usesCleartextTraffic</code> is off.</li>
</ul>
<h2>Why it matters</h2>
<p>HTTPS encrypts the connection between you and the site, so your ISP or a network eavesdropper can’t see the specific pages you read or tamper with them.</p>
<h2>When a site is HTTP-only</h2>
<p>Some small or legacy sites have no HTTPS. Omni will show a warning and let you choose to proceed — but treat anything you send there as readable by anyone on the path.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Pair with the VPN on open Wi-Fi</span><p>HTTPS protects the page; a <a href="/docs/privacy/vpn">VPN</a> additionally hides which domains you visit from the local network.</p></div>
</div>`,
  },
];
