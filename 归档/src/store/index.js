import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import commonHttp from './modules/common-http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    login,
    commonHttp
  }
})
