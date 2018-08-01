import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import './stylus/index.styl'


// import { VueHammer } from 'vue2-hammer'

// Vue.use(VueHammer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
