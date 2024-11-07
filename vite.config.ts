import { defineConfig } from 'vite';
import { ViteAliases } from 'vite-aliases';
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react';

const aliases = [
  {
    find: /^@(.*)$/, // Регулярное выражение для совпадения с префиксом @
    replacement: '$1', // Замена на сам путь без префикса
    dir: 'src',
    prefix: '',
    deep: true,
    depth: 1,
    createLog: false,
    logPath: 'src/logs',
    createGlobalAlias: true,
    adjustDuplicates: false,
    useAbsolute: false,
    useIndexes: false,
    useConfig: true,
    ovrConfig: false,
    dts: false,
    silent: true
  },
  {
    find: /^@(.*)$/, // Регулярное выражение для совпадения без префикса
    replacement: '$1', // Замена на сам путь без префикса
    dir: 'src',
    prefix: '@', // Пустой префикс для второго алиаса
    deep: true,
    depth: 1,
    createLog: false,
    logPath: 'src/logs',
    createGlobalAlias: true,
    adjustDuplicates: false,
    useAbsolute: false,
    useIndexes: false,
    useConfig: true,
    ovrConfig: false,
    dts: false,
    silent: true
  }
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ...aliases.map(ViteAliases), reactRefresh()],
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
        // Добавляем настройку для использования современного API
        api: 'modern'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
});
