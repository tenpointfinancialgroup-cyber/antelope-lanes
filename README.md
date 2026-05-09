# Antelope Lanes — Website

Built by **TPF V2 AI Agency** for Antelope Lanes (Prescott Valley, AZ).

## Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- TypeScript (strict)

Deployed to **GitHub Pages** (per agency rule: stage on GH Pages for client review BEFORE any domain purchase or transfer).

## Develop

```bash
npm install
npm run dev    # http://localhost:4321
npm run build  # static build to ./dist
npm run preview
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

**Before first deploy:**

1. Update `astro.config.mjs` — set `site` to `https://[your-gh-username].github.io` and confirm `base: '/antelope-lanes'` matches the repo name.
2. In the GitHub repo: Settings → Pages → Source = **GitHub Actions**.
3. Push to `main`. The Actions workflow handles the rest.

## Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/bowling` | Bowling — leagues, juniors, cosmic |
| `/parties` | Parties — kids, school, corporate |
| `/rythmz-lounge` | Rythmz Lounge — bar, OTB, karaoke, billiards |
| `/arcade` | Arcade |
| `/food` | Food / Deli |
| `/schedule` | Hours, specials, schedule |
| `/pricing` | Pricing |
| `/contact` | Contact + map |

All currently stubs — full content lands in design/build phase per the brief at `../tpf-v2-ai-agency/1. discovery/c. output/brief-antelope-lanes-08-05-2026.md`.

## Design tokens

Dark/neon glow-bowling-night theme baseline lives in [`src/styles/global.css`](src/styles/global.css). Palette mirrors the V2 logo (deep teal, antelope red, electric yellow, neon cyan/magenta/violet).
