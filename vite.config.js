import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "index.js",
      output: {
        entryFileNames: "bundle.js",
      },
    },
    ssr: true,
  },
  ssr: {
    noExternal: true,
  },
});
