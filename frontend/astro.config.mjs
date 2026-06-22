// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// Static (SSG) output by default — high-performance pre-rendered site.
export default defineConfig({
  site: "https://blocly.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
