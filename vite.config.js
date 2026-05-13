import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // User site (this repo): keep default base "/".
  // Project Pages (e.g. username.github.io/repo-name/) set: base: "/repo-name/"
});
