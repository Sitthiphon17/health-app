import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/health-app/',  // ชื่อ repository ของคุณ
  plugins: [vue()],
});
