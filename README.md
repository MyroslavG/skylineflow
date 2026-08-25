# Skyline Flow Toronto Plumbing

A modern one-page landing page for Skyline Flow Toronto Plumbing.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy On Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the defaults:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Install command: `npm install`
4. Optional: add `N8N_LEAD_WEBHOOK_URL` in Vercel if the lead webhook URL changes.

The current n8n webhook URL is listed in `.env.example`.

This project uses Next.js and requires Node.js `>=22.13.0`.
