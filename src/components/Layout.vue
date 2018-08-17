<template>
    <div class="main">
        <comp-header :currentName="currentName" @launch="launch"></comp-header>
        <transition mode="out-in" enter-active-class="animated faster bounceIn" leave-active-class="animated faster bounceOut">
            <keep-alive>
                <router-view @launch="launch"></router-view>            
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
  data () {
    return {
      currentName: '首页'
    }
  },
  created () {
    window.addEventListener('load', () => {
      this.$router.push({path: '/'})
    })
  },
  methods: {
    launch (name) {
      this.currentName = name
    }
  }
}
</script>

<style lang="stylus">
.main {
    overflow hidden
    background rgb(67, 182, 237)
    // transition height 0.6s ease-in-out
}
</style>

