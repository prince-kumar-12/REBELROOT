import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "omni-browser",
    name: "Omni Browser",
    info: "Fast. Private. Built For Power Users.",
    description:
      "Browse freely with native GeckoView 145 performance, built-in uBlock ad & AI blocker, Tor proxy routing, and desktop Firefox WebExtensions. Private by design. Fast by nature.",
    status: "Live",
    platforms: ["Desktop", "Mobile"],
    accent: "electric",
    icon: "Globe",
    category: ["Web", "app"],
    links: {
      downloadUrl:
        "https://play.google.com/store/apps/details?id=com.rebelroot.omni",
      sourceUrl: "https://github.com/REBEL-ROOT/omni-browser/releases",
    },

    heroCopy:
      "Every request Omni makes is a request you asked for. No background pings, no usage analytics, no silent handshakes with ad networks.",

    features: [
      {
        icon: "Puzzle",
        title: "Firefox WebExtensions",
        description:
          "Install desktop-grade Firefox .xpi extensions directly on Android with complete extension API support.",
      },
      {
        icon: "Shield",
        title: "Hardware Safe Locker",
        description:
          "AES-256 biometric-protected hardware vault for private files, downloads, and notes.",
      },
      {
        icon: "Play",
        title: "Media Sniffer & Player",
        description:
          "Extract video/audio media links automatically with background playing capabilities.",
      },
      {
        icon: "BookOpen",
        title: "Manga & Gallery Grabber",
        description:
          "Batch download full-resolution image galleries and manga chapters seamlessly.",
      },
      {
        icon: "Folder",
        title: "Distraction-Free Reader",
        description:
          "Strip away popups, paywall overlays, and heavy script bloat for pristine reading typography.",
      },
      {
        icon: "ShieldCheck",
        title: "uBlock & AI Blocker Engine",
        description:
          "Block 180+ tracker domains and intrusive AI web scraping crawlers at network level.",
      },
      {
        icon: "Grid",
        title: "Power Quick Tools",
        description:
          "Universal text copy, session burning, QR suite, offline PDF save, and site style editor.",
      },
      {
        icon: "Download",
        title: "Offline Document Save",
        description:
          "Save web pages as self-contained offline PDFs or Markdown documents locally.",
      },
      {
        icon: "Maximize",
        title: "Immersive Edge-to-Edge",
        description:
          "No solid black status bar block. Website colors and home wallpapers extend under the status bar while status icons auto-adapt contrast.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
      {
        icon: "Scan",
        title: "QR Scan Page",
        description:
          "Scan and decode embedded QR code images on active web pages automatically.",
        href: "/docs/omni-browser/quick-tools/qr-scan-page",
      },
      {
        icon: "Grid2X2",
        title: "QR Generator",
        description:
          "Generate custom high-resolution QR codes for web links or text snippets instantly.",
        href: "/docs/omni-browser/quick-tools/qr-generator",
      },
      {
        icon: "Terminal",
        title: "Console Log",
        description:
          "Mobile web developer console — capture JavaScript exceptions, logs, and network events.",
        href: "/docs/omni-browser/quick-tools/console-log",
      },
      {
        icon: "FileText",
        title: "Encrypted Dev Notes",
        description:
          "Encrypted local notebook for capturing web snippets, code blocks, and research notes.",
        href: "/docs/omni-browser/quick-tools/dev-notes",
      },
      {
        icon: "Droplet",
        title: "Site Style Injector",
        description:
          "Inject custom CSS styles, adjust layout spacing, and force custom dark mode color themes.",
        href: "/docs/omni-browser/quick-tools/site-style-injector",
      },
      {
        icon: "Image",
        title: "Batch Image Grabber",
        description:
          "Batch extract all full-resolution images, galleries, and manga chapters from any page.",
        href: "/docs/omni-browser/quick-tools/image-grabber",
      },
      {
        icon: "Code",
        title: "DOM Inspector",
        description:
          "Inspect HTML tree structure, CSS properties, asset paths, and element computed styles.",
        href: "/docs/omni-browser/quick-tools/dom-inspector",
      },
      {
        icon: "ZoomIn",
        title: "Force Zoom",
        description:
          "Override non-scalable mobile viewports to enable pinch-to-zoom on restrictive websites.",
        href: "/docs/omni-browser/quick-tools/force-zoom",
      },
    ],

    architecture: [
      "Chromium engine with telemetry endpoints stripped at compile time",
      "Rust-based content-blocking layer running in a sandboxed process",
      "Local SQLite store for history, encrypted at rest with a device key",
    ],

    security: [
      "Reproducible builds verified against public hashes on every release",
      "No first-party analytics SDKs of any kind",
      "Independent security review published alongside each major version",
    ],

    faq: [
      {
        id: "omni-browser-difference",
        question:
          "What makes Omni Browser different from Chrome or Brave?",
        answer:
          "Omni Browser is built on Mozilla GeckoView rather than Chromium, providing true independence from Google's web rendering monolithic standards. It features desktop Firefox WebExtension compatibility, Tor Proxy Hub, built-in uBlock ad & AI script blocking, native media sniffer tools, AES-256 hardware vaults, Manga Grabber, Incognito Shield, and 16+ built-in quick tools.",
      },
      {
        id: "omni-browser-extensions",
        question:
          "Can I install desktop Firefox extensions like uBlock Origin?",
        answer:
          "Yes. Omni Browser includes direct WebExtension controller integration. You can download and run .xpi add-ons directly from addons.mozilla.org on Android without requiring custom developer hacks.",
      },
      {
        id: "omni-browser-privacy",
        question: "Is my browsing data kept private?",
        answer:
          "Yes. Omni Browser operates with zero telemetry, zero analytics, and zero tracking servers. All local data, vaults, and downloads are encrypted on device hardware using AES-256.",
      },
      {
        id: "omni-browser-open-source",
        question:
          "Is Omni Browser completely free and open-source?",
        answer:
          "Yes, Omni Browser is released under the GPLv3 license by NovaRoot. There are no paywalls, hidden subscriptions, or user monetization scripts.",
      },
    ],

    screenshots: [
      {
        label: "Minimalist Home Chrome",
        image: "/omniBrowser/home.png",
        description:
          "Clean home dashboard with quick tiles, privacy metrics, built-in AI script blocker, and search bar.",
      },
      {
        label: "You've Gone Incognito",
        image: "/omniBrowser/incognito_mode.png",
        description:
          "Private browsing mode with zero history, search tracking, or cookie retention.",
      },
      {
        label: "Categorized News Feed",
        image: "/omniBrowser/news_feed.png",
        description:
          "Curated news categories for Business, World, Sports, and Entertainment.",
      },
      {
        label: "Proxy Hub & Tor Circuit",
        image: "/omniBrowser/proxy_hub.png",
        description:
          "Multi-hop Tor routing, Snowflake bridges, WireGuard, and custom proxy configurations.",
      },
      {
        label: "16+ Quick Power Tools",
        image: "/omniBrowser/quick_tools_updated.png",
        description:
          "Reorderable quick tools drawer with developer utilities, scanner, and styling tools.",
      },
      {
        label: "Share via QR Code",
        image: "/omniBrowser/qr_code_share.png",
        description:
          "Generate instant QR codes for web links or text snippets with one-tap saving.",
      },
      {
        label: "Real-time Privacy Report",
        image: "/omniBrowser/privacy_report.png",
        description:
          "Track blocked analytics domains, HTTPS upgrades, cookie isolation, and saved bandwidth.",
      },
      {
        label: "Hardware Safe Locker",
        image: "/omniBrowser/safe_locker.png",
        description:
          "AES-256 biometric-protected hardware vault for private downloads and files.",
      },
      {
        label: "Desktop WebExtensions",
        image: "/omniBrowser/extensions_menu.png",
        description:
          "Install Firefox .xpi add-ons like uBlock Origin and Dark Reader directly on mobile.",
      },
      {
        label: "Batch Image & Manga Grabber",
        image: "/omniBrowser/manga_grabber.png",
        description:
          "Batch extract high-resolution image galleries and manga chapters in one click.",
      },
      {
        label: "Fullscreen Reader Mode",
        image: "/omniBrowser/manga_reader.png",
        description:
          "Distraction-free article and manga reading mode with customizable page rendering.",
      },
      {
        label: "Media Sniffer & Player",
        image: "/omniBrowser/native_player.png",
        description:
          "Extract video streams directly with hardware acceleration and background playback.",
      },
      {
        label: "Encrypted Local Notepad",
        image: "/omniBrowser/notepad_vault.png",
        description:
          "Capture notes and web snippets securely inside an encrypted local notebook.",
      },
    ],
  },

  {
    slug: "mocnovel",
    name: "MOCNovel",
    info: "Read and Write Without Restrictive Borders",
    description:
      "MOCNovel brings independent authors and readers together in a modern, ad-free publishing ecosystem. Take full control of your digital library, customize your reader layout, and sync your reading state across all of your devices.",
    status: "Beta",
    platforms: ["Web", "Desktop"],
    accent: "violet",
    icon: "BookOpen",
    category: ["Web"],

    heroCopy:
      "MOCNovel treats your reading history as yours. Progress is stored on your device first, synced only if you choose to.",

    features: [
      {
        icon: "Folder",
        title: "Offline-first library",
        description:
          "Every book you open is cached locally, readable without a connection.",
      },
      {
        icon: "Folder",
        title: "Typography controls",
        description:
          "Adjust measure, leading, and type scale independently — tuned per book, not per app default.",
      },
      {
        icon: "Folder",
        title: "No reading telemetry",
        description:
          "We don't know what page you're on, how fast you read, or when you stopped.",
      },
      {
        icon: "Folder",
        title: "Local highlights & notes",
        description:
          "Annotations live in an exportable, plain-text-friendly format you control.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
    ],

    architecture: [
      "Local-first data layer using IndexedDB with optional encrypted sync",
      "Fastify API for catalog and optional community features only",
      "Static rendering for public library pages, served from the edge",
    ],

    security: [
      "Sync payloads are end-to-end encrypted before leaving the device",
      "No third-party analytics or session replay tooling",
      "Open bug bounty for the sync protocol",
    ],

    faq: [
      {
        id: "mocnovel-account",
        question: "Do I need an account?",
        answer:
          "No. MOCNovel works fully offline without an account. An account is only needed if you want to sync across devices.",
      },
      {
        id: "mocnovel-formats",
        question: "What formats are supported?",
        answer:
          "EPUB and plain-text formats are supported today, with PDF reading support in active development.",
      },
      {
        id: "mocnovel-highlights",
        question: "Is my highlight data portable?",
        answer:
          "Yes. All notes and highlights export to a plain markdown file you can move anywhere.",
      },
    ],

    screenshots: [
      {
        label: "Reading view",
        image: "/founder.png",
        description:
          "A calibrated type system with adjustable measure and contrast.",
      },
      {
        label: "Library shelf",
        image: "/founder.png",
        description:
          "Offline-first library grid with local reading progress.",
      },
      {
        label: "Notes panel",
        image: "/founder.png",
        description:
          "Portable annotations stored alongside the book, not in a walled garden.",
      },
    ],
  },

  {
    slug: "campcart",
    name: "CampCart",
    info: "Trade Textbooks and Dorm Essentials Safely",
    description:
      "CampCart is a decentralized peer-to-peer campus exchange marketplace built specifically for college students. Trade textbooks, electronics, and dorm gear safely inside a verified student-only network.",
    status: "Beta",
    platforms: ["Web"],
    accent: "electric",
    icon: "ShoppingBag",
    category: ["Web"],

    heroCopy:
      "CampCart gives independent merchants a checkout flow that doesn't quietly resell behavioral data to fund a free tier.",

    features: [
      {
        icon: "Folder",
        title: "Self-hostable storefront",
        description:
          "Deploy on your own infrastructure with a single Docker Compose file.",
      },
      {
        icon: "Folder",
        title: "Privacy-respecting analytics",
        description:
          "Aggregate, cookieless traffic counts — never individual shopper profiles.",
      },
      {
        icon: "Folder",
        title: "Composable checkout",
        description:
          "Bring your own payment processor through a documented adapter interface.",
      },
      {
        icon: "Folder",
        title: "Inventory sync",
        description:
          "Real-time stock updates over a lightweight Redis-backed event bus.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
    ],

    architecture: [
      "Next.js storefront with server-rendered product and cart pages",
      "Fastify order and inventory API backed by PostgreSQL",
      "Redis for cart sessions and real-time stock events",
    ],

    security: [
      "PCI-scope minimized by delegating card data to processor-hosted fields",
      "Role-based access control for every merchant dashboard action",
      "Signed webhook verification on all inbound processor events",
    ],

    faq: [
      {
        id: "campcart-self-host",
        question: "Can I self-host CampCart?",
        answer:
          "Yes, CampCart ships as a Docker Compose stack you can run on your own server or a cloud VM.",
      },
      {
        id: "campcart-payments",
        question: "Which payment processors are supported?",
        answer:
          "CampCart ships with adapters for common processors and an open interface for adding others.",
      },
      {
        id: "campcart-tracking",
        question: "Does CampCart track shoppers?",
        answer:
          "No individual shopper tracking occurs. Store owners see aggregate, cookieless traffic trends only.",
      },
    ],

    screenshots: [
      {
        label: "Storefront",
        image: "/founder.png",
        description:
          "A fast, server-rendered product grid with accessible filtering.",
      },
      {
        label: "Merchant dashboard",
        image: "/founder.png",
        description:
          "Order and inventory management without third-party trackers embedded.",
      },
      {
        label: "Checkout flow",
        image: "/founder.png",
        description:
          "A minimal, three-step checkout with processor-hosted card fields.",
      },
    ],
  },

  {
    slug: "openved",
    name: "Openved",
    info: "Vedic Wisdom Powered by Modern Edge AI",
    description:
      "Openved combines the mathematical precision of astrological computations with the reasoning power of Google Gemini. Get personalized Kundli insights, 36-point compatibility checks, and transit readings on a secure, local-first interface.",
    status: "In Development",
    platforms: ["Mobile", "Web"],
    accent: "violet",
    icon: "HeartPulse",
    category: ["Mobile"],

    heroCopy:
      "Openved stores health notes on-device by default, encrypted with a key only you hold — not a key we can recover.",

    features: [
      {
        icon: "Folder",
        title: "On-device encryption",
        description:
          "Entries are encrypted with a locally generated key before any storage write.",
      },
      {
        icon: "Folder",
        title: "Symptom timelines",
        description:
          "Track patterns over time with a private, exportable timeline view.",
      },
      {
        icon: "Folder",
        title: "Doctor export packets",
        description:
          "Generate a shareable summary PDF for appointments, created entirely offline.",
      },
      {
        icon: "Folder",
        title: "No insurer integrations",
        description:
          "Openved has no data-sharing partnerships with insurers or employers, by policy and by architecture.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
    ],

    architecture: [
      "SQLCipher-backed local database on mobile and desktop clients",
      "Optional encrypted backup to user-chosen cloud storage",
      "No backend health-data server exists in the default deployment",
    ],

    security: [
      "Zero-knowledge design: NovaRoot cannot read stored entries",
      "Biometric lock on supported devices",
      "Independent cryptography review scheduled ahead of general availability",
    ],

    faq: [
      {
        id: "openved-availability",
        question: "Is Openved available yet?",
        answer:
          "Openved is in active development. A closed beta is planned before general availability.",
      },
      {
        id: "openved-privacy",
        question: "Who can see my entries?",
        answer:
          "Only you. Entries are encrypted on-device with a key that never leaves your device.",
      },
      {
        id: "openved-export",
        question: "Can I export my data?",
        answer:
          "Yes, encrypted local export and a printable doctor summary are both planned for the beta release.",
      },
    ],

    screenshots: [
      {
        label: "Timeline",
        image: "/founder.png",
        description:
          "A private symptom timeline rendered entirely from on-device data.",
      },
      {
        label: "Entry composer",
        image: "/founder.png",
        description:
          "Fast, structured entry logging designed for quick daily use.",
      },
      {
        label: "Export packet",
        image: "/founder.png",
        description:
          "An offline-generated summary suitable for printing before an appointment.",
      },
    ],
  },

  {
    slug: "moc-office",
    name: "MOC Office",
    info: "The Private, Powerful Android PDF Suite",
    description:
      "MOC Office is a feature-rich, 100% offline PDF reader and editing suite for Android. Powered by Mozilla's PDF.js, it delivers 12 professional-grade document tools — merge, split, compress, lock, convert — with zero tracking and zero cloud dependency.",
    status: "Beta",
    platforms: ["Desktop", "Web"],
    accent: "electric",
    icon: "FileText",
    category: ["Web"],

    heroCopy:
      "MOC Office renders and saves documents locally by default. Collaboration is opt-in, peer-to-peer, and end-to-end encrypted.",

    features: [
      {
        icon: "Folder",
        title: "Offline document engine",
        description:
          "Full editing works without a connection; sync is a layer on top, not a requirement.",
      },
      {
        icon: "Folder",
        title: "Open file formats",
        description:
          "Documents save natively to ODF and Markdown, no proprietary lock-in format.",
      },
      {
        icon: "Folder",
        title: "Peer-to-peer collaboration",
        description:
          "Real-time co-editing over an encrypted WebRTC channel, no central document server.",
      },
      {
        icon: "Folder",
        title: "Version history, locally",
        description:
          "Every save is a local, diffable snapshot you can roll back without a server.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
    ],

    architecture: [
      "CRDT-based document core shared across writer, sheet, and slide modules",
      "Local-first storage with optional encrypted peer sync over WebRTC",
      "Static, installable web app with a native desktop wrapper",
    ],

    security: [
      "No document content ever transits a NovaRoot server",
      "Peer sync sessions use ephemeral, forward-secret encryption keys",
      "Open format specification reviewed by outside contributors",
    ],

    faq: [
      {
        id: "moc-office-offline",
        question: "Can I use MOC Office fully offline?",
        answer:
          "Yes. Writing, spreadsheets, and slides all work offline by default, with sync as an optional add-on.",
      },
      {
        id: "moc-office-formats",
        question: "What formats does it save to?",
        answer:
          "MOC Office saves to open formats including ODF and Markdown, with import support for common proprietary formats.",
      },
      {
        id: "moc-office-collaboration",
        question: "How does real-time collaboration work?",
        answer:
          "Collaboration connects peers directly over an encrypted channel rather than routing document content through a server.",
      },
    ],

    screenshots: [
      {
        label: "Writer view",
        image: "/founder.png",
        description:
          "A clean writing surface with a distraction-minimal toolbar.",
      },
      {
        label: "Sheet module",
        image: "/founder.png",
        description:
          "Spreadsheet editing with formula support and local version history.",
      },
      {
        label: "Collaboration panel",
        image: "/founder.png",
        description:
          "Peer-to-peer editing indicators with no central server in the loop.",
      },
    ],
  },

  {
    slug: "rootlock",
    name: "RootLock",
    info: "Hardware-Hardened Per-App Privacy Locker",
    description:
      "RootLock protects your personal and financial applications with separate, isolated credentials. Powered by an offline native C++ PBKDF2 cryptography core, it secures app launches against intrusions without exposing master secrets to memory or cloud storage.",
    status: "Live",
    platforms: ["Desktop", "Mobile", "CLI"],
    accent: "mixed",
    icon: "Lock",
    category: ["Live"],

    heroCopy:
      "RootLock's server never sees a plaintext secret. Vaults are encrypted before they leave your device and stay that way at rest.",

    features: [
      {
        icon: "Folder",
        title: "Cross-device sync",
        description:
          "Encrypted vault blobs sync across devices without ever being decrypted server-side.",
      },
      {
        icon: "Folder",
        title: "Zero-knowledge vaults",
        description:
          "Encryption and decryption happen entirely client-side, using audited open algorithms.",
      },
      {
        icon: "Folder",
        title: "CLI for automation",
        description:
          "Script secret retrieval into CI pipelines without exposing raw values in logs.",
      },
      {
        icon: "Folder",
        title: "Emergency access",
        description:
          "Designate trusted contacts for encrypted, time-delayed emergency vault access.",
      },
    ],

    quickTools: [
      {
        icon: "ScanLine",
        title: "QR Scanner",
        description:
          "Scan physical QR codes directly using camera hardware with instant URL opening.",
        href: "/docs/omni-browser/quick-tools/qr-scanner",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/omni-browser/quick-tools/safe-locker",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/omni-browser/quick-tools/translator",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/omni-browser/quick-tools/edit-page",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/omni-browser/quick-tools/save-pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/omni-browser/quick-tools/tor-circuit",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/omni-browser/quick-tools/pin-web-app",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/omni-browser/quick-tools/auto-scroll",
      },
    ],

    architecture: [
      "Client-side AES-256-GCM encryption with Argon2id key derivation",
      "Fastify sync API storing only encrypted blobs, never keys",
      "PostgreSQL for encrypted vault storage with per-user sharding",
    ],

    security: [
      "Independently audited twice since initial release",
      "Public bug bounty program with disclosed payout history",
      "Open cryptographic design document, community reviewed",
    ],

    faq: [
      {
        id: "rootlock-passwords",
        question: "Can NovaRoot see my passwords?",
        answer:
          "No. Vaults are encrypted on your device before syncing, and the server only ever stores encrypted data.",
      },
      {
        id: "rootlock-audited",
        question: "Is RootLock audited?",
        answer:
          "Yes, RootLock has completed two independent security audits, with public summaries available.",
      },
      {
        id: "rootlock-offline",
        question: "Does RootLock work offline?",
        answer:
          "Yes, your vault is fully available offline; sync resumes automatically once you're back online.",
      },
    ],

    screenshots: [
      {
        label: "Vault view",
        image: "/founder.png",
        description:
          "An organized vault with folders, tags, and quick search.",
      },
      {
        label: "CLI usage",
        image: "/founder.png",
        description:
          "Retrieve secrets in automated pipelines without exposing plaintext in logs.",
      },
      {
        label: "Audit summary",
        image: "/founder.png",
        description:
          "Public findings from RootLock's independent security audits.",
      },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const statusFilters = [
  "All",
  "Live",
  "Beta",
  "In Development",
] as const;

export const platformFilters = ["Mobile", "Web"] as const;