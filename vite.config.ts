// // @filename: ambient.d.ts
//  declare module 'path';
// // @filename: index.js
import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePWA({
      includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'CSV Viewer',
        short_name: 'CSV Viewer',
        description: 'CSV Viewer',
        theme_color: '#fff',
        display: 'standalone',
        background_color: '#fff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
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
