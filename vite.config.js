import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es2022",
  },
  esbuild: {
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
  base: "https://cemus.github.io/exercice_ADRAR_js/",
});
