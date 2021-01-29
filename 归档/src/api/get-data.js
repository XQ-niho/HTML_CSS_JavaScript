import $http from '@/utils/http'

// eslint-disable-next-line no-undef
const base_url = process.env.NODE_ENV === 'development' ? 'api' : api_url

// 退出登录
export const loginOutData = (params) => $http.post(`${base_url}/loginout`, params)

