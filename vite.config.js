import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/meta_v/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
});
