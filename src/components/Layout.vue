<template>
    <div class="main">
        <comp-header></comp-header>
        <transition mode="out-in" enter-active-class="animated fast bounceIn" leave-active-class="animated fast bounceOut">
            <keep-alive>
                <router-view></router-view>            
            </keep-alive>
        </transition>
        <comp-footer></comp-footer>
    </div>
</template>

<script>

import CompHeader from './header/CompHeader.vue'
import CompFooter from './footer/CompFooter.vue'

export default {
  components: {
    CompHeader,
    CompFooter
  },
  created () {
    window.addEventListener('load', () => {
      this.$router.push({path: '/'})
    })
  }
}
</script>

<style lang="stylus">
.main {
    overflow hidden
    background rgb(67, 182, 237)
}
</style>

