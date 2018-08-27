<template>
    <div class="content-box bg-cover-all">
        <div class="tips-box bg-cover-all flex-col-between">
                <transition enter-active-class="fadeIn animated faster" leave-active-class="fadeOut animated faster">
                    <div class="tip" v-show="show">
                        <div class="title">
                            <div class="font bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${textList[currentIndex].name}.png`)}')` }"></div>
                        </div>
                        <div class="text-content" v-html="textList[currentIndex].content"></div>
                    </div>
                </transition>
                <div class="arrow-wrap flex-around">
                    <div class="left bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(-1)"></span></div>
                    <div class="right bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(1)"></span></div>
                </div>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'

export default {
  data () {
    return {
      show: true,
      currentIndex: 0,
      textList: [
        {
          name: 'zuoxi',
          content: '1.早餐一定要吃好，午餐一定要吃饱，晚餐要吃得适宜。军训时饭量会增大，不想发胖的妹子在晚饭时一定要管好自己的嘴巴；由于天气比较炎热，也会有一些同学吃不下饭，建议多少吃点，军训体力消耗很大，以免身体不适。<br/>2.多吃富含多种维生素的水果蔬菜，可以淡化黑色素，在一定程度上起到美白的效果。<br/>3.饮用水、运动饮料（军训期间会大量流汗适量补充水分很重要，建议可以喝一些葡萄糖水）<br/>4.少吃冰的东西（军训期间天气会比较炎热，降暑很有必要，但是要少吃冰的东西，以免引起肠胃的不舒服）<br/>5.尽量早睡（晚上军训结束，回宿舍尽快洗漱，充足的睡眠才能保证第二天有足够的精力进行训练）'
        },
        {
          name: 'fangshai',
          content: '1. 军训防晒是最重要的环节，不管是男生还是女生，都一定要注意防晒，因为防晒不仅是要防晒黑，更是要防晒伤。<br/>2. 防晒霜、防晒喷雾(最好买SPF50、PA+++的，SPF是防晒黑指数，PA是防晒伤指数，军训时长时间在烈日下暴晒，用指数高的比较适宜。出门前半个小时就要涂，因为防晒霜也要时间吸收。可以随身携带防晒喷雾，军训时出汗多，可以定时补涂一次。防晒霜的涂抹位置最好是脸部、脖子以及所有穿上军训服后能够漏出来的地方）<br/> 3. 湿纸巾、吸油面纸（擦汗必备，擦完脸再涂上防晒霜）<br/> 4. 润唇膏(可选择一些带有防晒指数的) <br/>5. 晒后修复(可以用芦荟胶或大瓶化妆水做水膜，也可以直接敷保湿面膜)'
        },
        {
          name: 'yongping',
          content: '1. 防暑药（藿香正气水等）<br/>2. 花露水、驱蚊水（晚上军训时会有一些蚊虫，备上以防止蚊虫叮咬）<br/>3. 风油精(提神醒脑。军训时需要早起，有些同学可能会睡眠不足，可以起到提神的功效。此外，风油精也会让人觉得特别清凉) <br/>4. 维C片、维E片(补充维生素，淡化黑色素，美白皮肤)<br/> 5. 创可贴、棉签、碘伏(创可贴要随身带几枚，以备不时之需)<br/> 6.水杯（水杯最好是有盖子的，训练会大量出汗，休息时间有饮水点，备上可以随时补充水）'
        },
        {
          name: 'shenqi',
          content: '1. 发绳、发卡(军训时注重仪容仪表，长头发需要绑起来，刘海需要别起来，另外发卡也是卡帽子神器) <br/>2. 厚鞋垫、卫生巾（军训发的鞋子会有点硬，大家请备好厚鞋垫或是垫鞋子的卫生巾。卫生巾可以吸汗，垫着也会更软一点，鞋子穿着了，站军姿、踢正步时会更有力量呐） <br/>3. 运动袜（舒适、吸汗。另外，参加走方阵的同学按要求要穿深色的袜子）<br/> 4. 零钱（随身带零钱，以备不时之需） <br/>5. 泡脚（军训训练强度会比较大，用热水泡脚既解乏，又利于睡眠）'
        }
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.backtoTop()
      this.show = false
      setTimeout(() => {
        this.show = true
        this.currentIndex += num
        this.currentIndex = this.currentIndex < 0 ? 3 : this.currentIndex > 3 ? 0 : this.currentIndex
      }, 500)
    }, 1500),
    backtoTop () {
      var timer = null
      cancelAnimationFrame(timer)
      var startTime = +new Date()
      var b = document.body.scrollTop || document.documentElement.scrollTop
      var d = 500
      var c = b
      timer = requestAnimationFrame(function func () {
        var t = d - Math.max(0, startTime - (+new Date()) + d)
        document.documentElement.scrollTop = document.body.scrollTop = (t * (-c) / d + b) + 320
        timer = requestAnimationFrame(func)
        if (t === d) {
          cancelAnimationFrame(timer)
        }
      })
    }
  }
}
</script>


<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(772)
    background-image url('../../assets/tip_box.png')
    padding-top rem(100)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(38)
    .tips-box {
        width 100%
        height 100%
        background-image url('../../assets/bg1.png')
        padding-top rem(15)
        padding-left rem(42)
        padding-right rem(30)
        .tip {
            width 100%
            height rem(540)
            .title {
                width 100%
                height rem(40)
                display flex
                justify-content flex-start
                align-items center
                .font {
                    width rem(68)
                    height rem(18)
                    background-image url('../../assets/diet.png')
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
                text-align left 
                font-size rem(14)
                color #432c93
                letter-spacing 0.6px
                line-height rem(23)
            }
        }
        .arrow-wrap {
            width 100%
            height rem(76)
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
}
</style>
