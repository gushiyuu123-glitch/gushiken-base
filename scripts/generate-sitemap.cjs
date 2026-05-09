// scripts/generate-sitemap.cjs
const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const SITE_URL = "https://gushikendesign.com";
const TODAY = new Date().toISOString().split("T")[0];

// ✅ news を sitemap に入れる上限（デフォ: 50）
const NEWS_SITEMAP_LIMIT = Number.parseInt(
  process.env.SITEMAP_NEWS_LIMIT || "50",
  10
);
const NEWS_LIMIT = Number.isFinite(NEWS_SITEMAP_LIMIT) && NEWS_SITEMAP_LIMIT > 0
  ? NEWS_SITEMAP_LIMIT
  : 50;

// microCMS env
const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.VITE_MICROCMS_SERVICE_DOMAIN;

const API_KEY =
  process.env.MICROCMS_API_KEY ||
  process.env.VITE_MICROCMS_API_KEY;

// ---------------- utils ----------------
function formatDate(dateString) {
  if (!dateString) return TODAY;
  const d = new Date(dateString);
  if (Number.isNaN(d.getTime())) return TODAY;
  return d.toISOString().split("T")[0];
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizePath(value) {
  if (!value) return "/";
  return value.startsWith("/") ? value : `/${value}`;
}

function createUrlXml({ loc, lastmod }) {
  return `  <url>
    <loc>${escapeXml(`${SITE_URL}${normalizePath(loc)}`)}</loc>
    <lastmod>${formatDate(lastmod)}</lastmod>
  </url>`;
}

// ✅ Room/Teaser/Intro は sitemap から除外（noindex 運用と整合）
function isRoomLikeSlug(slug) {
  if (!slug) return false;
  return /Room$/i.test(slug) || /Teaser$/i.test(slug) || /Intro$/i.test(slug);
}

// ---------------- fetch news (limited) ----------------
async function fetchLimitedNews() {
  if (!SERVICE_DOMAIN || !API_KEY) {
    console.warn("⚠️ microCMS env is missing. News URLs will be skipped.");
    return [];
  }

  const client = axios.create({
    baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    timeout: 10000,
  });

  // microCMS は 100 までが安全
  const pageSize = 100;
  let offset = 0;

  // まず totalCount を知りたいので 1回目で取得
  const first = await client.get("/news", {
    params: {
      limit: Math.min(pageSize, NEWS_LIMIT),
      offset,
      orders: "-publishedAt",
      fields: "id,publishedAt,updatedAt",
    },
  });

  const data1 = first.data || {};
  const totalCount = data1.totalCount || 0;

  const target = Math.min(totalCount, NEWS_LIMIT);
  let all = (data1.contents || []).slice(0, target);

  offset += all.length;

  while (offset < target) {
    const remain = target - offset;
    const res = await client.get("/news", {
      params: {
        limit: Math.min(pageSize, remain),
        offset,
        orders: "-publishedAt",
        fields: "id,publishedAt,updatedAt",
      },
    });

    const d = res.data || {};
    const chunk = d.contents || [];
    all = all.concat(chunk);
    offset += chunk.length;

    if (chunk.length === 0) break;
  }

  return all;
}

// ---------------- works from worksData ----------------
async function getWorkPages() {
  try {
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];

    const pages = worksData.flatMap((category) => {
      const items = Array.isArray(category?.items) ? category.items : [];

      return items
        .filter((item) => item?.slug)
        .filter((item) => !isRoomLikeSlug(item.slug)) // ✅ Room除外
        .map((item) => ({
          loc: `/works/${item.slug}`,
          lastmod:
            item.createdAt && !String(item.createdAt).includes("XX")
              ? item.createdAt
              : TODAY,
        }));
    });

    return pages;
  } catch (error) {
    console.warn("⚠️ worksData could not be imported. Work URLs will be skipped.");
    return [];
  }
}

// ---------------- generate sitemap ----------------
async function generateSitemap() {
  const newsItems = await fetchLimitedNews();
  const workPages = await getWorkPages();

  const latestNewsDate =
    newsItems.length > 0
      ? formatDate(newsItems[0].updatedAt || newsItems[0].publishedAt)
      : TODAY;

  const staticPages = [
    { loc: "/", lastmod: TODAY },
    { loc: "/works", lastmod: TODAY },

    // ✅ ブライダル入口を sitemap に入れる
    { loc: "/okinawa-bridal-website", lastmod: TODAY },

    { loc: "/price", lastmod: TODAY },
    { loc: "/contact", lastmod: TODAY },
    { loc: "/news", lastmod: latestNewsDate },
    { loc: "/terms", lastmod: TODAY },
    { loc: "/privacy", lastmod: TODAY },
    { loc: "/refund", lastmod: TODAY },
    { loc: "/legal", lastmod: TODAY },
  ];

  const newsPages = newsItems
    .filter((item) => item?.id)
    .map((item) => ({
      loc: `/news/${item.id}`,
      lastmod: item.updatedAt || item.publishedAt || TODAY,
    }));

  const allUrls = [...staticPages, ...workPages, ...newsPages];

  // slug重複・PICK UP重複などを除去
  const uniqueUrls = Array.from(
    new Map(allUrls.map((item) => [normalizePath(item.loc), item])).values()
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls.map(createUrlXml).join("\n")}
</urlset>
`;

  const outputPath = path.resolve(process.cwd(), "public", "sitemap.xml");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, xml, "utf-8");

  console.log(`✅ sitemap.xml generated: ${outputPath}`);
  console.log(`📄 total urls: ${uniqueUrls.length}`);
  console.log(`🖼️ works included (room excluded): ${workPages.length}`);
  console.log(`📰 news included (limit=${NEWS_LIMIT}): ${newsPages.length}`);
}

generateSitemap().catch((err) => {
  console.error("❌ sitemap生成エラー:", err);
  process.exit(1);
});