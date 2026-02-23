import type { ExternalImageService } from "astro";

const service: ExternalImageService = {
  getURL({ src }) {
    return typeof src === "string" ? src : src.src;
  },
  getHTMLAttributes({ src, ...attributes }) {
    return attributes;
  },
};

export default service;
