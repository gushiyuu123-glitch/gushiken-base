import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ▼ ローカル開発のキャッシュ完全オフ（スーパーリロード不要）
  server: {
    headers: {
      "Cache-Control": "no-store",
    },
  },

  // ▼ 本番ビルド時に全アセットへハッシュを付与（最新が必ず反映される）
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
