<template>
    <div class="main">
        <!-- <comp-header></comp-header> -->
        <transition mode="out-in" name="fade">
            <router-view></router-view>
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
  }
}
</script>

<style lang="stylus">
.main {
    background rgb(67, 182, 237)
}
</style>

