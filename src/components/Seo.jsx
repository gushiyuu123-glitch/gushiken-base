import { Helmet } from "react-helmet-async";

const SITE_NAME = "GUSHIKEN DESIGN";
const FALLBACK_ORIGIN = "https://gushikendesign.com";

const ensureLeadingSlash = (p = "/") => (String(p).startsWith("/") ? String(p) : `/${p}`);
const stripTrailingSlash = (s = "") => String(s).replace(/\/+$/, "");

const getOrigin = (origin) => {
  if (origin) return stripTrailingSlash(origin);
  const env = import.meta.env.VITE_SITE_ORIGIN;
  if (env) return stripTrailingSlash(env);
  if (typeof window !== "undefined") return stripTrailingSlash(window.location.origin);
  return FALLBACK_ORIGIN;
};

const toAbsoluteUrl = (origin, maybeUrl) => {
  if (!maybeUrl) return null;
  const v = String(maybeUrl);
  if (/^https?:\/\//i.test(v)) return v;
  return `${origin}${ensureLeadingSlash(v)}`;
};

const normalizeJsonLd = (jsonLd) => {
  if (!jsonLd) return [];
  const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return arr.filter(Boolean);
};

export default function Seo({
  title,
  description,
  path = "/",
  imagePath = "/ogp-v4.png",

  // optional
  keywords = null, // ※欲しいなら入れる、でも主役にしない
  canonicalPath = null, // pathと別にしたい時だけ
  origin = null,
  lang = "ja",

  noindex = false,
  ogType = "website", // "article" も可
  jsonLd = null,

  // Twitter (optional)
  twitterSite = null, // "@xxxx" など。無ければ出さない
  twitterCreator = null,

  // extra (optional)
  themeColor = null, // 白テーマページで使うなら "#f8f5f0" とか
}) {
  const siteOrigin = getOrigin(origin);

  const canonical = `${siteOrigin}${ensureLeadingSlash(canonicalPath ?? path)}`;
  const ogImage = toAbsoluteUrl(siteOrigin, imagePath);

  // noindexでもfollowは残す（血流は殺さない）
  const robots = noindex
    ? "noindex,follow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

  const scripts = normalizeJsonLd(jsonLd);

  // 入力不足は早期return（変なmetaを出さない）
  if (!title || !description) return null;

  return (
    <Helmet prioritizeSeoTags>
      {/* HTML */}
      <html lang={lang} />

      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Theme (optional) */}
      {themeColor ? <meta name="theme-color" content={themeColor} /> : null}

      {/* OGP */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {ogImage ? <meta property="og:image:alt" content={title} /> : null}
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
      {twitterCreator ? <meta name="twitter:creator" content={twitterCreator} /> : null}

      {/* JSON-LD (optional) : 配列もOK（WebPage + FAQPage を2枚刺しできる） */}
      {scripts.length
        ? scripts.map((obj, i) => (
            <script
              key={`jsonld-${i}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
            />
          ))
        : null}
    </Helmet>
  );
}