// scripts/generate-sitemap.cjs
import { writeFileSync } from "fs";
import { worksData } from "../src/data/worksData.js";

const SITE = "https://gushikendesign.com";

const staticPages = [
  "",
  "/works",
  "/price",
  "/contact",
];

const workPages = worksData.flatMap((block) =>
  block.items.map((item) => `/works/${item.slug}`)
);

const urls = [...staticPages, ...workPages];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `
  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("./public/sitemap.xml", sitemapXml, "utf-8");

console.log("🗺️ Sitemap generated:", urls.length, "pages");
