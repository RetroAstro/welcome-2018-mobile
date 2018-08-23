<template>
    <div class="content-box bg-cover-all">
        <div class="canteen-wrap flex-col-between">
            <tab 
            :nav="nav"
            :tabList="tabList" 
            :currentName="currentName" 
            @handleSwitch="handleSwitch">
            </tab>
            <transition enter-active-class="animated faster bounceIn" leave-active-class="animated faster bounceOut">
                <div class="stu-border bg-cover-all flex-col-between" v-show="show">
                    <div class="photo-box">
                    <div class="left bg-cover-all flex-center" @touchstart="handleSwipe(-1)"><span class="bg-cover-all"></span></div>
                    <div class="right bg-cover-all flex-center" @touchstart="handleSwipe(1)"><span class="bg-cover-all"></span></div>
                    <div class="carousel-box bg-cover-all translate-center flex-center">
                        <div class="carousel-inner">
                                <ul class="photo-wrap" :style="{ marginLeft: `-${itemList.photoIndex}00%`, width: `${itemList.photos.length}00%` }">
                                    <li 
                                    v-for="(photo, index) in itemList.photos" :key="index"
                                    class="photo"
                                    >
                                    <img 
                                    :src="`${require(`../../assets/${photo}`)}`"
                                    style="width:100%;height:100%;"
                                    :preview="2"
                                    >
                                    </li>
                                </ul>
                        </div>
                    </div>
                    </div>
                    <div class="text-box">
                        <div class="title flex-start">
                            <img :src="`${require(`../../assets/${itemList.title}.png`)}`">
                        </div>
                        <div class="text" v-html="itemList.content"></div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'
import mock from '@service/mock'

export default {
  data () {
    return {
      show: true,
      nav: 'canteen-nav',
      currentName: 'can_qianxihe',
      tabList: [
        {
          name: 'can_qianxihe',
        },
        {
          name: 'can_xinye',
        },
        {
          name: 'can_daxibei',
        },
        {
          name: 'can_honggaoliang',
        },
        {
          name: 'can_yansheng',
        },
        {
          name: 'can_zhongxin',
        }
      ],
      itemList: {
        photoIndex: 0,
        photos: [
          'can_qianxihe1.jpg',
          'can_qianxihe2.jpg',
          'can_qianxihe3.jpg'
        ],
        title: 'title_can_qianxihe',
        content: '千喜鹤怕是重邮最具重庆味道的食堂了，不过这品味的不是麻辣鲜香的那一味，而是重庆高低井然错落有致的建筑风格，除去对着明理苑的正门，你同时还可以从延生内部和楼下的楼梯直上。倘若说在食堂中挑一个最喜欢的，那千喜鹤一定是高居榜首的那一个，相比于食堂，千喜鹤更像是一个美食广场，从西式快餐到中式早点，从日常正餐到饭后甜点，可谓是应有尽有。推荐菜目：火锅米线，豆浆记忆，盐酥鸡。'
      }
    }
  },
  methods: {
    handleSwitch: util.throttle(function (item) {
      this.show = false
      this.currentName = item.name
      setTimeout(() => {
        this.itemList = mock.canteens[item.name]
        setTimeout(() => {
          this.show = true
        }, 400)
      }, 500)
    }, 1200),
    handleSwipe: util.throttle(function (num) {
      this.itemList.photoIndex += num
      this.itemList.photoIndex = this.itemList.photoIndex < 0 ? (this.itemList.photos.length - 1) : this.itemList.photoIndex > (this.itemList.photos.length - 1) ? 0 : this.itemList.photoIndex
    }, 1000)
  },
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(604)
    background-image url('../../assets/helper_box.png')
    padding-top rem(136)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(30)
    .canteen-wrap {
        width 100%
        height 100%
        & >>> .canteen-nav {
            z-index 5000
            width 100%
            .nav-inner {
                width 100%
                & > li {
                    width rem(42)
                    height rem(30)
                }
            }
        }
        .stu-border {
            width 100%
            height rem(395)
            background-image url('../../assets/stu_border.png')
            .photo-box {
                width 100%
                flex 4.5
                position relative
                .carousel-box {
                    width rem(210)
                    height rem(133)
                    background-image url('../../assets/border.png')
                    margin 0 auto 
                    .carousel-inner {
                        width rem(202)
                        height rem(123)
                        border-radius rem(3)
                        overflow hidden
                        position relative
                        border rem(1.3) solid #443095
                        .photo-wrap {
                            height rem(123)
                            display flex
                            transition margin-left .5s ease-in-out
                            .photo {
                                width 100%
                                height rem(123)
                            }
                        }
                    }
                }
                .left {
                    position absolute
                    top 50%
                    left rem(-3)
                    transform translateY(-50%)
                    width rem(40)
                    height rem(40)
                    & > span {
                        display block
                        width rem(15)
                        height rem(25)
                        background-image url('../../assets/left_arrow.png')
                    }
                }
                .right {
                    position absolute
                    right rem(-3)
                    top 50%
                    transform translateY(-50%)
                    width rem(40)
                    height rem(40)
                    & > span {
                        display block
                        width rem(15)
                        height rem(25)
                        background-image url('../../assets/right_arrow.png')
                    }
                }
            }
            .text-box {
                width 100%
                flex 5.5
                padding 0 rem(33)
                padding-bottom rem(6)
                .title {
                    width 100%
                    height rem(16)
                    margin-bottom rem(8)
                    & > img {
                        width auto
                        height rem(16)
                    }
                }
                .text {
                    text-align left 
                    font-size rem(11.5)
                    color #432c93
                }
            }
        }
    }
}
</style>