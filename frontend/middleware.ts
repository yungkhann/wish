import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.pathname.startsWith("/api")) {
    const runtime = (context.locals as any).runtime;
    if (runtime?.env) {
      // Lazy import: only executes in production (Cloudflare Workers runtime).
      // In dev, Vite's proxy forwards /api/* to wrangler dev on :8787
      // before this middleware is ever reached, so the backend is never loaded here.
      const { default: app } = await import("../backend/index");
      return app.fetch(context.request, runtime.env);
    }
  }

  return next();
});
