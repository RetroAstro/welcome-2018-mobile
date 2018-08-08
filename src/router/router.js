import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import = file => () => import('../common/' + file + '.vue')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: _import('route/CompRoute'),
      redirect: '/countdown',
      children: [
        {
          path: 'countdown',
          component: _import('CountDown')
        },
        {
          path: 'pagination',
          component: _import('loader/Pagination')
        },
        {
          path: 'compmap',
          component: _import('map/CompMap')
        },
        {
          path: 'compselect',
          component: _import('CompSelect')
        }
      ]
    }
  ]
})
