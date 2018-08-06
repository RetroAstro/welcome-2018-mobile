import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/page/:pageNum',
      name: 'page',
      component: {}
    },
    {
      path: '/',
      redirect: '/page/1'
    }
  ]
})
