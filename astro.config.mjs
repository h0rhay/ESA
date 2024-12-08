import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://www.eastsussexaquapark.co.uk',  // Your custom domain
  base: '/',  // Since we're using a custom domain, base should be '/'
}); 