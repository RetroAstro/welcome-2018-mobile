<template>
    <div class="content-box bg-cover-all">
        <div class="dorm-wrap flex-col-between">
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
                        <div class="text">
                            {{itemList.content}}
                        </div>
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
      nav: 'dorm-nav',
      currentName: 'xinye',
      tabList: [
        {
          name: 'xinye',
        },
        {
          name: 'minli',
        },
        {
          name: 'linjin',
        },
        {
          name: 'zhixin',
        }
      ],
      itemList: {
        photoIndex: 0,
        photos: [
          'xinye1.JPG',
          'xinye2.JPG',
          'xinye3.JPG',
          'xinye4.JPG'
        ],
        title: 'title_xinye',
        content: '兴业苑（17--23）：屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过。内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。'
      }
    }
  },
  methods: {
    handleSwitch: util.throttle(function (item) {
      this.show = false
      this.currentName = item.name
      setTimeout(() => {
        this.itemList = mock.dorms[item.name]
        setTimeout(() => {
          this.show = true
        }, 320)
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
    .dorm-wrap {
        width 100%
        height 100%
        & >>> .dorm-nav {
            z-index 5000
            width 100%
            padding-right rem(.5)
            .nav-inner {
                width 100%
                & > li {
                    width rem(66)
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
                    font-size rem(12)
                    color #432c93
                    letter-spacing 0.6px
                }
            }
        }
    }
}
</style>