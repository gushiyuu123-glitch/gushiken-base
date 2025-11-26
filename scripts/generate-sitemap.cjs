#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Base URL can be overridden with SITE_URL env variable
const BASE = process.env.SITE_URL || 'https://gushiken-base.vercel.app';

const routes = ['/', '/works', '/price', '/contact'];

const urls = routes.map((r) => {
  return `  <url>\n    <loc>${BASE.replace(/\/$/, '') + r}\n    </loc>\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

const outDir = path.join(__dirname, '..', 'public');
const outPath = path.join(outDir, 'sitemap.xml');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, xml, 'utf8');
console.log('sitemap.xml written to', outPath);
