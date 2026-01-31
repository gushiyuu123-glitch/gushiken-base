// scripts/generateSitemap.js
import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";

// === あなたの本番URL ===
const BASE_URL = "https://gushikendesign.com";

// === あなたの作品構造 ===
import { worksData } from "../src/data/worksData.js";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  // 基本ページ
  const staticPages = [
    "/",
    "/works",
    "/price",
    "/contact"
  ];

  staticPages.forEach((page) => {
    sitemap.write({
      url: page,
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });
  });

  // 作品ページ
  worksData.forEach((category) => {
    category.items.forEach((item) => {
      sitemap.write({
        url: `/works/${item.slug.toLowerCase()}`,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: item.createdAt
          ? new Date(item.createdAt).toISOString()
          : new Date().toISOString(),
      });
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap).then((sm) => sm.toString());

  // public/sitemap.xml へ出力
  const sitemapPath = path.resolve("public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, xml);

  console.log("📦 sitemap.xml を生成しました →", sitemapPath);
}

generateSitemap();
