const fs = require('fs');
const path = require('path');

// Bump the CACHE_STAMP in public/sw.js to a timestamped value.
const swPath = path.join(__dirname, '..', 'public', 'sw.js');

function makeStamp() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  return `v${y}${m}${d}${hh}${mm}${ss}`; // vYYYYMMDDhhmmss
}

if (!fs.existsSync(swPath)) {
  console.error('sw.js not found at', swPath);
  process.exitCode = 1;
}

const stamp = makeStamp();
let content = fs.readFileSync(swPath, 'utf8');

const newContent = content.replace(/const\s+CACHE_STAMP\s*=\s*"[^"]*"\s*;?/, `const CACHE_STAMP = "${stamp}";`);

if (newContent === content) {
  console.error('Failed to replace CACHE_STAMP in', swPath);
  process.exitCode = 1;
}

fs.writeFileSync(swPath, newContent, 'utf8');
console.log('Updated CACHE_STAMP to', stamp);

