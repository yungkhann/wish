# wish

ACM event site and registration app

## Tech Stack

Built with Astro frontend and a Hono + Cloudflare Workers backend. It uses D1 + Drizzle for storage and better-auth for authentication.

## VS Code Extensions

Recommended extensions live in [.vscode/extensions.json](.vscode/extensions.json). VS Code will prompt to install them when you open the workspace.

## Setup

1. Install Bun.
2. Clone the repo and `cd` into it.
3. Create a `.env` in the project root (copy from `.env.example`).
4. Install dependencies:
   ```bash
   bun install
   ```
5. Generate and apply migrations locally:
   ```bash
   bun run db:generate
   bun run db:migrate:local
   ```

## Development

Run both frontend and backend:

```bash
bun run dev
```

If `dev:backend` errors because the assets directory is missing, either:

- Create an empty `dist` folder, or
- Run `bun run build` once to generate it.

## Database

- View local D1 data: open `.wrangler/state/d1` with a SQLite viewer extension in VS Code.
- View prod DB with Drizzle Studio:
  ```bash
  bun run db:studio
  ```

## Deploy

```bash
bun run deploy
```

It will prompt you to login to your Cloudflare account if you didn't already.

If you do not have Cloudflare access yet, ask for access and provide your email address.

## Before Commit

Run formatting and lint checks:

```bash
bun run format
bun run lint
```

## Useful Scripts

- `bun run dev` - run frontend + backend
- `bun run build` - build frontend assets
- `bun run deploy` - build and deploy worker
- `bun run db:generate` - generate migrations from schema
- `bun run db:migrate:local` - apply migrations to local D1
- `bun run db:migrate:prod` - apply migrations to prod D1
- `bun run db:studio` - open Drizzle Studio
