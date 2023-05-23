import {
  createApp,
  getCurrentInstance
} from 'vue'
import ElementPlus, {
  ElMessage
} from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'highlight.js/styles/monokai-sublime.css'
//引入库
import his from 'highlight.js'
import App from './App.vue'
import router from './router/index.js'
import './index.css'
import './assets/main.css'
import './assets/feature.less'

const app = createApp(App)

//创建指令
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll(' pre code');
  blocks.forEach((block) => {
    his.highlightElement(block)
  })
})

app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$message = (msg, type) => {
  ElMessage({
    message: msg,
    grouping: true,
    type: type ? type : 'success',
    duration: 1000
  })
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')