<template>  
    <div class="content-box bg-cover-all">
        <div class="video-box bg-cover-all flex-center">
            <div class="video-wrap flex-center" @click="handlePlay">
                <video preload="preload" ref="video" style="width:100%;height:100%;object-fit:fill;" :src="currentSrc"></video>
                <div class="video-grey translate-center">
                    <div class="pause bg-cover-all translate-center"></div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="video-menu-wrap">
                <ul class="video-menu" :style="{marginLeft: `-${currentIndex}00%`}">
                    <li v-for="(item, index) in items" :key="index" class="video-title">
                        <div 
                        v-for="(video, index) in item" :key="index" 
                        :class="[{active: currentSrc === video.src }, 'video-text','flex-center']" 
                        @click="currentSrc = video.src">{{video.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="left bg-cover-all flex-center" @click="handleClick(-1)"><span class="bg-cover-all"></span></div>
            <div class="right bg-cover-all flex-center" @click="handleClick(1)"><span class="bg-cover-all"></span></div>
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
      currentSrc: 'http://220.170.49.117/6/r/i/x/w/rixwapisvowouhufsoimbecalgvxsq/hc.yinyuetai.com/F2B4016449734C6683C1D2CF0B462D60.mp4?sc=54685f968f28467e&br=782&vid=3240325&aid=215&area=ML&vst=3',
      items: [
        [
          {
            name: '1',
            src: 'a'
          },
          {
            name: '2',
            src: 'http://220.170.49.117/6/r/i/x/w/rixwapisvowouhufsoimbecalgvxsq/hc.yinyuetai.com/F2B4016449734C6683C1D2CF0B462D60.mp4?sc=54685f968f28467e&br=782&vid=3240325&aid=215&area=ML&vst=3'
          },
          {
            name: '3',
            src: 'b'
          },
        ],
        [
          {
            name: '4',
            src: 'c'
          },
          {
            name: '5',
            src: 'd'
          },
          {
            name: '6',
            src: 'e'
          },
        ],
        [
          {
            name: '7',
            src: 'f'
          },
          {
            name: '8',
            src: 'g'
          },
          {
            name: '9',
            src: 'h'
          },
        ]
      ]
    }
  },
  methods: {
    handleClick: util.throttle(function (num) {
      this.currentIndex += num
      this.currentIndex = this.currentIndex < 0 ? 2 : this.currentIndex > 2 ? 0 : this.currentIndex
    }, 1500),
    handlePlay () {
      this.player = this.$refs.video
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
            width 82%
            margin 0 auto
            height rem(66)
            overflow hidden
            position relative
            .video-menu {
                transition all .5s ease-in-out
                width 300%
                height rem(66)
                display flex
                align-items center
                .video-title {
                    width 100%
                    height rem(35)
                    display flex
                    justify-content space-between
                    .video-text {
                        width rem(70)
                        height 100%
                        border-radius rem(4)
                        border 1.5px solid #463195
                        background #d5fcfe
                        color #442d94
                        font-size rem(14)
                        &.active {
                            background-color #559cdd
                            color #fff
                        }
                    } 
                }
            }
        }

        .left {
            position absolute
            top 50%
            transform translateY(-50%)
            left 0
            & > span {
                display block
                width rem(12)
                height rem(22)
                background-image url('../../assets/left_arrow.png')
            }
        }
        .right {
            position absolute
            top 50%
            transform translateY(-50%)
            right 0
            & > span {
                display block
                width rem(12)
                height rem(22)
                background-image url('../../assets/right_arrow.png')
            }
        }
    }
}
</style>