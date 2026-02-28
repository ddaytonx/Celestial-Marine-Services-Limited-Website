import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
})

export default router
