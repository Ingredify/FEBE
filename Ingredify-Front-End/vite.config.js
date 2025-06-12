import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true }, //delete on prod
      manifest: {
        name: 'Ingredify',
        description: 'Turn Your Ingredients into Delicious Meals',
        theme_color: '#2F8F75',
        icons: [
          {
            src: 'pwa-icon-192x.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'img/icons/icon48.png',
            sizes: '48x48',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'img/screenshots/ss1.png',
            sizes: '1919x869',
            type: 'image/png',
            form_factor: 'wide',
            label: 'welcoming screen',
          },
          {
            src: 'img/screenshots/ss2.png',
            sizes: '1900x863',
            type: 'image/png',
            form_factor: 'wide',
            label: 'home screen',
          },
          {
            src: 'img/screenshots/ss3.png',
            sizes: '1902x866',
            type: 'image/png',
            form_factor: 'wide',
            label: 'about screen',
          },
          {
            src: 'img/screenshots/ss4.png',
            sizes: '374x646',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'welcoming screen',
          },
          {
            src: 'img/screenshots/ss5.png',
            sizes: '375x647',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'home screen',
          },
          {
            src: 'img/screenshots/ss1.png',
            sizes: '373x717',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'about screen',
          },
        ],
      },
    }),
  ],
});
