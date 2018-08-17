<template>
    <div class="analyze-wrapper">
        <div class="analyze-box">
            <div class="title bg-cover-all"></div>
            <tab 
            :nav="nav"
            :tada="tada"
            :tabList="tabList" 
            :currentName="currentName" 
            @handleSwitch="handleSwitch">
            </tab>
            <div class="content-box bg-cover-all">
                <transition mode="out-in" enter-active-class="animated faster bounceIn" leave-active-class="animated faster bounceOut">
                    <dynamic-component :is="currentComponent"></dynamic-component>   
                </transition>
            </div>
        </div>
    </div>
</template>

<script>

import ScaleBox from './ScaleBox.vue'
import SubjectBox from './SubjectBox.vue'

export default {
  components: {
    ScaleBox,
    SubjectBox
  },
  data () {
    return {
      nav: 'analyze-nav',
      currentName: 'sex_scale',
      currentComponent: 'ScaleBox',
      tabList: [
        {
          name: 'sex_scale',
          component: 'ScaleBox'
        },
        {
          name: 'hard_subject',
          component: 'SubjectBox'
        }
      ],
      tada: true
    }
  },
  methods: {
    handleSwitch (item) {
      this.currentName = item.name
      this.currentComponent = item.component
    },
    backtoTop () {
      var timer = null
      cancelAnimationFrame(timer)
      var startTime = +new Date()
      var b = document.body.scrollTop || document.documentElement.scrollTop
      var d = 500
      var c = b
      timer = requestAnimationFrame(function func () {
        var t = d - Math.max(0, startTime - (+new Date()) + d)
        document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b
        timer = requestAnimationFrame(func)
        if (t === d) {
          cancelAnimationFrame(timer)
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.backtoTop()
    })
  }
}
</script>

<style lang="stylus" scoped>
.analyze-wrapper {
    width 100%
    margin-top rem(70)
    position relative
    z-index 20
    .analyze-box {
        position relative
        padding-left rem(21)
        .title {
            margin 0 auto
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_data_analyze.png')
            margin-bottom rem(6)
        }
        .content-box {
            width rem(345)
            height rem(357)
            background-image url('../../assets/data_analyze_box.png')
            padding-top rem(85)
            padding-left rem(30)
            padding-right rem(44)
            padding-bottom rem(35)
        }
        & >>> .analyze-nav {
            z-index 5000
            position absolute
            left 0
            top rem(80)
            width 100%
            height rem(40)
            .nav-inner {
                width 48%
                height rem(50)
                & > li {
                    width rem(62)
                    height rem(38)
                }
            }
        }
    }
}
</style>