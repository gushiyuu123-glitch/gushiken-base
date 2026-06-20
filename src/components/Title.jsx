// src/components/Title.jsx
import { Helmet } from "react-helmet-async";

const SITE_NAME = "GUSHIKEN DESIGN";
const DEFAULT_TITLE = "GUSHIKEN DESIGN｜沖縄・浦添のホームページ制作・Webデザイン";
const SEPARATOR = " | ";
const MAX_TITLE_LENGTH = 64;

function normalizeText(value) {
  if (value == null) return "";

  if (Array.isArray(value)) {
    return value
      .filter(Boolean)
      .map((item) => String(item).trim())
      .filter(Boolean)
      .join(" ");
  }

  return String(value).replace(/\s+/g, " ").trim();
}

function hasSiteName(title) {
  return title.toLowerCase().includes(SITE_NAME.toLowerCase());
}

function trimTitle(title, max = MAX_TITLE_LENGTH) {
  if (!title || title.length <= max) return title;

  return `${title.slice(0, max - 1).trim()}…`;
}

function buildTitle(text, mode = "suffix") {
  const cleanText = normalizeText(text);

  if (!cleanText) return DEFAULT_TITLE;

  if (mode === "raw" || hasSiteName(cleanText)) {
    return trimTitle(cleanText);
  }

  if (mode === "prefix") {
    return trimTitle(`${SITE_NAME}${SEPARATOR}${cleanText}`);
  }

  return trimTitle(`${cleanText}${SEPARATOR}${SITE_NAME}`);
}

export default function Title({
  text,
  mode = "suffix",
  description,
  noIndex = false,
}) {
  const fullTitle = buildTitle(text, mode);
  const cleanDescription = normalizeText(description);

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>

      <meta property="og:title" content={fullTitle} />
      <meta name="twitter:title" content={fullTitle} />

      {cleanDescription && (
        <>
          <meta name="description" content={cleanDescription} />
          <meta property="og:description" content={cleanDescription} />
          <meta name="twitter:description" content={cleanDescription} />
        </>
      )}

      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
}