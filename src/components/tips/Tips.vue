<template>
    <div class="tips-wrapper">
        <div class="tips-box">
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

import LifeBox from './LifeBox.vue'
import SecurityBox from './SecurityBox.vue'
import PackBox from './PackBox.vue'
import MediaBox from './MediaBox.vue'
import LinkBox from './LinkBox.vue'
import RouteBox from './RouteBox.vue'
import CanteenBox from './CanteenBox.vue'
import DormBox from './DormBox.vue'

export default {
  components: {
    LifeBox,
    SecurityBox,
    PackBox,
    MediaBox,
    LinkBox,
    RouteBox,
    CanteenBox,
    DormBox
  },
  data () {
    return {
      nav: 'tips-nav',
      currentName: 'tips_dorm',
      currentComponent: 'DormBox',
      tabList: [
        {
          name: 'tips_dorm',
          component: 'DormBox'
        },
        {
          name: 'tips_pack',
          component: 'PackBox'
        },
        {
          name: 'tips_link',
          component: 'LinkBox'
        },
        {
          name: 'tips_canteen',
          component: 'CanteenBox'
        },
        {
          name: 'tips_security',
          component: 'SecurityBox'
        },
        {
          name: 'tips_route',
          component: 'RouteBox'
        },
        {
          name: 'tips_media',
          component: 'MediaBox'
        },
        {
          name: 'tips_life',
          component: 'LifeBox'
        }
      ]
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
.tips-wrapper {
    width 100%
    margin-top rem(70)
    position relative
    z-index 22
    .tips-box {
        position relative
        padding-left rem(21)
        .title {
            margin 0 auto
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_tips.png')
            margin-bottom rem(6)
        }
        & >>> .tips-nav {
            z-index 5000
            position absolute
            left 0
            top rem(90)
            width 100%
            height rem(90)
            .nav-inner {
                width 74%
                flex-wrap wrap
                & > li {
                    width rem(62)
                    height rem(38)
                }
                & > li:nth-of-type(1), & > li:nth-of-type(2), & > li:nth-of-type(3), & > li:nth-of-type(4) {
                  margin-bottom rem(10)
                }
            }
        }
    }
}
</style>