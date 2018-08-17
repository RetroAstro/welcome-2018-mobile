<template>
    <div class="subject-box bg-cover-all">
        <div class="subject-header">
            <div class="college bg-cover-all"></div>
            <!-- <div class="silder"></div> -->
        </div>
        <div class="subject-content">
            <comp-sub-bar></comp-sub-bar>
        </div>
    </div>
</template>

<script>

import CompSubBar from './CompSubBar.vue'

export default {
  components: {
    CompSubBar
  }
}
</script>

<style lang="stylus" scoped>
.subject-box {
    width 100%
    height 100%
    background-image url('../../assets/bg3.png')
    display flex
    flex-direction column
    justify-content space-between
    position relative
    .subject-header {
        width 100%
        flex 2
        display flex
        align-items center
        justify-content space-between
        padding-left rem(20)
        padding-right rem(12)
        .college {
            width rem(120)
            height rem(16)
            background-image url('../../assets/tongxin_scale.png')
            transform translateY(rem(6))
        }
    }
    .subject-content {
         width 100%
         flex 8
         display flex
         justify-content center
         padding-top rem(15)
    }
}
</style>