// scripts/generate-sitemap.cjs
const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const SITE_URL = "https://gushikendesign.com";

const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.VITE_MICROCMS_SERVICE_DOMAIN;

const API_KEY =
  process.env.MICROCMS_API_KEY ||
  process.env.VITE_MICROCMS_API_KEY;

const TODAY = new Date().toISOString().split("T")[0];

// ✅ sitemapに入れない系（noindex運用と整合）
const ROOM_LIKE_RE = /(Room|Teaser|Intro)$/i;

// ✅ news詳細を入れるなら上限（必要なら env で上書き）
const NEWS_DETAIL_LIMIT = Number(
  process.env.SITEMAP_NEWS_DETAIL_LIMIT ?? 30
);

function formatDate(dateString) {
  if (!dateString) return TODAY;

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return TODAY;

  return date.toISOString().split("T")[0];
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

async function fetchAllNews() {
  if (!SERVICE_DOMAIN || !API_KEY) {
    console.warn("⚠️ microCMS env is missing. News URLs will be skipped.");
    return [];
  }

  const client = axios.create({
    baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
    },
    timeout: 10000,
  });

  const limit = 100;
  let offset = 0;
  let totalCount = 0;
  let allContents = [];

  do {
    const res = await client.get("/news", {
      params: {
        limit,
        offset,
        orders: "-publishedAt",
        fields: "id,publishedAt,updatedAt",
      },
    });

    const data = res.data || {};
    totalCount = data.totalCount || 0;
    allContents = allContents.concat(data.contents || []);
    offset += limit;
  } while (offset < totalCount);

  return allContents;
}

async function getWorkPages() {
  try {
    // worksData.js が ESM でも .cjs から dynamic import で読める
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];

    const pages = worksData.flatMap((category) => {
      const items = Array.isArray(category?.items) ? category.items : [];

      return items
        .filter((item) => item?.slug)
        // ✅ Room/Teaser/Intro は sitemap から外す
        .filter((item) => !ROOM_LIKE_RE.test(String(item.slug)))
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

async function generateSitemap() {
  const newsItems = await fetchAllNews();
  const workPages = await getWorkPages();

  const latestNewsDate =
    newsItems.length > 0
      ? formatDate(newsItems[0].updatedAt || newsItems[0].publishedAt)
      : TODAY;

  // ✅ sitemapで拾わせたい “骨格＋入口” だけを固定で載せる
  const staticPages = [
    { loc: "/", lastmod: TODAY },
    { loc: "/works", lastmod: TODAY },

    // ✅ 入口（主戦場）を必ず入れる
    { loc: "/okinawa-bridal-website", lastmod: TODAY },

    { loc: "/price", lastmod: TODAY },
    { loc: "/contact", lastmod: TODAY },
    { loc: "/news", lastmod: latestNewsDate },

    { loc: "/terms", lastmod: TODAY },
    { loc: "/privacy", lastmod: TODAY },
    { loc: "/refund", lastmod: TODAY },
    { loc: "/legal", lastmod: TODAY },
  ];

  // ✅ news詳細は上限つき（膨張を防ぐ）
  const newsPages = newsItems
    .filter((item) => item?.id)
    .slice(0, Math.max(0, NEWS_DETAIL_LIMIT))
    .map((item) => ({
      loc: `/news/${item.id}`,
      lastmod: item.updatedAt || item.publishedAt || TODAY,
    }));

  const allUrls = [...staticPages, ...workPages, ...newsPages];

  // slug重複・PICK UP重複を除去
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
  console.log(`📄 total: ${uniqueUrls.length}`);
  console.log(`🖼️ works (non-room) count: ${workPages.length}`);
  console.log(`📰 news detail count: ${newsPages.length} (limit=${NEWS_DETAIL_LIMIT})`);
}

generateSitemap().catch((err) => {
  console.error("❌ sitemap生成エラー:", err);
  process.exit(1);
});