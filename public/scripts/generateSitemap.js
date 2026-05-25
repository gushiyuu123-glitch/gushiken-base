// scripts/generate-sitemap.js
import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import dotenv from "dotenv";
import { worksData } from "../src/data/worksData.js";

dotenv.config();

const SITE =
  String(process.env.SITE_URL || process.env.VITE_SITE_ORIGIN || "https://gushikendesign.com")
    .replace(/\/+$/, ""); // ✅ 末尾スラッシュ除去

const TODAY = new Date().toISOString().split("T")[0];

// newsは上限を切る（増えてもsitemapが肥大化しない）
const NEWS_MAX = Number(process.env.SITEMAP_NEWS_MAX || 60);

// microCMS env（無ければ news はスキップ）
const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN || process.env.VITE_MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY || process.env.VITE_MICROCMS_API_KEY;

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

// ✅ Room/Teaser/Intro は sitemap から除外（将来kebab化しても拾う）
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

function newerDate(a, b) {
  const da = new Date(formatDate(a)).getTime();
  const db = new Date(formatDate(b)).getTime();
  return db > da ? b : a;
}

// ✅ 同じpathなら lastmod は新しい方へ寄せる
function mergeUrl(map, item) {
  const key = normalizePath(item.path);
  const prev = map.get(key);
  if (!prev) return map.set(key, { ...item, path: key });

  map.set(key, {
    ...prev,
    ...item,
    path: key,
    lastmod: newerDate(prev.lastmod, item.lastmod),
  });
}

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

async function generate() {
  const staticPages = [
    { path: "/", changefreq: "weekly", priority: "1.0", lastmod: TODAY },
    { path: "/works", changefreq: "weekly", priority: "0.9", lastmod: TODAY },
    { path: "/okinawa-bridal-website", changefreq: "weekly", priority: "0.95", lastmod: TODAY },

    { path: "/price", changefreq: "monthly", priority: "0.85", lastmod: TODAY },
    { path: "/contact", changefreq: "monthly", priority: "0.85", lastmod: TODAY },
    { path: "/news", changefreq: "weekly", priority: "0.7", lastmod: TODAY },

    { path: "/terms", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/privacy", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/refund", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
    { path: "/legal", changefreq: "yearly", priority: "0.35", lastmod: TODAY },
  ];

  const workPages = (worksData || []).flatMap((category) => {
    const items = Array.isArray(category?.items) ? category.items : [];
    return items
      .filter((item) => item?.slug && !isRoomLikeSlug(item.slug))
      .map((item) => ({
        path: `/works/${encodeURIComponent(String(item.slug))}`,
        changefreq: "monthly",
        priority: "0.75",
        lastmod: formatDate(item.updatedAt || item.createdAt || TODAY),
      }));
  });

  const newsPages = await fetchNewsPages();

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