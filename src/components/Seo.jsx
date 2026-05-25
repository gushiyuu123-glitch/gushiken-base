// src/components/Seo.jsx
import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "GUSHIKEN DESIGN";
const FALLBACK_ORIGIN = "https://gushikendesign.com";

const ensureLeadingSlash = (p = "/") =>
  String(p).startsWith("/") ? String(p) : `/${p}`;

const stripTrailingSlash = (s = "") => String(s).replace(/\/+$/, "");

/** / 以外の末尾スラッシュを落とす。?query/#hashも落とす。 */
const normalizePathname = (p = "/") => {
  const raw = ensureLeadingSlash(String(p || "/"));
  const noHash = raw.split("#")[0];
  const noQuery = noHash.split("?")[0];
  const cleaned = noQuery === "/" ? "/" : stripTrailingSlash(noQuery);
  return cleaned || "/";
};

const getOrigin = (origin) => {
  if (origin) return stripTrailingSlash(origin);
  const env = import.meta.env.VITE_SITE_ORIGIN;
  if (env) return stripTrailingSlash(env);
  if (typeof window !== "undefined") return stripTrailingSlash(window.location.origin);
  return FALLBACK_ORIGIN;
};

const isAbsoluteHttpUrl = (v = "") => /^https?:\/\//i.test(String(v));

const toAbsoluteUrl = (origin, maybeUrl) => {
  if (!maybeUrl) return null;
  const v = String(maybeUrl);
  if (isAbsoluteHttpUrl(v)) return v;
  return `${origin}${ensureLeadingSlash(v)}`;
};

const normalizeJsonLd = (jsonLd) => {
  if (!jsonLd) return [];
  const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return arr.filter(Boolean);
};

// -----------------------------
// ✅ JS実行後：index.html側フォールバックSEOとの二重を潰す
// -----------------------------
function isHelmetTag(el) {
  // react-helmet(-async) は data-rh="true" を付与する
  return el?.getAttribute?.("data-rh") === "true";
}

function removeNonHelmet(selector) {
  const nodes = Array.from(document.head.querySelectorAll(selector));
  nodes.forEach((el) => {
    if (isHelmetTag(el)) return;
    el.parentNode?.removeChild(el);
  });
}

export default function Seo({
  title,
  description,

  /** 現在ページのパス（基本は pathname だけを渡すのが安全） */
  path = "/",

  /** OGP画像（相対パスOK） */
  imagePath = "/ogp-v4.png",

  // optional
  keywords = null, // ※必要なら。主役にしない
  canonicalPath = null, // pathと別にしたい時だけ（path形式推奨）
  canonicalUrl = null,  // ✅ どうしても絶対URLで指定したい時だけ
  origin = null,
  lang = "ja",

  noindex = false,
  ogType = "website", // "article" も可
  jsonLd = null,

  // Twitter (optional)
  twitterSite = null, // "@xxxx"
  twitterCreator = null,

  // extra (optional)
  themeColor = null,

  /** titleの扱い：デフォは suffix（SITE名を付ける） */
  titleMode = "suffix", // "suffix" | "raw"
  titleSeparator = "｜",

  /** OGP画像サイズ（分かるなら入れる。デフォは一般的な1200x630） */
  ogImageWidth = 1200,
  ogImageHeight = 630,

  /** OGP image type（png/jpg など） */
  ogImageType = "image/png",
}) {
  // titleが無いならSEO成立しないので描画しない
  if (!title) return null;

  const siteOrigin = getOrigin(origin);

  // canonicalは query/hash を落として正規化
  const canonPath = normalizePathname(canonicalPath ?? path);

  const canonical = useMemo(() => {
    if (canonicalUrl && isAbsoluteHttpUrl(canonicalUrl)) return canonicalUrl;
    return `${siteOrigin}${canonPath}`;
  }, [canonicalUrl, siteOrigin, canonPath]);

  const ogImage = useMemo(() => toAbsoluteUrl(siteOrigin, imagePath), [siteOrigin, imagePath]);

  // noindexでもfollowは残す（血流は殺さない）
  const robots = noindex
    ? "noindex,follow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

  const scripts = useMemo(() => normalizeJsonLd(jsonLd), [jsonLd]);

  const fullTitle =
    titleMode === "raw" || String(title).includes(SITE_NAME)
      ? title
      : `${title}${titleSeparator}${SITE_NAME}`;

  const hasOgSize =
    ogImage &&
    Number.isFinite(Number(ogImageWidth)) &&
    Number.isFinite(Number(ogImageHeight)) &&
    Number(ogImageWidth) > 0 &&
    Number(ogImageHeight) > 0;

  // ✅ JS実行後に「index.htmlのSEOタグ」との二重を解消
  // 非JSクローラーはここに到達しないので、フォールバックも成立する
  useEffect(() => {
    if (typeof document === "undefined") return;

    // 触るのは “SEO系だけ”
    removeNonHelmet('link[rel="canonical"]');
    removeNonHelmet('meta[name="description"]');
    removeNonHelmet('meta[name="robots"]');
    removeNonHelmet('meta[name="keywords"]');

    // OGP / Twitter（二重だと拾う値が割れる）
    removeNonHelmet('meta[property^="og:"]');
    removeNonHelmet('meta[name^="twitter:"]');
  }, [canonical, fullTitle, description, robots, ogType, ogImage, ogImageWidth, ogImageHeight, ogImageType]);

  return (
    <Helmet prioritizeSeoTags>
      {/* HTML */}
      <html lang={lang} />

      {/* Basic */}
      <title>{fullTitle}</title>
      {description ? <meta name="description" content={description} /> : null}
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
      <meta property="og:title" content={fullTitle} />
      {description ? <meta property="og:description" content={description} /> : null}
      <meta property="og:locale" content="ja_JP" />

      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {ogImage ? <meta property="og:image:secure_url" content={ogImage} /> : null}
      {ogImage ? <meta property="og:image:type" content={ogImageType} /> : null}
      {ogImage ? <meta property="og:image:alt" content={fullTitle} /> : null}
      {hasOgSize ? <meta property="og:image:width" content={String(ogImageWidth)} /> : null}
      {hasOgSize ? <meta property="og:image:height" content={String(ogImageHeight)} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description ? <meta name="twitter:description" content={description} /> : null}
      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      {ogImage ? <meta name="twitter:image:alt" content={fullTitle} /> : null}
      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
      {twitterCreator ? <meta name="twitter:creator" content={twitterCreator} /> : null}

      {/* JSON-LD (optional) */}
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