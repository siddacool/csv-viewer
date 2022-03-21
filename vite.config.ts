// // @filename: ambient.d.ts
//  declare module 'path';
// // @filename: index.js
import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '~': path.resolve('./src'),
    },
  },
  base: '/csv-viewer/',
});
