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
4. Add these environment variables in Vercel:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

The current public EmailJS values are listed in `.env.example`.

This project uses Next.js and requires Node.js `>=22.13.0`.
