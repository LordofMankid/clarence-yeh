import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import svgr from 'vite-plugin-svgr';
// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }]
  },
  integrations: [icon(), react({ experimentalReactChildren: true }), mdx()],

  vite: {
    plugins: [tailwindcss(), svgr()],
  },
  experimental: {
    contentIntellisense: true,
  },
});