import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
import stylelint from "vite-plugin-stylelint";
import prettier from "vite-plugin-prettier";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    stylelint({
      fix: true,
    }),
    prettier(),
  ],
  root: "./src",
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: "/index.html",
    },
    outDir: "./dist",
  },
});
