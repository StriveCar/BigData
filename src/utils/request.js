import axios from 'axios'
import { ElMessage } from 'element-plus'

const baseUrl = "http://bigdata.xeason.icu"

const service = axios.create({
    baseURL: baseUrl,
    timeout: 20000 // request timeout
})
// // 允许携带cookie
service.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// // 默认使用 application/json 形式
service.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        return res;
    },
    error => {
        ElMessage.error({
            message: error.message,
            duration: 5 * 1000
        }
        )
        return Promise.reject(error)
    }
)

export default service
