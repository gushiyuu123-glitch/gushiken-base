const fs = require("node:fs");
const path = require("node:path");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const SITE_URL = "https://gushikendesign.com";
const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  throw new Error("MICROCMS_SERVICE_DOMAIN または MICROCMS_API_KEY が未設定です。");
}

const client = axios.create({
  baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": API_KEY,
  },
  timeout: 10000,
});

async function fetchAllNews() {
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

    const data = res.data;
    totalCount = data.totalCount || 0;
    allContents = allContents.concat(data.contents || []);
    offset += limit;
  } while (offset < totalCount);

  return allContents;
}

function formatDate(dateString) {
  if (!dateString) {
    return new Date().toISOString().split("T")[0];
  }

  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return new Date().toISOString().split("T")[0];
  }

  return date.toISOString().split("T")[0];
}

function createUrlXml(loc, lastmod) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

async function generateSitemap() {
  const newsItems = await fetchAllNews();

  const latestNewsDate =
    newsItems.length > 0
      ? formatDate(newsItems[0].updatedAt || newsItems[0].publishedAt)
      : formatDate(new Date().toISOString());

  const staticPages = [
    { loc: "/", lastmod: latestNewsDate },
    { loc: "/works", lastmod: latestNewsDate },
    { loc: "/price", lastmod: latestNewsDate },
    { loc: "/contact", lastmod: latestNewsDate },
    { loc: "/news", lastmod: latestNewsDate },
  ];

  const newsPages = newsItems
    .filter((item) => item && item.id)
    .map((item) => ({
      loc: `/news/${item.id}`,
      lastmod: formatDate(item.updatedAt || item.publishedAt),
    }));

  const urls = [...staticPages, ...newsPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => createUrlXml(`${SITE_URL}${url.loc}`, url.lastmod))
  .join("\n")}
</urlset>
`;

  const outputPath = path.resolve(process.cwd(), "public", "sitemap.xml");

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, xml, "utf-8");

  console.log(`✅ sitemap.xml generated: ${outputPath}`);
  console.log(`📰 news count: ${newsItems.length}`);
}

generateSitemap().catch((err) => {
  console.error("❌ sitemap生成エラー:", err);
  process.exit(1);
});