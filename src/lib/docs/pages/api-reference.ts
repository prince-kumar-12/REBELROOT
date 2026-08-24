import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: API Reference
export const api_referencePages: DocPage[] = [
  {
    path: "api/browser-engine",
    section: "API Reference",
    title: "Browser Engine API",
    description: "Reference for Omni Browser\u2019s engine layer: the shared GeckoRuntime, GeckoSession creation, delegates and navigation.",
    updated: "Jul 2026",
    contentHtml: `<h1>Browser Engine API</h1>
<p class="lead">The Kotlin surface around GeckoView. Everything browser-engine related flows through these APIs.</p>
<h2>Obtaining the runtime</h2>
<p>There is exactly one <code>GeckoRuntime</code> per process. Always obtain it via the shared accessor — never construct one directly.</p>
<pre><code class="language-kotlin" data-file="BrowserViewModel.kt" data-highlight="3,7">fun getGeckoRuntime(context: Context): GeckoRuntime {
    return geckoRuntime ?: run {
        val settings = GeckoRuntimeSettings.Builder()
            .consoleOutput(true)
            .extensionsProcess(true)
            .build()
        GeckoRuntime.getDefault(context, settings)
            .also { geckoRuntime = it }
    }
}</code></pre>
<h2>Creating a session</h2>
<pre><code class="language-kotlin" data-file="TabFactory.kt">fun createSession(isPrivate: Boolean): GeckoSession {
    val settings = GeckoSessionSettings.Builder()
        .usePrivateMode(isPrivate)
        .build()
    return GeckoSession(settings)
}</code></pre>
<h2>Key delegates</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Delegate</th><th>Purpose</th></tr></thead>
<tbody>
<tr><td><code>NavigationDelegate</code></td><td>Loads, redirects, popup blocking via <code>onNewSession</code></td></tr>
<tr><td><code>ContentDelegate</code></td><td>Title, meta, fullscreen requests</td></tr>
<tr><td><code>ProgressDelegate</code></td><td>Page load progress</td></tr>
<tr><td><code>PermissionDelegate</code></td><td>Camera/mic/location prompts</td></tr>
</tbody>
</table>
</div>
<h2>Threading</h2>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Main-thread callbacks</span><p>GeckoView invokes delegates on the main thread. Hop to a coroutine dispatcher for any real work, and never block the delegate callback.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/developer/geckoview"><span class="card__title">GeckoView Engine <span class="arrow">→</span></span><span class="card__desc">Concepts behind these APIs.</span></a>
</div>`,
  },
  {
    path: "api/download-api",
    section: "API Reference",
    title: "Download API",
    description: "Reference for Omni Browser downloads: enqueuing, progress observation, and routing output to storage or the vault.",
    updated: "Jul 2026",
    contentHtml: `<h1>Download API</h1>
<p class="lead">Programmatic downloads in Omni — from a URL to a file, with progress and vault routing.</p>
<h2>Enqueue a download</h2>
<pre><code class="language-kotlin" data-file="Downloads.kt">suspend fun startDownload(url: String, toVault: Boolean) {
    val request = DownloadRequest(
        url = url,
        destination = if (toVault) Destination.VAULT else Destination.PUBLIC
    )
    downloadRepository.enqueue(request)
}</code></pre>
<h2>The request model</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Field</th><th>Type</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><code>url</code></td><td><code>String</code></td><td>Source URL (file or manifest)</td></tr>
<tr><td><code>destination</code></td><td><code>Destination</code></td><td><code>PUBLIC</code> or <code>VAULT</code></td></tr>
<tr><td><code>kind</code></td><td><code>Kind</code></td><td>file / hls / dash / image</td></tr>
</tbody>
</table>
</div>
<h2>Observing progress</h2>
<p>Downloads expose a Flow of progress events. The <code>DownloadManagerScreen</code> collects these to render live speed and percentage.</p>
<h2>Stream downloads</h2>
<p>For HLS/DASH, the <code>StreamDownloadEngine</code> resolves the manifest, fetches segments and stitches them. Pause/resume is checkpointed per segment.</p>
<div class="card-grid">
<a class="card" href="/docs/media/downloads"><span class="card__icon">⬇️</span><span class="card__title">Downloads Manager <span class="arrow">→</span></span><span class="card__desc">The user-facing side.</span></a>
</div>`,
  },
  {
    path: "api/media-api",
    section: "API Reference",
    title: "Media API",
    description: "Reference for Omni Browser\u2019s media pipeline: the interceptor, sniffer messaging contract, and the player service.",
    updated: "Jul 2026",
    contentHtml: `<h1>Media API</h1>
<p class="lead">How media flows from detection to playback, and the contracts between the pieces.</p>
<h2>The interceptor</h2>
<pre><code class="language-kotlin" data-file="MediaInterceptor.kt">fun onResponse(url: String, mime: String) {
    when {
        isHls(url, mime)  -&gt; emit(StreamCandidate(url, Kind.HLS))
        isDash(url, mime) -&gt; emit(StreamCandidate(url, Kind.DASH))
    }
}</code></pre>
<h2>Native messaging contract</h2>
<p>The Media Grabber extension reports candidates over the <code>omniApp</code> channel:</p>
<pre><code class="language-json" data-file="message schema">{
  "type": "stream",
  "url": "https://…/index.m3u8",
  "kind": "hls",
  "title": "Page title"
}</code></pre>
<h2>The player service</h2>
<p><code>OmniMediaService</code> is a Media3 <code>MediaSessionService</code>. It owns playback for background audio and exposes standard media-session controls (lock screen, Bluetooth).</p>
<div class="table-wrap">
<table>
<thead><tr><th>Component</th><th>Role</th></tr></thead>
<tbody>
<tr><td><code>MediaInterceptor</code></td><td>Native-path detection</td></tr>
<tr><td><code>Media Grabber</code> (ext)</td><td>Extension-path detection</td></tr>
<tr><td><code>VideoPlayerScreen</code></td><td>ExoPlayer UI</td></tr>
<tr><td><code>OmniMediaService</code></td><td>Background/session playback</td></tr>
</tbody>
</table>
</div>
<div class="card-grid">
<a class="card" href="/docs/media/overview"><span class="card__title">Media Hub <span class="arrow">→</span></span><span class="card__desc">Overview of the whole pipeline.</span></a>
</div>`,
  },
  {
    path: "api/ai-api",
    section: "API Reference",
    title: "AI API",
    description: "Reference for the Omni AI Blocker extension: manifest, targeted selectors, and the settings toggle wiring.",
    updated: "Jul 2026",
    contentHtml: `<h1>AI API</h1>
<p class="lead">The AI Blocker is a small WebExtension. Here’s its contract and how the app controls it.</p>
<h2>Manifest</h2>
<pre><code class="language-json" data-file="ai_blocker/manifest.json">{
  "manifest_version": 2,
  "name": "Omni AI Blocker",
  "version": "1.1.0",
  "content_scripts": [{
    "matches": ["*://*.google.com/*", "*://*.bing.com/*"],
    "css": ["override.css"],
    "js": ["background.js"],
    "run_at": "document_start"
  }]
}</code></pre>
<h2>How it hides blocks</h2>
<ul>
<li><code>override.css</code> hides known AI-overview selectors immediately.</li>
<li><code>background.js</code> watches for dynamically injected blocks (single-page search UIs) and removes them.</li>
</ul>
<h2>Toggle wiring</h2>
<p><code>AiBlockerManager</code> enables/disables the extension via the <code>webExtensionController</code> and persists the preference. Quick Tools and <kbd>Ctrl</kbd> <kbd>B</kbd> both route through it.</p>
<div class="card-grid">
<a class="card" href="/docs/ai/ai-blocker"><span class="card__title">AI Blocker <span class="arrow">→</span></span><span class="card__desc">The user-facing guide.</span></a>
</div>`,
  },
  {
    path: "api/settings-api",
    section: "API Reference",
    title: "Settings API",
    description: "Reference for Omni Browser preferences: DataStore keys, the ThemeStateHolder contract, and observing changes.",
    updated: "Jul 2026",
    contentHtml: `<h1>Settings API</h1>
<p class="lead">Omni’s preferences are DataStore-backed and observed reactively. Here’s the data model.</p>
<h2>Where settings live</h2>
<p>All preferences are stored in Jetpack DataStore. The theme is special-cased: it’s loaded at application start into <code>ThemeStateHolder</code> so the first frame is already themed.</p>
<h2>Key preference groups</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Group</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>Theme</strong></td><td>mode (light/dark/AMOLED), accent, dynamic color</td></tr>
<tr><td><strong>Layout</strong></td><td>address bar position, UI scale (80–130%)</td></tr>
<tr><td><strong>Privacy</strong></td><td>blocking lists, HTTPS-only, vault lock</td></tr>
<tr><td><strong>Search</strong></td><td>default engine, suggestions on/off</td></tr>
<tr><td><strong>Tabs</strong></td><td>smart grouping on/off</td></tr>
</tbody>
</table>
</div>
<h2>Reading a preference</h2>
<pre><code class="language-kotlin" data-file="Prefs.kt">val uiScale: Flow&amp;lt;Float&amp;gt; = dataStore.data
    .map { it[UI_SCALE_KEY] ?: 1.0f }</code></pre>
<h2>Observing changes</h2>
<p>Preferences are exposed as <code>Flow</code>s. Compose screens <code>collectAsState</code> them, so a change in Settings is reflected everywhere instantly.</p>
<div class="card-grid">
<a class="card" href="/docs/customization/themes"><span class="card__title">Themes &amp; Appearance <span class="arrow">→</span></span><span class="card__desc">The settings users see.</span></a>
</div>`,
  },
  {
    path: "api/extension-api",
    section: "API Reference",
    title: "Extension API",
    description: "Reference for the Omni Browser WebExtension lifecycle: installing, toggling, private-browsing access and native messaging.",
    updated: "Jul 2026",
    contentHtml: `<h1>Extension API</h1>
<p class="lead">Programmatic control of WebExtensions — from bundled installs to native messaging.</p>
<h2>Installing a bundled extension</h2>
<pre><code class="language-kotlin" data-file="BuiltInExtensionManager.kt">suspend fun installBuiltIns(runtime: GeckoRuntime) {
    listOf("media_grabber", "ai_blocker", "universal_copy").forEach { name -&gt;
        runtime.webExtensionController.ensureBuiltIn(
            "resource://android/assets/web_extensions/$name",
            id = idFor(name)
        )
    }
}</code></pre>
<h2>Toggling</h2>
<p>Enable/disable via <code>webExtensionController.enableExtension</code> / <code>disableExtension</code>. The managers (<code>AiBlockerManager</code>, <code>UniversalCopyManager</code>) wrap this and persist the choice.</p>
<h2>Private browsing access</h2>
<p>An extension’s private-browsing access is set with <code>setAllowedInPrivateBrowsing</code>. Bundled extensions default to allowed; third-party ones default to off.</p>
<h2>Native messaging</h2>
<pre><code class="language-kotlin" data-file="NativeMessaging.kt">runtime.webExtensionController.setNativeMessagingDelegate(
    "omniApp",
    object : WebExtension.MessageDelegate {
        override fun onMessage(msg: Any, sender: MessageSender): GeckoResult&amp;lt;Any&amp;gt; {
            handle(msg)
            return GeckoResult.fromValue(null)
        }
    }
)</code></pre>
<div class="card-grid">
<a class="card" href="/docs/extensions/overview"><span class="card__title">Extensions <span class="arrow">→</span></span><span class="card__desc">The user-facing guide.</span></a>
</div>`,
  },
];
