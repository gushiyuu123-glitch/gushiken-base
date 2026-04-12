import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // 開発時はキャッシュを抑えて、反映遅延を減らす
  server: {
    headers: {
      "Cache-Control": "no-store",
    },
  },

  // 本番ビルドではすべての出力にハッシュを付ける
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});