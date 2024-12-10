// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/node_modules/tinacms/**/*'],
    })
  ],
  output: 'static',
  build: {
    assets: 'admin'
  }
});
