import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Media
export const mediaPages: DocPage[] = [
  {
    path: "media/overview",
    section: "Media",
    title: "Media Hub",
    description: "The Omni Browser media stack: stream sniffing, a native player, downloads and audio extraction \u2014 an overview.",
    updated: "Jul 2026",
    contentHtml: `<h1>Media Hub</h1>
<p class="lead">Omni treats video as a first-class citizen. It finds streams the page tries to hide, plays them in a real native player, and lets you keep a copy.</p>
<h2>The pipeline</h2>
<p>Media flows through four stages, each with its own page:</p>
<ol>
<li><strong><a href="/docs/media/stream-sniffer">Stream Sniffer</a></strong> — detects HLS/DASH/MSE streams at the network level.</li>
<li><strong><a href="/docs/media/video-player">Video Player</a></strong> — plays them natively with PiP, gestures and background audio.</li>
<li><strong><a href="/docs/media/downloads">Downloads</a></strong> — saves streams and files with pause/resume.</li>
<li><strong><a href="/docs/media/audio-extraction">Audio Extraction</a></strong> — pulls the soundtrack out with FFmpeg.</li>
</ol>
<h2>Why a native stack</h2>
<p>Most browsers only see what the page’s <code>&lt;video&gt;</code> tag exposes, and play everything in a web player. Omni goes deeper: it intercepts the actual stream, then hands it to <strong>AndroidX Media3 (ExoPlayer)</strong> — the same playback engine behind the best Android video apps.</p>
<h2>At a glance</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Capability</th><th>Details</th></tr></thead>
<tbody>
<tr><td><strong>Detection</strong></td><td>HLS (.m3u8), DASH (.mpd), direct MP4/WebM, MSE/blob</td></tr>
<tr><td><strong>Playback</strong></td><td>ExoPlayer — PiP, 0.25–3× speed, gestures, background audio</td></tr>
<tr><td><strong>Download</strong></td><td>Segment-by-segment with pause/resume</td></tr>
<tr><td><strong>Audio</strong></td><td>FFmpeg extraction (loaded on demand)</td></tr>
<tr><td><strong>Batch</strong></td><td>Multi-image and manga chapter grabs</td></tr>
</tbody>
</table>
</div>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Respect the law and creators</span><p>The media tools are for your own media, offline viewing of content you’re entitled to, and accessibility. Don’t use them to infringe copyright.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/media/stream-sniffer"><span class="card__title">Stream Sniffer <span class="arrow">→</span></span><span class="card__desc">How detection works.</span></a>
<a class="card" href="/docs/media/video-player"><span class="card__title">Video Player <span class="arrow">→</span></span><span class="card__desc">Playback, PiP and gestures.</span></a>
</div>`,
  },
  {
    path: "media/stream-sniffer",
    section: "Media",
    title: "Stream Sniffer",
    description: "How Omni Browser detects video and audio streams using a dual-path system: a WebExtension network sniffer and a native engine interceptor.",
    updated: "Jul 2026",
    contentHtml: `<h1>Stream Sniffer</h1>
<p class="lead">Sites increasingly hide their video behind blobs and encrypted players. Omni finds the real stream with a dual-path detection system.</p>
<h2>Two cooperating paths</h2>
<ul>
<li><strong>Extension path</strong> — the bundled <em>Omni Media Grabber</em> WebExtension watches network requests and hooks <code>MediaSource</code>/blob playback, then reports candidates to the app over native messaging.</li>
<li><strong>Native path</strong> — <code>media/MediaInterceptor.kt</code> inspects engine-level traffic for HLS (<code>.m3u8</code>) and DASH (<code>.mpd</code>) manifests.</li>
</ul>
<p>Both converge on the ViewModel, which surfaces a <strong>grabber chip</strong> when a stream is found.</p>
<h2>Using it</h2>
<ol class="steps">
<li><h3>Play the media</h3><p>Start the video or audio on the page.</p></li>
<li><h3>Watch for the chip</h3><p>When a stream is detected, a grabber affordance appears.</p></li>
<li><h3>Choose an action</h3><p>Tap it to play in the native player, download, or extract audio.</p></li>
</ol>
<h2>What it can’t grab</h2>
<div class="callout callout--warning">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">DRM is out of scope</span><p>Widevine/FairPlay-protected streams (most Netflix/Disney+/Prime video) are encrypted end-to-end. Omni will not and cannot strip DRM — and won’t try.</p></div>
</div>
<p>Some sites also use heavily obfuscated or proprietary transports that the sniffer doesn’t recognise yet. Detection coverage improves over releases.</p>
<h2>Under the hood</h2>
<pre><code class="language-kotlin" data-file="MediaInterceptor.kt" data-highlight="3,5">// Simplified: surface a candidate when a manifest is seen
fun onResponse(url: String, mime: String) {
    if (url.endsWith(".m3u8") || mime == "application/vnd.apple.mpegurl")
        emit(StreamCandidate(url, Kind.HLS))
    else if (url.endsWith(".mpd") || mime == "application/dash+xml")
        emit(StreamCandidate(url, Kind.DASH))
}</code></pre>
<div class="card-grid">
<a class="card" href="/docs/media/video-player"><span class="card__title">Video Player <span class="arrow">→</span></span><span class="card__desc">What happens after detection.</span></a>
<a class="card" href="/docs/media/overview"><span class="card__title">Media Capture guide <span class="arrow">→</span></span><span class="card__desc">End-to-end walkthrough.</span></a>
</div>`,
  },
  {
    path: "media/video-player",
    section: "Media",
    title: "Video Player",
    description: "The Omni Browser native video player: ExoPlayer-powered playback with PiP, gesture controls, playback speed and background audio.",
    updated: "Jul 2026",
    contentHtml: `<h1>Video Player</h1>
<p class="lead">Streams open in a full native player built on AndroidX Media3 — not a web player. It’s the difference between watching and buffering.</p>
<h2>Gesture controls</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Gesture</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Swipe left half ↑↓</td><td>Brightness</td></tr>
<tr><td>Swipe right half ↑↓</td><td>Volume</td></tr>
<tr><td>Double-tap left / right</td><td>Seek −10s / +10s</td></tr>
<tr><td>Pinch</td><td>Zoom (where supported)</td></tr>
</tbody>
</table>
</div>
<h2>Playback features</h2>
<ul>
<li><strong>Speed</strong> — 0.25× to 3×.</li>
<li><strong>Picture-in-picture</strong> — keep watching while you browse other tabs.</li>
<li><strong>Background audio</strong> — via <code>OmniMediaService</code>, audio keeps playing with the screen off.</li>
<li><strong>Fullscreen</strong> — immersive playback with system bars hidden.</li>
</ul>
<h2>Keyboard shortcuts</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Key</th><th>Action</th></tr></thead>
<tbody>
<tr><td><kbd>Space</kbd></td><td>Play / pause</td></tr>
<tr><td><kbd>←</kbd> / <kbd>→</kbd></td><td>Seek 10 seconds</td></tr>
<tr><td><kbd>F</kbd></td><td>Fullscreen</td></tr>
<tr><td><kbd>P</kbd></td><td>Picture-in-picture</td></tr>
<tr><td><kbd>S</kbd></td><td>Cycle speed</td></tr>
</tbody>
</table>
</div>
<h2>Under the hood</h2>
<p>The player is <code>media/player/VideoPlayerScreen.kt</code> on Media3 ExoPlayer, with HLS and DASH modules. Taking over from the web player is what the changelog calls the “premium player” takeover — it’s just branding for the native handoff.</p>
<div class="card-grid">
<a class="card" href="/docs/media/audio-extraction"><span class="card__title">Audio Extraction <span class="arrow">→</span></span><span class="card__desc">Keep just the soundtrack.</span></a>
</div>`,
  },
  {
    path: "media/audio-extraction",
    section: "Media",
    title: "Audio Extraction",
    description: "Extract the audio track from any downloaded video in Omni Browser using on-demand FFmpeg.",
    updated: "Jul 2026",
    contentHtml: `<h1>Audio Extraction</h1>
<p class="lead">Want just the soundtrack, a lecture’s audio, or a podcast from a video? Omni extracts audio with FFmpeg — loaded on demand to keep the APK small.</p>
<h2>How it works</h2>
<p>FFmpeg isn’t bundled — <code>FFmpegLoader.kt</code> downloads and extracts the native <code>libav*</code> libraries the first time you use extraction, then caches them. <code>FFmpegBridge.kt</code> does the actual demux/transcode.</p>
<ol class="steps">
<li><h3>Download the video</h3><p>Grab the stream first (see Stream Sniffer).</p></li>
<li><h3>Tap Extract audio</h3><p>On the completed download, choose <strong>Extract audio</strong>.</p></li>
<li><h3>Pick a format</h3><p>Choose MP3 or AAC. FFmpeg runs locally.</p></li>
<li><h3>Find it in Downloads</h3><p>The audio file lands in your library, ready to play.</p></li>
</ol>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">One-time download</span><p>FFmpeg is fetched once over the network and cached. After that, extraction works fully offline.</p></div>
</div>
<h2>Why on-demand</h2>
<p>FFmpeg’s native libraries are tens of megabytes per ABI. Loading them on demand keeps the base APK lean for the majority who never extract audio.</p>`,
  },
  {
    path: "media/downloads",
    section: "Media",
    title: "Downloads Manager",
    description: "The Omni Browser downloads manager: queue, pause and resume downloads, save to the vault, and manage your library.",
    updated: "Jul 2026",
    contentHtml: `<h1>Downloads Manager</h1>
<p class="lead">Omni ships a real download manager — not the bare system downloader. Queue, pause and resume anything, and route sensitive files to the vault.</p>
<h2>Open it</h2>
<p>Menu → Downloads, Quick Tools → Downloads, or <kbd>Ctrl</kbd> <kbd>J</kbd>.</p>
<h2>What it handles</h2>
<ul>
<li><strong>Standard files</strong> — anything served as a download (PDFs, APKs, archives, images).</li>
<li><strong>Streams</strong> — HLS/DASH video and audio from the sniffer.</li>
<li><strong>Images &amp; pages</strong> — long-press to save images; save pages as clean PDF.</li>
<li><strong>Batch media</strong> — multi-select images or manga chapters.</li>
</ul>
<h2>The library</h2>
<ul>
<li>Live per-file progress, speed and size.</li>
<li><strong>Pause / resume / cancel</strong> per item — resume survives app restarts.</li>
<li>Filter by type: video, audio, image, document, other.</li>
<li>Open-with and share once complete.</li>
</ul>
<h2>Two destinations</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Destination</th><th>Where</th><th>Protection</th></tr></thead>
<tbody>
<tr><td><strong>Downloads</strong></td><td>Public <code>Downloads/</code></td><td>None — visible to other apps</td></tr>
<tr><td><strong>Private Vault</strong></td><td>Encrypted app storage</td><td>AES-256-GCM + biometric</td></tr>
</tbody>
</table>
</div>
<p>Choose the vault for anything sensitive. See <a href="/docs/privacy/private-vault">Encrypted Vault</a>.</p>
<div class="callout callout--tip">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.4 1 2.3h6c0-.9.4-1.8 1-2.3A7 7 0 0 0 12 2Z"></path></svg></div>
<div class="callout__body"><span class="callout__title">Background-safe</span><p>Active downloads run on a foreground service, so you can switch apps or lock the screen without losing progress.</p></div>
</div>
<div class="card-grid">
<a class="card" href="/docs/media/batch-manga"><span class="card__title">Batch Media &amp; Manga <span class="arrow">→</span></span><span class="card__desc">Grab whole galleries and chapters.</span></a>
</div>`,
  },
  {
    path: "media/batch-manga",
    section: "Media",
    title: "Batch Media & Manga",
    description: "Batch-download images and manga chapters in Omni Browser with an interactive page selector and PDF export.",
    updated: "Jul 2026",
    contentHtml: `<h1>Batch Media &amp; Manga</h1>
<p class="lead">On gallery and manga sites, the grabber switches to batch mode: select many pages at once, then download them as files or a single PDF.</p>
<h2>Batch mode</h2>
<p>When Omni recognises a gallery or manga reader, the grabber offers a <strong>batch selector</strong> instead of a single download.</p>
<ol class="steps">
<li><h3>Open the grabber</h3><p>Long-press the page or use Quick Tools → Media Grabber.</p></li>
<li><h3>Select pages</h3><p>Tap to multi-select, or “Select chapter” to grab a whole range.</p></li>
<li><h3>Choose output</h3><p>Download as individual images, or export to a single PDF.</p></li>
</ol>
<h2>The manga reader</h2>
<p>Omni includes a fullscreen, distraction-free manga/webtoon reader. It tracks your page as you read and offers quick download &amp; PDF export without leaving the reader.</p>
<h2>Output options</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Option</th><th>Result</th></tr></thead>
<tbody>
<tr><td><strong>Individual images</strong></td><td>One file per page, in a folder</td></tr>
<tr><td><strong>Single PDF</strong></td><td>All pages bound into one document</td></tr>
<tr><td><strong>To vault</strong></td><td>Either of the above, encrypted</td></tr>
</tbody>
</table>
</div>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Support creators</span><p>Batch tools are great for offline reading of content you own or are licensed to keep. For ongoing series, prefer the official sources.</p></div>
</div>`,
  },
];
