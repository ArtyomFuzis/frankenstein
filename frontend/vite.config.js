import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,
    port: 8080,
    proxy: {
      "/mosh": {
        target: "http://mosh:6969",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/mosh/, ""),
      },
      "/fuzis": {
        target: "http://fuzis:6969",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/fuzis/, ""),
      },
      "/psz": {
        target: "http://psz:6969",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/psz/, ""),
      },
      "/vaneshik": {
        target: "http://vaneshik:6969",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/vaneshik/, ""),
      },
    },
  },
  plugins: [react()],
})
