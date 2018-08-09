import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import(/* webpackChunkName: "async-component" */ '../components/' + file + '.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: _import('Layout'),
      children: [
        {
          path: 'index',
          component: _import('index/Index')
        },
        {
          path: 'mien',
          component: _import('mien/Index')
        },
        {
          path: 'tips',
          component: _import('tips/Index')
        },
        {
          path: 'training',
          component: _import('training/Index')
        },
        {
          path: 'uncover',
          component: _import('uncover/Index')
        }
      ]
    }
  ]
})
