<template>
    <div class="student-box bg-cover-all">
        <div class="student-wrap">
            <transition leave-active-class="fadeOut animated" enter-active-class="animated fadeIn">
                <div class="text-box flex-between" v-show="show">
                    <div v-for="(item, index) in items[currentIndex]" :key="index" :class="['text-inner',item.src]">
                        <div class="club-title">
                            <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                        </div>
                        <div class="text-content" v-html="item.text">
                        </div>
                    </div>
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
      currentIndex: 0,
      show: true,
      items: [
        [ {
          src: 'tongxin',
          text: '畅响室内乐社 &nbsp; &nbsp;科技论文讲习社<br/>CF对外交流协会电子协会 &nbsp; &nbsp;曲艺社<br/>移动互联网创新中心 &nbsp;爱心社 &nbsp;百闻茶道社'
        },
        {
          src: 'jisuanji',
          text: '街舞协会 &nbsp;电子竞技协会<br/>信息安全协会 &nbsp;软件技术与应用协会<br/>硬件技术与应用协会 软通动力英才俱乐部<br/>数码协会 &nbsp;Linux协会 &nbsp;ACM程序设计协会'
        }],
        [ {
          src: 'zidonghua',
          text: '粤语社 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;桌游协会<br/>创客部落 &nbsp; &nbsp; &nbsp;物联网协会<br/>推理协会 &nbsp; &nbsp; &nbsp; 象棋协会 &nbsp; &nbsp; &nbsp; &nbsp;航模协会'
        },
        {
          src: 'zidonghua',
          text: '科幻协会 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;半导体协会 <br/>TG精英社 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;科技创新协会 <br/>道路交通安全协会 &nbsp; &nbsp;素质拓展协会'
        }
        ],
        [ {
          src: 'zidonghua',
          text: '龙影棍道协会 &nbsp; &nbsp; &nbsp; &nbsp;跑步爱好者协会<br/>西乐社CSDN俱乐部'
        },
        {
          src: 'zidonghua',
          text: '天文爱好者协会 &nbsp; &nbsp;&nbsp;数学俱乐部<br/>数学建模协会 &nbsp; &nbsp; &nbsp; &nbsp;物理协会科普写作社'
        },
        {
          src: 'zidonghua',
          text: '电子商务协会 &nbsp; &nbsp; &nbsp; &nbsp;金融协会<br/>创业者协会 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 市场营销协会ERP协会'
        }
        ],
        [ {
          src: 'zidonghua',
          text: '魔术协会 &nbsp; &nbsp; 南山文学社 &nbsp; &nbsp; 摄影协会 <br/>镝鹤汉服文化协会 &nbsp; &nbsp;手作社民族乐器协会<br/>重邮剧社音乐协会 &nbsp; &nbsp; &nbsp;美妆社花卉绿植社<br/>文峰画社 &nbsp; &nbsp;CQUPT动漫协会 &nbsp; &nbsp;电影协会'
        },
        {
          src: 'zidonghua',
          text: '天元围棋协会 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;动物保护协会<br/>基因社生命科学协会 &nbsp; &nbsp; &nbsp;绿溢南山环保协会'
        }
        ]
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.show = false
      setTimeout(() => {
        this.show = true
        this.currentIndex += num
        this.currentIndex = this.currentIndex < 0 ? 3 : this.currentIndex > 3 ? 0 : this.currentIndex
      }, 500)
    }, 1500)
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
    padding-bottom rem(10)
    padding-right rem(2)
    .student-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        .text-box {
            width 100%
            flex-direction column
            height rem(315)
            padding-top rem(10)
            & > div {
                width 100%
                flex 1
            }
            .text-inner {
                position relative
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
                    line-height rem(32)
                    position relative
                    margin-top rem(10)
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
            }
        }
        .arrow-wrap {
            width 100% 
            transform translateX(rem(-8))
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