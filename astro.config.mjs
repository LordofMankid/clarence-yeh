import { defineConfig } from 'astro/config';
import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
    image: {
        remotePatterns: [{ protocol: "https" }]
    },
    integrations: [icon()],
});