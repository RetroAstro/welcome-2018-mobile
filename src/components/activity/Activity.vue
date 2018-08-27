<template>
    <div class="activity-wrapper">
        <div class="activity-box">
            <div class="title bg-cover-all"></div>
            <tab 
            :nav="nav"
            :tabList="tabList" 
            :currentName="currentName" 
            @handleSwitch="handleSwitch">
            </tab>
            <transition mode="out-in" enter-active-class="animated faster fadeInUp" leave-active-class="animated faster fadeOutDown">
              <keep-alive>
                  <dynamic-component :is="currentComponent"></dynamic-component>   
              </keep-alive>
            </transition>
        </div>
    </div>
</template>

<script>

import SmileBox from './SmileBox.vue'
import HelperBox from './HelperBox.vue'

export default {
  components: {
    SmileBox,
    HelperBox
  },
  data () {
    return {
      nav: 'activity-nav',
      currentName: 'helper',
      currentComponent: 'HelperBox',
      tabList: [
        {
          name: 'helper',
          component: 'HelperBox'
        },
        {
          name: 'smile_face',
          component: 'SmileBox'
        }
      ]
    }
  },
  watch: {
    '$route': {
      handler: function () {
        if (this.$route.params.type === 'help') {
          this.currentName = 'helper'
          this.currentComponent = 'HelperBox'
        } else if (this.$route.params.type === 'smile') {
          this.currentName = 'smile_face'
          this.currentComponent = 'SmileBox'
        }
      },
      immediate: true
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
.activity-wrapper {
    width 100%
    margin-top rem(70)
    position relative
    z-index 22
    .activity-box {
        position relative
        padding-left rem(21)
        .title {
            margin 0 auto
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_activity.png')
            margin-bottom rem(6)
        }
        & >>> .activity-nav {
            z-index 5000
            position absolute
            left 0
            top rem(85)
            width 100%
            height rem(40)
            .nav-inner {
                width 68%
                & > li:first-child {
                  width rem(105)
                  height rem(38)
                  transform translateX(rem(3))
                }
                & > li:last-child {
                  transform translateX(rem(3))
                  width rem(115)
                  height rem(38)
                }
            }
        }
    }
}
</style>