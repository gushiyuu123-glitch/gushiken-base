// scripts/generate-sitemap.js
import { writeFileSync } from "fs";
import { worksData } from "../src/data/worksData.js";

const SITE = "https://gushikendesign.com";
const TODAY = new Date().toISOString().split("T")[0];

const staticPages = [
  {
    path: "",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/works",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/price",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/contact",
    changefreq: "monthly",
    priority: "0.85",
  },
  {
    path: "/news",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/terms",
    changefreq: "yearly",
    priority: "0.35",
  },
  {
    path: "/privacy",
    changefreq: "yearly",
    priority: "0.35",
  },
  {
    path: "/refund",
    changefreq: "yearly",
    priority: "0.35",
  },
  {
    path: "/legal",
    changefreq: "yearly",
    priority: "0.35",
  },
];

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function normalizePath(path) {
  if (!path) return "";
  return path.startsWith("/") ? path : `/${path}`;
}

const workPages = worksData.flatMap((category) => {
  const items = Array.isArray(category?.items) ? category.items : [];

  return items
    .filter((item) => item?.slug)
    .map((item) => ({
      path: `/works/${item.slug}`,
      changefreq: "monthly",
      priority: "0.75",
    }));
});

const urls = [...staticPages, ...workPages];

// 重複削除
const uniqueUrls = Array.from(
  new Map(urls.map((item) => [normalizePath(item.path), item])).values()
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map((item) => {
    const path = normalizePath(item.path);
    const loc = `${SITE}${path}`;

    return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

writeFileSync("./public/sitemap.xml", xml, "utf-8");

console.log(`🗺️ sitemap.xml generated: ${uniqueUrls.length} pages`);