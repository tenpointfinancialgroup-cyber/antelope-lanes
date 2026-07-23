// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Antelope Lanes — TPF V2 AI Agency build
// Deploy target: GitHub Pages (per agency rule).
// Update `site` once the GitHub username is set; `base` matches the repo name.
export default defineConfig({
  site: 'https://tenpointfinancialgroup-cyber.github.io',
  base: '/antelope-lanes',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
