import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const routes = [
  /* 登录 s */
  {
    name: 'login',
    path: '/',
    component: () =>
      import(/* webpackChunkName: "pageFile" */ '../views/login/index'),
    meta: {
      title: '登录'
    }
  },
  /* 登录 e */
  {
    name: 'index',
    path: '/index',
    component: Layout,
    redirect: 'home',
    children: [
      {
        name: 'demo',
        path: '/demo',
        component: () =>
          import(/* webpackChunkName: "pageFile" */ '../views/demo'),
        meta: {
          title: '示例'
        }
      },
      /* 首页-home s */
      {
        name: 'home',
        path: '/home',
        component: () =>
          import(/* webpackChunkName: "pageFile" */ '../views/home/index'),
        meta: {
          title: '首页'
        }
      }
      /* 首页-home e */
    ]
  }]

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

export default router
