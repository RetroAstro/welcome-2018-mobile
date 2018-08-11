<template>
    <div class="training-wrapper">
        <div class="train-box">
            <div class="title bg-cover-all"></div>
            <div class="content bg-cover-all">
                <div class="nav-box">
                    <ul class="btns-box flex-between">
                        <li 
                        v-for="(item, index) in items" 
                        :key="index" 
                        :class="[{active: currentName === item.name}, item.name, 'bg-cover-all', 'btn']"
                        @click="handleSwitch(item)"
                        ></li>
                    </ul>
                </div>
                <transition mode="out-in" enter-active-class="animated faster rollIn" leave-active-class="animated faster rollOut">
                    <dynamic-component :is="currentComponent"></dynamic-component>
                </transition>
            </div>
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
      currentName: 'tips',
      currentComponent: 'TipsBox',
      items: [
        {
          name: 'pastyear',
          component: 'PastYearBox'
        },
        {
          name: 'tips',
          component: 'TipsBox'
        },
        {
          name: 'content',
          component: 'ContentBox'
        },
        {
          name: 'rule',
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
            .nav-box {
                width 100%
                height rem(88)
                .btns-box {
                    width 82%
                    height rem(88)
                    margin 0 auto
                    transform translate(rem(-8), rem(8))
                    .btn {
                        width rem(64)
                        height rem(35)
                        position relative
                        &::after {
                            display block
                            content ''
                            position absolute
                            top 0
                            left 0
                            right 0
                            bottom 0
                            background-size 100% 100%
                            background-repeat no-repeat
                            background-position center center
                            visibility hidden
                        }
                    }
                    .btn.active::after {
                        visibility visible
                    }
                    .pastyear {
                        background-image url('../../assets/pastyear.png')
                        &::after {
                            background-image url('../../assets/pastyear_active.png')
                        }
                    }
                    .tips {
                        background-image url('../../assets/train_tips.png')
                        &::after {
                            background-image url('../../assets/train_tips_active.png')
                        }
                    }
                    .content {
                        background-image url('../../assets/train_content.png')
                        &::after {
                            background-image url('../../assets/train_content_active.png')
                        }
                    }
                    .rule {
                        background-image url('../../assets/train_rule.png')
                        &::after {
                            background-image url('../../assets/train_rule_active.png')
                        }
                    }
                }
            }
        }
    }
}
</style>