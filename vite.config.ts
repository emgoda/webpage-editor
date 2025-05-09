import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,           // 监听在 0.0.0.0
    allowedHosts: 'all'   // 允许所有主机（包括 CodeSandbox 分配的域名）
  }
});
