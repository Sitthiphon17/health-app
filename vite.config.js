import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',  // เปิดให้เข้าถึงจาก IP ภายนอก
    port: 3000,        // กำหนดพอร์ตที่ต้องการ (สามารถเปลี่ยนได้)
  },
  base: '/',           // ใช้ '/' เป็น base URL หากไม่ต้องการตั้งชื่อ repository
  build: {
    outDir: 'dist',    // กำหนดให้ไฟล์ที่ build ไปยังโฟลเดอร์ 'dist'
  },
});
