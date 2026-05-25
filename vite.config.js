import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],

    // 開発時はキャッシュを抑えて反映遅延を減らす（dev serverだけ）
    server: {
      headers: { "Cache-Control": "no-store" },
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,

      // ✅ dist内の実ファイル名対応表（SWやデプロイ検証に効く）
      manifest: true,

      // 普段はfalseでOK。必要なら "hidden" にして本番デバッグ用に。
      sourcemap: false,

      // ※ファイル名ハッシュはViteのデフォで付くので、基本は任せるのが安全
      // rollupOptions: { output: { ... } } は省略推奨
    },
  };
});