// src/components/SEOHead.jsx
import { useEffect } from "react";

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage,
  url,
  noindex = false,
  canonical = null,
}) {
  useEffect(() => {
    const head = document.head;

    /* --------------------------
       基本タイトル
    --------------------------- */
    if (title) document.title = title;

    /* --------------------------
       既存 meta を安全に上書きする関数
    --------------------------- */
    const upsert = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        // property= or name= を判断
        const key = selector.includes('property=') ? "property" : "name";
        el.setAttribute(key, selector.match(/["'](.+)["']/)[1]);
        head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    /* --------------------------
       Description / Keywords
    --------------------------- */
    upsert(`meta[name="description"]`, "content", description);
    upsert(`meta[name="keywords"]`, "content", keywords);

    /* --------------------------
       Canonical（任意）
    --------------------------- */
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        head.appendChild(link);
      }
      link.href = canonical;
    }

    /* --------------------------
       noindex（必要時のみ）
    --------------------------- */
    if (noindex) {
      upsert(`meta[name="robots"]`, "content", "noindex, nofollow");
    }

    /* --------------------------
       OGP 全セット（SNS最適化）
    --------------------------- */
    upsert(`meta[property="og:title"]`, "content", title);
    upsert(`meta[property="og:description"]`, "content", description);
    upsert(`meta[property="og:url"]`, "content", url);

    // og:image は絶対URLを推奨
    if (ogImage) {
      const abs = ogImage.startsWith("http")
        ? ogImage
        : `${location.origin}${ogImage}`;
      upsert(`meta[property="og:image"]`, "content", abs);
    }

    upsert(`meta[property="og:type"]`, "content", "website");
    upsert(`meta[property="og:site_name"]`, "content", "GUSHIKEN DESIGN");

    /* --------------------------
       Twitter Card
    --------------------------- */
    upsert(`meta[name="twitter:card"]`, "content", "summary_large_image");
    upsert(`meta[name="twitter:title"]`, "content", title);
    upsert(`meta[name="twitter:description"]`, "content", description);
    if (ogImage) {
      const abs = ogImage.startsWith("http")
        ? ogImage
        : `${location.origin}${ogImage}`;
      upsert(`meta[name="twitter:image"]`, "content", abs);
    }
  }, [title, description, keywords, ogImage, url, noindex, canonical]);

  return null;
}
