<template>
    <div class="team-wrap">
        <tab 
        :box="box"
        :tabList="tabList" 
        :animate="animate" 
        :currentName="currentName" 
        @handleSwitch="handleSwitch">
            <dynamic-component :is="currentComponent"></dynamic-component>
        </tab>
    </div>
</template>

<script>

import CompClub from './CompClub.vue'
import CompRedrc from './CompRedrc.vue'
import CompStudent from './CompStudent.vue'

export default {
  components: {
    CompClub,
    CompRedrc,
    CompStudent,
  },
  data () {
    return {
      box: 'team-box',
      currentName: 'club',
      currentComponent: 'CompClub',
      animate: {
        entrance: 'animated faster flipInY',
        exits: 'animated faster flipOutY'
      },
      tabList: [
        {
          name: 'club',
          component: 'CompClub'
        },
        {
          name: 'student',
          component: 'CompStudent'
        },
        {
          name: 'redrc',
          component: 'CompRedrc'
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
.team-wrap {
    width 80%
    height rem(650)
    padding-top rem(12)
    & >>> .team-box {
      flex-direction column
      position relative
      .nav {
        width 100%
        height rem(40)
        .nav-inner {
            width 100%
            & > li {
              width rem(86)
              height rem(29)
            }
        }
      }
    }
}
</style>