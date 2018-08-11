<template>
    <div class="rule-box">
        <div class="menu flex-between">
            <div 
            v-for="(item, index) in items" :key="index"
            :class="[item.name, 'bg-cover-all']"
            :style="{ backgroundImage: currentName === item.name ? `url('${require(`../../assets/${item.name}_active.png`)}')` : `url('${require(`../../assets/${item.name}.png`)}')` }"
            @click="handleSwitch(item)"
            ></div>
        </div>
        <transition mode="out-in" enter-active-class="animated faster flipInY" leave-active-class="animated faster flipOutY">
            <dynamic-component :is="currentComponent"></dynamic-component>
        </transition>
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
      currentName: 'assign',
      currentComponent: 'CompRuleAssign',
      items: [
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
.rule-box {
    width rem(276)
    height rem(650)
    margin 0 auto
    transform translateX(rem(-7))
    position relative
    .menu {
        width 100%
        height rem(40)
        margin-bottom rem(6)
        & > div {
            width rem(133)
            height rem(26)
            position relative
        }
    }
}
</style>