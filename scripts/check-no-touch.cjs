#!/usr/bin/env node
const { execSync } = require('child_process');

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
  /^public\/.*\.html$/i,
  /^index\.html$/i,
];

function checkList(files) {
  const bad = files.filter((f) => forbiddenPatterns.some((p) => p.test(f)));
  return bad;
}

function stagedFiles() {
  const out = execSync('git diff --cached --name-only', { encoding: 'utf8' }).trim();
  if (!out) return [];
  return out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

function prFiles() {
  // in CI, compare with main
  try {
    execSync('git fetch origin main', { stdio: 'ignore' });
  } catch (e) {}
  let out = '';
  try {
    out = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf8' }).trim();
  } catch (e) {
    try { out = execSync('git diff --name-only origin/main..HEAD', { encoding: 'utf8' }).trim(); } catch (e) { out = ''; }
  }
  if (!out) return [];
  return out.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
}

function main() {
  const isCi = !!process.env.CI;
  const files = isCi ? prFiles() : stagedFiles();
  const bad = checkList(files);
  if (bad.length) {
    console.error('\nERROR: The following UI/visual files are protected and must not be changed without explicit permission:');
    bad.forEach((f) => console.error('  -', f));
    console.error('\nIf you really intend to modify UI files, get explicit authorization and update the protection rules.');
    process.exit(1);
  }
  console.log('OK: no protected UI files changed.');
}

main();
