import { Product } from "@/types";
import { Download } from "lucide-react";

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
        href: "/docs/tools/qr",
      },
      {
        icon: "LockKeyhole",
        title: "Safe Locker",
        description:
          "AES-256 encrypted hardware vault for private downloads, documents, and media.",
        href: "/docs/privacy/private-vault",
      },
      {
        icon: "Languages",
        title: "ML Translator",
        description:
          "Offline machine-learning language translation for full web pages without cloud tracking.",
        href: "/docs/tools/translator.",
      },
      {
        icon: "SquarePen",
        title: "Edit Page",
        description:
          "Interactive design mode — edit text content, headers, and DOM elements live on any site.",
        href: "/docs/tools/overview",
      },
      {
        icon: "Printer",
        title: "Save PDF",
        description:
          "Convert active web pages into self-contained PDF documents for offline archiving.",
        href: "/docs/tools/pdf",
      },
      {
        icon: "ShieldCheck",
        title: "Tor Circuit Toggle",
        description:
          "One-tap switch to route active session traffic through multi-hop Tor onion relays.",
        href: "/docs/privacy/tor",
      },
      {
        icon: "ExternalLink",
        title: "Pin Web App",
        description:
          "Pin progressive web applications (PWAs) directly to your mobile home screen.",
        href: "/docs/tools/web-apps",
      },
      {
        icon: "CircleArrowDown",
        title: "Auto-Scroll",
        description:
          "Hands-free smooth scrolling with adjustable speeds for continuous article reading.",
        href: "/docs/tools/overview",
      },
      {
        icon: "Scan",
        title: "QR Scan Page",
        description:
          "Scan and decode embedded QR code images on active web pages automatically.",
        href: "/docs/tools/qr",
      },
      {
        icon: "Grid2X2",
        title: "QR Generator",
        description:
          "Generate custom high-resolution QR codes for web links or text snippets instantly.",
        href: "/docs/tools/qr",
      },
      {
        icon: "Terminal",
        title: "Console Log",
        description:
          "Mobile web developer console — capture JavaScript exceptions, logs, and network events.",
        href: "/docs/tools/dev-console",
      },
      {
        icon: "FileText",
        title: "Encrypted Dev Notes",
        description:
          "Encrypted local notebook for capturing web snippets, code blocks, and research notes.",
        href: "/docs/tools/dev-notes",
      },
      {
        icon: "Droplet",
        title: "Site Style Injector",
        description:
          "Inject custom CSS styles, adjust layout spacing, and force custom dark mode color themes.",
        href: "/docs/tools/site-styles",
      },
      {
        icon: "Image",
        title: "Batch Image Grabber",
        description:
          "Batch extract all full-resolution images, galleries, and manga chapters from any page.",
        href: "/docs/media/batch-manga",
      },
      {
        icon: "Code",
        title: "DOM Inspector",
        description:
          "Inspect HTML tree structure, CSS properties, asset paths, and element computed styles.",
        href: "/docs/tools/overview",
      },
      {
        icon: "ZoomIn",
        title: "Force Zoom",
        description:
          "Override non-scalable mobile viewports to enable pinch-to-zoom on restrictive websites.",
        href: "/docs/customization/accessibility",
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
        question: "What makes Omni Browser different from Chrome or Brave?",
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
        question: "Is Omni Browser completely free and open-source?",
        answer:
          "Yes, Omni Browser is released under the GPLv3 license by RebelRoot. There are no paywalls, hidden subscriptions, or user monetization scripts.",
      },
    ],

    screenshots: [
      {
        label: "Minimalist Home Chrome",
        image: "/omniBrowser/home.png",
        description:
          "Clean home dashboard with quick tiles, privacy metrics, built-in AI script blocker, and search bar.",
        href: "/docs/home/home-screen",

      },
      {
        label: "You've Gone Incognito",
        image: "/omniBrowser/incognito_mode.png",
        description:
          "Private browsing mode with zero history, search tracking, or cookie retention.",
        href: "/docs/privacy/private-vault",

      },
      {
        label: "Categorized News Feed",
        image: "/omniBrowser/news_feed.png",
        description:
          "Curated news categories for Business, World, Sports, and Entertainment.",
        href: "/docs/home/discover",

      },
      {
        label: "Proxy Hub & Tor Circuit",
        image: "/omniBrowser/proxy_hub.png",
        description:
          "Multi-hop Tor routing, Snowflake bridges, WireGuard, and custom proxy configurations.",
        href: "/docs/privacy/tor",

      },
      {
        label: "16+ Quick Power Tools",
        image: "/omniBrowser/quick_tools_updated.png",
        description:
          "Reorderable quick tools drawer with developer utilities, scanner, and styling tools.",
        href: "/docs/tools/overview",

      },
      {
        label: "Share via QR Code",
        image: "/omniBrowser/qr_code_share.png",
        description:
          "Generate instant QR codes for web links or text snippets with one-tap saving.",
        href: "/docs/tools/qr",

      },
      {
        label: "Real-time Privacy Report",
        image: "/omniBrowser/privacy_report.png",
        description:
          "Track blocked analytics domains, HTTPS upgrades, cookie isolation, and saved bandwidth.",
        href: "/docs/privacy/overview",

      },
      {
        label: "Hardware Safe Locker",
        image: "/omniBrowser/safe_locker.png",
        description:
          "AES-256 biometric-protected hardware vault for private downloads and files.",
        href: "/docs/privacy/private-vault",

      },
      {
        label: "Desktop WebExtensions",
        image: "/omniBrowser/extensions_menu.png",
        description:
          "Install Firefox .xpi add-ons like uBlock Origin and Dark Reader directly on mobile.",
        href: "/docs/extensions/overview",

      },
      {
        label: "Batch Image & Manga Grabber",
        image: "/omniBrowser/manga_grabber.png",
        description:
          "Batch extract high-resolution image galleries and manga chapters in one click.",
        href: "/docs/media/batch-manga",

      },
      {
        label: "Fullscreen Reader Mode",
        image: "/omniBrowser/manga_reader.png",
        description:
          "Distraction-free article and manga reading mode with customizable page rendering.",
        href: "/docs/customization/accessibility",

      },
      {
        label: "Media Sniffer & Player",
        image: "/omniBrowser/native_player.png",
        description:
          "Extract video streams directly with hardware acceleration and background playback.",
        href: "/docs/media/stream-sniffer",

      },
      {
        label: "Encrypted Local Notepad",
        image: "/omniBrowser/notepad_vault.png",
        description:
          "Capture notes and web snippets securely inside an encrypted local notebook.",
        href: "/docs/tools/dev-notes",

      },
    ],
  },

  {
    slug: "mocnovel",
    name: "MOCNovel",
    info: "Re-imagining the Reading & Publishing Experience",
    description:
      " MOC Novel is a modern, zero-telemetry, zero-ad publishing platform designed to connect independent authors directly with their audience. Empowered by modern LLMs and real-time synchronization.",
    status: "Beta",
    platforms: ["Web", "Desktop"],
    accent: "violet",
    icon: "BookOpen",
    category: ["Web"],
    build:"Built For Global Scale",
    links: {
      downloadUrl: " https://mocnovel.com/login",
    },
    stepsTitle:"The Unified Novel Lifecycle",
    steps: [
  {
    number: "01",
    title: "Discover",
    description: (
      <>
        Explore lists & tags
         
      </>
    ),
  },
  {
    number: "02",
    title: "Read",
    description: (
      <>
        Custom, distraction-
        <br />
        free reader
      </>
    ),
  },
  {
    number: "03",
    title: "Discuss",
    description: (
      <>
       Real-time community
        <br />
       chats
      </>
    ),
  },
  {
    number: "04",
    title: "AI Recs",
    description: (
      <>
        Llama 3.3 70B
        <br />
        suggestions
      </>
    ),
  },
  {
    number: "05",
    title: "Library",
    description: (
      <>
        Save & sync chapters
      </>
    ),
  },
  {
    number: "06",
    title: "Share",
    description: (
      <>
        Curated lists with
         
        friends
      </>
    ),
  },
],
    heroCopy:
      "MOCNovel treats your reading history as yours. Progress is stored on your device first, synced only if you choose to.",

    features: [
      {
        icon: "Bot",
        title: "AI Recommendation System",
        description:
          "Smart AI Assistance: Analyzes your library context, chats naturally for novel discovery, uses Groq-powered Llama 3.3 70B for fast responses, and delivers context-aware recommendations based on your favorite tropes and reading patterns.",
      },
      {
        icon: "BookOpen",
        title: "Discovery & Management",
        description:
          "Advanced Filtering: Search by precise rating ranges, tags, update status, and genres; Curated Collections: Organize custom public or private lists with seamless drag-and-drop; Progress Tracking: Automatically track chapter-level reading progress; Offline Bookmark Vault: Save persistent notes on your favorite novels directly to browser memory.",
      },
      {
        icon: "MessagesSquare",
        title: "Real-Time Social Features",
        description:
          "Real-Time Social Features: Live WebSocket chat on chapter screens, threaded novel forums with Markdown support, rich profiles with reading stats and activity feeds, and dynamic sharing cards for spreading lists across social platforms.",
      },
      {
        icon: "Layers",
        title: "Modern Unified Architecture ",
        description:
          "Modern Unified Architecture: A high-performance React 18 + Vite web client, lightweight SwiftUI iOS app with cached storage, high-throughput Fastify API backed by PostgreSQL, and secure global traffic routing through encrypted Nginx load balancing.",
      },
    ],

    quickTools: [
      {
        icon: "Sparkles",
        title: "AI-Driven Recommendation",
        description:
          "First web novel index utilizing conversational agent interactions to recommend user paths instead of cold metadata filters.",
      
      },
      {
        icon: "Zap",
        title: " Sub-Second Loading",
        description:
          "Nginx gateway optimization, local cache caching, and optimized database indexing provide rapid response times under load.",
        
      },
      {
        icon: "ShieldCheck",
        title: "Secure Access & E2EE",
        description:
          "Strict JWT validation paired with end-to-end HTTPS encryption ensures reader and writer security is never compromised.",
         
      },
      {
        icon: "Scaling",
        title: "Horizontal Scaling",
        description:
          "Ready to deploy across clusters using Docker Compose configs with built-in Redis Pub/Sub load balancing.",
       
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
        question: "What is MOCNovel (MOC Novel) by RebelRoot?",
        answer:
          "MOCNovel (also called MOC Novel or Rebel Root MOCNovel) is a modern, zero-telemetry, ad-free novel publishing and reading platform built by the RebelRoot collective. It connects independent authors directly with readers without trackers, paywalls, or censorship.",
      },
      {
        id: "mocnovel-formats",
        question: "Is MOCNovel free to read and publish?",
        answer:
          "Yes, MOCNovel is a completely free platform for both readers and authors. There are no subscription fees, no advertisements, and no hidden paywalls.",
      },
      {
        id: "mocnovel-highlights",
        question: "What reading and publishing features does MOCNovel offer?",
        answer:
          "MOCNovel offers conversational AI-based book recommendations, real-time community tools, a markdown-based chapter editor for authors, and edge deployment for minimal latency worldwide.",
      },
    ],

    screenshots: [
      {
        label: "COMMUNITY",
        image: "/MocNovel/community.png",
        description:
          "A dedicated community feed where readers can discuss their favorite novels, share recommendations, post reviews, create tier lists, and discover what other readers are talking about.",
      },
      {
        label: "NOVEL DISCOVERY",
        image: "/MocNovel/DISCOVERY.png",
        description: "Discover a massive collection of web novels across genres and platforms. Search by title, author, or tags, browse genres, and find your next story to read.",
      },
      {
        label: "CREATOR MARKETPLACE",
        image: "/MocNovel/MARKETPLACE.png",
        description:
          "Connect with translators, cover artists, editors, narrators, and other creative professionals. Browse creator profiles, compare ratings and skills, and hire the right talent for your web novel.",
      },
      {
        label: "TIER LISTS",
        image: "/MocNovel/MARKETPLACE.png",
        description:
          "Create personalized tier lists and organize novels from S-tier favorites to lower rankings. Drag and drop stories into different tiers, then share your rankings with the community.",
      },
    ],
  },

  {
    slug: "campcart",
    name: "CampCart",
    info: "The Safe, Trusted Campus Exchange Marketplace",
    description:
      "CampCart is a decentralized peer-to-peer marketplace built specifically for college and university students. Buy, sell, and rent textbooks, dorm gear, and campus essentials within a secure campus-only network.",
    status: "Beta",
    platforms: ["Web"],
    accent: "electric",
    icon: "ShoppingBag",
    category: ["Web"],
    build:"Built For Zero Latency",
    links: {
      downloadUrl: "https://campcart.online",
    },
    stepsTitle:"The CampCart Exchange Lifecycle",
     steps: [
  {
    number: "01",
    title: "Verify",
    description: (
      <>
        Sign up with student
        <br />
       (.edu) email
      </>
    ),
  },
  {
    number: "02",
    title: "List",
    description: (
      <>
        List gear with photos in 
        <br />
       seconds
      </>
    ),
  },
  {
    number: "03",
    title: "Chat",
    description: (
      <>
        Negotiate via real-time
        <br />
       chat
      </>
    ),
  },
  {
    number: "04",
    title: "Pay",
    description: (
      <>
        Secure escrow via
        <br />
       Stripe/Juspay
      </>
    ),
  },
  {
    number: "05",
    title: "Meet",
    description: (
      <>
        Exchange at
        <br />
       designated safe zones
      </>
    ),
  },
],
    heroCopy:
      "CampCart gives independent merchants a checkout flow that doesn't quietly resell behavioral data to fund a free tier.",

    features: [
      {
        icon: "BadgeCheck",
        title: "Verified Student Network",
        description:
          "EDU Domain Check: Restricts accounts to verified college/university emails. Trust Seals: Profiles show verified student badges and ratings. Zero Spam: Prevents commercial sellers and outside scammers from listings. Campus Circles: Users can browse listings exclusively within their own campus.",
      },
      {
        icon: "WalletCards",
        title: "Multi-Gateway Payments",
        description:
          "Stripe Integration: Supports global credit card billing and checkout. Juspay Hyper SDK: Supports UPI, Net Banking, and Indian wallets. Escrow Settlement: Funds are held securely until both parties confirm the exchange. Zero Hidden Fees: Free peer-to-peer cash transactions with low card processing rates.",
      },
      {
        icon: "MessagesSquare",
        title: "Real-Time Campus Chat",
        description:
          "Instant Messaging: Live WebSockets chat for arranging pickups. Offer Router: Send, accept, or reject offers directly in chat. Push Alerts: Get notifications for offers and messages. Image Attachments: Privately share product photos and condition updates.",
      },
      {
        icon: "MapPinned",
        title: "Campus Safety Maps",
        description:
          "Safe Meeting Zones: Highlights campus lobbies, police stations, and libraries. Geolocation: Pinpoints meeting spots on interactive campus maps. Confirmation PIN: Secures and confirms exchanges with a 4-digit PIN. Safety Checklist: Reminds students of safety guidelines before meeting.",
      },
    ],

    quickTools: [
      {
        icon: "Globe2",
        title: " Edge Execution",
        description:
          "Deploying API handlers on Cloudflare Workers guarantees sub-10ms response times globally near students.",
      },
      {
        icon: "ShieldCheck",
        title: " Secure Payments",
        description:
          "Built-in PCI compliance through Stripe Elements and Juspay SDK ensures payment numbers are never stored locally.",
        
      },
      {
        icon: "Gauge",
        title: "High Throughput",
        description:
          "Chat routers operate on persistent Node.js WebSockets, handling thousands of simultaneous connections easily.",
 
      },
      {
        icon: "Scaling",
        title: "Dynamic Scaling",
        description:
          "MongoDB database handles read-heavy queries cleanly while cloud image resizing optimizes mobile data usage.",
 
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
        question: "What is CampCart (Camp Cart) by RebelRoot?",
        answer:
          "CampCart (also known as Camp Cart or RebelRoot CampCart) is a secure, peer-to-peer campus exchange marketplace built for college and university students by the RebelRoot collective. It enables students to buy, sell, and rent textbooks, dorm items, and campus essentials within a trusted campus-only network.",
      },
      {
        id: "campcart-payments",
        question: "Is CampCart free to use for students?",
        answer:
          "Yes, CampCart is 100% free for students to list and discover products. There are no listing fees or hidden charges for basic transactions.",
      },
      {
        id: "campcart-tracking",
        question: "How does CampCart ensure safe transactions on campus?",
        answer:
          "CampCart uses campus-verified identity gates, integrated Stripe/Juspay payment rails, peer review systems, and Cloudflare Workers for secure edge computing to ensure all transactions between students are safe and trustworthy.",
      },
    ],

    screenshots: [
      {
        label: "Camp-Homepage",
        image: "/campCart/home.png",
        description:
          "A fast, server-rendered product grid with accessible filtering.",
      },
      
    ],
  },

  {
    slug: "openved",
    name: "Openved",
    info: "Vedic Wisdom Powered by Modern Edge AI",
    description:
      "Ved Astra (Openved) is a state-of-the-art Vedic astrology platform. By combining the absolute mathematical accuracy of the VedAstro engine with the cognitive power of Google Gemini, it delivers personalized Kundli analyses, 36-point compatibility matchmaking, and Lal Kitab ancestral debt readings.",
    status: "In Development",
    platforms: ["Mobile", "Web"],
    accent: "violet",
    icon: "HeartPulse",
    category: ["Mobile"],
    build:"Built For Cosmic Scale",
    links:{
      downloadUrl:"https://openved.com/"
  },
  stepsTitle:"The Astrological Analysis Lifecycle",
    steps: [
  {
    number: "01",
    title: "Birth Input",
    description: (
      <>
        Precise date, time, and
        <br />
        coordinates
      </>
    ),
  },
  {
    number: "02",
    title: "Ephemeris Sync",
    description: (
      <>
        Calculate planetary
        <br />
        coordinates via
         
        VedAstro
      </>
    ),
  },
  {
    number: "03",
    title: "Chart Render",
    description: (
      <>
        Draw D1 Kundli using
        <br />
        custom canvas
      </>
    ),
  },
  {
    number: "04",
    title: "Astrology Logic",
    description: (
      <>
        Compute Ashtakoota,
        <br />
       Sade Sati, and Manglik
        
       status
      </>
    ),
  },
  {
    number: "05",
    title: "Gemini context",
    description: (
      <>
       Inject Vedic wisdom
        <br />
        and Lal Kitab
         
        parameters
      </>
    ),
  },
  {
    number: "06",
    title: "AI Chat",
    description: (
      <>
       Secure conversational
        <br />
         insights
      </>
    ),
  },
],
    heroCopy:
      "Openved stores health notes on-device by default, encrypted with a key only you hold — not a key we can recover.",

    features: [
      {
        icon: "BadgeCheck",
        title: "Verified Vedic Coordinates",
        description:
          "Entries are encrypted with a locally generated key before any storage write.",
      },
      {
        icon: "HeartHandshake",
        title: "Ashtakoota Matchmaking",
        description:
          "Track patterns over time with a private, exportable timeline view.",
      },
      {
        icon: "Orbit,",
        title: "Doshas & Transits Engine",
        description:
          "Generate a shareable summary PDF for appointments, created entirely offline.",
      },
      {
        icon: "BrainCircuit",
        title: "On-Device AI Astrologer",
        description:
          "Openved has no data-sharing partnerships with insurers or employers, by policy and by architecture.",
      },
    ],

    quickTools: [
      {
        icon: "Gauge",
        title: "Sub-Second Calculations",
        description:
          "Calculates full planetary positions and Ashtakoota metrics in milliseconds using cached ephemeris tables.",
        
      },
      {
        icon: "ShieldCheck",
        title: "Zero Data Retention",
        description:
          "Complete on-device focus: we do not store birth charts, queries, or chat history in backend databases.",
      },
      {
        icon: "BrainCircuit",
        title: "Hybrid Intelligence",
        description:
          "Merges the mathematical precision of astronomical coordinate models with neural language reasoning.",
         
      },
      {
        icon: "Blocks",
        title: " Modular Jetpack Compose",
        description:
          "Android app utilizes clean architecture separates ui, data, and domain modules for rapid expansion.",
        
      },
    ],

    architecture: [
      "SQLCipher-backed local database on mobile and desktop clients",
      "Optional encrypted backup to user-chosen cloud storage",
      "No backend health-data server exists in the default deployment",
    ],

    security: [
      "Zero-knowledge design: RebelRoot cannot read stored entries",
      "Biometric lock on supported devices",
      "Independent cryptography review scheduled ahead of general availability",
    ],

    faq: [
      {
        id: "openved-availability",
        question: "What is Openved (VedAstra / Ved Astra) by RebelRoot?",
        answer:
          "Openved (also known as VedAstra, Ved Astra, or RebelRoot VedAstra) is a premium, privacy-first Vedic astrology platform developed by RebelRoot. It combines classical Kundli chart generation and Panchang calculation with Google Gemini AI reasoning for modern, intelligent Vedic guidance.",
      },
      {
        id: "openved-privacy",
        question: "What Vedic astrology features does Openved offer?",
        answer:
          "Openved supports full Kundli (birth chart) generation, Guna matchmaking, Panchang computation, Lal Kitab Rin analysis, Sade Sati transit tracking, Manglik Dosha evaluation, and AI-powered planetary remedies via Google Gemini.",
      },
      {
        id: "openved-export",
        question: "Is Openved free to use?",
        answer:
          "Yes, Openved is 100% free to use with zero advertisements. All astrological computations run on private servers — with zero cloud surveillance or data tracking.",
      },
    ],

    screenshots: [
      {
        label: "Home",
        image: "/openved/home.png",
        description:
          "Discover your cosmic blueprint with Vedic astrology, AI-powered insights, Kundli generation, compatibility analysis, and personalized guidance.",
      },
      {
        label: "My Kundli",
        image: "/openved/kundli.png",
        description:
          "Create your Janam Kundli using your birth details and explore planetary positions, Dashas, Yogas, Doshas, and personalized Vedic insights.",
      },
      {
        label: "Partner Milant",
        image: "/openved/partner.png",
        description:
          "Compare two birth charts to understand relationship compatibility through traditional Ashtakoot Milan and Vedic matchmaking principles.",
      },
      {
        label: "AI Sanctuary",
        image: "/openved/ai.png",
        description:
          "Consult specialized AI astrologers for career, romance, relationships, timing, and other cosmic questions based on Vedic astrology.",
      },
    ],
  },

  {
    slug: "moc-office",
    name: "MOC Office",
    info: "Your Documents. Your Device. Your Rules.",
    description:
      "MOC Office is a feature-rich, completely offline PDF reader and editing suite built for Android. Powered by Mozilla's PDF.js and iText Core, it delivers 12 professional-grade document tools with zero ads, zero tracking, and zero cloud dependency — all processed entirely on your device.",
    status: "Beta",
    platforms: ["Desktop", "Web"],
    accent: "electric",
    icon: "FileText",
    category: ["Web"],
    build:"Why MOC Office",
    links:{
      downloadUrl:"https://github.com/rebelroot/MocOffice/releases",
      sourceUrl:"https://github.com/rebelroot/MocOffice"

    },
    stepsTitle:"How MOC Office Works",
     steps: [
  {
    number: "01",
    title: "Open",
    description: (
      <>
        Browse local
        <br />
        storage or recents
      </>
    ),
  },
  {
    number: "02",
    title: "Read",
    description: (
      <>
        Scroll, zoom,
        <br />
        search & bookmark
      </>
    ),
  },
  {
    number: "03",
    title: "Select Tool",
    description: (
      <>
        Pick from 12 built-in
        <br />
        PDF tools
      </>
    ),
  },
  {
    number: "04",
    title: "Process",
    description: (
      <>
        100% on-device,
        <br />
        no upload
      </>
    ),
  },
  {
    number: "05",
    title: "Export",
    description: (
      <>
        Save or share
        <br />
        instantly
      </>
    ),
  },
],
    heroCopy:
      "MOC Office renders and saves documents locally by default. Collaboration is opt-in, peer-to-peer, and end-to-end encrypted.",

    features: [
      {
        icon: "BookOpen",
        title: "Advanced PDF Viewer",
        description:
          "Scroll Modes: Vertical continuous scroll and horizontal page-flip modes with snap-to-pages. Auto-Scroll: Hands-free reading with adjustable speed control. Full-Text Search: Instantly find phrases or keywords with highlighted results. Table of Contents: Navigate documents using outlines and bookmarks.",
      },
      {
        icon: "Wrench",
        title: "12 Built-in PDF Tools",
        description:
          "Merge & Split: Combine multiple PDFs or split pages individually. Compress: Optimize file size with quality presets. Rotate & Reorder: Rotate and drag-and-drop pages into order. Watermark & Page Numbers: Add customizable text/image watermarks and page numbering.",
      },
      {
        icon: "ShieldCheck",
        title: "Security & Privacy",
        description:
          "Lock / Unlock PDFs: Encrypt documents with password protection using iText and Bouncy Castle. Remember Passwords: Securely store passwords and auto-fill them when reopened. 100% Offline: Run all tools entirely on-device with no cloud uploads. No Telemetry: Zero trackers, analytics, and ads for a fully auditable experience.",
      },
      {
        icon: "Palette",
        title: "Modern Android UX",
        description:
          "Material You: Dynamic colors adapt to your Android 12+ wallpaper. AMOLED Black Theme: True-black mode optimized for OLED battery savings. Responsive Layouts: Optimized for phones, tablets, portrait, and landscape. Focal-Point Zoom: Double-tap to zoom at the tapped location with 1.1×–5× levels.",
      },
      {
        icon: "RefreshCw",
        title: "Image Conversion",
        description:
          "Document Tools: Convert one or multiple JPG/PNG images into clean, shareable PDF documents, export individual PDF pages as high-quality JPG or PNG images, easily remove or reorder pages without affecting the rest of the document, and view or download files embedded within PDF attachments.",
      },
      {
        icon: "Zap",
        title: "Architecture & Performance",
        description:
          "Architecture & Performance: Built with Clean MVVM architecture using Koin for dependency injection and lazy singleton scoping, Room for fast metadata queries, DataStore for secure encrypted preferences, Coil for memory-efficient thumbnail loading, and ProGuard/R8 for code shrinking and obfuscation to reduce release APK size.",
      },
    ],

    quickTools: [
      {
        icon: "Wrench",
        title: " 12 PDF Tools",
        description:
          "Merge, split, compress, rotate, reorder, watermark, lock, unlock, convert — all in one app, no internet required.",
         
      },
      {
        icon: "ShieldOff",
        title: " Zero Tracking",
        description:
          "No analytics, no crash reporters, no ads. GPL-3.0 open-source so every line is auditable by anyone.",
       
      },
      {
        icon: "Smartphone",
        title: "Android 7+ Support",
        description:
          "Targets Android API 24 through 36. Runs on phones and tablets, portrait and landscape, with fully responsive layouts.",
        
      },
      {
        icon: "Moon",
        title: "AMOLED Ready",
        description:
          "True-black AMOLED theme, Material You dynamic colors, and night/sepia reader modes for comfortable reading in any environment.",
      },
        
    ],

    architecture: [
      "CRDT-based document core shared across writer, sheet, and slide modules",
      "Local-first storage with optional encrypted peer sync over WebRTC",
      "Static, installable web app with a native desktop wrapper",
    ],

    security: [
      "No document content ever transits a RebelRoot server",
      "Peer sync sessions use ephemeral, forward-secret encryption keys",
      "Open format specification reviewed by outside contributors",
    ],

    faq: [
      {
        id: "moc-office-offline",
        question: "What is MOC Office (MOCOffice) by RebelRoot?",
        answer:
          "MOC Office (also known as MOCOffice or Rebel Root MOC Office) is a modern, privacy-first offline PDF reader and editor for Android developed by RebelRoot. It provides 12 built-in PDF tools — including merge, split, compress, watermark, and OCR — all processing 100% locally on your device without any trackers.",
      },
      {
        id: "moc-office-formats",
        question: "Does MOC Office require internet to process PDF files?",
        answer:
          "No. MOC Office is 100% offline. All PDF operations including merge, split, compress, and OCR run entirely on your Android device without any internet connection or cloud processing.",
      },
      {
        id: "moc-office-collaboration",
        question: "Is MOC Office free and open source?",
        answer:
          "Yes, MOC Office is completely free, ad-free, and open source. It uses PDF.js and Jetpack Compose built to Material Design 3 standards — without any third-party trackers or analytics.",
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
    info: "Hardware-Hardened App Lock Engine",
    description:
      "RootLock protects your sensitive banking, message, and authentication applications with isolated credentials. Powered by an offline native C++ PBKDF2 cryptography engine, it verifies access credentials locally, keeping your master pins safely zeroed out of system memory.",
    status: "Live",
    platforms: ["Desktop", "Mobile", "CLI"],
    accent: "mixed",
    icon: "Lock",
    category: ["Live"],
    links:{
        downloadUrl:"https://github.com/rebelroot"
    },
    stepsTitle:"The Security Verification Cycle",
    steps: [
  {
    number: "01",
    title: "App Launch",
    description: (
      <>
       Foreground service intercepts
        
       launch context
         
      </>
    ),
  },
  {
    number: "02",
    title: "Prompt Overlay",
    description: (
      <>
        Displays glassmorphic
        <br />
        credentials pad
      </>
    ),
  },
  {
    number: "03",
    title: "JNI Bridge",
    description: (
      <>
     Kotlin transfers candidate keys
        <br />
       to C++ heap
      </>
    ),
  },
  {
    number: "04",
    title: "PBKDF2 Compute",
    description: (
      <>
        Hardened cryptography verify
       checks hash
      </>
    ),
  },
  {
    number: "05",
    title: "Memory Purge",
    description: (
      <>
        Sensitive buffers are instantly
        
        zeroed and freed
      </>
    ),
  },
],

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
        question: "Can RebelRoot see my passwords?",
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

     
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const statusFilters = ["All", "Live", "Beta", "In Development"] as const;

export const platformFilters = ["Mobile", "Web"] as const;
