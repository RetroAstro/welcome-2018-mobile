<template>
    <div class="subject-box bg-cover-all">
        <div class="subject-header">
            <slider :selected="selected" :options="options" @changeOption="changeOption"></slider>
        </div>
        <div class="subject-content">
            <comp-sub-bar :data="currentData"></comp-sub-bar>
        </div>
    </div>
</template>

<script>

import CompSubBar from './CompSubBar.vue'

export default {
  components: {
    CompSubBar
  },
  data () {
    return {
      currentData: {
        subject: [
          '大物A',
          '数据结构',
          '高数A'
        ],
        number: [
          0.16,
          0.14,
          0.13
        ]
      },
      selected: {
        value: '通信与信息工程学院',
        color: '#d5fbff'
      },
      options: [
        {
          value: '通信与信息工程学院',
          data: {
            subject: [
              '大物A',
              '数据结构',
              '高数A'
            ],
            number: [
              0.16,
              0.14,
              0.13
            ]
          }
        },
        {
          value: '传媒艺术学院',
          data: {
            subject: [
              '大学英语',
              '形势与政策',
              '思修'
            ],
            number: [
              0.04,
              0.02,
              0.01
            ]
          }
        },
        {
          value: '经济管理学院/现代邮政学院',
          data: {
            subject: [
              'C程序设计',
              '线代B',
              '高数B'
            ],
            number: [
              0.18,
              0.15,
              0.12
            ]
          }
        },
        {
          value: '软件工程学院',
          data: {
            subject: [
              '大物B',
              '高数A',
              '软件需求工程'
            ],
            number: [
              0.47,
              0.27,
              0.12
            ]
          }
        },
        {
          value: '自动化学院',
          data: {
            subject: [
              '大物B',
              '高数A',
              '工程数学基础'
            ],
            number: [
              0.24,
              0.11,
              0.05
            ]
          }
        },
        {
          value: '光电工程学院/重庆国际半导体学院',
          data: {
            subject: [
              'C程序设计',
              '大物A',
              '高数A'
            ],
            number: [
              0.20,
              0.19,
              0.12
            ]
          }
        },
        {
          value: '计算机科学与技术学院',
          data: {
            subject: [
              '大物B',
              '高数A',
              'C程序设计'
            ],
            number: [
              0.23,
              0.09,
              0.04
            ]
          }
        },
        {
          value: '生物信息学院',
          data: {
            subject: [
              '大物A',
              '线代A',
              'C程序设计'
            ],
            number: [
              0.14,
              0.13,
              0.10
            ]
          }
        },
        {
          value: '理学院',
          data: {
            subject: [
              '高等代数',
              '普通物理学',
              '数据分析'
            ],
            number: [
              0.20,
              0.14,
              0.11
            ]
          }
        },
        {
          value: '网络空间安全与信息法学院',
          data: {
            subject: [
              '大物B',
              '高数A',
              'C程序设计'
            ],
            number: [
              0.30,
              0.14,
              0.07
            ]
          }
        },
        {
          value: '体育学院',
          data: {
            subject: [
              '运动解剖学',
              '形势与政策',
              '思修'
            ],
            number: [
              0.22,
              0.07,
              0.05
            ]
          }
        },
        {
          value: '先进制造工程学院',
          data: {
            subject: [
              '大物B',
              '高数A',
              '制图实践与建模'
            ],
            number: [
              0.36,
              0.17,
              0.07
            ]
          }
        },
        {
          value: '外国语学院',
          data: {
            subject: [
              '英语基础写作',
              '基础英语',
              '英语听力实践'
            ],
            number: [
              0.09,
              0.09,
              0.06
            ]
          }
        },
        {
          value: '国际学院',
          data: {
            subject: [
              '高数A',
              '大物B',
              '数据结构与算法'
            ],
            number: [
              0.20,
              0.14,
              0.05
            ]
          }
        }
      ]
    }
  },
  methods: {
    changeOption (item) {
      this.selected.value = item.value
      this.currentData = item.data
    }
  }
}
</script>
<style lang="stylus" scoped>
.subject-box {
    width 100%
    height 100%
    background-image url('../../assets/bg3.png')
    display flex
    flex-direction column
    justify-content space-between
    position relative
    .subject-header {
        width 100%
        flex 2.5
        display flex
        align-items center
        justify-content flex-end
        padding-right rem(16)
        & >>> .slide-menu {
            width rem(110)
            height rem(28)
            position relative
            .clickOut {
                width 100%
                height 100%
                display flex
                align-items center
                background-image url('../../assets/slide_menu.png')
            }
            .input-wrap {
                width 70%
                height rem(23)
                transform translateX(rem(4))
                .menu-content {
                    width 100%
                    height 100%
                    color #645bac
                    font-size rem(13)
                    text-align center
                }
            }
            .option-wrap {
                position absolute
                left 0
                top rem(28)
                width rem(110)
                height rem(210)
                z-index 200
                overflow hidden
                .option {
                    width 100%
                    height rem(210)
                    overflow-y auto
                    flex-direction column
                    border-left rem(2) solid #432a92
                    border-right rem(2) solid #432a92
                    border-bottom rem(2) solid #432a92
                    border-bottom-left-radius 6px
                    border-bottom-right-radius 6px
                    background-color #9ce8ff
                    & > li {
                        width 100%
                        padding-left rem(8)
                        display flex
                        align-items center
                        justify-content flex-start
                        padding rem(6)
                        padding-left rem(6)
                        font-size rem(13)
                        color #645bac
                        border-bottom rem(1.5) solid #503d9c
                    }
                    & > li:last-child {
                        border-bottom 0
                    }
                }
            }
        }
    }
    .subject-content {
         width 100%
         flex 7.5
         display flex
         justify-content center
    }
}
</style>