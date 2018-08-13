import Vue from 'vue'

import './stylus/index.styl'

import App from './App.vue'

import router from './router/router'

import VuePreview from 'vue-preview'

// import Vue2TouchEvents from 'vue2-touch-events'

import Tab from './common/Tab.vue'

Vue.component('tab', Tab)

Vue.use(VuePreview, {
  shareEl: false,
  bgOpacity: 0.3
})

// Vue.use(Vue2TouchEvents, {
//   disableClick: false,
//   touchClass: '',
//   tapTolerance: 10,
//   swipeTolerance: 30,
//   longTapTimeInterval: 400
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
