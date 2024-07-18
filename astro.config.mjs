import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import imagekit from "astro-imagekit";

import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), mdx(), imagekit()]
});