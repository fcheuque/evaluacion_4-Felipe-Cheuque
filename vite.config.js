import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pokeapi.co',
        changeOrigin: true,
        secure: false,
      },
      '/sprites': {
        target: 'https://githubusercontent.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/sprites/, '')
      }
    }
  }
})
