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
        ],
      },
    }),
  ],
});
