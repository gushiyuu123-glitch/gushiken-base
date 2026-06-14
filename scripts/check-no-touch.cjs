#!/usr/bin/env node
const { execSync } = require("node:child_process");

const args = new Set(process.argv.slice(2));

const allow =
  args.has("--allow") || process.env.ALLOW_UI_CHANGES === "1";

if (allow) {
  console.log(
    "ALLOW: UI changes are permitted (ALLOW_UI_CHANGES=1 or --allow)."
  );
  process.exit(0);
}

// Patterns that must not be changed without explicit allow.
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

function run(command, options = {}) {
  return execSync(command, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  }).trim();
}

function toFileList(out) {
  if (!out) return [];

  return out
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function checkList(files) {
  return files.filter((file) =>
    forbiddenPatterns.some((pattern) => pattern.test(file))
  );
}

function stagedFiles() {
  try {
    return toFileList(run("git diff --cached --name-only"));
  } catch (error) {
    console.error("ERROR: failed to read staged files.");
    console.error(error?.message || error);
    process.exit(1);
  }
}

function prFiles() {
  const baseRef =
    process.env.GITHUB_BASE_REF ||
    process.env.VERCEL_GIT_PREVIOUS_SHA ||
    "origin/main";

  try {
    if (baseRef === "origin/main") {
      run("git fetch origin main", { stdio: "ignore" });
    }
  } catch {
    // fallback below
  }

  const commands = [
    `git diff --name-only ${baseRef}...HEAD`,
    `git diff --name-only ${baseRef}..HEAD`,
    "git diff --name-only HEAD~1...HEAD",
    "git diff --name-only HEAD~1..HEAD",
  ];

  for (const command of commands) {
    try {
      const out = run(command);
      const files = toFileList(out);

      if (files.length) return files;
    } catch {
      // try next
    }
  }

  console.error("ERROR: failed to detect changed files in CI.");
  console.error("If intended, run with ALLOW_UI_CHANGES=1.");
  process.exit(1);
}

function main() {
  const isCi = !!process.env.CI;
  const files = isCi ? prFiles() : stagedFiles();
  const bad = checkList(files);

  if (bad.length) {
    console.error("\nERROR: Protected UI/visual files were changed:");

    bad.forEach((file) => {
      console.error("  -", file);
    });

    console.error("\nIf intended, run with:");
    console.error("  ALLOW_UI_CHANGES=1 node scripts/check-no-touch.cjs");
    console.error("  or: node scripts/check-no-touch.cjs --allow\n");

    process.exit(1);
  }

  console.log("OK: no protected UI files changed.");
}

main();