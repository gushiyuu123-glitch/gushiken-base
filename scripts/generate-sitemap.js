// scripts/generate-sitemap.js
import fs from "node:fs";
import path from "node:path";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const FALLBACK_SITE = "https://gushikendesign.com";

const SITE = normalizeOrigin(
  process.env.SITE_URL || process.env.VITE_SITE_ORIGIN || FALLBACK_SITE
);

const TODAY = new Date().toISOString().split("T")[0];

// newsは上限を切る
const NEWS_MAX = Number(process.env.SITEMAP_NEWS_MAX || 60);

// microCMS env（無ければ news はスキップ）
const SERVICE_DOMAIN =
  process.env.MICROCMS_SERVICE_DOMAIN ||
  process.env.VITE_MICROCMS_SERVICE_DOMAIN;

const API_KEY =
  process.env.MICROCMS_API_KEY || process.env.VITE_MICROCMS_API_KEY;

// App.jsx の INDEXED_WORK_SLUGS と必ず揃える
const INDEXED_WORK_SLUGS = new Set([
  "vow-in-light",
  "kou-ryui",
  "black-papillon",
]);

// worksIndex 側に無くても、代表作品は必ずsitemapに載せる
const REQUIRED_WORK_PAGES = [
  {
    slug: "vow-in-light",
    lastmod: TODAY,
  },
  {
    slug: "kou-ryui",
    lastmod: TODAY,
  },
  {
    slug: "black-papillon",
    lastmod: TODAY,
  },
];

/* ---------------- utils ---------------- */

function normalizeOrigin(value) {
  const raw = String(value || FALLBACK_SITE).trim();

  try {
    const url = new URL(raw);
    return url.origin.replace(/\/+$/, "");
  } catch {
    return raw.replace(/\/+$/, "") || FALLBACK_SITE;
  }
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function stripTrailingSlash(value = "") {
  return String(value).replace(/\/+$/, "");
}

function normalizePath(p) {
  if (!p) return "/";

  const raw = String(p).split("#")[0].split("?")[0];
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;

  if (withSlash === "/") return "/";

  return stripTrailingSlash(withSlash) || "/";
}

function normalizeSlug(slug = "") {
  return String(slug || "").trim().toLowerCase();
}

function formatDate(dateString) {
  if (!dateString) return TODAY;

  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? TODAY : d.toISOString().split("T")[0];
}

function newerDate(a, b) {
  const fa = formatDate(a);
  const fb = formatDate(b);

  const da = new Date(fa).getTime();
  const db = new Date(fb).getTime();

  return db > da ? fb : fa;
}

// Room / Teaser / Intro は sitemap から除外
function isRoomLikeSlug(slug = "") {
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

function shouldIndexWorkSlug(slug = "") {
  const normalized = normalizeSlug(slug);

  if (!normalized) return false;
  if (isRoomLikeSlug(slug)) return false;

  return INDEXED_WORK_SLUGS.has(normalized);
}

function urlXml({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${escapeXml(lastmod || TODAY)}</lastmod>
    ${changefreq ? `<changefreq>${escapeXml(changefreq)}</changefreq>` : ""}
    ${priority ? `<priority>${escapeXml(priority)}</priority>` : ""}
  </url>`;
}

// 同じpathは lastmod を新しい方へ
function mergeUrl(map, item) {
  const key = normalizePath(item.path);
  const prev = map.get(key);

  if (!prev) {
    map.set(key, {
      ...item,
      path: key,
      lastmod: formatDate(item.lastmod),
    });
    return;
  }

  map.set(key, {
    ...prev,
    ...item,
    path: key,
    lastmod: newerDate(prev.lastmod, item.lastmod),
  });
}

/* ---------------- fetch news limited ---------------- */

async function fetchNewsPages() {
  if (!SERVICE_DOMAIN || !API_KEY) {
    console.log("📰 microCMS env missing. News pages skipped.");
    return [];
  }

  const hardLimit = Math.max(0, NEWS_MAX);
  if (hardLimit === 0) return [];

  const client = axios.create({
    baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
    headers: { "X-MICROCMS-API-KEY": API_KEY },
    timeout: 10000,
  });

  const pages = [];
  let offset = 0;

  try {
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
      const contents = Array.isArray(data.contents) ? data.contents : [];

      if (contents.length === 0) break;

      for (const item of contents) {
        if (!item?.id) continue;

        pages.push({
          path: `/news/${encodeURIComponent(String(item.id))}`,
          lastmod: formatDate(item.updatedAt || item.publishedAt),
          changefreq: "monthly",
          priority: "0.55",
        });

        if (pages.length >= hardLimit) break;
      }

      offset += limit;

      if (offset >= (data.totalCount || 0)) break;
    }
  } catch (error) {
    console.warn("📰 microCMS news fetch failed. News pages skipped.");
    console.warn(error?.message || error);
    return pages;
  }

  return pages;
}

/* ---------------- works ---------------- */

async function getWorksFromIndex() {
  try {
    const mod = await import("../src/data/worksIndex.js");
    const uniqueWorks = Array.isArray(mod.uniqueWorks) ? mod.uniqueWorks : [];

    return uniqueWorks
      .filter((w) => w?.slug)
      .filter((w) => shouldIndexWorkSlug(w.slug))
      .map((w) => ({
        path: `/works/${encodeURIComponent(String(w.slug))}`,
        changefreq: "monthly",
        priority: "0.8",
        lastmod: formatDate(w.updatedAt || w.createdAt || TODAY),
      }));
  } catch (error) {
    console.warn("🖼️ worksIndex import failed. Falling back to worksData.");
    console.warn(error?.message || error);
    return [];
  }
}

async function getWorksFromData() {
  try {
    const mod = await import("../src/data/worksData.js");
    const worksData = Array.isArray(mod.worksData) ? mod.worksData : [];
    const items = worksData.flatMap((category) =>
      Array.isArray(category?.items) ? category.items : []
    );

    return items
      .filter((w) => w?.slug)
      .filter((w) => shouldIndexWorkSlug(w.slug))
      .map((w) => ({
        path: `/works/${encodeURIComponent(String(w.slug))}`,
        changefreq: "monthly",
        priority: "0.8",
        lastmod: formatDate(w.updatedAt || w.createdAt || TODAY),
      }));
  } catch (error) {
    console.warn("🖼️ worksData import failed. Required works only.");
    console.warn(error?.message || error);
    return [];
  }
}

async function getWorkPages() {
  const fromIndex = await getWorksFromIndex();
  const fromData = fromIndex.length ? [] : await getWorksFromData();

  const required = REQUIRED_WORK_PAGES.map((w) => ({
    path: `/works/${encodeURIComponent(String(w.slug))}`,
    changefreq: "monthly",
    priority: "0.8",
    lastmod: formatDate(w.lastmod || TODAY),
  }));

  const map = new Map();

  [...required, ...fromIndex, ...fromData].forEach((page) => {
    mergeUrl(map, page);
  });

  return Array.from(map.values());
}

/* ---------------- output ---------------- */

function writeSitemap(xml) {
  const publicOut = path.resolve(process.cwd(), "public", "sitemap.xml");
  const distOut = path.resolve(process.cwd(), "dist", "sitemap.xml");

  fs.mkdirSync(path.dirname(publicOut), { recursive: true });
  fs.writeFileSync(publicOut, xml, "utf-8");

  console.log(`✅ wrote: ${path.relative(process.cwd(), publicOut)}`);

  // build後に実行しても事故らない保険
  if (fs.existsSync(path.dirname(distOut))) {
    fs.writeFileSync(distOut, xml, "utf-8");
    console.log(`✅ wrote: ${path.relative(process.cwd(), distOut)}`);
  }
}

/* ---------------- generate ---------------- */

async function generate() {
  const workPages = await getWorkPages();
  const newsPages = await fetchNewsPages();

  const latestWork = workPages.reduce(
    (acc, page) => newerDate(acc, page.lastmod),
    TODAY
  );

  const latestNews = newsPages.reduce(
    (acc, page) => newerDate(acc, page.lastmod),
    TODAY
  );

  // 正規URLだけを載せる。
  // リダイレクト用URL、noindexページ、実験ページ、薄い作品ページは載せない。
  const staticPages = [
    {
      path: "/",
      changefreq: "weekly",
      priority: "1.0",
      lastmod: TODAY,
    },
    {
      path: "/works",
      changefreq: "weekly",
      priority: "0.9",
      lastmod: latestWork,
    },

    // 集客ページ
    {
      path: "/okinawa",
      changefreq: "weekly",
      priority: "0.9",
      lastmod: TODAY,
    },
    {
      path: "/online",
      changefreq: "weekly",
      priority: "0.9",
      lastmod: TODAY,
    },

    // 信頼・相談ページ
    {
      path: "/price",
      changefreq: "monthly",
      priority: "0.85",
      lastmod: TODAY,
    },
    {
      path: "/contact",
      changefreq: "monthly",
      priority: "0.85",
      lastmod: TODAY,
    },
    {
      path: "/about",
      changefreq: "monthly",
      priority: "0.75",
      lastmod: TODAY,
    },

    // 制作ログ・更新
    {
      path: "/news",
      changefreq: "weekly",
      priority: "0.7",
      lastmod: latestNews,
    },

    // 制作の裏側
    {
      path: "/sketchbook",
      changefreq: "monthly",
      priority: "0.55",
      lastmod: TODAY,
    },

    // 法務系
    {
      path: "/terms",
      changefreq: "yearly",
      priority: "0.35",
      lastmod: TODAY,
    },
    {
      path: "/privacy",
      changefreq: "yearly",
      priority: "0.35",
      lastmod: TODAY,
    },
    {
      path: "/refund",
      changefreq: "yearly",
      priority: "0.35",
      lastmod: TODAY,
    },
    {
      path: "/legal",
      changefreq: "yearly",
      priority: "0.35",
      lastmod: TODAY,
    },
  ];

  const all = [...staticPages, ...workPages, ...newsPages];

  // 重複排除 + lastmod最大
  const map = new Map();

  all.forEach((url) => {
    mergeUrl(map, url);
  });

  const unique = Array.from(map.values()).sort((a, b) =>
    normalizePath(a.path).localeCompare(normalizePath(b.path), "en")
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

  writeSitemap(xml);

  console.log(`🗺️ sitemap.xml generated: ${unique.length} urls`);
  console.log(`🌐 site: ${SITE}`);
  console.log(`🧭 static in sitemap: ${staticPages.length}`);
  console.log(`📰 news in sitemap: ${newsPages.length} (cap=${NEWS_MAX})`);
  console.log(`🖼️ works in sitemap: ${workPages.length} (indexed works only)`);
}

generate().catch((err) => {
  console.error("❌ sitemap generation failed:", err);
  process.exit(1);
});