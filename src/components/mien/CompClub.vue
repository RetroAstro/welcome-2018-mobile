<template>
    <div class="club-box bg-cover-all flex-between">
        <div class="slide-down flex-end">
            <comp-club-slide></comp-club-slide>
        </div>
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" class="text-inner">
                <div class="club-title">
                    <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content">
                    {{item.text}}
                    <div class="dashline bg-cover-all"></div>
                </div>
            </div>
        </div>
        <div class="switch-box flex-around">
            <div class="left bg-cover-all"></div>
            <div class="right bg-cover-all"></div>
        </div>
    </div>
</template>

<script>

import CompClubSlide from './CompClubSlide.vue'

export default {
  components: {
    CompClubSlide
  },
  data () {
    return {
      items: [
        {
          src: 'g_office',
          text: '负责协调和承办团委的日常事务；负责团委大型 会议的会务工作；团委相关工作的上传与下达； 负责奖状、文件的保管工作；协助管理团委'
        },
        {
          src: 'g_team',
          text: '负责团的基层组织建设工作；开展推优入党工作； 负责开展青年马克思主义者培养工程； 指导主题 团日活动的开展；开展五四评优表彰工作'
        },
        {
          src: 'g_team',
          text: '负责团的基层组织建设工作；开展推优入党工作； 负责开展青年马克思主义者培养工程； 指导主题 团日活动的开展；开展五四评优表彰工作'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.club-box {
    width 100%
    height rem(590)
    transform translateY(rem(8))
    background-image url('../../assets/bg1.png')
    flex-direction column
    padding-top rem(10)
    padding-bottom rem(60)
    position relative
    .slide-down {
        width rem(250)
        height rem(40)
        display flex
        justify-content flex-end
        align-items center
    }
    .text-box {
        width rem(250)
        height rem(468)
        flex-direction column
        & > div {
            width 100%
            flex 1
        }
        .text-inner {
            position relative
            .club-title {
                width 100%
                height rem(30)
                display flex
                justify-content flex-start
                padding-left rem(15)
                .title {
                    width rem(80)
                    height rem(18)
                    &::before {
                        display block
                        content ''
                        width rem(7)
                        height rem(8)
                        background-image url('../../assets/dot.png')
                        background-size 100% 100%
                        background-repeat no-repeat
                        background-position center center
                        transform translate(rem(-14), rem(6))
                    }
                }
            }
            .text-content {
                width 100%
                height rem(126)
                text-align left 
                font-size rem(13)
                color #432c93
                letter-spacing .5px
                line-height rem(17)
                position relative
                padding-top rem(6)
                .dashline {
                    position absolute
                    bottom rem(30)
                    left 0
                    width 100%
                    height rem(2)
                    background-image url('../../assets/dashline.png')
                }
            }
        }
    }
    .switch-box {
        width 100%
        height rem(50)
        position absolute
        padding 0 rem(13)
        left 0
        bottom rem(22)
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