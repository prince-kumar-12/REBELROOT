import { DocPage } from "../types";

// Auto-generated from original Omni Docs HTML — section: Home & Search
export const home_searchPages: DocPage[] = [
  {
    path: "home/home-screen",
    section: "Home & Search",
    title: "Home Screen",
    description: "The Omni Browser home screen: search bar, quick-access shortcuts and the Discover news feed.",
    updated: "Jul 2026",
    contentHtml: `<h1>Home Screen</h1>
<p class="lead">Every new tab opens to a home screen designed to get you somewhere fast — search, shortcuts, and a glanceable news feed.</p>
<h2>The layout</h2>
<ul>
<li><strong>Search bar</strong> — with your default engine and live suggestions.</li>
<li><strong>Quick-access shortcuts</strong> — your most-visited sites as tiles.</li>
<li><strong>Discover feed</strong> — a news stream below the fold.</li>
</ul>
<h2>Shortcuts</h2>
<p>Shortcuts fill in from your most-visited sites. Long-press a tile to pin, replace or remove it.</p>
<h2>The search bar</h2>
<p>Type a query or a URL. The engine icon inside the bar shows — and lets you switch — your current search engine. See <a href="/docs/home/search-engines">Search Engines</a>.</p>
<h2>Discover</h2>
<p>A Google-News-powered feed with Trending, World, Tech and Sports categories, plus its own search. See <a href="/docs/home/discover">Discover Feed</a>.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">It’s yours</span><p>The home screen is local. Nothing about your shortcuts or reading is reported anywhere.</p></div>
</div>`,
  },
  {
    path: "home/search-engines",
    section: "Home & Search",
    title: "Search Engines",
    description: "Choose and switch search engines in Omni Browser: Google, DuckDuckGo, Brave, Bing, Yandex, Ecosia, Startpage and custom.",
    updated: "Jul 2026",
    contentHtml: `<h1>Search Engines</h1>
<p class="lead">Omni supports seven privacy-and-mainstream search engines out of the box — and lets you add your own.</p>
<h2>Built-in engines</h2>
<div class="table-wrap">
<table>
<thead><tr><th>Engine</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><strong>Google</strong></td><td>Default for most users</td></tr>
<tr><td><strong>DuckDuckGo</strong></td><td>Privacy-focused</td></tr>
<tr><td><strong>Brave Search</strong></td><td>Independent index</td></tr>
<tr><td><strong>Bing</strong></td><td>Microsoft</td></tr>
<tr><td><strong>Yandex</strong></td><td>Strong for RU-language results</td></tr>
<tr><td><strong>Ecosia</strong></td><td>Plants trees with ad revenue</td></tr>
<tr><td><strong>Startpage</strong></td><td>Google results, proxied</td></tr>
</tbody>
</table>
</div>
<h2>Switch engines</h2>
<ul>
<li><strong>Per search</strong> — tap the engine icon in the search bar.</li>
<li><strong>Default</strong> — Settings → Search → Default engine.</li>
</ul>
<h2>Custom engines</h2>
<p>Add any engine that accepts a <code>%s</code> query placeholder (most do). Define its search URL and suggestions URL in <strong>Settings → Search → Add engine</strong>.</p>
<h2>Suggestions</h2>
<p>Each engine can provide live suggestions as you type, via its suggestions API. Turn this off in Settings if you’d rather not send partial queries.</p>`,
  },
  {
    path: "home/discover",
    section: "Home & Search",
    title: "Discover Feed",
    description: "The Omni Browser Discover feed: a Google-News-powered stream of Trending, World, Tech and Sports stories on your home screen.",
    updated: "Jul 2026",
    contentHtml: `<h1>Discover Feed</h1>
<p class="lead">Below your shortcuts, the Discover feed keeps you glancing at the news — without a separate app.</p>
<h2>Categories</h2>
<ul>
<li><strong>Trending</strong> — what’s hot right now.</li>
<li><strong>World</strong> — international headlines.</li>
<li><strong>Tech</strong> — technology news.</li>
<li><strong>Sports</strong> — scores and stories.</li>
</ul>
<h2>How it works</h2>
<p>The feed is built from Google News RSS, assembled by the ViewModel (<code>BrowserViewModel</code> builds the feed URLs). Articles open in a normal tab.</p>
<h2>Search the feed</h2>
<p>Discover has its own search field — look up a topic and it queries the news index, not your default engine.</p>
<div class="callout callout--note">
<div class="callout__icon"><svg fill="none" stroke="currentColor" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01M11 12h1v4h1"></path></svg></div>
<div class="callout__body"><span class="callout__title">Turn it off</span><p>Not a news person? Hide the Discover section in Settings → Home screen for a cleaner start page.</p></div>
</div>`,
  },
];
