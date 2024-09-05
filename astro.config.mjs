import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }]
  },
  integrations: [icon(), react({ experimentalReactChildren: true })],
});