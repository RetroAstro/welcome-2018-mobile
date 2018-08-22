<template>
    <div class="content-box bg-cover-all">
        <div class="video-box bg-cover-all flex-center">
            <div class="video-wrap" @click="handlePlay">
                <video ref="video" style="width:100%;height:100%;object-fit:fill;" :src="`${require(`../../media/${currentSrc}.mp4`)}`"></video>
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
                        :class="[{active: currentSrc === video.src }, 'video-text', 'flex-center']" 
                        @click="currentSrc = video.src">{{video.name}}</div>
                    </li>
                </ul>
            </div>
            <div class="left bg-cover-all flex-center" @touchstart="handleClick(-1)"><span class="bg-cover-all"></span></div>
            <div class="right bg-cover-all flex-center" @touchstart="handleClick(1)"><span class="bg-cover-all"></span></div>
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
      currentSrc: 'zhaosheng',
      items: [
        [
          {
            name: '招生宣传片',
            src: 'zhaosheng'
          },
          {
            name: '军训汇演',
            src: 'junxunhuiyan'
          },
          {
            name: '鸟瞰新重邮',
            src: 'niaokanxinchongyou'
          }
        ],
        [
          {
            name: '2015红岩招新',
            src: 'hongyan2015'
          },
          {
            name: '2016红岩招新',
            src: 'hongyan2016'
          },
          {
            name: '2017红岩招新',
            src: 'hongyan2017'
          },
        ],
        [
          {
            name: '樱花季专题',
            src: 'yinhua'
          },
          {
            name: '春风十里',
            src: 'chunfengshili'
          },
          {
            name: '航拍校运会',
            src: 'xiaoyunhui'
          }
        ]
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
            width 86%
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
                        width rem(76)
                        height 100%
                        border-radius rem(4)
                        border 1.5px solid #463195
                        background #d5fcfe
                        color #442d94
                        font-size rem(11)
                        padding-top rem(2)
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
            left rem(-9)
            width rem(30)
            height rem(30)
            & > span {
                display block
                width rem(12)
                height rem(22)
                background-image url('../../assets/left_arrow.png')
            }
        }
        .right {
            width rem(30)
            height rem(30)
            position absolute
            top 50%
            transform translateY(-50%)
            right rem(-9)
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

