import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "https://website-youtube-downloader.vercel.app",
    server:{
        proxy:{
            '/api': {
        target: 'https://server-downloader-1egvyoyzu-hambalis-projects-37a7e0e5.vercel.app/api/download',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
        }
    }
})
