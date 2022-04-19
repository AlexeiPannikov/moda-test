import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
require('dotenv').config()

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  console.log('base-irl', process.env.BASE_URL);
  
  if (command === 'serve') {    
    return {
      plugins: [vue()]
    }
  } else {
    // command === 'build'
    return {
      plugins: [vue()],
      base: process.env.BASE_URL
    }
  }
})