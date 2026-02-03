// ===============================
// microCMS API Client — Noah Pro Edition
// ===============================
import axios from "axios";

// --- ENV ---
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;

if (!API_KEY || !SERVICE_DOMAIN) {
  console.warn("❗ microCMS の環境変数が不足しています");
}

// --- Axios Client ---
export const client = axios.create({
  baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": API_KEY,
  },
  timeout: 8000,
});

// ===============================
// Utility: retry wrapper（最大2回）
// ===============================
async function fetchWithRetry(fn, retries = 2) {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, 300)); // 少し待つ
    return fetchWithRetry(fn, retries - 1);
  }
}

// ===============================
// ★ NEWS：一覧取得（limit / offset）
// ===============================
export async function getNewsList({ limit = 10, offset = 0 } = {}) {
  try {
    const res = await fetchWithRetry(() =>
      client.get("/news", {
        params: {
          limit,
          offset,
          orders: "-publishedAt", // 新着順
        },
      })
    );

    // API返却が空でも構造を揃える
    return {
      contents: res.data.contents || [],
      totalCount: res.data.totalCount || 0,
      limit,
      offset,
      error: null,
    };
  } catch (err) {
    console.error("❌ NEWS一覧取得エラー:", err);

    return {
      contents: [],
      totalCount: 0,
      limit,
      offset,
      error: true,
    };
  }
}

// ===============================
// ★ NEWS：詳細取得
// ===============================
export async function getNewsDetail(id) {
  if (!id) {
    console.error("❌ getNewsDetail：ID が未指定");
    return { data: null, error: true };
  }

  try {
    const res = await fetchWithRetry(() => client.get(`/news/${id}`));

    return {
      data: res.data,
      error: null,
    };
  } catch (err) {
    console.error(`❌ NEWS詳細取得エラー（id: ${id}）`, err);

    return {
      data: null,
      error: true,
    };
  }
}
