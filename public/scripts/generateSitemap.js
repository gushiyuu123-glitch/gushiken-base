// scripts/generate-sitemap.js
import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SITE =
  String(
    process.env.SITE_URL ||
      process.env.VITE_SITE_ORIGIN ||
      "https://gushikendesign.com"
  ).replace(/\/+$/, "");

const TODAY = new Date().toISOString().split("T")[0];

// newsは上限を切る（増えてもsitemapが肥大化しない）
const NEWS_MAX = Number(process.env.SITEMAP_NEWS_MAX || 60);

// microCMS env（無ければ news はスキップ）
const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN || process.env.VITE_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY || process.env.VITE_MICROCMS_API_KEY;

/* ---------------- utils ---------------- */
function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizePath(p) {
  if (!p) return "/";
  const v = String(p);
  return v.startsWith("/") ? v : `/${v}`;
}

function formatDate(dateString) {
  if (!dateString) return TODAY;
  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? TODAY : d.toISOString().split("T")[0];
}

function newerDate(a, b) {
  const da = new Date(formatDate(a)).getTime();
  const db = new Date(formatDate(b)).getTime();
  return db > da ? b : a;
}

// ✅ Room/Teaser/Intro は sitemap から除外
function isRoomLikeSlug(slug = "") {
  const s = String(slug);
  return (
    /(?:^|[-_])room$/i.test(s) || /Room$/i.test(s) ||
    /(?:^|[-_])teaser$/i.test(s) || /Teaser$/i.test(s) ||
    /(?:^|[-_])intro$/i.test(s) || /Intro$/i.test(s)
  );
}

function urlXml({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod || TODAY)}</lastmod>
    ${changefreq ? `<changefreq>${escapeXml(changefreq)}</changefreq>` : ""}
    ${priority ? `<priority>${escapeXml(priority)}</priority>` : ""}
  </url>`;
}

// ✅ 同じpathは lastmod を新しい方へ
function mergeUrl(map, item) {
  const key = normalizePath(item.path);
  const prev = map.get(key);
  if (!prev) {
    map.set(key, { ...item, path: key });
    return;
  }
  map.set(key, {
    ...prev,
    ...item,
    path: key,
    lastmod: newerDate(prev.lastmod, item.lastmod),
  });
}

/* ---------------- fetch news (limited) ---------------- */
async function fetchNewsPages() {
  if (!SERVICE_DOMAIN || !API_KEY) return [];

  const client = axios.create({
    baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    timeout: 10000,
  });

  const pages = [];
  let offset = 0;
  const hardLimit = Math.max(0, NEWS_MAX);

  while (pages.length < hardLimit) {
    const limit = Math.min(100, hardLimit - pages.length);

    const res = await client.get("/news", {
      params: {
        limit,
        offset,
        orders: "-publishedAt",
        fields: "id,publishedAt,updatedAt",
      },
    });

    const data = res.data || {};
    const contents = data.contents || [];
    if (contents.length === 0) break;

    for (const item of contents) {
      if (!item?.id) continue;
      pages.push({
        path: `/news/${encodeURIComponent(String(item.id))}`,
        lastmod: formatDate(item.updatedAt || item.publishedAt),
        changefreq: "monthly",
        priority: "0.55",
      });
      if (pages.length >= hardLimit) break;
    }

    offset += limit;
    if (offset >= (data.totalCount || 0)) break;
  }

  return pages;
}

/* ---------------- works (prefer worksIndex) ---------------- */
async function getWorkPages() {
  // ✅ worksIndex があれば uniqueWorks を最優先
  try {
    const mod = await import("../src/data/worksIndex.js");
    const uniqueWorks = Array.isArray(mod.uniqueWorks) ? mod.uniqueWorks : [];
    return uniqueWorks
      .filter((w) => w?.slug)
      .filter((w) => !isRoomLikeSlug(w.slug))
      .map((w) => ({
        path: `/works/${encodeURIComponent(String(w.slug))}`,
        changefreq: "monthly",
        priority: "0.75",
        lastmod: formatDate(w.updatedAt || w.createdAt || TODAY),
      }));
  } catch (_) {
    // fallback: worksData
  }

  try {
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];
    const items = worksData.flatMap((c) => (Array.isArray(c?.items) ? c.items : []));
    return items
      .filter((w) => w?.slug)
      .filter((w) => !isRoomLikeSlug(w.slug))
      .map((w) => ({
        path: `/works/${encodeURIComponent(String(w.slug))}`,
        changefreq: "monthly",
        priority: "0.75",
        lastmod: formatDate(w.updatedAt || w.createdAt || TODAY),
      }));
  } catch (_) {
    return [];
  }
}

/* ---------------- generate ---------------- */
async function generate() {
  const workPages = await getWorkPages();
  const newsPages = await fetchNewsPages();

  const latestWork = workPages.reduce((acc, p) => newerDate(acc, p.lastmod), TODAY);
  const latestNews = newsPages.reduce((acc, p) => newerDate(acc, p.lastmod), TODAY);

  // ✅ 正規URLだけを載せる（リダイレクト用URLは載せない）
  const staticPages = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
    { path: "/works", changefreq: "weekly", priority: "0.9", lastmod: latestWork },

    // ✅ 子島
    { path: "/okinawa", changefreq: "weekly", priority: "0.9", lastmod: TODAY },

    { path: "/price", changefreq: "monthly", priority: "0.85", lastmod: TODAY },
    { path: "/contact", changefreq: "monthly", priority: "0.85", lastmod: TODAY },
    { path: "/news", changefreq: "weekly", priority: "0.7", lastmod: latestNews },

    { path: "/terms", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/privacy", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/refund", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/legal", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
  ];

  const all = [...staticPages, ...workPages, ...newsPages];

  // ✅ 重複排除 + lastmod最大
  const map = new Map();
  all.forEach((u) => mergeUrl(map, u));
  const unique = Array.from(map.values());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map((u) =>
    urlXml({
      loc: `${SITE}${normalizePath(u.path)}`,
      lastmod: u.lastmod || TODAY,
      changefreq: u.changefreq,
      priority: u.priority,
    })
  )
  .join("\n")}
</urlset>
`;

  const out = path.resolve(process.cwd(), "public", "sitemap.xml");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, xml, "utf-8");

  console.log(`🗺️ sitemap.xml generated: ${unique.length} urls`);
  console.log(`📰 news in sitemap: ${newsPages.length} (cap=${NEWS_MAX})`);
  console.log(`🖼️ works in sitemap: ${workPages.length} (room excluded)`);
}

generate().catch((err) => {
  console.error("❌ sitemap generation failed:", err);
  process.exit(1);
});