// src/data/worksIndex.js
import { worksData } from "./worksData";

// WorkDetailと同じ正規化を“単一ソース”化
export const normalizeWorkSlug = (str = "") =>
  String(str).replace(/\s+/g, "").replace(/[^\w-]/g, "").toLowerCase();

export const allWorks = worksData.flatMap((c) => c.items);

// ✅ 同一slugが複数あっても「最初に出てきた定義」を採用（意図せぬ上書き防止）
export const worksBySlug = new Map();
for (const w of allWorks) {
  const key = normalizeWorkSlug(w.slug);
  if (!worksBySlug.has(key)) worksBySlug.set(key, w);
}

// ✅ sitemap/参照用（重複排除済み）
export const uniqueWorks = Array.from(worksBySlug.values());