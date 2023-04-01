import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solid from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react(), solid(), svelte(), tailwind()],
});
