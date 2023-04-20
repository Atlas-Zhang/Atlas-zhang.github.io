import axios from 'axios'
import {
    ElMessage
} from 'element-plus'

export async function fetch(options) {
    console.log('options is ', options)
    const instance = await axios.create()
    try {
        const result = await instance(options)
        console.log('result is', result)

        if (result.status === 200) {
            return result.data.result || {}
        }
        return null
    } catch (error) {
        console.log('error ', error)
        const {
            response
        } = error
        console.log('response is ', response)
        if (response.status === 401) {

            ElMessage.error('登录过期')

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