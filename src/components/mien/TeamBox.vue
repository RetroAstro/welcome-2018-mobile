<template>
    <div class="content-box bg-cover-all">
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
      nav: 'team-nav',
      currentName: 'club',
      currentComponent: 'CompClub',
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
.content-box {
    width rem(345)
    height rem(564)
    background-image url('../../assets/mien_team_box.png')
    padding-top rem(80)
    padding-left rem(26.5)
    padding-right rem(39.5)
    & >>> .team-nav {
      width 100%
      height rem(50)
      position relative
      .nav-inner {
          width 100%
          height 100%
          padding-right rem(.5)
          display flex
          align-items center
          justify-content space-between
          & > li {
              width rem(85)
              height rem(30)
          }
      }
    }
}
</style>