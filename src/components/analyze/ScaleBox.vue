<template>
    <div class="scale-box bg-cover-all">
        <div class="scale-header">
            <div class="college bg-cover-all"></div>
            <!-- <div class="silder"></div> -->
        </div>
        <div class="scale-content">
            <comp-scale-pie></comp-scale-pie>
        </div>
    </div>
</template>

<script>

import CompScalePie from './CompScalePie.vue'

export default {
  components: {
    CompScalePie
  }
}
</script>

<style lang="stylus" scoped>
.scale-box {
    width 100%
    height 100%
    background-image url('../../assets/bg3.png')
    display flex
    flex-direction column
    justify-content space-between
    position relative
    .scale-header {
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
    .scale-content {
         width 100%
         flex 8
         display flex
         justify-content center
         padding-top rem(15)
    }
}
</style>