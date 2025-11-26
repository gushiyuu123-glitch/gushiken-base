const fs = require('fs');
const path = require('path');

// This script updates the CACHE_STAMP constant in public/sw.js to a
// timestamp-based value so each deploy uses a new cache name and old
// caches are evicted by the service worker.

const swPath = path.join(__dirname, '..', 'public', 'sw.js');

if (!fs.existsSync(swPath)) {
  console.error('sw.js not found at', swPath);
  process.exit(1);
}

const now = new Date();
const stamp = `v${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}${String(now.getSeconds()).padStart(2,'0')}`;

let content = fs.readFileSync(swPath, 'utf8');

const replaced = content.replace(/const CACHE_STAMP = \".*?\";?/s, `const CACHE_STAMP = \"${stamp}\";`);

if (replaced === content) {
  console.error('Failed to replace CACHE_STAMP in', swPath);
  process.exit(1);
}

fs.writeFileSync(swPath, replaced, 'utf8');
console.log('Updated CACHE_STAMP to', stamp);
