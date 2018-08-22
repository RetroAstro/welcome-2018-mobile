<template>
    <div class="content-box bg-cover-all">
        <div class="content-wrap">
            <div class="scene-box">
                <div v-for="(item, index) in items[currentIndex]" :key="index" class="scene bg-cover-all">
                    <div class="photo">
                        <img :src="`${require(`../../assets/${item.picture}.png`)}`" :preview="currentIndex">
                    </div>
                    <div class="name flex-center">{{item.name}}</div>
                </div>
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
      currentIndex: 0,
      items: [
        [
          {
            picture: 'bashiwan',
            name: '八十万'
          },
          {
            picture: 'bieyoudongtian',
            name: '别有洞天'
          },
          {
            picture: 'chunhuaqiushi',
            name: '春华秋实'
          },
          {
            picture: 'erjiaoxiyang',
            name: '二教夕阳'
          }
        ],
        [
          {
            picture: 'gaoshanliushui',
            name: '高山流水'
          },
          {
            picture: 'linyindadao',
            name: '林荫大道'
          },
          {
            picture: 'luoyinbinfen',
            name: '落英缤纷'
          },
          {
            picture: 'niaokanchongyou',
            name: '鸟瞰重邮'
          }
        ],
        [
          {
            picture: 'shutu',
            name: '数字图书馆'
          },
          {
            picture: 'bajiao',
            name: '仰望八教'
          },
          {
            picture: 'yifulou',
            name: '逸夫楼'
          },
          {
            picture: 'yuhonglian',
            name: '雨红莲'
          }
        ]
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.currentIndex += num
      this.currentIndex = this.currentIndex < 0 ? 0 : this.currentIndex > (this.items.length - 1) ? (this.items.length - 1) : this.currentIndex
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(464)
    background-image url('../../assets/scene_box.png')
    padding-top rem(92)
    padding-left rem(26.5)
    padding-right rem(41.5)
    padding-bottom rem(30)
    .content-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
        .scene-box {
            width 100%
            height rem(280)
            display flex
            justify-content space-between
            flex-wrap wrap
            & > div {
                width rem(132)
                height rem(135)
                background-image url('../../assets/scene_inside.png')
                padding rem(6)
                .photo {
                    width 100%
                    height rem(100)
                    position relative
                    & > img {
                        width 100%
                        height 100%
                    }
                }
                .name {
                    width 100%
                    height rem(28)
                    font-size rem(13)
                    color #432c93
                }
            }
            & > div:first-child, & > div:nth-of-type(2) {
                margin-bottom rem(12)
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
</style>