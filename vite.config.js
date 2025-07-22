// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/cities": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
});
