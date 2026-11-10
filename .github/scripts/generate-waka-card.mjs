import fs from "fs";
import path from "path";

const PALETTES = {
  // Core Languages you use & explore
  Python: {
    colors: ["#3776AB", "#4B8BBE", "#FFD43B"],
    textDark: "#61AFEF",
    textLight: "#2B5B84",
  },
  TypeScript: {
    colors: ["#235A97", "#3178C6", "#61AFEF"],
    textDark: "#58A6FF",
    textLight: "#235A97",
  },
  JavaScript: {
    colors: ["#F0DB4F", "#F7DF1E", "#E6B400"],
    textDark: "#F7DF1E",
    textLight: "#B58900",
  },
  Rust: {
    colors: ["#B7410E", "#F74C00", "#DEA584"],
    textDark: "#DEA584",
    textLight: "#B7410E",
  },
  "Next.js": {
    colors: ["#0070F3", "#3291FF", "#00DFD8"],
    textDark: "#3291FF",
    textLight: "#0070F3",
  },
  React: {
    colors: ["#0088CC", "#61DAFB", "#A6E9FF"],
    textDark: "#61DAFB",
    textLight: "#0088CC",
  },
  JSX: {
    colors: ["#0088CC", "#61DAFB", "#F7DF1E"],
    textDark: "#61DAFB",
    textLight: "#0088CC",
  },
  TSX: {
    colors: ["#3178C6", "#61DAFB", "#A6E9FF"],
    textDark: "#61DAFB",
    textLight: "#235A97",
  },
  "Node.js": {
    colors: ["#339933", "#68A063", "#8CC84B"],
    textDark: "#8CC84B",
    textLight: "#2E7D32",
  },
  MongoDB: {
    colors: ["#13AA52", "#00ED64", "#4DB33D"],
    textDark: "#00ED64",
    textLight: "#13AA52",
  },

  // Web & Styling
  HTML: {
    colors: ["#E34F26", "#F06529", "#FF8A65"],
    textDark: "#FF7B54",
    textLight: "#D84315",
  },
  CSS: {
    colors: ["#1572B6", "#33A9DC", "#38BDF8"],
    textDark: "#38BDF8",
    textLight: "#1572B6",
  },
  SCSS: {
    colors: ["#CD6799", "#CF649A", "#F48FB1"],
    textDark: "#F48FB1",
    textLight: "#AD1457",
  },
  Sass: {
    colors: ["#CD6799", "#CF649A", "#F48FB1"],
    textDark: "#F48FB1",
    textLight: "#AD1457",
  },
  Less: {
    colors: ["#1D365D", "#2B4C80", "#5C85D6"],
    textDark: "#79A6DC",
    textLight: "#1D365D",
  },
  "Tailwind CSS": {
    colors: ["#0EA5E9", "#38BDF8", "#2DD4BF"],
    textDark: "#38BDF8",
    textLight: "#0284C7",
  },
  Vue: {
    colors: ["#35495E", "#41B883", "#64D9A3"],
    textDark: "#41B883",
    textLight: "#2E8B57",
  },
  "Vue.js": {
    colors: ["#35495E", "#41B883", "#64D9A3"],
    textDark: "#41B883",
    textLight: "#2E8B57",
  },
  Svelte: {
    colors: ["#FF3E00", "#FF6B35", "#FFA07A"],
    textDark: "#FF6B35",
    textLight: "#D83400",
  },
  Astro: {
    colors: ["#FF5D01", "#E8458B", "#8B5CF6"],
    textDark: "#FF7B33",
    textLight: "#D9460F",
  },
  Angular: {
    colors: ["#DD0031", "#C3002F", "#FF5252"],
    textDark: "#FF5252",
    textLight: "#C3002F",
  },

  // Systems, Backend & Mobile Languages
  Go: {
    colors: ["#007D9C", "#00ADD8", "#5DC9E2"],
    textDark: "#29BEB0",
    textLight: "#007D9C",
  },
  C: {
    colors: ["#283593", "#5C6BC0", "#A8B9CC"],
    textDark: "#9FA8DA",
    textLight: "#283593",
  },
  "C++": {
    colors: ["#004482", "#00599C", "#659AD2"],
    textDark: "#659AD2",
    textLight: "#004482",
  },
  "C#": {
    colors: ["#178600", "#239120", "#68217A"],
    textDark: "#56D364",
    textLight: "#178600",
  },
  Java: {
    colors: ["#5382A1", "#E76F00", "#F89820"],
    textDark: "#F89820",
    textLight: "#D2691E",
  },
  Kotlin: {
    colors: ["#7F52FF", "#C711E1", "#E44857"],
    textDark: "#B388FF",
    textLight: "#651FFF",
  },
  Swift: {
    colors: ["#F05138", "#FF6F43", "#FFA057"],
    textDark: "#FF7B54",
    textLight: "#D83B22",
  },
  Dart: {
    colors: ["#01579B", "#0175C2", "#13B9FD"],
    textDark: "#40C4FF",
    textLight: "#01579B",
  },
  PHP: {
    colors: ["#4F5B93", "#777BB4", "#AEB2D5"],
    textDark: "#9FA8DA",
    textLight: "#4F5B93",
  },
  Ruby: {
    colors: ["#701516", "#CC342D", "#FF6B6B"],
    textDark: "#FF6B6B",
    textLight: "#A61C1C",
  },
  Lua: {
    colors: ["#000080", "#1E40AF", "#60A5FA"],
    textDark: "#60A5FA",
    textLight: "#000080",
  },
  Zig: {
    colors: ["#B45309", "#F7A41D", "#FBBF24"],
    textDark: "#F7A41D",
    textLight: "#B45309",
  },
  Elixir: {
    colors: ["#4E2A8E", "#6E4A7E", "#A78BFA"],
    textDark: "#C4B5FD",
    textLight: "#4E2A8E",
  },
  Solidity: {
    colors: ["#363636", "#636890", "#9FA8DA"],
    textDark: "#9FA8DA",
    textLight: "#363636",
  },

  // Data, Query & Schema
  SQL: {
    colors: ["#E38C00", "#F59E0B", "#336791"],
    textDark: "#FBBF24",
    textLight: "#B45309",
  },
  PostgreSQL: {
    colors: ["#336791", "#4A89BD", "#82B1FF"],
    textDark: "#82B1FF",
    textLight: "#336791",
  },
  MySQL: {
    colors: ["#00758F", "#3E6E93", "#F29111"],
    textDark: "#F29111",
    textLight: "#00758F",
  },
  Prisma: {
    colors: ["#0C344B", "#16A394", "#5A67D8"],
    textDark: "#38B2AC",
    textLight: "#0C344B",
  },
  GraphQL: {
    colors: ["#E10098", "#E535AB", "#FF80BF"],
    textDark: "#FF66B2",
    textLight: "#C20082",
  },

  // Config, Markup & Docs
  JSON: {
    colors: ["#6E7681", "#8B949E", "#C9D1D9"],
    textDark: "#C9D1D9",
    textLight: "#57606A",
  },
  "JSON with Comments": {
    colors: ["#6E7681", "#8B949E", "#C9D1D9"],
    textDark: "#C9D1D9",
    textLight: "#57606A",
  },
  Markdown: {
    colors: ["#083FA1", "#388BFD", "#79C0FF"],
    textDark: "#79C0FF",
    textLight: "#083FA1",
  },
  MDX: {
    colors: ["#F9AC00", "#FCB32C", "#388BFD"],
    textDark: "#FCB32C",
    textLight: "#B47B00",
  },
  YAML: {
    colors: ["#CB171E", "#F85149", "#FF7B72"],
    textDark: "#FF7B72",
    textLight: "#CB171E",
  },
  TOML: {
    colors: ["#9C4221", "#C05621", "#ED8936"],
    textDark: "#F6AD55",
    textLight: "#9C4221",
  },
  XML: {
    colors: ["#0060AC", "#2B88D8", "#F16529"],
    textDark: "#58A6FF",
    textLight: "#0060AC",
  },
  INI: {
    colors: ["#6E7681", "#8B949E", "#A5D6FF"],
    textDark: "#A5D6FF",
    textLight: "#57606A",
  },

  // Shell, DevOps & Tooling
  Bash: {
    colors: ["#2E3440", "#4EAA25", "#89E051"],
    textDark: "#89E051",
    textLight: "#3B861C",
  },
  Shell: {
    colors: ["#2E3440", "#4EAA25", "#89E051"],
    textDark: "#89E051",
    textLight: "#3B861C",
  },
  sh: {
    colors: ["#2E3440", "#4EAA25", "#89E051"],
    textDark: "#89E051",
    textLight: "#3B861C",
  },
  Zsh: {
    colors: ["#2E3440", "#4EAA25", "#89E051"],
    textDark: "#89E051",
    textLight: "#3B861C",
  },
  PowerShell: {
    colors: ["#012456", "#2671BE", "#5391FE"],
    textDark: "#5391FE",
    textLight: "#012456",
  },
  Batchfile: {
    colors: ["#4B5563", "#9CA3AF", "#C1F12E"],
    textDark: "#C1F12E",
    textLight: "#4B5563",
  },
  Docker: {
    colors: ["#0DB7ED", "#2496ED", "#38BDF8"],
    textDark: "#38BDF8",
    textLight: "#0284C7",
  },
  Dockerfile: {
    colors: ["#0DB7ED", "#2496ED", "#38BDF8"],
    textDark: "#38BDF8",
    textLight: "#0284C7",
  },
  Git: {
    colors: ["#F05032", "#F34F29", "#FF8A65"],
    textDark: "#FF7B54",
    textLight: "#D83B1E",
  },
  "Git Config": {
    colors: ["#F05032", "#F34F29", "#FF8A65"],
    textDark: "#FF7B54",
    textLight: "#D83B1E",
  },
};

const FALLBACK_PALETTES = [
  { colors: ["#6366F1", "#8B5CF6", "#EC4899"], textDark: "#A78BFA", textLight: "#6D28D9" },
  { colors: ["#0EA5E9", "#06B6D4", "#10B981"], textDark: "#38BDF8", textLight: "#0284C7" },
  { colors: ["#F59E0B", "#F97316", "#EF4444"], textDark: "#FBBF24", textLight: "#D97706" },
  { colors: ["#10B981", "#34D399", "#6EE7B7"], textDark: "#34D399", textLight: "#059669" },
  { colors: ["#EC4899", "#F43F5E", "#FB7185"], textDark: "#F472B6", textLight: "#DB2777" },
];

function getPalette(langName, idx) {
  if (PALETTES[langName]) return PALETTES[langName];
  const lower = String(langName).toLowerCase().trim();
  for (const [key, val] of Object.entries(PALETTES)) {
    if (key.toLowerCase() === lower) return val;
  }
  // Smart partial match for WakaTime compound names (e.g. "TypeScript React", "JSON with Comments")
  if (lower.includes("typescript") || lower.includes("tsx")) return PALETTES.TypeScript;
  if (lower.includes("javascript") || lower.includes("jsx")) return PALETTES.JavaScript;
  if (lower.includes("python")) return PALETTES.Python;
  if (lower.includes("rust")) return PALETTES.Rust;
  if (lower.includes("next")) return PALETTES["Next.js"];
  if (lower.includes("react")) return PALETTES.React;
  if (lower.includes("tailwind")) return PALETTES["Tailwind CSS"];
  if (lower.includes("node")) return PALETTES["Node.js"];
  if (lower.includes("mongo")) return PALETTES.MongoDB;
  if (lower.includes("html")) return PALETTES.HTML;
  if (lower.includes("css")) return PALETTES.CSS;
  if (lower.includes("json")) return PALETTES.JSON;
  if (lower.includes("markdown") || lower.includes("mdx")) return PALETTES.Markdown;
  if (lower.includes("yaml") || lower.includes("yml")) return PALETTES.YAML;
  if (lower.includes("sql") || lower.includes("postgres")) return PALETTES.SQL;
  if (lower.includes("docker")) return PALETTES.Docker;
  if (lower.includes("git")) return PALETTES.Git;
  if (lower.includes("shell") || lower.includes("bash") || lower.includes("zsh")) return PALETTES.Bash;

  return FALLBACK_PALETTES[idx % FALLBACK_PALETTES.length];
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function fetchWithRetry(url, headers, retries = 4) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url, { headers });
    console.log(`GET ${url.replace(/api_key=[^&]+/, "api_key=***")} -> HTTP ${res.status}`);
    if (res.status === 202 && attempt < retries) {
      console.log("WakaTime is calculating stats (202), waiting 4s before retry...");
      await new Promise((r) => setTimeout(r, 4000));
      continue;
    }
    return res;
  }
  return null;
}

function parseJsonOrJsonp(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    return JSON.parse(trimmed);
  }
  const stripped = trimmed.replace(/^[^(]*\(([\s\S]*)\)[^)]*$/, "$1");
  return JSON.parse(stripped);
}

async function fetchStats() {
  const shareUrl =
    process.env.SHARE_URL ||
    "https://wakatime.com/share/@Regeents/c3b833e8-1338-4e4b-9386-7640962c40c7.json";
  const apiKey = (process.env.WAKATIME_API_KEY || "").trim();

  // 1. Primary: Public WakaTime Languages Share JSON/JSONP endpoint
  try {
    const res = await fetch(shareUrl);
    console.log(`GET ${shareUrl} -> HTTP ${res.status}`);
    if (res.ok) {
      const text = await res.text();
      const json = parseJsonOrJsonp(text);
      const items = Array.isArray(json.data)
        ? json.data
        : (json.data && json.data.languages) || [];
      const active = items.filter(
        (l) => l && l.name && l.name !== "Other" && (l.percent > 0 || l.total_seconds > 0)
      );
      if (active.length > 0) {
        console.log(`Loaded ${active.length} languages from WakaTime Share URL.`);
        return { rangeLabel: "Last 30 Days", languages: active.slice(0, 5) };
      }
    }
  } catch (e) {
    console.log("Share URL fetch error:", e.message);
  }

  // 2. Fallback: Authenticated WakaTime REST API
  if (apiKey) {
    const ranges = [
      { id: "last_30_days", label: "Last 30 Days" },
      { id: "last_year", label: "Last Year" },
      { id: "all_time", label: "All Time" },
    ];
    for (const r of ranges) {
      try {
        const auth = Buffer.from(apiKey).toString("base64");
        const url = `https://wakatime.com/api/v1/users/current/stats/${r.id}?api_key=${encodeURIComponent(apiKey)}`;
        const res = await fetchWithRetry(url, { Authorization: `Basic ${auth}` });
        if (res && res.ok) {
          const json = await res.json();
          const langs = (json.data && json.data.languages) || [];
          const active = langs.filter(
            (l) => l.name !== "Other" && (l.percent > 0 || l.total_seconds > 0)
          );
          if (active.length > 0) {
            console.log(`Found ${active.length} active languages for range ${r.id}`);
            return { rangeLabel: r.label, languages: active.slice(0, 5) };
          }
        }
      } catch (e) {
        console.log(`Error fetching ${r.id}:`, e.message);
      }
    }
  }

  return null;
}

function buildSvg(data, theme = "dark") {
  const isDark = theme === "dark";
  const bg = isDark ? "#0d1117" : "#ffffff";
  const border = isDark ? "#2e343b" : "#e4e2e2";
  const rowBg = isDark ? "#161b22" : "#f6f8fa";
  const rowBorder = isDark ? "#21262d" : "#eaeef2";
  const titleColor = isDark ? "#58a6ff" : "#0366d6";
  const textPrimary = isDark ? "#e6edf3" : "#24292f";
  const textMuted = isDark ? "#8b949e" : "#57606a";
  const trackBg = isDark ? "#21262d" : "#eaeef2";

  const langs = data.languages.slice(0, 5);
  const totalPct = langs.reduce((acc, l) => acc + (Number(l.percent) || 0), 0) || 100;
  const hasTime = langs.some((l) => l.text || l.hours !== undefined);

  const rowHeight = 36;
  const tableStartY = 108;
  const height = tableStartY + langs.length * rowHeight + 24;
  const width = 700;

  let defs = "";
  langs.forEach((l, i) => {
    const pal = getPalette(l.name, i);
    const stops = pal.colors
      .map((c, idx) => {
        const offset = Math.round((idx / (pal.colors.length - 1)) * 100);
        return `<stop offset="${offset}%" stop-color="${c}" />`;
      })
      .join("");
    defs += `<linearGradient id="grad-${i}" x1="0%" y1="0%" x2="100%" y2="0%">${stops}</linearGradient>\n`;
  });

  // Top stacked multi-language bar
  const barWidth = 640;
  let currentX = 30;
  let stackedSegments = "";
  langs.forEach((l, i) => {
    const normalized = (Number(l.percent) || 0) / totalPct;
    const segW = Math.max(6, Math.round(normalized * barWidth));
    const w = i === langs.length - 1 ? Math.max(6, 30 + barWidth - currentX) : segW;
    stackedSegments += `<rect x="${currentX}" y="58" width="${w}" height="10" fill="url(#grad-${i})" />`;
    currentX += w;
  });

  // Table rows
  let rowsSvg = "";
  langs.forEach((l, i) => {
    const y = tableStartY + i * rowHeight;
    const pal = getPalette(l.name, i);
    const pct = Number(l.percent || 0).toFixed(1);
    const barMaxW = hasTime ? 245 : 330;
    const fillW = Math.max(8, Math.round((Math.min(100, Number(l.percent || 0)) / 100) * barMaxW));
    const accentText = isDark ? pal.textDark : pal.textLight;

    // Palette dots (shows the 3 characteristic colors of the language)
    const dots = pal.colors
      .map(
        (c, dIdx) =>
          `<circle cx="${46 + dIdx * 9}" cy="${y + 15}" r="4.2" fill="${c}" stroke="${rowBg}" stroke-width="1" />`
      )
      .join("");

    const timeCol = hasTime
      ? `<text x="545" y="${y + 19}" font-size="12" fill="${textMuted}" text-anchor="end" font-family="ui-monospace, SFMono-Regular, Consolas, monospace">${escapeXml(
          l.text || `${l.hours || 0}h ${l.minutes || 0}m`
        )}</text>`
      : "";

    const barX = 215;

    rowsSvg += `
      <g class="row" style="animation-delay: ${i * 120}ms">
        <rect x="30" y="${y}" width="640" height="30" rx="6" fill="${rowBg}" stroke="${rowBorder}" stroke-width="1" />
        ${dots}
        <text x="80" y="${y + 19}" font-size="13.5" font-weight="600" fill="${textPrimary}">${escapeXml(l.name)}</text>
        <rect x="${barX}" y="${y + 11}" width="${barMaxW}" height="8" rx="4" fill="${trackBg}" />
        <rect class="bar-fill" x="${barX}" y="${y + 11}" width="${fillW}" height="8" rx="4" fill="url(#grad-${i})" />
        ${timeCol}
        <rect x="598" y="${y + 5}" width="62" height="20" rx="10" fill="${pal.colors[0]}" fill-opacity="${isDark ? "0.18" : "0.12"}" />
        <text x="629" y="${y + 19}" font-size="12.5" font-weight="700" fill="${accentText}" text-anchor="middle">${pct}%</text>
      </g>
    `;
  });

  const timeHeader = hasTime
    ? `<text x="545" y="96" font-size="10.5" font-weight="600" fill="${textMuted}" text-anchor="end" letter-spacing="0.8">TIME</text>`
    : "";

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    ${defs}
    <clipPath id="top-bar-clip">
      <rect x="30" y="58" width="640" height="10" rx="5" />
    </clipPath>
  </defs>
  <style>
    * {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    }
    .row {
      opacity: 0;
      animation: fadeIn 0.5s ease-out forwards;
    }
    .bar-fill {
      transform-origin: left center;
      animation: growBar 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes growBar {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
  </style>

  <rect x="1" y="1" rx="6" ry="6" width="${width - 2}" height="${height - 2}" fill="${bg}" stroke="${border}" stroke-width="1" />

  <!-- Header -->
  <text x="30" y="38" font-size="20" font-weight="600" fill="${titleColor}">Top Languages · Coding Activity</text>
  <text x="670" y="38" font-size="12" font-weight="500" fill="${textMuted}" text-anchor="end">${escapeXml(data.rangeLabel)}</text>

  <!-- Multi-palette stacked distribution bar -->
  <g clip-path="url(#top-bar-clip)">
    ${stackedSegments}
  </g>

  <!-- Table Column Headers -->
  <text x="42" y="96" font-size="10.5" font-weight="600" fill="${textMuted}" letter-spacing="0.8">PALETTE &amp; LANGUAGE</text>
  <text x="215" y="96" font-size="10.5" font-weight="600" fill="${textMuted}" letter-spacing="0.8">USAGE DISTRIBUTION</text>
  ${timeHeader}
  <text x="629" y="96" font-size="10.5" font-weight="600" fill="${textMuted}" text-anchor="middle" letter-spacing="0.8">SHARE</text>

  <!-- Language Rows -->
  ${rowsSvg}
</svg>`;
}

const DEFAULT_DATA = {
  rangeLabel: "Last 30 Days",
  languages: [
    { name: "TypeScript", percent: 42.5 },
    { name: "JavaScript", percent: 28.0 },
    { name: "Python", percent: 18.5 },
    { name: "Next.js", percent: 11.0 },
  ],
};

(async () => {
  const outDir = path.join(process.cwd(), "profile-summary-card-output", "wakatime");
  fs.mkdirSync(outDir, { recursive: true });

  const fetched = await fetchStats();
  const darkPath = path.join(outDir, "wakatime-dark.svg");
  const lightPath = path.join(outDir, "wakatime-light.svg");

  if (!fetched && fs.existsSync(darkPath) && fs.existsSync(lightPath)) {
    console.log("No new WakaTime data available; keeping existing SVG cards.");
    process.exit(0);
  }

  const data = fetched || DEFAULT_DATA;
  fs.writeFileSync(darkPath, buildSvg(data, "dark"), "utf8");
  fs.writeFileSync(lightPath, buildSvg(data, "light"), "utf8");
  console.log(`Generated WakaTime SVG cards (${data.rangeLabel}) with ${data.languages.length} languages.`);
})();

