// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://wish.nuacmw.kz",
  srcDir: "frontend",
  output: "server",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8787",
        },
      },
    },
  },

  adapter: cloudflare(),
});