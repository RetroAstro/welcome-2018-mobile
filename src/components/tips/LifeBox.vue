<template>
    <div class="content-box bg-cover-all">
        <div class="life-wrap flex-col-between">
            <div class="toper-wrap">
                <div class="slide-down">
                    <slider :selected="selected" :options="options" @changeOption="changeOption"></slider>
                </div>
                <div class="top-wrap">
                    <div class="life-box flex-col-between bg-cover-all" v-for="(item, index) in itemList.items[itemList.currentIndex]" :key="index">
                        <div class="photo">
                            <img :src="`${require(`../../assets/${item.photo}.jpg`)}`" :preview="itemList.currentIndex">
                        </div>
                        <div class="content-wrap">
                            <div class="name">
                                <img :src="`${require(`../../assets/${item.name}.png`)}`">
                            </div>
                            <div class="content" v-html="item.content"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow-wrap flex-around" v-show="itemList.items.length > 1">
                <div class="left bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(-1)"></span></div>
                <div class="right bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(1)"></span></div>
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
      selected: {
        value: '周边美食',
        color: '#9ce8ff'
      },
      options: [
        {
          value: '周边美食',
        },
        {
          value: '景色'
        },
        {
          value: '超市',
        },
        {
          value: '附近银行'
        },
        {
          value: '快递收发'
        }
      ],
      itemList: {
        currentIndex: 0,
        items: [
          [
            {
              name: 't_城门老火锅',
              photo: 'chenmenlaohuoguo',
              content: '地址： 新校门出门，过马路右转<br/>简介： 辣而不燥，回味悠长'
            },
            {
              name: 't_大茶杯',
              photo: 'dachabei',
              content: '地址： 老校门过马路左转一个斜坡旁<br/>简介： 这里的招牌奶茶如丝般顺滑'
            },
            {
              name: 't_果然',
              photo: 'guoran',
              content: '地址： 老校门对面<br/>简介： 满满一杯细细品味，哇噢!就是这个味道！'
            },
            {
              name: 't_华莱士',
              photo: 'hualaishi',
              content: '地址： 老校门对面<br/>简介： 物美价廉，种类繁多，美味可口'
            }
          ],
          [
            {
              name: 't_黄焖鸡米饭',
              photo: 'huangmenjimifan',
              content: '地址： 老校门对面<br/>简介： 好吃，又实惠，配上米饭一吃，那就一个字 ，绝'
            },
            {
              name: 't_蜜雪冰城',
              photo: 'mixuebincheng',
              content: '地址： 老校门对面<br/>简介： 这家的冰激凌很好吃哦，而且不贵，物美价廉！'
            },
            {
              name: 't_土巴碗',
              photo: 'tubawan',
              content: '地址： 老校门对面左转斜坡上右边<br/>简介： 里面有各种特色套饭，炒饭和面条等。'
            },
            {
              name: 't_万州巴斗香烤鱼',
              photo: 'badouxiangkaoyu',
              content: '地址： 新校门出门右转，农业银行旁<br/>简介： 口味奇绝、营养丰富'
            }
          ],
          [
            {
              name: 't_无届青年餐馆',
              photo: 'wujie',
              content: '地址： 老校门过马路左转，斜坡旁边巷子进去<br/>简介： 一个聚集大批文青谈人生聊梦想的地方'
            },
            {
              name: 't_哈哈花甲',
              photo: 'hahahuajia',
              content: '地址：堕落二街内/新校门右侧一排建筑物<br/>简介：酸辣中夹带着河海的鲜味，十分好吃！'
            },
            {
              name: 't_古茗',
              photo: 'gumin',
              content: '地址：老校门对面<br/>简介：每一口细啜都能品味到一两分独属于茶叶的清香。'
            },
            {
              name: 't_陈记干锅',
              photo: 'chenjiganguo',
              content: '地址： 多位于堕落街内<br/>简介：不分地域，不分口味，是相比于火锅来的更为沉稳的好味道'
            }
          ]
        ]
      }
    }
  },
  methods: {
    changeOption (item) {
      this.selected.value = item.value
      this.itemList = mock.life[item.value]
    },
    handleSwitch: util.throttle(function (num) {
      this.itemList.currentIndex += num
      this.itemList.currentIndex = this.itemList.currentIndex < 0 ? 0 : this.itemList.currentIndex > (this.itemList.items.length - 1) ? (this.itemList.items.length - 1) : this.itemList.currentIndex
    }, 800)
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(648)
    background-image url('../../assets/train_box.png')
    padding-top rem(132)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(25)
    .life-wrap {
        width 100%
        height 100%
        .slide-down {
            width 100%
            display flex
            justify-content flex-end
            align-items center
            height rem(40)
            margin-bottom rem(8)
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
                    z-index 200
                    overflow hidden
                    .option {
                        width 100%
                        overflow-y auto
                        flex-direction column
                        background-color #d5fbff
                        border-left rem(2) solid #432a92
                        border-right rem(2) solid #432a92
                        border-bottom rem(2) solid #432a92
                        border-bottom-left-radius 6px
                        border-bottom-right-radius 6px
                        & > li {
                            width 100%
                            padding-left rem(8)
                            height rem(30)
                            display flex
                            align-items center
                            justify-content flex-start
                            font-size rem(13)
                            color #645bac
                        }
                    }
                }
            }
        }
        .top-wrap {
            width 100%
            display flex
            flex-wrap wrap
            height rem(400)
            justify-content space-between
            .life-box {
                width rem(133)
                height rem(192)
                padding rem(12) rem(8)
                background-image url('../../assets/life_border.png')
                overflow hidden
                .photo {
                    width 100%
                    height rem(85)
                    border 1.5px solid #135daf
                    & > img {
                        width 100%
                        height 100%
                    }
                }
                .content-wrap {
                    width 100%
                    height rem(85)
                    padding-top rem(3)
                    .name {
                        width 100%
                        display flex
                        justify-content flex-start
                        margin-bottom rem(6)
                        & > img {
                            width auto
                            height rem(12)
                        }
                    }
                    .content {
                        width 100%
                        text-align left 
                        font-size rem(9)
                        color #432c93
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
                transform translateX(rem(16))
                & > span {
                    display block
                    width rem(15)
                    height rem(25)
                    background-image url('../../assets/left_arrow.png')
                }
            }
            .right {
                transform translateX(rem(-12))
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
    .name {
        margin-bottom rem(0) !important
    }
}
</style>