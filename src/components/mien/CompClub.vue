<template>
    <div class="club-box bg-cover-all flex-between">
        <div class="slide-down ">
            <comp-club-slide></comp-club-slide>
        </div>
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" class="text-inner">
                <div class="club-title">
                    <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content">
                    {{item.text}}
                </div>
            </div>
        </div>
        <div class="arrow-wrap flex-around">
            <div class="left bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
            <div class="right bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
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
    flex-direction column
    position relative
    background-image url('../../assets/bg2.png')
    height rem(405)
    padding-right rem(20)
    padding-left rem(30)
    padding-top rem(10)
    .slide-down {
        width 100%
        height rem(40)
        display flex
        justify-content flex-end
        align-items center
    }
    .text-box {
        width 100%
        flex-direction column
        position relative
        & > div {
            width 100%
            flex 1
            margin-bottom rem(10)
        }
        .text-inner {
            position relative
            .club-title {
                width 100%
                display flex
                justify-content flex-start
                margin-bottom rem(6)
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
                        transform translate(rem(-14), rem(5))
                    }
                }
            }
            .text-content {
                width 100%
                text-align left 
                font-size rem(12.5)
                color #432c93
                letter-spacing .5px
                position relative
            }
        }
    }
    .arrow-wrap {
        width 100%
        height rem(60)
        & > div {
            width rem(40)
            height rem(40)
            transform translateX(rem(-6))
        }
        .left {
            & > span {
                display block
                width rem(15)
                height rem(25)
                background-image url('../../assets/left_arrow.png')
            }
        }
        .right {
            & > span {
                display block
                width rem(15)
                height rem(25)
                background-image url('../../assets/right_arrow.png')
            }
        }
    }
}
</style>