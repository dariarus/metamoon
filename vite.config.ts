import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint()],
  root: './src',
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
})
