import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative base so the built site works from any sub-path (e.g. GitHub Pages).
  base: "./",
  plugins: [react()],
  build: {
    // Bundles go to /static so they never collide with the images in public/assets.
    assetsDir: "static",
    outDir: "dist",
  },
});
