<template>
    <div class="content-box bg-cover-all">
        <div class="content-wrap flex-col-between">
            <div class="hold-wrap">
                <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
                        <div class="media-wrap flex-col-between" v-show="show">
                            <div v-for="(item, index) in items[currentIndex]" :key="index" class="flex-between media bg-cover-all">
                                <div class="content-wrap">
                                    <div class="title flex-center">
                                        {{item.name}}
                                    </div>
                                    <div class="content">{{item.content}}</div>
                                </div>
                                <div class="qrcode">
                                    <img :src="`${require(`../../assets/${item.qrcode}`)}`" :preview="currentIndex">     
                                </div>
                            </div>
                        </div>
                </transition>
            </div>
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
      items: [
        [
          {
            name: '重庆邮电大学',
            qrcode: 'qrcode1.png',
            content: '负责学校新闻的制作与发布，校务信息发布，师生作品推送，校园文化建设。'
          },
          {
            name: '重邮小帮手',
            qrcode: 'qrcode2.jpg',
            content: '重邮影响力最大、关注量最高的新媒体平台，“重庆十大微信公众号”。'
          },
          {
            name: '重邮青年',
            qrcode: 'qrcode3.jpg',
            content: '致力于为广大重邮学子提供最精彩的校园动态，这里有最引人注目的新闻资讯，最方便实用的知识信息。'
          },
          {
            name: '重邮微校',
            qrcode: 'qrcode4.jpg',
            content: '由党委学生工作部运营，功能定位:学生教育管理，评奖评优，心理健康教育，学生党员教育，学生资助，宿舍管理等。'
          }
        ],
        [
          {
            name: '重邮阳光校园广播台',
            qrcode: 'qrcode5.jpg',
            content: '重庆邮电大学阳光校园广播台SunshineRadio官方平台。'
          },
          {
            name: '重庆邮电大学就业中心',
            qrcode: 'qrcode6.jpg',
            content: '重庆邮电大学就业中心官方微信，实时发布校内招聘信息，就业动态等相关信息。'
          },
          {
            name: '重庆邮电大学招生办公室',
            qrcode: 'qrcode7.png',
            content: '提供重庆邮电大学招生计划、录取分数线、招生简章、新生班级、宿舍分配情况、新生缴费情况的查询服务。'
          },
          {
            name: '重邮小卫士',
            qrcode: 'qrcode8.jpg',
            content: '重庆邮电大学保卫处运营，集安全教育、安全服务、信息通报、应急处置等功能为一体。'
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
        this.currentIndex = this.currentIndex < 0 ? 1 : this.currentIndex > 1 ? 0 : this.currentIndex
      }, 1000)
    }, 1500),
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(604)
    background-image url('../../assets/helper_box.png')
    padding-top rem(140)
    padding-left rem(26.5)
    padding-right rem(39.5)
    padding-bottom rem(20)
    .content-wrap {
        width 100%
        height 100%
        .hold-wrap {
            width 100%
            height rem(400)
            position relative
            .media-wrap {
                width 100%
                height 100%
                .media {
                    width 100%
                    height rem(95)
                    background-image url('../../assets/media_border.png')
                    padding rem(12) rem(12)
                    .content-wrap {
                        width rem(185)
                        height 100%
                        .title {
                            width 100%
                            font-size rem(13)
                            justify-content flex-start
                            color #432c93
                            margin-bottom rem(4)
                        }
                        .content {
                            font-size rem(10)
                            color #432c93
                        }
                    }
                    .qrcode {
                        width rem(66)
                        height 100%
                        & > img {
                            width 100%
                            height 100%
                        }
                    }
                }
            }
        }
        .arrow-wrap {
            width 100%
            & > div {
                width rem(40)
                height rem(40)
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