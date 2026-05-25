// scripts/bump-sw-stamp.cjs
const fs = require("node:fs");
const path = require("node:path");

// public/sw.js 内の CACHE_STAMP をタイムスタンプで更新
const swPath = path.join(__dirname, "..", "public", "sw.js");

function makeStampUTC() {
  const now = new Date();
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const mm = String(now.getUTCMinutes()).padStart(2, "0");
  const ss = String(now.getUTCSeconds()).padStart(2, "0");
  return `v${y}${m}${d}${hh}${mm}${ss}`; // vYYYYMMDDhhmmss (UTC)
}

// ✅ ローカル開発では汚したくない時用（任意）
if (process.env.SKIP_SW_BUMP === "1") {
  console.log("SKIP: bump-sw-stamp (SKIP_SW_BUMP=1)");
  process.exit(0);
}

if (!fs.existsSync(swPath)) {
  console.error("sw.js not found at", swPath);
  process.exit(1);
}

const stamp = makeStampUTC();
const content = fs.readFileSync(swPath, "utf8");

// ✅ const/let, ' or ", セミコロン有無に対応
const re = /(const|let)\s+CACHE_STAMP\s*=\s*(['"])[^'"]*\2\s*;?/;

if (!re.test(content)) {
  console.error("Failed to find CACHE_STAMP assignment in", swPath);
  process.exit(1);
}

const newContent = content.replace(re, `const CACHE_STAMP = "${stamp}";`);

if (newContent === content) {
  console.error("Failed to replace CACHE_STAMP in", swPath);
  process.exit(1);
}

// ✅ アトミック書き込み（途中で止まっても壊れにくい）
const tmpPath = `${swPath}.tmp`;
fs.writeFileSync(tmpPath, newContent, "utf8");
fs.renameSync(tmpPath, swPath);

console.log("Updated CACHE_STAMP to", stamp);