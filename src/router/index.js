import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import ExcelReadVue from '@/views/excel/ExcelRead.vue'
import NavbarsViewVue from '@/views/example/NavbarsView.vue'


const childComponents = [{
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
    component: () => import('@/views/aiToolItem/AiToolItemList.vue')
  },

  {
    path: '/ai-tool-item/:itemId/detail',
    name: 'AI-Tool-Detail',
    props: true,
    component: () => import('@/views/aiToolItem/AiToolDetail.vue')
  },


  {
    path: '/article/list',
    name: 'ARTICLE-LIST',
    component: () => import('@/views/articleItem/ArticleItemList.vue')
  },

  {
    path: '/tool-box/list',
    name: 'TOOLBOX-LIST',
    component: () => import('@/views/toolbox/index.vue')

  },


  {
    path: '/article/:articleId/detail',
    name: 'AI-Article-Detail',
    props: true,
    component: () => import('@/views/articleItem/ArticleItemDetail.vue')
  },


  {
    path: '/userInfo/:userId/detail',
    name: 'User-Info-Detail',
    props: true,
    component: () => import('@/views/userInfo/UserSettings.vue')
  },



  {
    path: '/login-page',
    name: 'LOGIN_PAGE_BEGIN',
    component: () => import('@/views/login/LoginPageView.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '',
    //   component: () => import('@/components/layout/HeadBar.vue'),
    //   children: [
    //     ...childComponents
    //   ]
    // },
    ...childComponents


  ]
})

export default router