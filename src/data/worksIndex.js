// src/data/worksIndex.js
import { worksData } from "./worksData";

// WorkDetail / sitemap / 参照系で使うslug正規化を単一ソース化
export const normalizeWorkSlug = (str = "") =>
  String(str)
    .trim()
    .replace(/\s+/g, "")
    .replace(/[^\w-]/g, "")
    .toLowerCase();

export const allWorks = worksData.flatMap((category) =>
  Array.isArray(category?.items) ? category.items : []
);

// 同一slugが複数あっても「最初に出てきた定義」を採用
// PICK UP側の濃い定義を優先し、カテゴリ側で意図せず上書きされるのを防ぐ
export const worksBySlug = new Map();

if (import.meta.env?.DEV) {
  const seen = new Map();

  allWorks.forEach((work, index) => {
    const rawSlug = work?.slug;
    const key = normalizeWorkSlug(rawSlug);

    if (!rawSlug) {
      console.warn("[worksIndex] Missing slug:", {
        index,
        title: work?.title,
      });
      return;
    }

    if (!key) {
      console.warn("[worksIndex] Empty normalized slug:", {
        index,
        title: work?.title,
        slug: rawSlug,
      });
      return;
    }

    if (seen.has(key)) {
      const first = seen.get(key);

      console.warn("[worksIndex] Duplicate slug ignored:", {
        slug: rawSlug,
        normalized: key,
        firstTitle: first?.title,
        ignoredTitle: work?.title,
      });
      return;
    }

    seen.set(key, work);
  });
}

for (const work of allWorks) {
  const key = normalizeWorkSlug(work?.slug);

  if (!key) continue;
  if (!worksBySlug.has(key)) {
    worksBySlug.set(key, work);
  }
}

// sitemap / 参照用。
// 重複除去済み。PICK UP側など、先に出た定義が採用される。
export const uniqueWorks = Array.from(worksBySlug.values());