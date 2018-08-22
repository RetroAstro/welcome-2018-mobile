<template>
    <div class="muti-wrap">
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
</template>

<script>

import CompRepreTeacher from './CompRepreTeacher.vue'
import CompRepreStudent from './CompRepreStudent.vue'

export default {
  components: {
    CompRepreTeacher,
    CompRepreStudent
  },
  data () {
    return {
      nav: 'representer-nav',
      currentName: 'repre_teacher',
      currentComponent: 'CompRepreTeacher',
      tabList: [
        {
          name: 'repre_teacher',
          component: 'CompRepreTeacher'
        },
        {
          name: 'repre_student',
          component: 'CompRepreStudent'
        }
      ]
    }
  },
  methods: {
    handleSwitch (item) {
      this.fadeParentTabs(item.name)
      this.currentName = item.name
      this.currentComponent = item.component
    },
    fadeParentTabs (name) {
      var pass = true
      var parentNav = document.querySelector('.mien-video-nav')
      var navs = document.querySelectorAll('.representer-nav li')
      navs.forEach((li) => {
        if (li.classList.contains('active') && li.classList.contains(name)) {
          pass = false
        }
      })
      if (pass) {
        parentNav.classList.add('animated', 'faster', 'fadeOutDown')
        setTimeout(() => {
          parentNav.classList.remove('fadeOutDown')
          parentNav.classList.add('fadeInUp')
        }, 660)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.muti-wrap {
    width rem(345)
    position relative
    & >>> .representer-nav {
      width rem(278)
      height rem(60)
      position absolute
      left rem(26.5)
      top rem(76)
      z-index 2222
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
</style>