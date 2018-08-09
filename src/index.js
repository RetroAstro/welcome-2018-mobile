
import Vue from 'vue'

import './stylus/index.styl'

import App from './App.vue'

import router from './router/router'

// import VuePreview from 'vue-preview'

// Vue.use(VuePreview, {
//   shareEl: false
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
