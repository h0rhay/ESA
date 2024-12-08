import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://YOUR-USERNAME.github.io',  // Replace YOUR-USERNAME
  base: '/my-landing-page',                 // Replace with your repo name
}); 