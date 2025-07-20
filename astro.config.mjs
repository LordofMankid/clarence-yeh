import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }]
  },
  integrations: [icon(), react({ experimentalReactChildren: true }), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    contentIntellisense: true,
  },
});