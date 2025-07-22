import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  server: {
    proxy: {
      "/cities": {
        target: "http://localhost:9000",
        changeOrigin: true,
      },
    },
  },
});
