<template>
    <div class="content-box flex-between">
        <div class="carousel-box flex-between" v-for="(item, index) in items" :key="index">
            <div class="left bg-cover-all" @touchstart="handleSwitch(index, -1)"></div>
            <div class="right bg-cover-all" @touchstart="handleSwitch(index, 1)"></div>
            <div class="title bg-cover-all">
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
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          photoIndex: 0,
          name: 'text2',
          photos: [
            'carousel1',
            'carousel2',
            'carousel3'
          ]
        },
        {
          photoIndex: 0,
          name: 'text1',
          photos: [
            'carousel1',
            'carousel2',
            'carousel3'
          ]
        },
        {
          photoIndex: 0,
          name: 'text3',
          photos: [
            'carousel1',
            'carousel2',
            'carousel3'
          ]
        }
      ]
    }
  },
  methods: {
    handleSwitch (index, num) {
      this.items[index].photoIndex += num
      this.items[index].photoIndex = this.items[index].photoIndex < 0 ? 2 : this.items[index].photoIndex > 2 ? 0 : this.items[index].photoIndex
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(276)
    height rem(650)
    margin 0 auto
    flex-direction column
    .carousel-box {
        width 100%
        flex 1
        flex-direction column
        padding-bottom rem(50)
        position relative
        .left {
            position absolute
            left rem(-6)
            top 50%
            transform translateY(-50%)
            width rem(25)
            height rem(25)
            background-image url('../../assets/left_arrow.png')
            animation-duration 8s
        }
        .right {
            position absolute
            right rem(-6)
            top 50%
            transform translateY(-50%)
            width rem(25)
            height rem(25)
            background-image url('../../assets/right_arrow.png')
            animation-duration 8s
        }
        .title {
            width 100%
            height rem(40)
        }
        .title > div {
            width rem(50)
            height rem(20)
            margin 0 auto
            transform translateY(rem(6))
        }
        .carousel {
            width rem(230)
            height rem(134)
            background-image url('../../assets/border.png')
            .carousel-inner {
                width rem(220)
                height rem(118)
                border-radius rem(3)
                overflow hidden
                position relative
                .photo-wrap {
                    width 300%
                    height rem(130)
                    display flex
                    transition all .5s ease-in-out
                    .photo {
                        width 100%
                        height rem(130)
                    }
                }
            }
        }
    }
}
</style>