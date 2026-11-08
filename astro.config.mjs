// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Add this block to allow dynamic tunnel hosts:
  server: {
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
