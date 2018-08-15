<template>
    <div class="training-wrapper">
        <div class="train-box">
            <div class="title bg-cover-all"></div>
            <tab 
            :nav="nav"
            :tabList="tabList" 
            :currentName="currentName" 
            @handleSwitch="handleSwitch">
            </tab>
            <transition mode="out-in" enter-active-class="animated faster fadeInUp" leave-active-class="animated faster fadeOutDown">
                <dynamic-component :is="currentComponent"></dynamic-component>   
            </transition>
        </div>
    </div>
</template>

<script>

import TipsBox from './TipsBox.vue'
import PastYearBox from './PastYearBox.vue'
import ContentBox from './ContentBox.vue'
import RuleBox from './RuleBox.vue'

export default {
  components: {
    TipsBox,
    PastYearBox,
    ContentBox,
    RuleBox
  },
  data () {
    return {
      nav: 'training-nav',
      currentName: 'train_tips',
      currentComponent: 'TipsBox',
      tabList: [
        {
          name: 'pastyear',
          component: 'PastYearBox'
        },
        {
          name: 'train_tips',
          component: 'TipsBox'
        },
        {
          name: 'train_content',
          component: 'ContentBox'
        },
        {
          name: 'train_rule',
          component: 'RuleBox'
        }
      ]
    }
  },
  methods: {
    handleSwitch (item) {
      this.currentName = item.name
      this.currentComponent = item.component
    }
  }
}
</script>

<style lang="stylus" scoped>
.training-wrapper {
    width 100%
    margin-top rem(70)
    position relative
    z-index 20
    .train-box {
        position relative
        padding-left rem(21)
        .title {
            margin 0 auto
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_train.png')
            margin-bottom rem(6)
        }
        & >>> .training-nav {
            z-index 5000
            position absolute
            left 0
            top rem(90)
            width 100%
            height rem(40)
            .nav-inner {
                width 74%
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