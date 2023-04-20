import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import ExcelReadVue from '@/views/excel/ExcelRead.vue'
import NavbarsViewVue from '@/views/example/NavbarsView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
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
      path: '/ai-tools/list',
      name: 'AI-Tools-List',
      component: () => import('@/views/gallery/AiGalleryList.vue')
    },

    {
      path: '/ai-tools/:articleId/detail',
      name: 'AI-Detail-View',
      props: true,
      component: () => import('@/views/gallery/AiGalleryDetail.vue')
    },


    {
      path: '/login-page',
      name: 'LOGIN_PAGE_BEGIN',
      component: () => import('@/views/login/LoginPageView.vue')
    },

    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router