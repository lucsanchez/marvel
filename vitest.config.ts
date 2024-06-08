/// <reference types="vitest" />
import path from "path";

import { defineConfig } from "vite";
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setup-test.ts"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
