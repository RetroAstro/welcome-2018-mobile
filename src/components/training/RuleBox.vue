<template>
    <tab 
    :box="box"
    :tabList="tabList" 
    :animate="animate" 
    :currentName="currentName" 
    @handleSwitch="handleSwitch">
        <dynamic-component :is="currentComponent"></dynamic-component>
    </tab>
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
      box: 'rule-box',
      currentName: 'assign',
      currentComponent: 'CompRuleAssign',
      animate: {
        entrance: 'animated faster flipInY',
        exits: 'animated faster flipOutY'
      },
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
