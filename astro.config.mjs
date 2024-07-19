import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import imagekit from "astro-imagekit";

import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['https://imagekit.io'],
  },
  integrations: [
    icon(),
    mdx(),
    imagekit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    })
  ]
});