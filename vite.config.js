import {
  fileURLToPath,
  URL
} from 'node:url'
import viteCompression from 'vite-plugin-compression';
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ],

  server: {
    port: 5572,
    proxy: {
      "/website-api": {
        target: "http://localhost:8087/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/website-api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true // 允许在 Less 中使用 JavaScript
      }
    }
  },
})