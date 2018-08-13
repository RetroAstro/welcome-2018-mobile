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
      box: 'mien-video-box',
      currentName: 'mien_video',
      currentComponent: 'VideoBox',
      animate: {
        entrance: 'animated faster rollIn',
        exits: 'animated faster rollOut'
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
    height rem(880)
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
            width rem(345)
            height rem(772)
            background-image url('../../assets/tip_box.png')
            transform translateX(rem(5))
            & >>> .mien-video-box {
                flex-direction column
                transform translateY(rem(35))
                height rem(700)
                & > div {
                    transform translate(rem(-7), rem(0))
                }
                & > .nav {
                    width 80%
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
        }
    }
}
</style>