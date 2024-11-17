import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/Reactive.vue'),
    },
    {
      path: '/reactive2',
      name: 'reactive2',
      component: () => import('../views/Reactive2.vue'),
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue')
    },
    {
      path: '/binding',
      name: 'binding',
      component: import('../views/Binding.vue')
    }
  ],
})

export default router
