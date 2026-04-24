// src/lib/microcms.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_MICROCMS_API_KEY;
const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN;

const hasMicroCmsEnv = Boolean(API_KEY && SERVICE_DOMAIN);

if (!hasMicroCmsEnv) {
  console.warn("❗ microCMS の環境変数が設定されていません");
}

export const client = axios.create({
  baseURL: hasMicroCmsEnv
    ? `https://${SERVICE_DOMAIN}.microcms.io/api/v1`
    : "",
  headers: {
    "X-MICROCMS-API-KEY": API_KEY || "",
  },
  timeout: 8000,
});

function assertMicroCmsEnv() {
  if (!hasMicroCmsEnv) {
    throw new Error("microCMS の環境変数が設定されていません");
  }
}

export async function getNewsList({ limit = 10, offset = 0 } = {}) {
  assertMicroCmsEnv();

  try {
    const res = await client.get("/news", {
      params: {
        limit,
        offset,
        orders: "-publishedAt",
      },
    });

    return {
      contents: Array.isArray(res.data?.contents) ? res.data.contents : [],
      totalCount: res.data?.totalCount ?? 0,
      limit: res.data?.limit ?? limit,
      offset: res.data?.offset ?? offset,
    };
  } catch (err) {
    console.error("❌ NEWS一覧取得エラー:", err);
    throw err;
  }
}

export async function getNewsDetail(id) {
  assertMicroCmsEnv();

  if (!id) {
    throw new Error("getNewsDetail に ID がありません");
  }

  try {
    const res = await client.get(`/news/${id}`);
    return res.data;
  } catch (err) {
    console.error(`❌ NEWS詳細取得エラー（id: ${id}）`, err);
    throw err;
  }
}