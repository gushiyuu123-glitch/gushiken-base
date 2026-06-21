// src/lib/sketchbookApi.js

const SERVICE_DOMAIN = import.meta.env.VITE_MICROCMS_SKETCH_SERVICE_DOMAIN;
const API_KEY = import.meta.env.VITE_MICROCMS_SKETCH_API_KEY;

const ENDPOINT = "sketchbook";

const hasSketchEnv = Boolean(SERVICE_DOMAIN && API_KEY);

if (!hasSketchEnv) {
  console.warn("❗ Sketchbook用のmicroCMS環境変数が設定されていません");
}

function assertSketchEnv() {
  if (!hasSketchEnv) {
    throw new Error("Sketchbook用のmicroCMS環境変数が設定されていません");
  }
}

function createCacheBuster() {
  return Date.now();
}

function normalizeSketchItem(item) {
  return {
    id: item?.id || "",
    title: item?.title || "Untitled",
    image: item?.image || null,
    type: item?.type || "",
    note: item?.note || "",
    publishedAt: item?.publishedAt || item?.createdAt || "",
  };
}

export async function getSketchbookItems({ limit = 100, offset = 0 } = {}) {
  assertSketchEnv();

  const params = new URLSearchParams({
    limit: String(limit),
    offset: String(offset),
    orders: "-publishedAt",
    fields: "id,title,image,type,note,publishedAt,createdAt",
    _t: String(createCacheBuster()),
  });

  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${ENDPOINT}?${params}`;

  try {
    const res = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": API_KEY,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch sketchbook items: ${res.status}`);
    }

    const data = await res.json();
    const contents = Array.isArray(data?.contents) ? data.contents : [];

    return contents
      .map(normalizeSketchItem)
      .filter((item) => item.id && item.image?.url);
  } catch (error) {
    console.error("❌ Sketchbook取得エラー:", error);
    throw error;
  }
}