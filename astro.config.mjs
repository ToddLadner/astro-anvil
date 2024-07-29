import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['https://imagekit.io'],
  },
  integrations: [
    icon(),
    mdx(),
  ]
});