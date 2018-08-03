
import Vue from 'vue'

import './stylus/index.styl'

/* --- PC端, 移动端两套代码, 以引入 .vue 根文件的不同来打包两端项目 --- */

// PC端
import Desktop from './Desktop.vue'
import desktopRouter from './router/desktop'

new Vue({
  Desktop,
  desktopRouter,
  render: h => h(Desktop)
}).$mount('#app')

// 移动端
// import Phone from './Phone.vue'
// import phoneRouter from './router/phone'
// import { VueHammer } from 'vue2-hammer'
// Vue.use(VueHammer)

// new Vue({
//   Phone,
//   phoneRouter,
//   render: h => h(Phone)
// }).$mount('#app')
