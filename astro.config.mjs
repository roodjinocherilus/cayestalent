// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site Cayes Talent Lab — déployé sur GitHub Pages, domaine personnalisé.
// Tailwind v4 est appliqué via PostCSS (voir postcss.config.mjs) :
// le plugin @tailwindcss/vite est incompatible avec le moteur Rolldown
// embarqué par Astro 6.
export default defineConfig({
  site: 'https://cayestalentlab.com',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/mentions-legales') &&
        !page.includes('/confidentialite'),
    }),
  ],
});
