import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Отключаем data-v-inspector
          isCustomElement: (tag) => false
        },
        css: {
          // Предотвращает удаление вебкит-префиксов минификатором
          transformer: 'postcss',
          minify: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      // Настройка алиаса @ для указания на папку src
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Отключаем inspector
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_OPTIONS_API__: true
  }
})
