import { NavGroup, FlatNavEntry } from "./types";

// Auto-generated navigation data, sourced from the original Omni Docs app.js NAV config.
export const NAV: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", path: "getting-started/introduction", desc: "What Omni Browser is, why it exists, and what makes it different.", kw: "why omni about overview privacy geckoview open source" },
      { title: "Installation", path: "getting-started/installation", desc: "Download and install Omni Browser from APK, F-Droid or GitHub Releases.", kw: "install apk download fdroid github requirements android sdk" },
      { title: "First Launch", path: "getting-started/first-launch", desc: "Language selection, onboarding and setting yourself up.", kw: "first launch onboarding language default browser setup" },
      { title: "Quick Start", path: "getting-started/quick-start", desc: "Your first five minutes: tabs, search, the fire button and quick tools.", kw: "first run onboarding tabs search basics tutorial" },
      { title: "Common Workflows", path: "getting-started/common-workflows", desc: "How to do the everyday things: save a page, grab a video, translate.", kw: "workflows save download translate scan copy tasks" },
      { title: "Switching Browsers", path: "getting-started/migration", desc: "Moving from Chrome, Firefox or Brave: what carries over and what’s different.", kw: "migration switch chrome firefox brave import bookmarks" },
      { title: "Keyboard Shortcuts", path: "getting-started/keyboard-shortcuts", desc: "Every shortcut, the command palette and external keyboard support.", kw: "shortcuts keys command palette hotkeys keyboard" },
      { title: "Troubleshooting", path: "getting-started/troubleshooting", desc: "Fix crashes, playback issues, extension conflicts and more.", kw: "troubleshooting fix crash issues debug problems" },
    ],
  },
  {
    title: "Tabs & Workspace",
    items: [
      { title: "Tab Management", path: "tabs/tab-management", desc: "Create, switch, close and restore tabs; the strip and visual switcher.", kw: "tabs strip switcher close restore session" },
      { title: "Smart Tab Groups", path: "tabs/tab-groups", desc: "Auto-group tabs by domain into Social, Shopping, Video, News, Dev, Work.", kw: "tab groups smart grouping categories organize" },
      { title: "Private Tabs", path: "tabs/private-tabs", desc: "Incognito in a genuinely isolated GeckoView private context.", kw: "private incognito isolation cookies history" },
      { title: "Desktop Mode", path: "tabs/desktop-mode", desc: "Load full desktop versions of sites with a desktop user-agent.", kw: "desktop mode user agent zoom force" },
      { title: "Find in Page", path: "tabs/find-in-page", desc: "Search for text within the current page with match highlighting.", kw: "find search page text match" },
    ],
  },
  {
    title: "Privacy & Security",
    items: [
      { title: "Overview", path: "privacy/overview", desc: "The full privacy stack: blocking, isolation, transport, storage, session control.", kw: "privacy overview stack layers zero data", badge: "Core" },
      { title: "Ad & Tracker Blocking", path: "privacy/ad-blocking", desc: "Domain lists, cosmetic filtering, popup blocking and filter providers.", kw: "adblock tracker blocking easylist adguard popup", badge: "Core" },
      { title: "Fire Button", path: "privacy/fire-button", desc: "Burn tabs, cookies, cache and history in one tap.", kw: "fire button burn session clear panic" },
      { title: "Encrypted Vault", path: "privacy/private-vault", desc: "Biometric-protected AES-256 storage for pages, images and notes.", kw: "vault encrypted biometric sqlcipher aes private" },
      { title: "Tor", path: "privacy/tor", desc: "Route traffic through Tor: bootstrap, bridges, Snowflake, .onion.", kw: "tor onion bridges snowflake anonymity" },
      { title: "WireGuard VPN", path: "privacy/vpn", desc: "Run a WireGuard tunnel: import a config and encrypt your traffic.", kw: "vpn wireguard tunnel encrypt config" },
      { title: "Site Permissions", path: "privacy/site-permissions", desc: "Control camera, mic, location and notifications per site.", kw: "permissions camera microphone location notifications" },
      { title: "Passwords", path: "privacy/passwords", desc: "Local, Keystore-encrypted password storage and autofill.", kw: "passwords autofill keystore credentials login" },
      { title: "HTTPS-Only", path: "privacy/https-only", desc: "HTTPS enforcement and refusing cleartext traffic.", kw: "https cleartext encryption upgrade" },
    ],
  },
  {
    title: "Media",
    items: [
      { title: "Media Hub", path: "media/overview", desc: "The media stack: sniffing, native playback, downloads, audio extraction.", kw: "media hub overview video audio", badge: "Core" },
      { title: "Stream Sniffer", path: "media/stream-sniffer", desc: "Dual-path detection of HLS, DASH and MSE streams.", kw: "stream sniffer hls dash mse detect grabber", badge: "Core" },
      { title: "Video Player", path: "media/video-player", desc: "ExoPlayer playback with PiP, gestures, speed and background audio.", kw: "video player exoplayer pip gestures background speed" },
      { title: "Audio Extraction", path: "media/audio-extraction", desc: "Pull the soundtrack out of any video with on-demand FFmpeg.", kw: "audio extraction ffmpeg mp3 convert" },
      { title: "Downloads Manager", path: "media/downloads", desc: "Queue, pause and resume; save to the vault; manage your library.", kw: "downloads manager queue resume vault library" },
      { title: "Batch Media & Manga", path: "media/batch-manga", desc: "Batch-download images and chapters with PDF export.", kw: "batch manga images gallery pdf reader" },
    ],
  },
  {
    title: "Quick Tools",
    items: [
      { title: "Overview", path: "tools/overview", desc: "The toolbox: 14+ native tools, one swipe away, reorderable.", kw: "quick tools toolbox panel overview" },
      { title: "Command Palette", path: "power/command-palette", desc: "Fuzzy-search every action, tab and setting from one prompt.", kw: "command palette fuzzy search actions launcher" },
      { title: "QR Scanner & Generator", path: "tools/qr", desc: "Scan and generate QR codes with the pure-FOSS ZXing engine.", kw: "qr scanner generator zxing barcode scan" },
      { title: "Translator", path: "tools/translator", desc: "Translate pages and selected text across many languages.", kw: "translator translation languages" },
      { title: "Save as PDF", path: "tools/pdf", desc: "Export any page as a clean, ad-stripped PDF.", kw: "pdf export print save page" },
      { title: "Developer Console", path: "tools/dev-console", desc: "A live JavaScript REPL for the current page.", kw: "developer console javascript repl devtools inspect" },
      { title: "Dev Notes", path: "tools/dev-notes", desc: "An offline, filterable, searchable scratchpad.", kw: "notes scratchpad notepad voice memo" },
      { title: "Site Styles & Editor", path: "tools/site-styles", desc: "Per-site font, spacing, dark mode \\u2014 and make pages editable.", kw: "site style font dark reader contenteditable editor" },
      { title: "Speak Aloud", path: "tools/read-aloud", desc: "Have selected text read out loud via system TTS.", kw: "speak aloud tts text to speech read" },
      { title: "Web Apps", path: "tools/web-apps", desc: "Pin websites to your home screen as app-like shortcuts.", kw: "web apps home screen shortcut pin pwa" },
    ],
  },
  {
    title: "Extensions",
    items: [
      { title: "Overview", path: "extensions/overview", desc: "Real Firefox WebExtension (.xpi) support, powered by Gecko.", kw: "extensions addons xpi webextension mozilla", badge: "Core" },
      { title: "Bundled Extensions", path: "extensions/bundled", desc: "Media Grabber, AI Blocker and Universal Copy.", kw: "bundled media grabber ai blocker universal copy" },
      { title: "Installing Add-ons", path: "extensions/install", desc: "Step-by-step install from addons.mozilla.org.", kw: "install addons amo firefox marketplace" },
    ],
  },
  {
    title: "AI",
    items: [
      { title: "AI Blocker", path: "ai/ai-blocker", desc: "Hide AI overviews on Google, Bing, DuckDuckGo and more.", kw: "ai blocker artificial intelligence overview search" },
    ],
  },
  {
    title: "Home & Search",
    items: [
      { title: "Home Screen", path: "home/home-screen", desc: "Search bar, quick-access shortcuts and the Discover feed.", kw: "home screen shortcuts start page" },
      { title: "Search Engines", path: "home/search-engines", desc: "Google, DuckDuckGo, Brave, Bing, Yandex, Ecosia, Startpage + custom.", kw: "search engines google duckduckgo brave default" },
      { title: "Discover Feed", path: "home/discover", desc: "A news stream of Trending, World, Tech and Sports.", kw: "discover news feed trending google news" },
    ],
  },
  {
    title: "Customization",
    items: [
      { title: "Themes & Appearance", path: "customization/themes", desc: "Light, dark and AMOLED; accents, dynamic color and UI scale.", kw: "themes appearance dark amoled accent dynamic color" },
      { title: "Wallpapers", path: "customization/wallpapers", desc: "Give the home screen some personality.", kw: "wallpapers background home screen" },
      { title: "Toolbar & Layout", path: "customization/toolbar", desc: "Address bar position, bottom nav and one-handed layout.", kw: "toolbar layout address bar bottom one-handed" },
      { title: "Accessibility", path: "customization/accessibility", desc: "UI scaling, readable pages, speak aloud and system integration.", kw: "accessibility scaling font screen reader talkback" },
    ],
  },
  {
    title: "Developer",
    items: [
      { title: "Architecture", path: "developer/architecture", desc: "MVVM, unidirectional data flow and the layer map of the app.", kw: "architecture mvvm data flow layers viewmodel design", badge: "Dev" },
      { title: "Code Structure", path: "developer/code-structure", desc: "A tour of the com.rebelroot.omni package tree and key files.", kw: "code structure package files folders organization source" },
      { title: "GeckoView Engine", path: "developer/geckoview", desc: "How GeckoRuntime and GeckoSession power the browser, and interop.", kw: "geckoview gecko runtime session engine mozilla firefox interop", badge: "Dev" },
      { title: "Build System", path: "developer/build-system", desc: "Gradle Kotlin DSL, ABI flavors, R8, signing and CI releases.", kw: "build gradle flavors r8 signing ci release apk kotlin" },
      { title: "Modules & Packages", path: "developer/modules", desc: "Feature packages: adblock, extensions, media, privacy, tools, locker.", kw: "modules packages components feature modules" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Browser Engine", path: "api/browser-engine", desc: "Runtime, session and navigation APIs exposed by the engine layer.", kw: "api browser engine runtime session navigation" },
      { title: "Download API", path: "api/download-api", desc: "Programmatic downloads, the stream engine and vault persistence.", kw: "api download stream engine vault" },
      { title: "Media API", path: "api/media-api", desc: "Interceptor, sniffer messaging and the player service.", kw: "api media interceptor sniffer player service" },
      { title: "AI API", path: "api/ai-api", desc: "The AI Blocker content scripts and messaging surface.", kw: "api ai blocker messaging content script" },
      { title: "Settings API", path: "api/settings-api", desc: "DataStore-backed preferences and theme state holder.", kw: "api settings datastore preferences theme state" },
      { title: "Extension API", path: "api/extension-api", desc: "Installing, enabling and messaging WebExtensions.", kw: "api extension webextension install enable messaging" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "FAQ", path: "resources/faq", desc: "Answers to the most common questions about Omni Browser.", kw: "faq questions answers common help" },
      { title: "Changelog", path: "resources/changelog", desc: "Release history from v1.0.0 to the latest build.", kw: "changelog releases history versions" },
      { title: "Contributing", path: "resources/contributing", desc: "Set up the dev environment, code style and how to send PRs.", kw: "contributing development setup pull request code style" },
      { title: "Security", path: "resources/security", desc: "Supported versions and how to responsibly disclose vulnerabilities.", kw: "security vulnerability disclosure policy encryption" },
      { title: "License", path: "resources/license", desc: "GPLv3 licensing and the RebelRoot trademark policy.", kw: "license gplv3 trademark legal open source" },
    ],
  },
];

export const FLAT_NAV: FlatNavEntry[] = NAV.flatMap((section) =>
  section.items.map((item) => ({ ...item, section: section.title }))
);

export function findNavEntry(path: string): FlatNavEntry | undefined {
  return FLAT_NAV.find((item) => item.path === path);
}

export function getAdjacentPages(path: string): { prev?: FlatNavEntry; next?: FlatNavEntry } {
  const i = FLAT_NAV.findIndex((item) => item.path === path);
  if (i === -1) return {};
  return { prev: FLAT_NAV[i - 1], next: FLAT_NAV[i + 1] };
}

export function getAllPaths(): string[] {
  return FLAT_NAV.map((item) => item.path);
}
