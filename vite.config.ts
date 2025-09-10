import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [svgr(), react(), tailwindcss()],
  test: { environment: "jsdom" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
