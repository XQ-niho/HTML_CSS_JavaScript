import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './utils/http'
Vue.prototype.$http = axios

import * as api from './api/get-data'
Vue.prototype.api = api

import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELEMENT)

// svg组件
import SvgIcon from './components/SvgIcon'
// import '@/icons/iconfont.js'
Vue.component(SvgIcon.name, SvgIcon)

import lodash from 'lodash'
Vue.prototype.$lodash = lodash

import commonFn from './utils/common'
Vue.prototype.$commonFn = commonFn

// 引入mockjs
// require('./mock/index.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
