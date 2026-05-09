import { Helmet } from "react-helmet-async";

const FALLBACK_ORIGIN = "https://gushikendesign.com";
const ensureLeadingSlash = (p) => (p?.startsWith("/") ? p : `/${p || ""}`);

export default function Seo({
  title,
  description,
  path = "/",
  imagePath = "/ogp-v3.png",
  noindex = false,
  jsonLd = null,
  origin = null,
  ogType = "website", // ← news詳細は "article" にできる
}) {
  const siteOrigin =
    origin ||
    import.meta.env.VITE_SITE_ORIGIN ||
    (typeof window !== "undefined" ? window.location.origin : FALLBACK_ORIGIN);

  const canonical = `${siteOrigin}${ensureLeadingSlash(path)}`;
  const ogImage = `${siteOrigin}${ensureLeadingSlash(imagePath)}`;

  // ✅ Room系は noindex でも “follow” は残す（血流は殺さない）
  // ✅ index対象は "index,follow"
const robots = noindex
  ? "noindex,follow"
  : "index,follow,max-image-preview:large";

  return (
    <Helmet>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* OGP */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="GUSHIKEN DESIGN" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD (optional) */}
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
    </Helmet>
  );
}