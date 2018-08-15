<template>
    <div class="student-box bg-cover-all">
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" :class="['text-inner',item.src]">
                <div class="club-title">
                    <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content" v-html="item.text">
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

export default {
  data () {
    return {
      items: [
        {
          src: 'tongxin',
          text: '畅响室内乐社 &nbsp; &nbsp;科技论文讲习社<br/>CF对外交流协会电子协会 &nbsp; &nbsp;曲艺社<br/>移动互联网创新中心 &nbsp;爱心社 &nbsp;百闻茶道社'
        },
        {
          src: 'jisuanji',
          text: '街舞协会 &nbsp;电子竞技协会<br/>信息安全协会 &nbsp;软件技术与应用协会<br/>硬件技术与应用协会 软通动力英才俱乐部<br/>数码协会 &nbsp;Linux协会 &nbsp;ACM程序设计协会'
        },
        {
          src: 'zidonghua',
          text: '粤语社 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;桌游协会<br/>创客部落 &nbsp; &nbsp; &nbsp;物联网协会<br/>推理协会 &nbsp; &nbsp; &nbsp; &nbsp;象棋协会 &nbsp; &nbsp; &nbsp; &nbsp;航模协会'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.student-box {
    width 100%
    background-image url('../../assets/bg2.png')
    position relative
    height rem(405)
    padding-left rem(25)
    padding-top rem(15)
    padding-right rem(15)
    .text-box {
        width 100%
        flex-direction column
        height rem(315)
        & > div {
            width 100%
            flex 1
        }
        .text-inner {
            position relative
            margin-bottom rem(10)
            .club-title {
                width 100%
                display flex
                justify-content flex-start
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
                text-align left 
                font-size rem(12.5)
                color #432c93
                letter-spacing .5px
                line-height rem(20)
                position relative
                padding-top rem(10)
            }
        }
        .text-inner:last-child {
            margin-bottom 0
        }
        .tongxin {
            .title {
                width rem(130) !important
            }
        }
        .jisuanji {
            .title {
                width rem(150) !important
            }
        }
    }
    .arrow-wrap {
        width 100%
        position absolute
        bottom rem(8)
        left 0
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