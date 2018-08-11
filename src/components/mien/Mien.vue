<template>
    <div class="video-wrapper">
        <div class="video-box">
            <div class="title bg-cover-all"></div>
            <div class="content bg-cover-all">
                <div class="menu-box flex-between">
                    <div 
                    v-for="(item, index) in items" 
                    :key="index" 
                    :class="item"
                    class="menu-btn bg-cover-all"></div>
                </div>
                <div class="video-wrap bg-cover-all flex-center">
                    <div class="inner" @click="handlePlay">
                        <video class="video" ref="video">
                            <source :src="videoSrc" type="video/ogg"/>
                        </video>
                        <div class="bg-cover-all translate-center" :class="{pause: paused}"></div>
                    </div>         
                </div>
                <div class="slide-box">
                    <div class="left bg-cover-all animated flash infinite"></div>
                    <div class="right bg-cover-all animated flash infinite"></div>
                    <div class="slider">
                        <div class="slide-wrap" v-touch:swipe="swipeHandler">
                            <ul class="slide-inner flex-around" :style="{marginLeft: `-${slideIndex}00%`}">
                                <li v-for="(boxes, index) in boxList" :key="index" class="slide-section flex-around">
                                    <div 
                                    class="slide-btn bg-cover-all flex-center" 
                                    v-for="(box, index) in boxes" :key="index"
                                    :data-name="box.text"
                                    @click="changeVideo(box.src)"
                                    >{{box.text}}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      slideIndex: 0,
      videoSrc: 'http://www.w3school.com.cn/i/movie.ogg',
      paused: true,
      items: [
        'team',
        'video',
        'presenter',
        'scene'
      ],
      boxList: [
        [
          {
            text: '1',
            src: 'http://www.w3school.com.cn/i/movie.ogg'
          },
          {
            text: '2',
            src: ''
          },
          {
            text: '3',
            src: ''
          }
        ],
        [
          {
            text: '',
            src: ''
          },
          {
            text: '',
            src: ''
          },
          {
            text: '',
            src: ''
          }
        ],
        [
          {
            text: '',
            src: ''
          },
          {
            text: '',
            src: ''
          },
          {
            text: '',
            src: ''
          }
        ]
      ]
    }
  },
  created () {
    setTimeout(() => {
      document.querySelector('.loading').outerHTML = ''
    }, 1000)
  },
  methods: {
    swipeHandler (direction) {
      direction === 'left' ? this.slideIndex++ : this.slideIndex--
      this.slideIndex = this.slideIndex <= 0 ? 0 : this.slideIndex >= 2 ? 2 : this.slideIndex
    },
    handlePlay () {
      var player = this.$refs.video
      player.play()
      player.requestFullscreen ? player.requestFullscreen() : player.webkitRequestFullScreen()
      this.paused = false
    },
    changeVideo (src) {
      this.videoSrc = src
      this.paused = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.video-wrapper {
    width 100%
    margin-top rem(70)
    height rem(450)
    position relative
    z-index 20
    .video-box {
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
        }
        .menu-box {
            width 80%
            height rem(60)
            margin 0 auto
            padding-top rem(55)
            transform translateX(rem(-6))
            .menu-btn {
                width rem(64)
                height rem(35)
            }
            .team {
                background-image url('../../assets/team.png')
            }
            .video {
                background-image url('../../assets/video.png')
            }
            .presenter {
                background-image url('../../assets/representer.png')
            }
            .scene {
                background-image url('../../assets/scene.png')
            }
        }
        .video-wrap {
            margin 0 auto
            margin-top rem(30)
            transform translateX(rem(-6))
            width 80%
            height rem(150)
            background-image url('../../assets/video_wrap.png')
            position relative
            .inner {
                width 96%
                height rem(139)
                position relative
                .video {
                    width 100%
                    height 100%
                    object-fit fill
                }
                .pause {
                    width rem(50)
                    height rem(50)
                    background-image url('../../assets/play.png')
                }
            }
        }
        .slide-box {
            width 100%
            height rem(80)
            position relative
            .left {
                width rem(25)
                height rem(25)
                position absolute
                left 8%
                top 50%
                transform translateY(-50%)
                background-image url('../../assets/left_arrow.png')
                animation-duration 8s
            }
            .right {
                width rem(25)
                height rem(25)
                position absolute
                right 12%
                top 50%
                transform translateY(-50%)
                background-image url('../../assets/right_arrow.png')
                animation-duration 8s
            }
            .slide-wrap {
                margin 0 auto
                width 70%
                height rem(80)
                transform translateX(rem(-7))
                overflow hidden
                .slide-inner {
                    width 300%
                    height rem(80)
                    margin-left 0
                    transition all .3s ease-in-out
                    .slide-section {
                        width 100%
                        height rem(80)
                        .slide-btn {
                            width rem(65)
                            height rem(42)
                            background-image url('../../assets/slide_box1.png')
                            position relative
                            font-size 14px
                            color #442d94
                        }
                        .slide-btn::after {
                            visibility hidden
                            content attr(data-name)
                            position absolute
                            top 0
                            left 0
                            right 0
                            bottom 0
                            background-image url('../../assets/slide_box2.png')
                            background-size 100% 100%
                            background-repeat no-repeat
                            background-position center center
                            font-size 14px
                            color #fff
                            display flex
                            align-items center
                            justify-content center
                        }
                        .slide-btn.active::after {
                            visibility visible
                        }
                    }
                }
            }
        }
    }
}
</style>