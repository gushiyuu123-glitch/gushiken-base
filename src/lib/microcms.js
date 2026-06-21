// src/lib/microcms.js
import axios from "axios";

/* =========================================================
   NEWS
   既存運用：触らない
========================================================= */

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

/**
 * PWA / ホーム画面追加時に古いAPIレスポンスを掴ませないための
 * キャッシュバスター。
 */
function createCacheBuster() {
  return Date.now();
}

export async function getNewsList({ limit = 10, offset = 0 } = {}) {
  assertMicroCmsEnv();

  try {
    const res = await client.get("/news", {
      params: {
        limit,
        offset,
        orders: "-publishedAt",

        // PWA / ホーム画面追加アプリの古いNEWSキャッシュ対策
        _t: createCacheBuster(),
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
    const res = await client.get(`/news/${id}`, {
      params: {
        // 詳細ページも古い記事データを掴まないようにする
        _t: createCacheBuster(),
      },
    });

    return res.data;
  } catch (err) {
    console.error(`❌ NEWS詳細取得エラー（id: ${id}）`, err);
    throw err;
  }
}

/* =========================================================
   SKETCHBOOK
   専用環境変数で分離
   microCMS endpoint: /sketchbook
========================================================= */

const SKETCH_API_KEY = import.meta.env.VITE_MICROCMS_SKETCH_API_KEY;
const SKETCH_SERVICE_DOMAIN = import.meta.env
  .VITE_MICROCMS_SKETCH_SERVICE_DOMAIN;

const hasSketchEnv = Boolean(SKETCH_API_KEY && SKETCH_SERVICE_DOMAIN);

if (!hasSketchEnv) {
  console.warn("❗ Sketchbook用のmicroCMS環境変数が設定されていません");
}

const sketchClient = axios.create({
  baseURL: hasSketchEnv
    ? `https://${SKETCH_SERVICE_DOMAIN}.microcms.io/api/v1`
    : "",
  headers: {
    "X-MICROCMS-API-KEY": SKETCH_API_KEY || "",
  },
  timeout: 8000,
});

function assertSketchEnv() {
  if (!hasSketchEnv) {
    throw new Error("Sketchbook用のmicroCMS環境変数が設定されていません");
  }
}

export async function getSketchbookList({ limit = 100, offset = 0 } = {}) {
  assertSketchEnv();

  try {
    const res = await sketchClient.get("/sketchbook", {
      params: {
        limit,
        offset,
        orders: "-publishedAt",

        // Sketchbookで使うフィールドだけ取得
        fields: "id,title,image,type,note,publishedAt,createdAt",

        // 古い画像リストを掴ませないためのキャッシュ対策
        _t: createCacheBuster(),
      },
    });

    return {
      contents: Array.isArray(res.data?.contents) ? res.data.contents : [],
      totalCount: res.data?.totalCount ?? 0,
      limit: res.data?.limit ?? limit,
      offset: res.data?.offset ?? offset,
    };
  } catch (err) {
    console.error("❌ Sketchbook一覧取得エラー:", err);
    throw err;
  }
}