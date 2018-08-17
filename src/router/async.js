module.exports = {
  Layout: () => import(/* webpackChunkName: "async-component" */ '../components/Layout.vue'),
  Index: () => import(/* webpackChunkName: "async-component" */ '../components/index/Index.vue'),
  Mien: () => import(/* webpackChunkName: "async-component" */ '../components/mien/Mien.vue'),
  Training: () => import(/* webpackChunkName: "async-component" */ '../components/training/Training.vue'),
  Tips: () => import(/* webpackChunkName: "async-component" */ '../components/tips/Tips.vue'),
  Activity: () => import(/* webpackChunkName: "async-component" */ '../components/activity/Activity.vue'),
  Analyze: () => import(/* webpackChunkName: "async-component" */ '../components/analyze/Analyze.vue')
}
