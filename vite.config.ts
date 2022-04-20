import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
// require('dotenv').config()

// https://vitejs.dev/config/
console.log(process.env);



export default defineConfig({  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@functions': path.resolve(__dirname, './src/functions'),
      '@layout': path.resolve(__dirname, './src/components/layout'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
    },
  },

  plugins: [vue()],

  build: {
    outDir: 'dist'
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: true
  }
})