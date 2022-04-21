import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { ViteAliases } from "vite-aliases"
// require('dotenv').config()

// https://vitejs.dev/config/

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@functions': path.resolve(__dirname, './src/functions'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
    },
  },

  plugins: [vue(), ViteAliases()],

  build: {
    outDir: 'dist'
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true
  }
})