import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // 监听 0.0.0.0
    allowedHosts: true    // 允许所有主机访问
  }
});
