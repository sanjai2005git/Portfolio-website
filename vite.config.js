 import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';

  export default defineConfig({
    base: '/Portfolio-website/',   // ← must match the repo name exactly, with slashes
    plugins: [react()],
  });
