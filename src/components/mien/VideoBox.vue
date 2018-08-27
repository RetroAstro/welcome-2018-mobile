<template>
    <div class="content-box bg-cover-all">
        <div class="video-box bg-cover-all flex-center">
            <div class="video-wrap" @click="handlePlay">
                <div class="video-grey bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${currentSrc}`)}')` }">
                    <div class="grey translate-center">
                        <div class="pause bg-cover-all translate-center"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="video-menu-wrap">
                <ul class="video-menu" :style="{marginLeft: `-${currentIndex}00%`}">
                    <li v-for="(item, index) in items" :key="index" class="video-title">
                        <div 
                        v-for="(video, index) in item" :key="index" 
                        :class="[{active: currentLink === video.link }, 'video-text', 'flex-center']" 
                        @click="handleSwitch(video)">{{video.name}}</div>
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
      currentLink: 'https://v.qq.com/x/page/i0518koxz3b.html',
      currentSrc: 'zhaosheng.jpg',
      items: [
        [
          {
            name: '招生宣传片',
            link: 'https://v.qq.com/x/page/i0518koxz3b.html',
            src: 'zhaosheng.jpg'
          },
          {
            name: '鸟瞰新重邮',
            link: 'https://v.qq.com/x/page/p0157qsmcuj.html',
            src: 'niaokanxinchongyou.jpg'
          },
          {
            name: '2017红岩招新',
            link: 'https://v.qq.com/x/page/o05597e7vw2.html',
            src: '2017.jpg'
          }
        ],
        [
          {
            name: '樱花季专题',
            link: 'https://v.qq.com/x/page/u061866c94o.html',
            src: 'yinhua.png'
          },
          {
            name: '春风十里',
            link: 'https://v.qq.com/x/page/h0392p55io7.html',
            src: 'chunfengshili.png'
          },
          {
            name: '航拍校运会',
            link: 'https://v.qq.com/x/page/p0161krhz05.html',
            src: 'xiaoyunhui.png'
          }
        ]
      ]
    }
  },
  methods: {
    handleClick: util.throttle(function (num) {
      this.currentIndex += num
      this.currentIndex = this.currentIndex < 0 ? 1 : this.currentIndex > 1 ? 0 : this.currentIndex
    }, 1500),
    handlePlay () {
      window.location.href = this.currentLink
    },
    handleSwitch (item) {
      this.currentLink = item.link
      this.currentSrc = item.src
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
            .grey {
                width 100%
                height 100%
                background-color rgba(0,0,0,.3)
            }
            .video-grey {
                width 100%
                height 100%
                z-index 400
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
                width 200%
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

