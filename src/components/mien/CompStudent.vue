<template>
    <div class="student-box bg-cover-all flex-between">
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" :class="['text-inner',item.src]">
                <div class="club-title">
                    <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content" v-html="item.text">
                </div>
                <div class="dashline"></div>
            </div>
        </div>
        <div class="switch-box flex-around">
            <div class="left bg-cover-all"></div>
            <div class="right bg-cover-all"></div>
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
          text: '畅响室内乐社 &nbsp; &nbsp;科技论文讲习社<br/><br/>CF对外交流协会电子协会 &nbsp; &nbsp;曲艺社<br/><br/>移动互联网创新中心 &nbsp;爱心社 &nbsp;百闻茶道社'
        },
        {
          src: 'jisuanji',
          text: '街舞协会 &nbsp;电子竞技协会<br/>信息安全协会 &nbsp;软件技术与应用协会<br/>硬件技术与应用协会 软通动力英才俱乐部<br/>数码协会 &nbsp;Linux协会 &nbsp;ACM程序设计协会'
        },
        {
          src: 'zidonghua',
          text: '粤语社 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;桌游协会<br/><br/>创客部落 &nbsp; &nbsp; &nbsp;物联网协会<br/><br/>推理协会 &nbsp; &nbsp; &nbsp; &nbsp;象棋协会 &nbsp; &nbsp; &nbsp; &nbsp;航模协会'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.student-box {
    width 100%
    height rem(590)
    transform translateY(rem(8))
    background-image url('../../assets/bg1.png')
    flex-direction column
    padding-top rem(30)
    padding-bottom rem(60)
    position relative
    .text-box {
        width rem(250)
        height rem(500)
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
                padding-top rem(10)
            }
            .dashline {
                position absolute
                bottom rem(20)
                left 0
                width 100%
                height rem(2)
                background-image url('../../assets/dashline.png')
            }
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
            .text-content {
                line-height rem(25)
                transform translateY(rem(-10))
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
        transform translateY(rem(6))
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