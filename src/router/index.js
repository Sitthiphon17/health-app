// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Symptoms from '../views/Symptoms.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';

// สมมติว่าเรามีการตรวจสอบการล็อกอินที่เก็บไว้ใน localStorage
const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

const routes = [
  { path: '/', component: Login },
  { path: '/profile', component: Profile, beforeEnter: (to, from, next) => {
    if (isAuthenticated()) {
      next();
    } else {
      next('/');
    }
  }},
  { path: '/symptoms', component: Symptoms },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
