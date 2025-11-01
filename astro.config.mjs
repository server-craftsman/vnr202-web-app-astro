// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://vnr202-web-app-astro.pages.dev',
    vite: {
        plugins: [tailwindcss()],
    },
});