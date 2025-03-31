import { createApp } from 'vue';  // Vue 3
import App from './App.vue';  // App.vue ต้องมีอยู่ในโปรเจค
import router from './router';  // router ต้องมีอยู่ในโปรเจค

createApp(App)
  .use(router)  // ใช้ Vue Router
  .mount('#app');  // ติดตั้งแอปที่ element ที่มี id = 'app'
