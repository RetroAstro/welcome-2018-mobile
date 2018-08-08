
import Vue from 'vue'

import './stylus/index.styl'

import App from './App.vue'

import router from './router/router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
