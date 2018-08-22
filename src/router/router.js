// import Vue from 'vue'
// import Router from 'vue-router'
import async from './async'

Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: async.Layout,
      children: [
        {
          path: 'index',
          component: async.Index
        },
        {
          path: 'mien',
          component: async.Mien
        },
        {
          path: 'training',
          component: async.Training
        },
        {
          path: 'tips',
          component: async.Tips
        },
        {
          path: 'activity/:type',
          component: async.Activity
        },
        {
          path: 'analyze',
          component: async.Analyze
        }
      ]
    }
  ]
})
