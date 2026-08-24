import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Customization
export const customizationPages: DocPage[] = [
  {
    path: "customization/themes",
    section: "Customization",
    title: "Themes & Appearance",
    description: "Customize Omni Browser\u2019s look: light, dark and AMOLED modes, accent colors, dynamic color and UI scale.",
    updated: "Jul 2026",
    contentHtml: `<h1>Themes &amp; Appearance</h1>
<p class="lead">Omni’s theming goes well beyond a dark toggle — and it loads before the first frame, so there’s never a flash of the wrong theme.</p>
<h2>Theme modes</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Mode</th><th>Look</th></tr></thead>
<tbody>
<tr><td><strong>Light</strong></td><td>Bright, high-contrast</td></tr>
<tr><td><strong>Dark</strong></td><td>The default — easy on the eyes</td></tr>
<tr><td><strong>AMOLED</strong></td><td>True black for OLED screens</td></tr>
</tbody>
</table>
</div>
<h2>Accent colors</h2>
<p>Pick from six accent colors to tint buttons, links and highlights. Or enable <strong>Dynamic color</strong> (Material You) to pull an accent from your wallpaper.</p>
<h2>UI scale</h2>
<p>A navigation scaler (80–130%) lets you grow or shrink the toolbar and controls — useful on small screens or for accessibility. See <a href="/docs/customization/accessibility">Accessibility</a>.</p>
<h2>Address bar position</h2>
<p>Move the address bar to the bottom for one-handed use (the default) or the top if you prefer the classic layout.</p>
<h2>Immersive Edge-to-Edge Status Bar</h2>
<p>Omni Browser features an immersive edge-to-edge status bar that eliminates traditional black status bar letterboxing. The active website's primary <code>theme-color</code> (or your custom home wallpaper) extends seamlessly under the status bar, while system icons (clock, signal, battery) automatically adapt light/dark contrast based on background luminance.</p>
<h2>Under the hood</h2>
<p>Your theme is persisted in DataStore and loaded into <code>ThemeStateHolder</code> by <code>OmniApplication</code> at startup — before any UI is drawn.</p>
<div class="card-grid">
<a class="card" href="/docs/customization/wallpapers"><span class="card__icon">️</span><span class="card__title">Wallpapers <span class="arrow">→</span></span><span class="card__desc">Give the home screen some personality.</span></a>
</div>`,
  },
  {
    path: "customization/wallpapers",
    section: "Customization",
    title: "Wallpapers",
    description: "Set a wallpaper on the Omni Browser home screen.",
    updated: "Jul 2026",
    contentHtml: `<h1>Wallpapers</h1>
<p class="lead">Give your start page some personality with a wallpaper behind the search bar and shortcuts.</p>
<h2>Set one</h2>
<p>Settings → <strong>Appearance → Wallpapers</strong>. Choose from the bundled set or pick your own image.</p>
<h2>How it looks</h2>
<p>The wallpaper sits behind the home-screen content, gently dimmed so your shortcuts and search stay readable. It doesn’t affect normal page browsing.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Pairs with dynamic color</span><p>Turn on <a href="/docs/customization/themes">dynamic color</a> and Omni will pull an accent from your wallpaper for a cohesive look.</p></div>
</div>`,
  },
  {
    path: "customization/toolbar",
    section: "Customization",
    title: "Toolbar & Layout",
    description: "Configure the Omni Browser toolbar: address bar position, bottom navigation and one-handed layout.",
    updated: "Jul 2026",
    contentHtml: `<h1>Toolbar &amp; Layout</h1>
<p class="lead">Omni is designed for one-handed use — and the layout bends to fit your grip.</p>
<h2>Address bar position</h2>
<ul>
<li><strong>Bottom</strong> (default) — within thumb reach; swipe up for Quick Tools.</li>
<li><strong>Top</strong> — the classic browser layout.</li>
</ul>
<h2>The bottom toolbar</h2>
<p>In bottom mode, the toolbar holds back/forward, home, tabs and the menu. It hides as you scroll down and reappears on scroll up.</p>
<h2>UI scale</h2>
<p>Adjust the whole toolbar between 80–130% in Settings → Appearance. Larger for big thumbs, smaller for more screen.</p>
<h2>Fullscreen</h2>
<p>Videos and readers can go fully immersive — the <code>FullscreenManager</code> hides system bars and the toolbar, restoring them on a swipe.</p>`,
  },
  {
    path: "customization/accessibility",
    section: "Customization",
    title: "Accessibility",
    description: "Omni Browser accessibility features: UI scaling, site styles, speak aloud and reader-friendly rendering.",
    updated: "Jul 2026",
    contentHtml: `<h1>Accessibility</h1>
<p class="lead">Omni adapts to how you read and interact — with scaling, restyling and audio built in.</p>
<h2>UI scale</h2>
<p>Grow or shrink the interface (80–130%) in Settings → Accessibility. Affects the toolbar, menus and controls.</p>
<h2>Make pages readable</h2>
<ul>
<li><strong>Font size</strong> — scale any site’s text via <a href="/docs/tools/site-styles">Site Style</a>.</li>
<li><strong>Line spacing</strong> — loosen leading for easier tracking.</li>
<li><strong>Force dark</strong> — render bright pages dark.</li>
<li><strong>Force zoom</strong> — pinch-zoom even where sites disable it.</li>
</ul>
<h2>Hear it</h2>
<p><a href="/docs/tools/read-aloud">Speak Aloud</a> reads selected text using the system TTS engine.</p>
<h2>System integration</h2>
<p>Omni respects Android’s font scale, high-contrast text and reduced-motion settings, and its Compose UI provides standard focus and TalkBack semantics.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Feedback welcome</span><p>Accessibility is an ongoing effort. If something doesn’t work with your screen reader, file an issue.</p></div>
</div>`,
  },
];
