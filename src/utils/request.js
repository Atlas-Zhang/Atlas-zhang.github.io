import axios from 'axios'
import {
    ElMessage
} from 'element-plus'
import router from '@/router/index'
import {
    ElLoading
} from 'element-plus'
import {
    genEncryStr
} from './util'

export async function fetch(options) {

    const loading = ElLoading.service({
        lock: true,
        text: '加载中',
        background: 'rgba(0, 0, 0, 0.3)'
    })
    const timestamp = Date.parse(new Date()) / 1000;
    const sign = genEncryStr(timestamp)
    const instance = await axios.create({
        timeout: 1000 * 60, // 超时  (设定请求时长 60s)
        headers: {
            token: localStorage.getItem('token'),
            timestamp: timestamp,
            sign: sign,
        },
    })
    try {
        const result = await instance(options)

        loading.close()
        if (result.status === 200) {
            return result.data.result || {}
        }
        return null
    } catch (error) {

        const {
            response
        } = error
        loading.close()
        if (response.status === 401 && router.currentRoute !== '/login-page') {

            ElMessage.error('登录过期')
            localStorage.clear()
            router.push('/login-page')
            return
        }

        if (response.status === 401 && router.currentRoute === '/login-page') {

            localStorage.clear()
            return
        }

        if (response.data.message) {
            ElMessage.error(response.data.message)
            return null
        }
        if (response.data.statusText) {
            ElMessage.error(response.data.statusText)
            return null
        }
        if (response.data) {
            if (response.data.includes('Proxy error: Could not proxy request')) {
                ElMessage.error('服务异常，请重新尝试')
                return null
            }
            ElMessage.error(response.data)
            return null
        }
        return null
    }
}