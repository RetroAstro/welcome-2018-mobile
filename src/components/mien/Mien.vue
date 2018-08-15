<template>
    <div class="mien-wrapper">
        <div class="mien-box">
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

import TeamBox from './TeamBox.vue'
import VideoBox from './VideoBox.vue'
import RepresenterBox from './RepresenterBox.vue'
import SceneBox from './SceneBox.vue'

export default {
  components: {
    TeamBox,
    VideoBox,
    RepresenterBox,
    SceneBox
  },
  data () {
    return {
      nav: 'mien-video-nav',
      currentName: 'mien_team',
      currentComponent: 'TeamBox',
      tabList: [
        {
          name: 'mien_team',
          component: 'TeamBox'
        },
        {
          name: 'mien_video',
          component: 'VideoBox'
        },
        {
          name: 'mien_representer',
          component: 'RepresenterBox'
        },
        {
          name: 'mien_scene',
          component: 'SceneBox'
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
.mien-wrapper {
    width 100%
    margin-top rem(70)
    position relative
    z-index 21
    padding-left rem(22)
    .mien-box {
        .title {
            width rem(120)
            height rem(48)
            margin 0 auto
            transform translateX(rem(-8))
            background-image url('../../assets/title_mien.png')
            margin-bottom rem(6)
        }
        & >>> .mien-video-nav {
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