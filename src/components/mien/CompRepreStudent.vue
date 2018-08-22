<template>
    <div class="content-box bg-cover-all">
        <div class="student-wrap">
            <div class="student-box flex-between">
                <div v-for="(item, index) in items" :key="index" class="student flex-center bg-cover-all">
                    <div class="stu-wrap">
                        <div class="photo bg-cover-all" :style="{backgroundImage: `url('${require(`../../assets/${item.picture}.jpg`)}')`}"></div>
                        <div class="content">
                            <div class="text-title">
                                <img :src="`${require(`../../assets/t_${item.name}.png`)}`">
                            </div>
                            <div class="text-content">{{item.content}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow-wrap flex-around">
                <div class="left bg-cover-all flex-center" @click="handleSwitch(-1)"><span class="bg-cover-all"></span></div>
                <div class="right bg-cover-all flex-center" @click="handleSwitch(1)"><span class="bg-cover-all"></span></div>
            </div>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'
import mock from '@service/mock'

export default {
  data () {
    return {
      currentPage: 0,
      items: [
        {
          name: '蒋天星',
          picture: '蒋天星',
          content: '蒋天星，计算机科学与技术学院2015级智能科学与技术专业学生,上任红岩网校工作站站长。他锐意进取，奉献青春，充分发挥“红岩网校工作站”团支部技术优势，积极带领同学们组织参与各项网络志愿服务活动。'
        },
        {
          name: '刘磊',
          picture: '刘磊',
          content: '刘磊, 光电工程学院2014级微电子科学与工程专业学生，驻班党员、年级长、校党委组织部助理、党支部宣传委员，现已考取重庆邮电大学硕士研究生。'
        },
        {
          name: '赵蔺',
          picture: '赵蔺',
          content: '赵蔺, 外国语学院2015级翻译专业学生，外国语学院团总支学生兼职副书记，曾任外国语学院新媒体部副部长、辅导员助理、学习委员，重庆邮电大学本硕连读候选人。'
        }
      ],
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.currentPage += num
      this.currentPage = this.currentPage <= 0 ? 0 : this.currentPage >= 3 ? 3 : this.currentPage
      this.items = mock.students[this.currentPage]
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(798)
    background-image url('../../assets/repre_student_wrap.png')
    padding-top rem(140)
    padding-left rem(27)
    padding-right rem(41.5)
    padding-bottom rem(40)
    .student-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        .student-box {
            width 100%
            flex-direction column
            .student {
                width 100%
                height rem(175)
                background-image url('../../assets/repre_student_box.png')
                margin-bottom rem(15)
                .stu-wrap {
                    width 90%
                    height 78%
                    display flex
                    justify-content space-between
                    .photo {
                        flex 4
                        height 100%
                    }
                    .content {
                        flex 6
                        height 100%
                        padding-left rem(16)
                        .text-title {
                            width 100%
                            height rem(20)
                            display flex
                            justify-content flex-start
                            margin-bottom rem(3)
                            & > img {
                                width auto
                                height rem(16)
                            }
                        }
                        .text-content {
                            text-align left 
                            font-size rem(10.5)
                            color #432c93
                        }
                    }
                }
            }
            .student:last-child {
                margin-bottom 0
            }
        }
        .arrow-wrap {
            width 90%
            margin 0 auto 
            transform translateX(rem(6))
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
@media screen and (max-width: 360px) {
    .text-content {
        font-size rem(8) !important
    }
}
</style>