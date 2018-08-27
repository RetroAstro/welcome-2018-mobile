<template>  
    <div class="content-box bg-cover-all">
        <div class="video-box bg-cover-all flex-center">
            <div class="video-wrap flex-center" @click="handlePlay">
                <div class="video-grey bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${currentSrc}.png`)}')` }">
                    <div class="grey translate-center">
                        <div class="pause bg-cover-all translate-center"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="video-menu-wrap">
                <ul class="video-menu flex-between">
                    <li v-for="(item, index) in items" :key="index"
                    :class="[{active: currentLink === item.link }, 'video-text','flex-center']"
                    @click="handleSwitch(item)"
                    >
                    {{item.name}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="insert_">资料来源于重邮小卫士</div>
    </div>
</template>

<script>

import util from '@utils/util'

export default {
  data () {
    return {
      currentIndex: 0,
      currentSrc: 'xiaoshipin',
      currentLink: 'https://v.qq.com/x/page/z0525ekdm55.html',
      items: [
        {
          name: '军训小视频',
          link: 'https://v.qq.com/x/page/z0525ekdm55.html',
          src: 'xiaoshipin'
        },
        {
          name: '重邮军魂',
          link: 'https://v.qq.com/x/page/z0551q3y942.html',
          src: 'chongyoujunhun'
        },
        {
          name: '军训汇演',
          link: 'https://v.qq.com/x/page/b0556ldsq1r.html',
          src: 'junxunhuiyan'
        }
      ]
    }
  },
  methods: {
    handleClick: util.throttle(function (num) {
      this.currentIndex += num
      this.currentIndex = this.currentIndex < 0 ? 2 : this.currentIndex > 2 ? 0 : this.currentIndex
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
    .insert_ {
        position absolute
        bottom rem(-16)
        left 50%
        transform translateX(-50%)
        font-size rem(8)
        opacity .4
        color #442d94
    }
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