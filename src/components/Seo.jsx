// src/components/Seo.jsx
import { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";

const SITE_NAME = "GUSHIKEN DESIGN";
const FALLBACK_ORIGIN = "https://gushikendesign.com";

const ensureLeadingSlash = (path = "/") =>
  String(path).startsWith("/") ? String(path) : `/${path}`;

const stripTrailingSlash = (value = "") => String(value).replace(/\/+$/, "");

/**
 * / 以外の末尾スラッシュを落とす。
 * ?query / #hash も落とす。
 */
const normalizePathname = (path = "/") => {
  const raw = ensureLeadingSlash(String(path || "/"));
  const noHash = raw.split("#")[0];
  const noQuery = noHash.split("?")[0];
  const cleaned = noQuery === "/" ? "/" : stripTrailingSlash(noQuery);

  return cleaned || "/";
};

const getOrigin = (origin) => {
  if (origin) return stripTrailingSlash(origin);

  const env = import.meta.env.VITE_SITE_ORIGIN;
  if (env) return stripTrailingSlash(env);

  /**
   * SEOでは本番ドメインを正規URLに固定する。
   * Vercel preview / localhost の origin が canonical に混ざるのを避ける。
   */
  return FALLBACK_ORIGIN;
};

const isAbsoluteHttpUrl = (value = "") => /^https?:\/\//i.test(String(value));

const toAbsoluteUrl = (origin, maybeUrl) => {
  if (!maybeUrl) return null;

  const value = String(maybeUrl);
  if (isAbsoluteHttpUrl(value)) return value;

  return `${origin}${ensureLeadingSlash(value)}`;
};

const normalizeJsonLd = (jsonLd) => {
  if (!jsonLd) return [];

  const list = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  return list.filter(Boolean);
};

/**
 * JSON-LD内で </script> 事故を避ける。
 */
const stringifyJsonLd = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");

/* --------------------------------------------------------------------------
   JS実行後：index.html側フォールバックSEOとの二重を潰す
-------------------------------------------------------------------------- */

function isHelmetTag(el) {
  // react-helmet-async は data-rh="true" を付与する
  return el?.getAttribute?.("data-rh") === "true";
}

function removeNonHelmet(selector) {
  if (typeof document === "undefined") return;

  const nodes = Array.from(document.head.querySelectorAll(selector));

  nodes.forEach((el) => {
    if (isHelmetTag(el)) return;
    el.parentNode?.removeChild(el);
  });
}

export default function Seo({
  title,
  description,

  /** 現在ページのパス。基本は pathname だけ渡す。 */
  path = "/",

  /** OGP画像。相対パスOK。 */
  imagePath = "/ogp-v4.png",

  /**
   * keywords は現代SEOでは基本使わない。
   * 渡しても出力しない。DEVでは警告だけ出す。
   */
  keywords = null,

  canonicalPath = null,
  canonicalUrl = null,
  origin = null,
  lang = "ja",

  noindex = false,
  ogType = "website",
  jsonLd = null,

  // Twitter
  twitterSite = null,
  twitterCreator = null,

  // extra
  themeColor = null,

  /**
   * titleの扱い
   * suffix: 「ページ名｜GUSHIKEN DESIGN」
   * raw: 渡したtitleをそのまま使用
   */
  titleMode = "suffix",
  titleSeparator = "｜",

  /** OGP画像サイズ */
  ogImageWidth = 1200,
  ogImageHeight = 630,

  /** OGP image type */
  ogImageType = "image/png",
}) {
  const safeTitle = String(title || SITE_NAME).trim();
  const safeDescription = description ? String(description).trim() : "";

  const siteOrigin = useMemo(() => getOrigin(origin), [origin]);

  const canonPath = useMemo(
    () => normalizePathname(canonicalPath ?? path),
    [canonicalPath, path]
  );

  const canonical = useMemo(() => {
    if (canonicalUrl && isAbsoluteHttpUrl(canonicalUrl)) {
      const cleaned = canonicalUrl.split("#")[0].split("?")[0];
      const normalized = cleaned.replace(/\/+$/, "");

      return normalized || FALLBACK_ORIGIN;
    }

    const url = `${siteOrigin}${canonPath}`;
    return canonPath === "/" ? `${siteOrigin}/` : url;
  }, [canonicalUrl, siteOrigin, canonPath]);

  const ogImage = useMemo(
    () => toAbsoluteUrl(siteOrigin, imagePath),
    [siteOrigin, imagePath]
  );

  const robots = noindex
    ? "noindex,follow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";

  const scripts = useMemo(() => normalizeJsonLd(jsonLd), [jsonLd]);

  const fullTitle = useMemo(() => {
    if (titleMode === "raw") return safeTitle;

    if (
      safeTitle === SITE_NAME ||
      safeTitle.endsWith(`${titleSeparator}${SITE_NAME}`)
    ) {
      return safeTitle;
    }

    return `${safeTitle}${titleSeparator}${SITE_NAME}`;
  }, [safeTitle, titleMode, titleSeparator]);

  const hasOgSize =
    ogImage &&
    Number.isFinite(Number(ogImageWidth)) &&
    Number.isFinite(Number(ogImageHeight)) &&
    Number(ogImageWidth) > 0 &&
    Number(ogImageHeight) > 0;

  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (!keywords) return;

    console.warn(
      "[Seo] `keywords` prop is ignored. Modern search engines do not use meta keywords."
    );
  }, [keywords]);

  useEffect(() => {
    if (typeof document === "undefined") return;

    /**
     * index.html の fallback meta を、JS実行後に削除する。
     * Helmetで出したページ別metaだけを残す。
     */
    removeNonHelmet('link[rel="canonical"]');

    removeNonHelmet('meta[name="description"]');
    removeNonHelmet('meta[name="robots"]');
    removeNonHelmet('meta[name="keywords"]');

    removeNonHelmet('meta[property^="og:"]');
    removeNonHelmet('meta[name^="twitter:"]');

    /**
     * JSON-LDは消さない。
     *
     * index.htmlには全ページ共通で成立する
     * WebSite / ProfessionalService / Person だけを置く。
     *
     * ページ固有の WebPage / FAQPage / Service は、
     * 各ページ側、またはこの Seo.jsx の jsonLd prop から追加する。
     */
  }, [
    canonical,
    fullTitle,
    safeDescription,
    robots,
    ogType,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogImageType,
  ]);

  return (
    <Helmet prioritizeSeoTags>
      {/* HTML */}
      <html lang={lang} />

      {/* Basic */}
      <title>{fullTitle}</title>

      {safeDescription ? (
        <meta name="description" content={safeDescription} />
      ) : null}

      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Theme */}
      {themeColor ? <meta name="theme-color" content={themeColor} /> : null}

      {/* OGP */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />

      {safeDescription ? (
        <meta property="og:description" content={safeDescription} />
      ) : null}

      <meta property="og:locale" content="ja_JP" />

      {ogImage ? <meta property="og:image" content={ogImage} /> : null}

      {ogImage ? (
        <meta property="og:image:secure_url" content={ogImage} />
      ) : null}

      {ogImage ? (
        <meta property="og:image:type" content={ogImageType} />
      ) : null}

      {ogImage ? <meta property="og:image:alt" content={fullTitle} /> : null}

      {hasOgSize ? (
        <meta property="og:image:width" content={String(ogImageWidth)} />
      ) : null}

      {hasOgSize ? (
        <meta property="og:image:height" content={String(ogImageHeight)} />
      ) : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />

      {safeDescription ? (
        <meta name="twitter:description" content={safeDescription} />
      ) : null}

      {ogImage ? <meta name="twitter:image" content={ogImage} /> : null}
      {ogImage ? <meta name="twitter:image:alt" content={fullTitle} /> : null}

      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}

      {twitterCreator ? (
        <meta name="twitter:creator" content={twitterCreator} />
      ) : null}

      {/* JSON-LD */}
      {scripts.length
        ? scripts.map((obj, index) => (
            <script
              key={`jsonld-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: stringifyJsonLd(obj),
              }}
            />
          ))
        : null}
    </Helmet>
  );
}