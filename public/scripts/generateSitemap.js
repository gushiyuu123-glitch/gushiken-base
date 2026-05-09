// scripts/generate-sitemap.js
import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import dotenv from "dotenv";
import { worksData } from "../src/data/worksData.js";

dotenv.config();

const SITE = process.env.SITE_URL || "https://gushikendesign.com";
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
  return p.startsWith("/") ? p : `/${p}`;
}

function formatDate(dateString) {
  if (!dateString) return TODAY;
  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? TODAY : d.toISOString().split("T")[0];
}

// Room/Teaser/Intro は sitemap から除外（検索に出したいのは“証拠ページ”だけ）
function isRoomLikeSlug(slug = "") {
  return /(?:Room|Teaser|Intro)$/i.test(slug);
}

function urlXml({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod || TODAY)}</lastmod>
    ${changefreq ? `<changefreq>${escapeXml(changefreq)}</changefreq>` : ""}
    ${priority ? `<priority>${escapeXml(priority)}</priority>` : ""}
  </url>`;
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
        path: `/news/${item.id}`,
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
  // ブライダル入口は必ず入れる（槍）
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

  // worksData から “検索に出す価値がある” work ページだけ抽出
  const workPages = (worksData || []).flatMap((category) => {
    const items = Array.isArray(category?.items) ? category.items : [];
    return items
      .filter((item) => item?.slug && !isRoomLikeSlug(item.slug))
      .map((item) => ({
        path: `/works/${item.slug}`,
        changefreq: "monthly",
        priority: "0.75",
        // createdAt を持ってるなら採用。無いならTODAY
        lastmod: formatDate(item.updatedAt || item.createdAt || TODAY),
      }));
  });

  const newsPages = await fetchNewsPages();

  const all = [...staticPages, ...workPages, ...newsPages];

  // 重複削除（pathをキー）
  const unique = Array.from(
    new Map(all.map((u) => [normalizePath(u.path), u])).values()
  );

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