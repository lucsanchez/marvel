import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";
  console.log("mode", mode);
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/ui/styles/mixins";'
        }
      }
    },
    build: {
      minify: isProduction ? "terser" : false,
      sourcemap: !isProduction,
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  };
});
