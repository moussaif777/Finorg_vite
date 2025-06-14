import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    // Skip TypeScript checking in production
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  }
})