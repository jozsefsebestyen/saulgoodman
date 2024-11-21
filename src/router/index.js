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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Check if there is a saved position (in case of going back or forward)
    if (savedPosition) {
      return savedPosition
    }

    // Always scroll to the top of the page or a specific element (like a header)
    if (to.hash) {
      return { el: to.hash }
    }

    // Scroll to the top of the page by default
    return { top: 0 }
  },
})

export default router
