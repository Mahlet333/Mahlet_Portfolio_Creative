import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/Mahlet_Creative_Portfolio/' : '/',
  server: {
    port: 5173,
    open: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
