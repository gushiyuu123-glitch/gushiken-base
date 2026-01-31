// scripts/generate-sitemap.js
import { writeFileSync } from "fs";
import { worksData } from "../src/data/worksData.js";

const SITE = "https://gushikendesign.com";

const pages = [
  "",
  "/works",
  "/price",
  "/contact",
  "/terms",
  "/privacy",
  "/refund",
  "/legal",
];

// slug抽出（大小混在に対応）
const workSlugs = worksData.flatMap((cat) =>
  cat.items.map((item) => `/works/${item.slug}`)
);

const urls = [...pages, ...workSlugs];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => {
    return `<url>
  <loc>${SITE}${u}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`;
  })
  .join("")}
</urlset>`;

writeFileSync("./public/sitemap.xml", xml);
console.log("✔ sitemap.xml generated");
