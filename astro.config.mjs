// @ts-check
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://clever-choux-88a621.netlify.app/',
  integrations: [preact()],
})