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
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];

    const pages = worksData.flatMap((category) => {
      const items = Array.isArray(category?.items) ? category.items : [];

      return items
        .filter((item) => item?.slug)
        .map((item) => ({
          loc: `/works/${item.slug}`,
          lastmod: item.createdAt && !item.createdAt.includes("XX")
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

  const staticPages = [
    { loc: "/", lastmod: TODAY },
    { loc: "/works", lastmod: TODAY },
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
  console.log(`📄 static/work/news total: ${uniqueUrls.length}`);
  console.log(`🖼️ works count: ${workPages.length}`);
  console.log(`📰 news count: ${newsItems.length}`);
}

generateSitemap().catch((err) => {
  console.error("❌ sitemap生成エラー:", err);
  process.exit(1);
});