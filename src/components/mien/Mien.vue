<template>
    <div class="mien-wrapper">
        <div class="mien-box">
            <div class="title bg-cover-all"></div>
            <div class="content bg-cover-all">
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
import TeamBox from './TeamBox.vue'
import VideoBox from './VideoBox.vue'
import RepresenterBox from './RepresenterBox.vue'
import SceneBox from './SceneBox.vue'

export default {
  components: {
    Tab,
    TeamBox,
    VideoBox,
    RepresenterBox,
    SceneBox
  },
  data () {
    return {
      box: 'mien-video-box',
      currentName: 'mien_video',
      currentComponent: 'VideoBox',
      animate: {
        entrance: 'animated fast bounceIn',
        exits: 'animated fast bounceOut'
      },
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
    height rem(450)
    position relative
    z-index 20
    .mien-box {
        & > div {
            margin 0 auto
        }
        .title {
            width rem(120)
            height rem(48)
            background-image url('../../assets/title_mien.png')
            margin-bottom rem(6)
        }
        .content {
            width rem(355)
            height rem(340)
            background-image url('../../assets/video_box.png')
            & >>> .mien-video-box {
                flex-direction column
                transform translateY(rem(10))
                .nav {
                    width 80%
                    height rem(50)
                    transform translate(rem(-6), rem(20))
                    .nav-inner {
                        width 100%
                        & > li {
                        width rem(62)
                        height rem(38)
                        }
                    }
                }
            }
        }
        // .menu-box {
        //     width 80%
        //     height rem(60)
        //     margin 0 auto
        //     padding-top rem(55)
        //     transform translateX(rem(-6))
        //     .menu-btn {
        //         width rem(64)
        //         height rem(35)
        //     }
        // }
    }
}
</style>