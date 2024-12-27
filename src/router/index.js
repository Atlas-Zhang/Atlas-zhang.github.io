import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import NavbarsViewVue from '@/views/example/NavbarsView.vue'



const childComponents = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test-page',
    name: 'TEST_PAGE',
    component: () => import('@/views/TestPage.vue')
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
    path: '/about/me',
    name: 'ABOUT-ME',
    component: () => import('@/views/aboutMe/AboutMe.vue')
  },

  {
    path: '/tool-box/list',
    name: 'TOOLBOX-LIST',
    component: () => import('@/views/toolbox/index.vue'),
  },


  {
    path: '/pay-plan/list',
    name: 'PAY_PLAN_LIST',
    component: () => import('@/views/payPlan/PayPlanList.vue'),
  },
  {
    path: '/tool-box/excel-process',
    name: 'excel-process',
    component: () => import('@/views/toolbox/excel/ExcelToSql.vue'),
  },
  {
    path: '/tool-box/text-to-image/stability',
    name: 'STABILITY_TEXT_IMAGE',
    component: () => import('@/views/toolbox/textToImage/StabilityTextToImage.vue'),
  },

  {
    path: '/tool-box/item/geocode',
    name: 'TOOLBOX-GEOCODE',
    component: () => import('@/views/toolbox/geocode/GeoCode.vue'),
  },


  {
    path: '/tool-box/item/shorten-url',
    name: 'TOOLBOX_SHORTEN_URL',
    component: () => import('@/views/toolbox/convert/ShortenLink.vue'),
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