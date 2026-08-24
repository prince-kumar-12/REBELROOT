import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Developer
export const developerPages: DocPage[] = [
  {
    path: "developer/architecture",
    section: "Developer",
    title: "Architecture",
    description: "The architecture of Omni Browser: MVVM, unidirectional data flow, the layer map, and how Compose, the ViewModel and GeckoView fit together.",
    updated: "Jul 2026",
    contentHtml: `<h1>Architecture</h1>
<p class="lead">Omni is a single-module Android app built on <strong>MVVM with unidirectional data flow</strong>: Compose renders state, the <code>BrowserViewModel</code> owns and orchestrates it, and GeckoView does the actual browsing.</p>
<h2>The layer map</h2>
<div class="table-wrap">
<table>
<thead>
<tr><th>Layer</th><th>Component</th><th>Role</th></tr>
</thead>
<tbody>
<tr><td>UI Layer</td><td>Compose UI</td><td>Stateless screen rendering &amp; event dispatching</td></tr>
<tr><td>ViewModel Layer</td><td>BrowserViewModel</td><td>State orchestration &amp; business logic</td></tr>
<tr><td>Engine Layer</td><td>GeckoSession</td><td>Mozilla GeckoView web rendering engine</td></tr>
<tr><td>Network / Media Layer</td><td>MediaInterceptor</td><td>Stream sniffing &amp; network traffic inspection</td></tr>
</tbody>
</table>
</div>
<p>Data flows <strong>down</strong> as immutable state and <strong>up</strong> as events. Compose screens never mutate engine objects directly — they call intent methods on the ViewModel, which updates state, which recomposes the UI.</p>
<h2>The ViewModel as orchestrator</h2>
<p><code>browser/BrowserViewModel.kt</code> (~6,000 lines) is the central state holder. It owns:</p>
<ul>
<li><strong>Tabs</strong> — a <code>SnapshotStateList&lt;TabState&gt;</code> that Compose observes directly.</li>
<li><strong>The GeckoRuntime</strong> — a process-wide singleton created lazily via <code>getGeckoRuntime()</code>.</li>
<li><strong>Cross-cutting concerns</strong> — search engines, ad-block domain lists, the Discover news feed, permissions.</li>
</ul>
<p>Because a single file that large is hard to navigate, the ViewModel is split into <strong>Kotlin extension files</strong> by concern:</p>
<div class="table-wrap">
<table>
<thead><tr><th>File</th><th>Responsibility</th></tr></thead>
<tbody>
<tr><td><code>BrowserViewModel_Session.kt</code></td><td>Session save/restore, tab lifecycle</td></tr>
<tr><td><code>BrowserViewModel_Extensions.kt</code></td><td>WebExtension install/toggle/messaging</td></tr>
<tr><td><code>BrowserViewModel_Passwords.kt</code></td><td>Credential capture and autofill</td></tr>
<tr><td><code>BrowserViewModel_History.kt</code></td><td>History read/write/search</td></tr>
<tr><td><code>BrowserViewModel_Bookmarks.kt</code></td><td>Bookmark tree operations</td></tr>
<tr><td><code>BrowserViewModel_QrScanner.kt</code></td><td>QR decode orchestration</td></tr>
<tr><td><code>BrowserViewModel_FindInPage.kt</code></td><td>Find-in-page state</td></tr>
</tbody>
</table>
</div>
<h2>State management</h2>
<p>Omni leans on Compose’s snapshot system rather than a Redux-style store. Tab state is a value object:</p>
<pre><code class="language-kotlin" data-file="TabState.kt" data-highlight="5,6">data class TabState(
    val id: String,
    val url: String,
    val title: String,
    val isPrivate: Boolean,          // drives GeckoView private context
    val isDesktopMode: Boolean,
    val session: GeckoSession?,      // engine handle, not serialized
    val progress: Int
)</code></pre>
<p>Mutating a tab means replacing its <code>TabState</code> in the <code>SnapshotStateList</code>; Compose recomposes only the affected rows. The <code>GeckoSession</code> itself is a live engine handle and is never serialized.</p>
<h2>Navigation</h2>
<p>Screen-level navigation uses a Compose <code>NavHost</code> in <code>MainActivity</code> with named routes — <code>browser</code>, <code>settings</code>, <code>downloads</code>, <code>qr_tools</code>, <code>video_player/{filePath}</code>, <code>locker</code>, and so on. In-browser navigation (back/forward/history) is handled by the GeckoSession and mirrored into <code>TabState</code>.</p>
<h2>Media detection: dual path</h2>
<p>Stream detection runs on two cooperating paths (see <a href="/docs/media/overview">Media Hub</a>):</p>
<ul>
<li><strong>Extension path</strong> — the Media Grabber WebExtension reports candidates over native messaging.</li>
<li><strong>Native path</strong> — <code>MediaInterceptor</code> inspects engine-level traffic for HLS/DASH manifests.</li>
</ul>
<p>Both converge on the ViewModel, which surfaces a grabber affordance in the UI.</p>
<h2>Persistence</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Data</th><th>Store</th><th>Encryption</th></tr></thead>
<tbody>
<tr><td>Preferences / theme</td><td>DataStore</td><td>None (non-sensitive)</td></tr>
<tr><td>History, bookmarks</td><td>Room</td><td>None</td></tr>
<tr><td>Vault contents</td><td>Room + SQLCipher</td><td>AES-256</td></tr>
<tr><td>Vault files</td><td>EncryptedFile</td><td>AES-256-GCM (Keystore)</td></tr>
<tr><td>Passwords</td><td>Encrypted prefs</td><td>Keystore-backed</td></tr>
</tbody>
</table>
</div>
<h2>Threading notes</h2>
<ul>
<li>GeckoView callbacks arrive on the <strong>main thread</strong>; long work is dispatched to <code>viewModelScope</code> or IO dispatchers.</li>
<li>The GeckoRuntime is created once and shared — creating multiple runtimes is expensive and unsupported.</li>
<li>Downloads and FFmpeg extraction run on foreground services to survive process death.</li>
</ul>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Read the source doc</span>
<p>The repository ships <code>docs/ARCHITECTURE.md</code> with the authoritative, versioned diagram. This page summarizes it for the web.</p>
</div>
</div>
<h2>Go deeper</h2>
<div class="card-grid">
<a class="card" href="/docs/developer/code-structure"><span class="card__icon">️</span><span class="card__title">Code structure <span class="arrow">→</span></span><span class="card__desc">A tour of the package tree.</span></a>
<a class="card" href="/docs/developer/geckoview"><span class="card__title">GeckoView engine <span class="arrow">→</span></span><span class="card__desc">Runtime, sessions and interop.</span></a>
</div>`,
  },
  {
    path: "developer/code-structure",
    section: "Developer",
    title: "Code Structure",
    description: "A tour of the Omni Browser source tree: the com.rebelroot.omni package layout, key files and where things live.",
    updated: "Jul 2026",
    contentHtml: `<h1>Code Structure</h1>
<p class="lead">Omni is a single Gradle module (<code>:app</code>) with one package root, <code>com.rebelroot.omni</code>, organized into feature sub-packages. Here’s the map.</p>
<h2>Repository layout</h2>
<pre><code class="language-bash" data-file="repository">omni-browser/
├── app/                        # the single Android module
│   ├── build.gradle.kts        # flavors, deps, signing
│   └── src/main/
│       ├── AndroidManifest.xml
│       ├── assets/web_extensions/   # 3 bundled .xpi sources
│       ├── java/com/rebelroot/omni/ # ~75 Kotlin files
│       └── res/                     # values + 9 locales
├── docs/                       # ARCHITECTURE.md, SECURITY.md
├── worker/                     # Cloudflare Workers backend
├── fastlane/                   # store metadata
└── .github/workflows/          # release + PR CI</code></pre>
<h2>Package map</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Package</th><th>Contents</th></tr></thead>
<tbody>
<tr><td><code>(root)</code></td><td><code>MainActivity</code> (single activity + NavHost), <code>OmniApplication</code> (theme bootstrap)</td></tr>
<tr><td><code>browser/</code></td><td><code>BrowserScreen</code> (7.3k lines), <code>BrowserViewModel</code> + 8 split files, sheets, dialogs, address bar, home content, models</td></tr>
<tr><td><code>browser/adblock/</code></td><td><code>AdBlockManager</code> — filter engine + providers</td></tr>
<tr><td><code>browser/extensions/</code></td><td><code>BuiltInExtensionManager</code>, <code>AiBlockerManager</code>, <code>UniversalCopyManager</code></td></tr>
<tr><td><code>browser/tabs/</code></td><td><code>SmartTabManager</code> — domain-based auto-grouping</td></tr>
<tr><td><code>media/</code></td><td><code>MediaInterceptor</code>, <code>StreamDownloadEngine</code>, <code>FFmpegBridge</code>, <code>FFmpegLoader</code></td></tr>
<tr><td><code>media/player/</code></td><td><code>VideoPlayerScreen</code> (ExoPlayer), <code>OmniMediaService</code></td></tr>
<tr><td><code>privacy/</code></td><td><code>FireButton</code>, <code>TorManager</code>, <code>VpnManager</code></td></tr>
<tr><td><code>tools/</code></td><td><code>TranslationManager</code>; <code>tools/locker/</code> (vault), <code>tools/qrcode/</code> (ZXing)</td></tr>
<tr><td><code>settings/</code></td><td>8 settings screens (appearance, privacy, adblock, tabs, a11y, site, wallpapers)</td></tr>
<tr><td><code>onboarding/</code></td><td>Language selection + onboarding slides</td></tr>
<tr><td><code>bookmarks/</code>, <code>history/</code>, <code>news/ui/</code></td><td>Standalone screens</td></tr>
<tr><td><code>ui/theme/</code></td><td><code>OmniColors</code>, <code>OmniShapes</code>, <code>OmniTheme</code>, <code>OmniTypography</code>, <code>UiScale</code></td></tr>
</tbody>
</table>
</div>
<h2>Entry points</h2>
<h3>OmniApplication</h3>
<p>Loads the persisted theme (dark/AMOLED/accent/dynamic color) from DataStore into <code>ThemeStateHolder</code> before any UI is drawn, so the first frame is already themed.</p>
<h3>MainActivity</h3>
<p>A single <code>FragmentActivity</code> (Fragment is needed for the biometric prompt). It handles:</p>
<ul>
<li>Per-locale context wrapping in <code>attachBaseContext</code></li>
<li>A crash-loop-protected uncaught-exception handler</li>
<li>Edge-to-edge insets and PiP support</li>
<li>The Compose <code>NavHost</code> with all screen routes</li>
<li><code>http</code>/<code>https</code>/<code>WEB_SEARCH</code> intents (default-browser capable) and direct video intents</li>
</ul>
<h2>The big files</h2>
<p>Three files carry most of the product surface. If you’re contributing, start here:</p>
<div class="table-wrap">
<table>
<thead><tr><th>File</th><th>Lines</th><th>Role</th></tr></thead>
<tbody>
<tr><td><code>browser/BrowserScreen.kt</code></td><td>~7,300</td><td>Main UI: address bar, tab strip, menus, bottom sheets, Quick Tools</td></tr>
<tr><td><code>browser/BrowserViewModel.kt</code></td><td>~6,000</td><td>Central state holder and orchestrator</td></tr>
<tr><td><code>browser/BrowserSheets.kt</code></td><td>~3,750</td><td>Bottom sheets incl. DevTools inspector and download dialogs</td></tr>
</tbody>
</table>
</div>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Prefer the split files</span>
<p>New ViewModel logic should go into a <code>BrowserViewModel_*.kt</code> extension file by concern, not the main file.</p>
</div>
</div>
<h2>Resources &amp; localization</h2>
<p>Strings live in <code>res/values/strings.xml</code> (~204 entries) with translations in nine <code>values-*</code> directories: Hindi, Spanish, French, German, Portuguese, Russian, Japanese, Chinese and Arabic. The manifest declares four launcher activity-aliases for alternate app icons (Default, Dark, AuraDark, AuraLight).</p>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/developer/architecture"><span class="card__icon">️</span><span class="card__title">Architecture <span class="arrow">→</span></span><span class="card__desc">How the pieces interact.</span></a>
<a class="card" href="/docs/developer/modules"><span class="card__title">Modules <span class="arrow">→</span></span><span class="card__desc">Feature-module deep dives.</span></a>
</div>`,
  },
  {
    path: "developer/geckoview",
    section: "Developer",
    title: "GeckoView Engine",
    description: "How Omni Browser uses Mozilla GeckoView: the GeckoRuntime singleton, GeckoSession lifecycle, private browsing and WebExtension interop.",
    updated: "Jul 2026",
    contentHtml: `<h1>GeckoView Engine</h1>
<p class="lead">Omni renders the web with <strong>Mozilla GeckoView v145</strong> — the same engine that powers Firefox. This page covers how the runtime is managed and how the app talks to it.</p>
<h2>Why GeckoView, not WebView</h2>
<div class="table-wrap">
<table>
<thead><tr><th></th><th>GeckoView</th><th>Android WebView</th></tr></thead>
<tbody>
<tr><td><strong>Engine version</strong></td><td>Bundled &amp; pinned (v145)</td><td>Whatever the OS ships</td></tr>
<tr><td><strong>WebExtensions</strong></td><td><span class="yes"> Full</span></td><td><span class="no"></span></td></tr>
<tr><td><strong>Private context</strong></td><td><span class="yes"> Real isolation</span></td><td><span class="partial">Limited</span></td></tr>
<tr><td><strong>Modern web platform</strong></td><td><span class="yes"></span></td><td><span class="partial">Varies by OEM</span></td></tr>
<tr><td><strong>APK cost</strong></td><td>Larger (~tens of MB)</td><td>~0 (system)</td></tr>
</tbody>
</table>
</div>
<p>The trade-off is APK size, which Omni manages with per-ABI splits (see <a href="/docs/developer/build-system">Build System</a>).</p>
<h2>The runtime singleton</h2>
<p>A <code>GeckoRuntime</code> is expensive — it boots the whole engine. Omni creates exactly one, lazily, and shares it across every tab:</p>
<pre><code class="language-kotlin" data-file="BrowserViewModel.kt" data-highlight="6-9">private var geckoRuntime: GeckoRuntime? = null

fun getGeckoRuntime(context: Context): GeckoRuntime {
    return geckoRuntime ?: run {
        val settings = GeckoRuntimeSettings.Builder()
            .consoleOutput(true)          // feed the dev console
            .extensionsProcess(true)      // isolate extension code
            .build()
        GeckoRuntime.getDefault(context, settings).also {
            geckoRuntime = it
            installBuiltInExtensions(it)  // register bundled .xpi
        }
    }
}</code></pre>
<h2>Sessions and tabs</h2>
<p>Each tab owns a <code>GeckoSession</code>. Sessions are configured per tab — most importantly the <strong>private-browsing context</strong>:</p>
<pre><code class="language-kotlin" data-file="TabFactory.kt">fun createSession(isPrivate: Boolean): GeckoSession {
    val settings = GeckoSessionSettings.Builder()
        .usePrivateMode(isPrivate)        // isolated cookie jar + no disk cache
        .useTrackingProtection(
            if (isPrivate) GeckoSessionSettings.TRACKING_PROTECTION_DEFAULT
            else GeckoSessionSettings.TRACKING_PROTECTION_NONE
        )
        .build()
    return GeckoSession(settings)
}</code></pre>
<p>Private sessions get a fully isolated context: cookies, cache and storage are in-memory only and vanish when the session closes.</p>
<h2>Delegates</h2>
<p>GeckoView communicates through <em>delegates</em> — interfaces the app implements and attaches to a session. Omni wires up (among others):</p>
<ul>
<li><code>NavigationDelegate</code> — URL loads, redirects, and <code>onNewSession</code> for popup blocking.</li>
<li><code>ContentDelegate</code> — title, meta, fullscreen requests.</li>
<li><code>ProgressDelegate</code> — page load progress for the toolbar.</li>
<li><code>PermissionDelegate</code> — camera/mic/location prompts.</li>
<li><code>SessionFinder</code> — find-in-page.</li>
</ul>
<h2>Popup blocking at the engine</h2>
<p>Rather than closing popups after they appear, Omni rejects them at creation. <code>NavigationDelegate.onNewSession</code> inspects the opener and returns <code>null</code> for unwanted popups, so the window never renders.</p>
<h2>WebExtension interop</h2>
<p>Extensions register on the shared runtime via <code>webExtensionController</code>. Bundled extensions use <strong>native messaging</strong> (<code>omniApp</code>) to push data to Kotlin — this is how the Media Grabber reports stream URLs to <code>MediaInterceptor</code>.</p>
<pre><code class="language-kotlin" data-file="NativeMessaging.kt">// Receive a message from an extension's content script
runtime.webExtensionController.setNativeMessagingDelegate(
    "omniApp",
    object : WebExtension.MessageDelegate {
        override fun onMessage(msg: Any, sender: WebExtension.MessageSender): GeckoResult&lt;Any&gt; {
            handleStreamCandidate(msg as Map&lt;*, *&gt;)
            return GeckoResult.fromValue(null)
        }
    }
)</code></pre>
<h2>Error handling</h2>
<p>When a page fails to load, Omni shows a native <code>GeckoErrorScreen</code> (defined in <code>MainActivity</code>) with retry and offline-cache options instead of the engine’s default error page.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body">
<span class="callout__title">Version pinning</span>
<p>GeckoView is pinned to <code>145.0.20251124145406</code> from Mozilla’s content-filtered Maven repo. Engine upgrades are a deliberate, tested step — never a floating dependency.</p>
</div>
</div>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/developer/architecture"><span class="card__icon">️</span><span class="card__title">Architecture <span class="arrow">→</span></span><span class="card__desc">Where the engine sits in the app.</span></a>
<a class="card" href="/docs/api/browser-engine"><span class="card__title">Browser Engine API <span class="arrow">→</span></span><span class="card__desc">Runtime and session reference.</span></a>
</div>`,
  },
  {
    path: "developer/build-system",
    section: "Developer",
    title: "Build System",
    description: "Building Omni Browser from source: Gradle Kotlin DSL, ABI product flavors, R8, signing, and the CI release pipeline.",
    updated: "Jul 2026",
    contentHtml: `<h1>Build System</h1>
<p class="lead">Omni builds with the <strong>Gradle Kotlin DSL</strong>, Android Gradle Plugin 9.1 and Kotlin 2.2. This page takes you from a fresh clone to a signed APK.</p>
<h2>Prerequisites</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Tool</th><th>Version</th></tr></thead>
<tbody>
<tr><td><strong>Android Studio</strong></td><td>Ladybug or newer</td></tr>
<tr><td><strong>JDK</strong></td><td>17</td></tr>
<tr><td><strong>Android SDK</strong></td><td>compileSdk 36, minSdk 26</td></tr>
<tr><td><strong>Device / emulator</strong></td><td>Android 8.0+ (API 26)</td></tr>
</tbody>
</table>
</div>
<h2>Build and run</h2>
<pre><code class="language-bash" data-file="terminal"># Clone
git clone https://github.com/REBEL-ROOT/omni-browser.git
cd omni-browser

# Debug build (runs on connected device / emulator)
./gradlew :app:installUniversalDebug

# Release APKs for all ABIs
./gradlew :app:assembleRelease</code></pre>
<h2>ABI product flavors</h2>
<p>GeckoView ships per-ABI native libraries, so Omni defines three flavors in a single <code>abi</code> dimension. Each gets a <code>versionCode</code> offset so the Play Store can serve the right one:</p>
<div class="table-wrap">
<table>
<thead><tr><th>Flavor</th><th>ABI</th><th>versionCode offset</th></tr></thead>
<tbody>
<tr><td><code>universal</code></td><td>all</td><td>+1,000,000</td></tr>
<tr><td><code>arm</code></td><td>armeabi-v7a</td><td>+2,000,000</td></tr>
<tr><td><code>aarch64</code></td><td>arm64-v8a</td><td>+3,000,000</td></tr>
</tbody>
</table>
</div>
<p>With a base <code>versionCode</code> of <code>2030</code>, the aarch64 release of v1.2.6.4 is <code>3002030</code>.</p>
<h2>Release configuration</h2>
<pre><code class="language-groovy" data-file="app/build.gradle.kts" data-highlight="4-7">buildTypes {
    release {
        isMinifyEnabled = true
        isShrinkResources = true          // R8 full mode
        proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"))
        signingConfig = signingConfigs.getByName("release")
        // Native debug symbols for Play Console
        ndk { debugSymbolLevel = "SYMBOL_TABLE" }
    }
}</code></pre>
<ul>
<li><strong>R8 full mode</strong> + resource shrinking keep the executable lean.</li>
<li><strong>Native debug symbols</strong> are exported for crash symbolication without shipping them in the APK.</li>
<li>Signing uses <code>release-new.keystore</code>; credentials come from <code>local.properties</code> or environment variables (CI uses GitHub Secrets — the keystore was purged from history).</li>
</ul>
<h2>The GeckoView dependency</h2>
<p>GeckoView comes from Mozilla’s content-filtered Maven repository, pinned per ABI:</p>
<pre><code class="language-groovy" data-file="repositories">maven {
    url = uri("https://maven.mozilla.org/maven2")
    content { includeGroupByRegex("org\\\\.mozilla\\\\.geckoview.*") }
}

// per-ABI artifacts + a universal artifact
implementation("org.mozilla.geckoview:geckoview-omni:145.0.20251124145406")</code></pre>
<p>The build also explicitly <strong>excludes <code>io.opencensus</code></strong> to avoid pulling in a telemetry-flagged dependency (relevant for F-Droid).</p>
<h2>Continuous integration</h2>
<p>Two GitHub Actions workflows drive quality and releases:</p>
<ul>
<li><strong><code>pr_check.yml</code></strong> — builds and lints every pull request.</li>
<li><strong><code>release.yml</code></strong> — triggered by a <code>v*</code> tag. It verifies <code>versionCode</code> monotonicity, builds and signs all three APKs, and uploads them to a draft GitHub Release.</li>
</ul>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body">
<span class="callout__title">16 KB page alignment</span>
<p>Native libraries must be built with 16 KB memory-page alignment (an NDK requirement for newer devices). See <code>CONTRIBUTING.md</code> for the exact flags.</p>
</div>
</div>
<h2>F-Droid</h2>
<p><code>com.rebelroot.omni.yml</code> at the repo root is the F-Droid build metadata, using <code>AutoUpdateMode</code> by tag. F-Droid builds are reproducible and signed with the F-Droid key.</p>
<h2>Related</h2>
<div class="card-grid">
<a class="card" href="/docs/resources/contributing"><span class="card__title">Contributing <span class="arrow">→</span></span><span class="card__desc">Dev setup, code style and PR process.</span></a>
<a class="card" href="/docs/getting-started/installation"><span class="card__title">Installation <span class="arrow">→</span></span><span class="card__desc">Install prebuilt APKs instead.</span></a>
</div>`,
  },
  {
    path: "developer/modules",
    section: "Developer",
    title: "Modules & Packages",
    description: "A guided tour of Omni Browser\u2019s feature packages: adblock, extensions, media, privacy, tools and the encrypted locker.",
    updated: "Jul 2026",
    contentHtml: `<h1>Modules &amp; Packages</h1>
<p class="lead">Omni is a single Gradle module, but its code is organised into cohesive feature packages. Here’s what lives where.</p>
<h2>Feature packages</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Package</th><th>Key classes</th><th>Responsibility</th></tr></thead>
<tbody>
<tr><td><code>browser/adblock/</code></td><td><code>AdBlockManager</code></td><td>Filter engine, providers, block counter</td></tr>
<tr><td><code>browser/extensions/</code></td><td><code>BuiltInExtensionManager</code>, <code>AiBlockerManager</code>, <code>UniversalCopyManager</code></td><td>WebExtension install/toggle/messaging</td></tr>
<tr><td><code>browser/tabs/</code></td><td><code>SmartTabManager</code></td><td>Domain-based tab auto-grouping</td></tr>
<tr><td><code>media/</code></td><td><code>MediaInterceptor</code>, <code>StreamDownloadEngine</code>, <code>FFmpegBridge</code></td><td>Stream detection, download, audio extraction</td></tr>
<tr><td><code>media/player/</code></td><td><code>VideoPlayerScreen</code>, <code>OmniMediaService</code></td><td>ExoPlayer UI + background audio</td></tr>
<tr><td><code>privacy/</code></td><td><code>FireButton</code>, <code>TorManager</code>, <code>VpnManager</code></td><td>Session burn, Tor, WireGuard</td></tr>
<tr><td><code>tools/locker/</code></td><td><code>LockerDatabase</code>, <code>LockerAuthManager</code></td><td>Encrypted vault (SQLCipher + biometric)</td></tr>
<tr><td><code>tools/qrcode/</code></td><td><code>BarcodeGenerator</code>, <code>QrCodeDecoder</code></td><td>ZXing QR scan/generate</td></tr>
<tr><td><code>ui/theme/</code></td><td><code>OmniTheme</code>, <code>OmniColors</code>, <code>UiScale</code></td><td>Material 3 theming</td></tr>
</tbody>
</table>
</div>
<h2>How they connect</h2>
<p>All feature packages hang off the central <code>BrowserViewModel</code> (see <a href="/docs/developer/architecture">Architecture</a>). Each package exposes a focused API that the ViewModel orchestrates — so UI, logic and engine stay cleanly separated.</p>
<h2>Adding a feature</h2>
<ol>
<li>Create (or reuse) a feature package under <code>com.rebelroot.omni</code>.</li>
<li>Keep engine/state logic out of composables — expose it through the ViewModel.</li>
<li>Add any user-facing strings to <code>strings.xml</code>.</li>
<li>Wire the entry point into <code>BrowserScreen</code> or Quick Tools.</li>
</ol>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Single module, many packages</span><p>Omni deliberately stays one Gradle module — the package structure provides the modularity, without multi-module build overhead.</p></div>
</div>`,
  },
];
