<template>
    <div class="training-wrapper">
        <div class="train-box">
            <div class="title bg-cover-all"></div>
            <div class="content bg-cover-all flex-center">
                <tab 
                :box="box"
                :tabList="tabList" 
                :animate="animate" 
                :currentName="currentName" 
                @handleSwitch="handleSwitch">
                    <dynamic-component :is="currentComponent"></dynamic-component>
                </tab>
            </div>
        </div>
    </div>
</template>

<script>

import Tab from '@common/Tab.vue'
import TipsBox from './TipsBox.vue'
import PastYearBox from './PastYearBox.vue'
import ContentBox from './ContentBox.vue'
import RuleBox from './RuleBox.vue'

export default {
  components: {
    Tab,
    TipsBox,
    PastYearBox,
    ContentBox,
    RuleBox
  },
  data () {
    return {
      box: 'training-box',
      currentName: 'train_tips',
      currentComponent: 'TipsBox',
      animate: {
        entrance: 'animated fast rollIn',
        exits: 'animated fast rollOut'
      },
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
    height rem(880)
    position relative
    z-index 20
    .train-box {
        & > div {
            margin 0 auto
        }
        .title {
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_train.png')
            margin-bottom rem(6)
        }
        .content {
            width rem(345)
            height rem(772)
            background-image url('../../assets/tip_box.png')
            transform translateX(rem(2))
            & >>> .training-box {
                width rem(276)
                height rem(710)
                flex-direction column
                position relative
                transform translateX(rem(-7))
                .nav {
                    width 100%
                    height rem(50)
                    .nav-inner {
                        width 100%
                        & > li {
                        width rem(62)
                        height rem(38)
                        }
                    }
                }
            }
            & >>> .rule-box {
                width rem(276)
                height rem(650)
                flex-direction column
                position relative
                .nav {
                    width 100%
                    height rem(40)
                    .nav-inner {
                        width 100%
                        & > li {
                        width rem(132)
                        height rem(25)
                        }
                    }
                }
            }
        }
    }
}
</style>