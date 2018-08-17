<template>
    <div class="club-box bg-cover-all flex-between">
        <div class="club-wrap">
            <div class="slide-down ">
                <comp-club-slide></comp-club-slide>
            </div>
            <transition enter-active-class="fadeIn animated" leave-active-class="fadeOut animated">
                <div class="text-box flex-between" v-show="show">
                    <div v-for="(item, index) in items[currentIndex]" :key="index" class="text-inner">
                        <div class="club-title">
                            <i class="title bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                        </div>
                        <div class="text-content">
                            {{item.text}}
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

import CompClubSlide from './CompClubSlide.vue'
import util from '@utils/util'

export default {
  components: {
    CompClubSlide
  },
  data () {
    return {
      currentIndex: 0,
      show: true,
      items: [
        [
          {
            src: 'g_office',
            text: '重庆邮电大学校团委办公室（以下简称办公室）是共青团重庆邮电大学委员会直属机构之一，是学校团学工作的枢纽与核心，在团委与各校级学生组织之间起到桥梁和枢纽的作用，是所有学生组织中与老师联系最紧密的部门，是团委老师的得力助手。办公室负责团委工作的上传下达——向上通过制作团委工作简报《重邮共青团》、日报送、月报送等，向团中央、团市委汇报学校团学工作动态；向下联系沟通各校级学生组织，传达团委相关工作要求，并针对学生组织相关工作予以监督，参与学生组织各类活动的筹备工作；监督并完善团建在线网站的建设。同时，办公室还协助完成学校大型活动的会务、秘书工作，负责各项文件、奖状资料的管理工作。'
          }
        ],
        [
          {
            src: 'g_office',
            text: '组织部作为校团委直属四部室之一，主要负责全校共青团员思想教育、基层团组织建设工作，全力推进以“青年马克思主义者培养工程”为核心的团干部的培训管理及考核工作。为提高基层团干部及校级学生干部的政治、思想道德素质和工作能力，增强团支部凝聚力，组织部积极开展“公推直选”、“团组织生活”、“主题团日活动”、“特色团支部创建”等各项特色活动，为进一步开展团支部活力工程，调动新生团干部工作积极性，组织部开展了“新生团干大比武”活动，为了完善，健全基层团支部建设，组织部对各团支部活动的开展进行指导与帮助。同时作为上级党组织和广大团员之间的纽带，组织部协助学生“推优入党”工作的进行，以及发展新团员、补办团员证、团费收缴、团组织关系接转等日常工作，另外还负责年度五四系列评优工作。'
          }
        ],
        [
          {
            src: 'g_office',
            text: '校团委宣传部是我校团委的重要部门，担负着向学校、校团委各学生组织传达信息的重要任务，是校团委各部门正常工作的基本保证。宣传部是负责全校工作的宣传、报道，传达学校和团委的工作指示，会议通知，对广大团员青年进行思想政治教育、素质教育的宣传工作；负责通过网络、海报、橱窗、等形式开展政治思想教育工作。宣传部以丰富校园文化生活，活跃同学们的第二课堂，丰富广大同学的课余生活为己任，带领各团总支宣传部开展工作。'
          }
        ]
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
    //   this.show = false
    //   setTimeout(() => {
    //     this.show = true
    //     this.currentIndex += num
    //     this.currentIndex = this.currentIndex < 0 ? 3 : this.currentIndex > 3 ? 0 : this.currentIndex
    //   }, 500)
    }, 1500)
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
    padding-bottom rem(10)
    .club-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
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
                    font-size rem(12)
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