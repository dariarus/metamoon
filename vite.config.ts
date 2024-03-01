import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [react(), eslint(), stylelint({
    fix: true
  })],
  root: './src',
  publicDir: '../public',
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
})
