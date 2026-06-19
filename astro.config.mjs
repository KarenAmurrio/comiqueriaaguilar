// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://mi-comiqueria.vercel.app',
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],
  adapter: vercel()
});