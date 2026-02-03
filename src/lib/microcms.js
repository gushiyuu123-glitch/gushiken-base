// ===============================
// microCMS API Client（完全版）
// ===============================
import axios from "axios";

// --- 環境変数 ---
const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;

if (!API_KEY || !SERVICE_DOMAIN) {
  console.warn("❗ microCMS の環境変数が設定されていません");
}

// --- Axios クライアント ---
export const client = axios.create({
  baseURL: `https://${SERVICE_DOMAIN}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": API_KEY,
  },
  timeout: 8000,
});

// ===================================
// ★ NEWS：一覧取得（limit / offset）
// ===================================
export async function getNewsList({ limit = 10, offset = 0 } = {}) {
  try {
    const res = await client.get("/news", {
      params: {
        limit,
        offset,
        orders: "-publishedAt", // 新しい順
      },
    });

    return res.data;
  } catch (err) {
    console.error("❌ NEWS一覧取得エラー:", err);
    return { contents: [] };
  }
}

// ===================================
// ★ NEWS：詳細取得
// ===================================
export async function getNewsDetail(id) {
  if (!id) {
    console.error("❌ getNewsDetail に ID がありません");
    return null;
  }

  try {
    const res = await client.get(`/news/${id}`);
    return res.data;
  } catch (err) {
    console.error(`❌ NEWS詳細取得エラー（id: ${id}）`, err);
    return null;
  }
}


