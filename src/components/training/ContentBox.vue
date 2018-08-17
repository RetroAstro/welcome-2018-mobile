<template>
    <div class="content-box bg-cover-all">
        <div class="carousel-wrap">
            <div class="carousel-box flex-between" v-for="(item, index) in items" :key="index">
                <div class="left bg-cover-all flex-center" @touchstart="handleSwitch(index, -1)"><span class="bg-cover-all"></span></div>
                <div class="right bg-cover-all flex-center" @touchstart="handleSwitch(index, 1)"><span class="bg-cover-all"></span></div>
                <div class="title bg-cover-all flex-center">
                    <div class="bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.name}.png`)}')` }"></div>
                </div>
                <div class="carousel bg-cover-all flex-center">
                    <div class="carousel-inner">
                        <ul class="photo-wrap" :style="{ marginLeft: `-${item.photoIndex}00%` }">
                            <li 
                            v-for="(photo, index) in item.photos" :key="index"
                            class="photo bg-cover-all"
                            :style="{ backgroundImage: `url('${require(`../../assets/${photo}.jpg`)}')` }"
                            ></li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>

import util from '@utils/util'

export default {
  data () {
    return {
      items: [
        {
          photoIndex: 0,
          name: 'text2',
          photos: [
            'fist1',
            'fist2',
            'fist3'
          ]
        },
        {
          photoIndex: 0,
          name: 'text1',
          photos: [
            'team_col1',
            'team_col2',
            'team_col3'
          ]
        },
        {
          photoIndex: 0,
          name: 'text3',
          photos: [
            'hand_lan1',
            'hand_lan2',
            'hand_lan3'
          ]
        }
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (index, num) {
      this.items[index].photoIndex += num
      this.items[index].photoIndex = this.items[index].photoIndex < 0 ? 2 : this.items[index].photoIndex > 2 ? 0 : this.items[index].photoIndex
    }, 1000)
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(648)
    background-image url('../../assets/train_box.png')
    display flex
    align-items flex-end
    justify-content center
    padding-bottom rem(38)
    .carousel-wrap {
        width rem(277)
        height rem(520)
        transform translateX(rem(-7)) 
        display flex 
        flex-direction column
        position relative
        .carousel-box {
            width 100%
            flex 1
            flex-direction column
            position relative
            .title {
                width 100%
                height rem(40)
                & > div {
                    width rem(50)
                    height rem(15)
                }
            }
            .left {
                position absolute
                top 60%
                left rem(-16)
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
                right rem(-16)
                top 60%
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
            .carousel {
                width rem(230)
                height rem(134)
                background-image url('../../assets/border.png')
                .carousel-inner {
                    width rem(218)
                    height rem(121)
                    border-radius rem(3)
                    overflow hidden
                    position relative
                    border rem(2) solid #443095
                    .photo-wrap {
                        width 300%
                        height rem(121)
                        display flex
                        transition all .5s ease-in-out
                        .photo {
                            width 100%
                            height rem(121)
                        }
                    }
                }
            }
        }
    }
}
</style>