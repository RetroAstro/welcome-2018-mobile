<template>
    <div class="video-box">
        <div class="video-wrap">
            <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
                <ul class="video-list flex-around" v-show="show">
                    <li 
                    v-for="(item, index) in videoList[currentIndex]" :key="index"
                    :class="['video-border', 'bg-cover-all', 'flex-center']"
                    :data-text="item.text"
                    @click="handlePlay"
                    >
                    <div class="video-inside">
                        <video :src="item.src" class="video"></video>
                    </div>
                    <i :class="[{ play: currentSrc === item.src },'pause', 'bg-cover-all', 'translate-center']"></i>
                    </li>
                </ul>
            </transition>
        </div>
        <div class="switch-box flex-around">
            <div class="left bg-cover-all" @click="handleSwitch(-1)"></div>
            <div class="right bg-cover-all" @click="handleSwitch(1)"></div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      currentSrc: '',
      show: true,
      player: null,
      currentIndex: 0,
      videoList: [
        [
          {
            text: '舌尖上的重邮 第一集',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '红岩网校工作站 2017 招新视频',
            src: 'http://ugcydzd.qq.com/uwMRJfz-r5jAYaQXGdGnC2_ppdhgmrDlPaRvaV7F2Ic/o05597e7vw2.mp4?sdtfrom=v1010&guid=1d5ab796e470a392ff837b43ce9e7ae9&vkey=A4D2DBD9B5CB0A36C227C96C0E2D8589D62BD146D466E0C40DCB146DAE35401321B2ACCFEA2E1A221F23B122385FE2507C62624BAE55A1671A75955B04343B381E7240B727FC1B57EE3C3869532051E09B7F760F38E47941E945EDD49F11CBBEC2AD1466DA01F8D4C2605007775A52473BD48CB9DF22EB14'
          },
          {
            text: '舌尖上的重邮 第二集',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          }
        ],
        [
          {
            text: '重邮2017军训汇演',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '《春风十里》重邮风光',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '航拍重邮',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          }
        ],
        [
          {
            text: '666',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '233',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '789',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          }
        ]
      ]
    }
  },
  mounted () {
    window.onresize = function () {
      if (this.player) {
        this.player.pause()
        this.currentSrc = ''
      }
    }
  },
  methods: {
    handleSwitch (num) {
      this.show = false
      setTimeout(() => {
        this.currentIndex += num
        this.currentIndex = this.currentIndex <= 0 ? 0 : this.currentIndex >= 2 ? 2 : this.currentIndex
        this.show = true
      }, 1000)
    },
    handlePlay (e) {
      this.player = findParent(e.target, 'video-border').querySelector('video')
      this.currentSrc = this.player.src
      this.player.play()
      this.player.requestFullscreen ? this.player.requestFullscreen() : this.player.webkitRequestFullScreen()
      function findParent (ele, sle) {
        var parent = ele.parentNode
        while (!parent.classList.contains(sle)) {
          parent = parent.parentNode
        }
        return parent
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
.video-box {
    width 80%
    height rem(650)
    .video-wrap {
        height rem(600)
        position relative
        .video-list {
            flex-direction column
            height 100%
            .video-border {
                transform translateY(rem(-10))
                width rem(276)
                height rem(148)
                background-image url('../../assets/video_wrap.png')
                position relative
                .video-inside {
                    width 95.5%
                    height 92.5%
                    position relative
                    .video {
                        width 100%
                        height 100%
                        object-fit fill
                    }
                }
                .pause {
                    display inline-block
                    width rem(50)
                    height rem(50)
                    background-image url('../../assets/play.png')
                }
            }
            .video-border::after {
                position absolute
                left 0
                bottom rem(-40)
                display block
                content attr(data-text)
                width rem(276)
                height rem(30)
                background #d6faff
                border-radius 6px
                border 1.5px solid #432d94
                display flex
                align-items center 
                justify-content center
                font-size 14px
                color #432d94
            }
        }
    }
    .switch-box {
        width 100%
        height rem(50)
        transform translateY(rem(12))
        & > div {
            width rem(35)
            height rem(35)
        }
        .left {
            background-image url('../../assets/left_arrow.png')
        }
        .right {
            background-image url('../../assets/right_arrow.png')
        }
    }
}
</style>

