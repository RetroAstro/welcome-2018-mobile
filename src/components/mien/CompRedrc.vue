<template>
    <div class="redrc-box bg-cover-all">
        <div class="redrc-wrap">
            <transition enter-active-class="fadeIn animated faster" leave-active-class="fadeOut animated faster">
                <div class="text-box flex-between" v-show="show">
                    <div v-for="(item, index) in items[currentIndex]" :key="index" class="text-inner">
                        <div class="club-title">
                            <i :class="[item.src, 'title', 'bg-cover-all']" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
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
      show: true,
      currentIndex: 0,
      items: [
        [ {
          src: 'redrc_title_ques',
          text: '重庆邮电大学红岩网校工作站是一个校园互联网 开发团队，自2000年创立以来，已有17个年头了。 它是一群志趣相投的在校大学生共同创建的，在校团委老师的指导下，学生自我管理，多年来走出了一大批优秀的IT人才。红岩网校工作站包括五个部门：产品策划及运营部，视觉设计部，Web研发部，移动开发部和运维安全部。各个部门相互协作，共同推出了重邮小帮手微信公众号、掌上重邮、BT down铺、校园二手拾货网等一系列优秀的校园互联网产品，满足了广大师生的需求，获得一致好评。'
        }],
        [ {
          src: 'redrc_title_ques',
          text: 'Ta是用户心理的倾听者，也是产品需求的挖掘者。活跃在各部门之间，掌控着各个项目的进度，是促进各部门沟通的桥梁。一篇上千字的PRD（产品需求文档）就足以让程序员和设计师闻风丧胆。每一款产品，每一个活动，每一篇推文，都是来自Ta们创意的freestyle。Office、Ps、Axure、Xmind等软件是Ta们“兴风作浪”的助推器。旨在培养出优秀的产品经理，产品运营者和新媒体运营师。'
        }],
        [ {
          src: 'redrc_title_ques',
          text: 'Ta是设计产品图形用户界面，跟踪产品视觉及体验效果的设计师。Ta负责对网站进行整体创意和美术设计，移动端和PC端用户的界面设计，网页宣传海报设计，网站产品的动画及动效设计 ，对设计成果进行定期评估和研究，进行视觉元素的优化设计，旨在设计出高逼格的互联网产品，培养出优秀的视觉设计师和UI设计师。'
        }],
        [ {
          src: 'redrc_title_ques',
          text: 'Ta主要负责移动端产品的开发，以 Java&Kotlin，OC&Swift，C#为主要开发语言，涵盖Android，iOS，Windows 三个平台。在这里你可以学到App的开发制作。移动互联网就是Ta们的日常，从被大神虐哭到自己成为大神。在移动开发部你将对App开发感兴趣，对App制作有狂热的欲望。'
        }],
        [ {
          src: 'redrc_title_ques',
          text: 'Ta的职责包括“重邮小帮手”微信公众号、移动端／PC端网站开发、助力掌上重邮APP、提供强大的后台驱动等。目前分为前端和后端方向，前端主要采用HTML、CSS、JavaScript等利器，针对PC端、移动端等不同交互领域采用不同的设计风格与技术，将视觉无限的创意以行行代码形式转化为交互良好的网站页面。后端主要负责将产品细致入微的现实需求转化为清晰的数据模型与业务逻辑，采用PHP、Java等开发语言操作数据库并进行严格的分析处理，从而为网校提供最为坚实的数据后盾。'
        }],
        [ {
          src: 'redrc_title_ques',
          text: 'Ta既是红岩网校运维安全部，也是重庆邮电大学 Linux 协会。Ta 主要负责维护网校的服务器稳定和安全，同时也负责新项目的部署、环境安全配置和性能优化，还负责了校内的很多公益项目，例如 重庆邮电大学开源镜像站、重庆邮电大学 OpenStack 云计算资源池、重庆邮电大学 MineCraft/CounterStrike 服务器等等。在这里你可以学习到非常多的酷炫的 Linux 知识和信息安全知识，我们使用 Python 和 Go 语言来开发好玩有趣的项目，在这里你可以利用丰富的服务器资源来搭建自己想做的任何项目。'
        }]
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.show = false
      setTimeout(() => {
        this.show = true
        this.currentIndex += num
        this.currentIndex = this.currentIndex < 0 ? 5 : this.currentIndex > 5 ? 0 : this.currentIndex
      }, 500)
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>
.redrc-box {
    width 100%
    background-image url('../../assets/bg2.png')
    position relative
    height rem(405)
    padding-left rem(25)
    padding-top rem(30)
    padding-right rem(15)
    padding-bottom rem(10)
    .redrc-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        .text-box {
            width 100%
            flex-direction column
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
                    margin-bottom rem(12)
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
                    .redrc_title_ques {
                        width rem(230)
                    }
                    .redrc_title_sort {
                        width rem(185)
                    }
                }
                .text-content {
                    width 100%
                    text-align left 
                    font-size rem(13.2)
                    color #432c93
                    letter-spacing .5px
                    position relative
                }
            }
        }
        .arrow-wrap {
            width 100%
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