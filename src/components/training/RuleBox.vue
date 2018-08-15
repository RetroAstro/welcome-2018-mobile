<template>
    <div class="content bg-cover-all">
      <div class="content-wrap flex-between">
        <tab 
        :nav="nav"
        :tabList="tabList" 
        :currentName="currentName" 
        @handleSwitch="handleSwitch">
        </tab>
        <transition mode="out-in" enter-active-class="animated faster flipInY" leave-active-class="animated faster flipOutY">
            <dynamic-component :is="currentComponent"></dynamic-component>   
        </transition>
      </div>
    </div>
</template>

<script>

import CompRuleAssign from './CompRuleAssign.vue'
import CompRuleSchedule from './CompRuleSchedule.vue'

export default {
  components: {
    CompRuleAssign,
    CompRuleSchedule
  },
  data () {
    return {
      nav: 'rule-nav',
      currentName: 'assign',
      currentComponent: 'CompRuleAssign',
      tabList: [
        {
          name: 'assign',
          component: 'CompRuleAssign'
        },
        {
          name: 'schedule',
          component: 'CompRuleSchedule'
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
.content {
    width rem(345)
    height rem(648)
    background-image url('../../assets/train_box.png')
    padding-top rem(80)
    display flex
    justify-content center
    .content-wrap {
      width rem(277)
      height rem(540)
      flex-direction column
      transform translate(rem(-6.5), rem(0))
      padding-bottom rem(3)
      & >>> .rule-nav {
        width 100%
        height rem(60)
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
    }
}
</style>

