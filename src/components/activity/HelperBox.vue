<template>
    <div class="content-box bg-cover-all">
        <div class="helper-wrap flex-col-between">
            <tab 
            :nav="nav"
            :tabList="tabList" 
            :currentName="currentName" 
            @handleSwitch="handleSwitch">
            </tab>
            <transition mode="out-in" enter-active-class="animated faster flipInY" leave-active-class="animated faster flipOutY">
                <keep-alive>
                  <dynamic-component :is="currentComponent"></dynamic-component> 
                </keep-alive>  
            </transition>
            <div class="subscribe-box flex-center">
              <div class="subscribe bg-cover-all"></div>
            </div>
        </div>
    </div>
</template>

<script>

import CompHelperNew from './CompHelperNew.vue'
import CompHelperHot from './CompHelperHot.vue'

export default {
  components: {
    CompHelperNew,
    CompHelperHot
  },
  data () {
    return {
      nav: 'helper-nav',
      currentName: 'ques_new',
      currentComponent: 'CompHelperNew',
      tabList: [
        {
          name: 'ques_new',
          component: 'CompHelperNew'
        },
        {
          name: 'ques_hot',
          component: 'CompHelperHot'
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
.content-box {
    width rem(345)
    height rem(648)
    background-image url('../../assets/train_box.png')
    padding-top rem(90)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(30)
    .helper-wrap {
        width 100%
        height 100%
        & >>> .helper-nav {
            width 100%
            position relative
            .nav-inner {
                width 100%
                height 100%
                display flex
                align-items center
                justify-content space-between
                & > li {
                    width rem(132)
                    height rem(30)
                }
            }
        }
        .subscribe-box {
          width 100%
          .subscribe {
            width 100%
            height rem(24)
            background-image url('../../assets/subscribe.png')
          }
        }
    }
}
</style>