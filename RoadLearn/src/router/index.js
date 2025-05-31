import { createRouter, createWebHistory } from 'vue-router'
import LoginUser from '../views/LoginUser.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginUser',
      component: LoginUser,
    },
  ],
})

export default router
