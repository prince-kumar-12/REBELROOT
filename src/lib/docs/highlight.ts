type Rule = [string, RegExp];

const RULES: Record<string, Rule[]> = {
  kotlin: [
    ["com", /\/\/[^\n]*|\/\*[\s\S]*?\*\/|\/\*[^\n]*/],
    ["str", /"""[\s\S]*?"""|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/],
    [
      "kw",
      /\b(?:val|var|fun|class|object|interface|private|public|internal|protected|override|suspend|return|if|else|when|for|while|do|in|is|as|import|package|companion|data|sealed|enum|lateinit|by|lazy|null|true|false|this|super|try|catch|finally|throw|typealias|inline|reified|out|annotation|constructor|init|get|set|field|abstract|open|final|const|operator|infix|tailrec|vararg|it)\b/,
    ],
    ["type", /\b[A-Z][A-Za-z0-9_]*\b/],
    ["num", /\b(?:0x[0-9a-fA-F]+|\d+(?:\.\d+)?[fFL]?)\b/],
    ["fn", /\b[a-z_][A-Za-z0-9_]*(?=\s*\()/],
  ],
  java: [
    ["com", /\/\/[^\n]*|\/\*[\s\S]*?\*\/|\/\*[^\n]*/],
    ["str", /"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/],
    [
      "kw",
      /\b(?:public|private|protected|class|interface|extends|implements|static|final|void|int|long|boolean|new|return|if|else|for|while|try|catch|finally|throw|throws|import|package|this|super|null|true|false|abstract|synchronized)\b/,
    ],
    ["type", /\b[A-Z][A-Za-z0-9_]*\b/],
    ["num", /\b\d+(?:\.\d+)?[fFL]?\b/],
    ["fn", /\b[a-z_][A-Za-z0-9_]*(?=\s*\()/],
  ],
  bash: [
    ["com", /#[^\n]*/],
    ["str", /"(?:\\.|[^"\\])*"|'[^']*'/],
    [
      "kw",
      /\b(?:sudo|apt|apt-get|brew|npm|yarn|pnpm|git|cd|ls|mkdir|rm|cp|mv|echo|export|curl|wget|chmod|grep|cat|source|alias|if|then|fi|for|do|done|while|set|exit|return)\b/,
    ],
    ["fn", /-{1,2}[a-zA-Z][\w-]*/],
    ["num", /\b\d+\b/],
  ],
  json: [
    ["fn", /"(?:\\.|[^"\\])*"(?=\s*:)/],
    ["str", /"(?:\\.|[^"\\])*"/],
    ["kw", /\b(?:true|false|null)\b/],
    ["num", /-?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b/],
  ],
  xml: [
    ["com", /<!--[\s\S]*?-->/],
    ["str", /"[^"]*"|'[^']*'/],
    ["kw", /<\/?[a-zA-Z][\w:.-]*|\/?>|<\?[\s\S]*?\?>/],
    ["type", /\b[a-zA-Z-]+(?==)/],
  ],
  yaml: [
    ["com", /#[^\n]*/],
    ["fn", /^[ \t]*-?[ \t]*[a-zA-Z_][\w.-]*(?=\s*:)/],
    ["str", /"[^"]*"|'[^']*'/],
    ["kw", /\b(?:true|false|null|yes|no)\b/],
    ["num", /\b\d+(?:\.\d+)?\b/],
  ],
  groovy: [
    ["com", /\/\/[^\n]*|\/\*[\s\S]*?\*\/|\/\*[^\n]*/],
    ["str", /"""[\s\S]*?"""|"(?:\\.|[^"\\\n])*"|'(?:\\.|[^'\\\n])*'/],
    [
      "kw",
      /\b(?:plugins|id|version|implementation|api|compileOnly|runtimeOnly|testImplementation|dependencies|android|defaultConfig|buildTypes|productFlavors|namespace|kotlin|def|return|if|else|for|while|true|false|null|new|class|import|ext)\b/,
    ],
    ["type", /\b[A-Z][A-Za-z0-9_]*\b/],
    ["num", /\b\d+(?:\.\d+)?\b/],
    ["fn", /\b[a-z_][A-Za-z0-9_]*(?=\s*[({])/],
  ],
  generic: [
    ["com", /\/\/[^\n]*|#[^\n]*|\/\*[\s\S]*?\*\/|\/\*[^\n]*/],
    ["str", /"(?:\\.|[^"\\])*"|'[^']*'|`[^`]*`/],
    [
      "kw",
      /\b(?:true|false|null|if|else|for|while|return|function|class|import|export|from|const|let|var|new|def|end)\b/,
    ],
    ["num", /\b\d+(?:\.\d+)?\b/],
  ],
};

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightLine(line: string, rules: Rule[]): string {
  const combined = new RegExp(rules.map((r) => "(" + r[1].source + ")").join("|"), "g");
  let out = "";
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = combined.exec(line)) !== null) {
    out += escapeHtml(line.slice(last, m.index));
    let cls = "";
    for (let i = 0; i < rules.length; i++) {
      if (m[i + 1] !== undefined) {
        cls = rules[i][0];
        break;
      }
    }
    out += cls ? `<span class="tok-${cls}">${escapeHtml(m[0])}</span>` : escapeHtml(m[0]);
    last = m.index + m[0].length;
    if (m[0].length === 0) combined.lastIndex++;
  }
  out += escapeHtml(line.slice(last));
  return out || "&nbsp;";
}

export function parseHighlightSpec(spec: string | undefined): Set<number> {
  const set = new Set<number>();
  if (!spec) return set;
  spec.split(",").forEach((part) => {
    part = part.trim();
    if (/^\d+$/.test(part)) {
      set.add(parseInt(part, 10));
    } else {
      const r = part.split("-");
      if (r.length === 2) {
        const a = parseInt(r[0], 10);
        const b = parseInt(r[1], 10);
        for (let n = a; n <= b; n++) set.add(n);
      }
    }
  });
  return set;
}

export interface HighlightedLine {
  html: string;
  highlighted: boolean;
}

export function highlightCode(code: string, lang: string, highlightSpec?: string): HighlightedLine[] {
  const rules = RULES[lang] || RULES.generic;
  const highlights = parseHighlightSpec(highlightSpec);
  const lines = code.replace(/\n$/, "").split("\n");
  return lines.map((line, i) => ({
    html: highlightLine(line, rules),
    highlighted: highlights.has(i + 1),
  }));
}

export const SUPPORTED_LANGS = Object.keys(RULES);
