import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import ExcelReadVue from '@/views/excel/ExcelRead.vue'
import NavbarsViewVue  from '@/views/example/NavbarsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/excel-process',
      name: 'excel-process',
      component: ExcelReadVue
    },
    {
      path: '/example/navbars-view',
      name: 'example-navbars',
      component: NavbarsViewVue
    },
    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
