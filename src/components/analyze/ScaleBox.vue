<template>
    <div class="scale-box bg-cover-all">
        <div class="scale-header">
                <slider :selected="selected" :options="options" @changeOption="changeOption"></slider>
        </div>
        <div class="scale-content">
            <comp-scale-pie :scale="currentScale"></comp-scale-pie>
        </div>
    </div>
</template>

<script>

import CompScalePie from './CompScalePie.vue'

export default {
  components: {
    CompScalePie
  },
  data () {
    return {
      currentScale: {
        male: 79,
        female: 21
      },
      selected: {
        value: '通信与信息工程学院',
        color: '#d5fbff'
      },
      options: [
        {
          value: '通信与信息工程学院',
          scale: {
            male: 79,
            female: 21
          }
        },
        {
          value: '传媒艺术学院',
          scale: {
            male: 28.6,
            female: 71.4
          }
        },
        {
          value: '经济管理学院/现代邮政学院',
          scale: {
            male: 50.7,
            female: 49.3
          }
        },
        {
          value: '软件工程学院',
          scale: {
            male: 83.9,
            female: 16.1
          }
        },
        {
          value: '自动化学院',
          scale: {
            male: 82.3,
            female: 17.7
          }
        },
        {
          value: '光电工程学院/重庆国际半导体学院',
          scale: {
            male: 80.9,
            female: 19.1
          }
        },
        {
          value: '计算机科学与技术学院',
          scale: {
            male: 78.2,
            female: 21.8
          }
        },
        {
          value: '生物信息学院',
          scale: {
            male: 63.1,
            female: 36.9
          }
        },
        {
          value: '理学院',
          scale: {
            male: 71.8,
            female: 28.2
          }
        },
        {
          value: '网络空间安全与信息法学院',
          scale: {
            male: 44,
            female: 56
          }
        },
        {
          value: '体育学院',
          scale: {
            male: 80.7,
            female: 19.3
          }
        },
        {
          value: '先进制造工程学院',
          scale: {
            male: 93.6,
            female: 6.4
          }
        },
        {
          value: '外国语学院',
          scale: {
            male: 17.9,
            female: 82.1
          }
        },
        {
          value: '国际学院',
          scale: {
            male: 78.7,
            female: 21.3
          }
        }
      ]
    }
  },
  methods: {
    changeOption (item) {
      this.selected.value = item.value
      this.currentScale = item.scale
    }
  }
}
</script>
<style lang="stylus" scoped>
.scale-box {
    width 100%
    height 100%
    background-image url('../../assets/bg3.png')
    display flex
    flex-direction column
    justify-content space-between
    position relative
    .scale-header {
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
    .scale-content {
         width 100%
         flex 7.5
         display flex
         justify-content center
    }
}
</style>