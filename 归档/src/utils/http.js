/**
 * http配置
 */
import axios from 'axios'
// import router from '@/router'
import storage from '@/utils/storage'
/* import {
  loginOutData
} from '@/api/get-data' */
// axios 配置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['Accept'] = 'application/json;charset=UTF-8'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    /* const token = storage.getSession('token')
    if (token) {
      config.headers.common['Authorization'] = token
    } */
    return config
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    const token = response.headers['authorization']
    if (token) {
      storage.setSession('token', token)
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          /* loginOutData() // 退出登陆
          storage.clearAllSession()
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login'
            }) */
      }
    }
    if (error.message === 'Network Error') {
      return Promise.reject({
        code: -10,
        message: '网络异常，请检查网络连接'
      })
    }
    return Promise.reject(error)
  }
)

export default axios
