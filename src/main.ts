import { createApp,getCurrentInstance } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementPlus, { ElMessage } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import './index.css'
import './assets/main.css'

const app = createApp(App)



app.use(router)
app.use(ElementPlus)
app.config.globalProperties.$message = (msg:string,type:any) => {
    ElMessage({
        message: msg,
        grouping: true,
        type: type ? type :'success',
        duration: 1500
    })
}


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
   

app.mount('#app')
