import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^(app|pages|shared|widgets|features|entities)(.*)$/, replacement: '/src/$1$2' }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content: string, resourcePath: string) => {
          if (/App\.scss$/.test(resourcePath)) {
            return `
              @use "./variables/utils/mixin.scss" as *;
              @use "./variables/utils/variables.scss" as *;
              ${content}
            `;
          }
          return `
            @use "app/styles/variables/utils/mixin.scss" as *;
            @use "app/styles/variables/utils/variables.scss" as *;
            ${content}
          `;
        },
        api: 'modern'
      }
    }
  },

  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
