#!/usr/bin/env node
const { execSync } = require("node:child_process");

const args = new Set(process.argv.slice(2));
const allow =
  args.has("--allow") || process.env.ALLOW_UI_CHANGES === "1";

if (allow) {
  console.log("ALLOW: UI changes are permitted (ALLOW_UI_CHANGES=1 or --allow).");
  process.exit(0);
}

// Patterns that must not be changed
const forbiddenPatterns = [
  /^src\/.*\.jsx$/i,
  /^src\/.*\.tsx$/i,
  /^src\/.*\.css$/i,
  /^src\/.*\.scss$/i,
  /^src\/.*\.module\.css$/i,
  /^src\/.*\.module\.scss$/i,
  /^src\/components\//i,
  /^src\/pages\//i,
  /^src\/layouts\//i,
  /^src\/sections\//i,
  /^public\/.*\.html$/i,
  /^public\/.*\.css$/i,
  /^index\.html$/i,
];

function checkList(files) {
  return files.filter((f) => forbiddenPatterns.some((p) => p.test(f)));
}

function stagedFiles() {
  const out = execSync("git diff --cached --name-only", { encoding: "utf8" }).trim();
  if (!out) return [];
  return out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

function prFiles() {
  try { execSync("git fetch origin main", { stdio: "ignore" }); } catch (_) {}
  let out = "";
  try {
    out = execSync("git diff --name-only origin/main...HEAD", { encoding: "utf8" }).trim();
  } catch (_) {
    try { out = execSync("git diff --name-only origin/main..HEAD", { encoding: "utf8" }).trim(); }
    catch (_) { out = ""; }
  }
  if (!out) return [];
  return out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

function main() {
  const isCi = !!process.env.CI;
  const files = isCi ? prFiles() : stagedFiles();
  const bad = checkList(files);

  if (bad.length) {
    console.error("\nERROR: Protected UI/visual files were changed:");
    bad.forEach((f) => console.error("  -", f));
    console.error("\nIf intended, run with:");
    console.error("  ALLOW_UI_CHANGES=1 node scripts/check-no-touch.cjs");
    console.error("  or: node scripts/check-no-touch.cjs --allow\n");
    process.exit(1);
  }

  console.log("OK: no protected UI files changed.");
}

main();