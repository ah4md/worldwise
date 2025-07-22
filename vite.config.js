import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// vite.config.js
export default {
  server: {
    proxy: {
      "/cities": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
};
