import {
  fileURLToPath,
  URL
} from 'node:url'

import viteCompression from 'vite-plugin-compression';
// import Markdown from 'vite-plugin-md'
import {
  defineConfig
} from 'vite'
import Vue from '@vitejs/plugin-vue'
import VuePlugin from '@vitejs/plugin-vue'
import plugin, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
   publicPath: '/utils/',
  // plugins: [
  //   Vue({
  //     include: [/\.vue$/, /\.md$/], // <--
  //   }),
  //   Markdown()
  // ],
  // //    plugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })
  // // ],
  plugins: [VuePlugin(), plugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })],
  assetsInclude: ['**/*.md'],

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
      // fs: require.resolve('rollup-pligin-node-builtins'),
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
