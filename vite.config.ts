import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
const NAVER_URL = "https://openapi.naver.com/v1/search/news.json";
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      "/api": {
        target: NAVER_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
