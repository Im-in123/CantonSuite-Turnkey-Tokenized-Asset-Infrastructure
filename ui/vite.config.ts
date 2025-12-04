import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true, 
  },
  server: {
    port: 5173,
    proxy: {
      // HTTP only - WebSockets will go direct
      '/v1': { 
        target: 'http://127.0.0.1:7575',
        changeOrigin: true,
        secure: false,
        // Remove ws: true - we'll handle WebSockets separately
      },
      '/readyz': {
        target: 'http://127.0.0.1:7575',
        changeOrigin: true,
      }
    },
  },
  optimizeDeps: {
    include: [
      '@daml/types', 
      '@daml/ledger', 
      '@daml/react'
    ]
  },
  build: {
    commonjsOptions: {
      include: [/@daml\.js/, /node_modules/]
    }
  }
})