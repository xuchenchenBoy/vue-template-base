import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Page404 from '@/views/page404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '主页',
      component: Home
    },
    {
      path: '*',
      name: '404页面没找到',
      component: Page404
    }
  ]
})
