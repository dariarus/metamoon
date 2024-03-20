import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import prettier from 'vite-plugin-prettier';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    stylelint({
      fix: true,
    }),
    prettier(),
    tsconfigPaths(),
  ],
  root: './src',
  publicDir: '../public',
  build: {
    rollupOptions: {
      input: '/index.html',
    },
    outDir: '../dist',
  },
});
