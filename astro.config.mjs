// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://wish.nuacmw.kz",
  srcDir: "frontend",
  output: "server",
  image: {
    service: { entrypoint: "./frontend/image-service.ts" },
  },
  adapter: cloudflare({ imageService: "custom" }),
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
  integrations: [react(), sitemap()],
});
