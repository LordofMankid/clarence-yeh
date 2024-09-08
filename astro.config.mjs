import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }]
  },
  integrations: [icon(), react({ experimentalReactChildren: true }), mdx()],
});