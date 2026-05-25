// scripts/generate-sitemap.cjs
const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const SITE_URL =
  (process.env.SITE_URL || process.env.VITE_SITE_ORIGIN || "https://gushikendesign.com")
    .replace(/\/+$/, "");

const TODAY = new Date().toISOString().split("T")[0];

// ✅ news を sitemap に入れる上限（デフォ: 50）
const NEWS_SITEMAP_LIMIT = Number.parseInt(process.env.SITEMAP_NEWS_LIMIT || "50", 10);
const NEWS_LIMIT =
  Number.isFinite(NEWS_SITEMAP_LIMIT) && NEWS_SITEMAP_LIMIT > 0 ? NEWS_SITEMAP_LIMIT : 50;

// microCMS env
const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN || process.env.VITE_MICROCMS_SERVICE_DOMAIN;

const API_KEY = process.env.MICROCMS_API_KEY || process.env.VITE_MICROCMS_API_KEY;

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
  const v = String(value);
  return v.startsWith("/") ? v : `/${v}`;
}

function isValidDateLike(s) {
  if (!s) return false;
  const str = String(s);
  if (str.includes("XX")) return false;
  const d = new Date(str);
  return !Number.isNaN(d.getTime());
}

function newerDate(a, b) {
  const da = new Date(formatDate(a)).getTime();
  const db = new Date(formatDate(b)).getTime();
  return db > da ? b : a;
}

function createUrlXml({ loc, lastmod }) {
  return `  <url>
    <loc>${escapeXml(`${SITE_URL}${normalizePath(loc)}`)}</loc>
    <lastmod>${formatDate(lastmod)}</lastmod>
  </url>`;
}

// ✅ Room/Teaser/Intro は sitemap から除外（noindex運用と整合）
// 将来 kebab-case にしても拾えるように強化
function isRoomLikeSlug(slug) {
  if (!slug) return false;
  const s = String(slug);
  return (
    /(?:^|[-_])room$/i.test(s) ||
    /Room$/i.test(s) ||
    /(?:^|[-_])teaser$/i.test(s) ||
    /Teaser$/i.test(s) ||
    /(?:^|[-_])intro$/i.test(s) ||
    /Intro$/i.test(s)
  );
}

function mergeUrl(map, { loc, lastmod }) {
  const key = normalizePath(loc);
  const prev = map.get(key);
  if (!prev) {
    map.set(key, { loc: key, lastmod });
    return;
  }
  // ✅ 同じlocは lastmod を“新しい方”に寄せる
  map.set(key, { loc: key, lastmod: newerDate(prev.lastmod, lastmod) });
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

  const pageSize = 100;
  let offset = 0;

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

// ---------------- works from worksIndex (preferred) ----------------
async function getWorkPages() {
  // ✅ worksIndex があれば重複排除済みの uniqueWorks を使う（最優先）
  try {
    const mod = await import("../src/data/worksIndex.js");
    const uniqueWorks = Array.isArray(mod.uniqueWorks) ? mod.uniqueWorks : [];
    return uniqueWorks
      .filter((w) => w?.slug)
      .filter((w) => !isRoomLikeSlug(w.slug))
      .map((w) => ({
        loc: `/works/${encodeURIComponent(String(w.slug))}`,
        lastmod: isValidDateLike(w.updatedAt)
          ? w.updatedAt
          : isValidDateLike(w.createdAt)
            ? w.createdAt
            : TODAY,
      }));
  } catch (_) {
    // fallback: worksData 直import（現状互換）
  }

  try {
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];
    const items = worksData.flatMap((c) => (Array.isArray(c?.items) ? c.items : []));

    return items
      .filter((w) => w?.slug)
      .filter((w) => !isRoomLikeSlug(w.slug))
      .map((w) => ({
        loc: `/works/${encodeURIComponent(String(w.slug))}`,
        lastmod: isValidDateLike(w.updatedAt)
          ? w.updatedAt
          : isValidDateLike(w.createdAt)
            ? w.createdAt
            : TODAY,
      }));
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

  const latestWorkDate =
    workPages.length > 0
      ? workPages.reduce((acc, p) => newerDate(acc, p.lastmod), workPages[0].lastmod)
      : TODAY;

  const staticPages = [
    { loc: "/", lastmod: TODAY },
    { loc: "/works", lastmod: latestWorkDate },
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
      loc: `/news/${encodeURIComponent(String(item.id))}`,
      lastmod: item.updatedAt || item.publishedAt || TODAY,
    }));

  // ✅ “locごとにlastmod最大” で確定させる
  const map = new Map();
  [...staticPages, ...workPages, ...newsPages].forEach((u) => mergeUrl(map, u));
  const uniqueUrls = Array.from(map.values());

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