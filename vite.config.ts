import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/planet-for-you-deploy/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
