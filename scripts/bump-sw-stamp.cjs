// scripts/bump-sw-stamp.cjs
const fs = require("node:fs");
const path = require("node:path");

const swPath = path.join(__dirname, "..", "public", "sw.js");

function makeStampUTC() {
  const now = new Date();

  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");
  const mm = String(now.getUTCMinutes()).padStart(2, "0");
  const ss = String(now.getUTCSeconds()).padStart(2, "0");

  return `v${y}${m}${d}${hh}${mm}${ss}`;
}

function makeStamp() {
  // Vercel上ではcommit hashも混ぜられる
  const sha =
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GITHUB_SHA ||
    process.env.COMMIT_SHA ||
    "";

  const time = makeStampUTC();
  const shortSha = String(sha).trim().slice(0, 8);

  return shortSha ? `${time}-${shortSha}` : time;
}

function cleanupTmp(tmpPath) {
  try {
    if (fs.existsSync(tmpPath)) {
      fs.unlinkSync(tmpPath);
    }
  } catch {
    // noop
  }
}

// ローカル開発で汚したくない時用
if (process.env.SKIP_SW_BUMP === "1") {
  console.log("SKIP: bump-sw-stamp (SKIP_SW_BUMP=1)");
  process.exit(0);
}

if (!fs.existsSync(swPath)) {
  console.error("ERROR: sw.js not found at", swPath);
  process.exit(1);
}

const stamp = makeStamp();
const content = fs.readFileSync(swPath, "utf8");

// const/let, ' or ", セミコロン有無に対応
// 行頭寄せで、別の文字列内を誤爆しにくくする
const re = /^(\s*)(const|let)\s+CACHE_STAMP\s*=\s*(['"])[^'"]*\3\s*;?/m;

if (!re.test(content)) {
  console.error("ERROR: failed to find CACHE_STAMP assignment in", swPath);
  console.error('Expected something like: const CACHE_STAMP = "v20260614000000";');
  process.exit(1);
}

const newContent = content.replace(
  re,
  `$1const CACHE_STAMP = "${stamp}";`
);

if (newContent === content) {
  console.error("ERROR: failed to replace CACHE_STAMP in", swPath);
  process.exit(1);
}

// アトミック書き込み
const tmpPath = `${swPath}.tmp`;

try {
  fs.writeFileSync(tmpPath, newContent, "utf8");
  fs.renameSync(tmpPath, swPath);

  console.log("Updated CACHE_STAMP to", stamp);
} catch (error) {
  cleanupTmp(tmpPath);

  console.error("ERROR: failed to write CACHE_STAMP:", error);
  process.exit(1);
}