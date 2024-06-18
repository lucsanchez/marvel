/// <reference types="vitest" />
import path from "path";

import { defineConfig } from "vite";
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setup-test.ts",
    coverage: {
      exclude: ["src/application/**/*"],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 70,
        statements: 70
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
