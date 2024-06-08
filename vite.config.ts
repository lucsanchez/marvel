import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  if (command === "build") {
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
        minify: "terser",
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
  } else {
    return {
      plugins: [react(), cssInjectedByJsPlugin()],
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
        minify: false,
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ["react", "react-dom"]
            }
          }
        }
      }
    };
  }
});
