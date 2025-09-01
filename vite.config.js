import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'], 
      manifest: {
        name: 'NextDevPath',
        short_name: 'NextDev',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#1d4ed8',
        icons: [
          { src: 'dollar.png', sizes: '192x192', type: 'image/png' },
          { src: 'dollar.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB limit
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 3000, // silence chunk size warnings
  },
});
