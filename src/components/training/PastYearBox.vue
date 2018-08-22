<template>  
    <div class="content-box bg-cover-all">
        <div class="video-box bg-cover-all flex-center">
            <div class="video-wrap flex-center" @click="handlePlay">
                <video ref="video" style="width:100%;height:100%;object-fit:fill;" :src="`${require(`../../media/${currentSrc}.mp4`)}`"></video>
                <div class="video-grey translate-center">
                    <div class="pause bg-cover-all translate-center"></div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="video-menu-wrap">
                <ul class="video-menu flex-between">
                    <li v-for="(item, index) in items" :key="index"
                    :class="[{active: currentSrc === item.src }, 'video-text','flex-center']"
                    @click="currentSrc = item.src"
                    >
                    {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'

export default {
  data () {
    return {
      currentIndex: 0,
      player: null,
      currentSrc: 'xiaoshipin',
      items: [
        {
          name: '军训小视频',
          src: 'xiaoshipin'
        },
        {
          name: '重邮军魂',
          src: 'chongyoujunhun'
        },
        {
          name: '军训汇演',
          src: 'junxunhuiyan'
        }
      ]
    }
  },
  mounted () {
    this.player = this.$refs.video
    document.addEventListener('webkitfullscreenchange', () => {
      if (!document.webkitFullscreenElement) {
        this.player.pause()
      }
    })
  },
  methods: {
    handleClick: util.throttle(function (num) {
      this.currentIndex += num
      this.currentIndex = this.currentIndex < 0 ? 2 : this.currentIndex > 2 ? 0 : this.currentIndex
    }, 1500),
    handlePlay () {
      this.currentSrc = this.player.src
      this.player.play()
      this.player.requestFullscreen ? this.player.requestFullscreen() : this.player.webkitRequestFullScreen()
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(330)
    background-image url('../../assets/video_box.png')
    padding-top rem(95)
    padding-left rem(29)
    padding-right rem(40)
    padding-bottom rem(20)
    .video-box {
        width 100%
        height rem(145)
        background-image url('../../assets/video_wrap.png')
        .video-wrap {
            width 95%
            height 91%
            position relative
            .video-grey {
                width 100%
                height 100%
                z-index 400
                background-color rgba(0,0,0,.3)
                .pause {
                    width rem(40)
                    height rem(40)
                    background-image url('../../assets/pause.png')
                    z-index 400
                }
            }
        }
    }
    .slider {
        width 100%
        height rem(66)
        position relative
        .video-menu-wrap {
            width 90%
            margin 0 auto
            height rem(66)
            overflow hidden
            position relative
            .video-menu {
                width 100%
                height rem(66)
                .video-text {
                    width rem(76)
                    height rem(36)
                    border-radius rem(4)
                    border 1.5px solid #463195
                    background #d5fcfe
                    color #442d94
                    font-size rem(12)
                    &.active {
                        background-color #559cdd
                        color #fff
                    }
                } 
            }
        }
    }
}
</style>