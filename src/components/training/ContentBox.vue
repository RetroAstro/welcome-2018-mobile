<template>
    <div class="content-box flex-between">
        <div class="carousel-box flex-between" v-for="(item, index) in items" :key="index">
            <div class="left bg-cover-all animated flash infinite"></div>
            <div class="right bg-cover-all animated flash infinite"></div>
            <div class="title bg-cover-all">
                <div :class="[item.name, 'bg-cover-all']" :style="{ backgroundImage: `url('${require(`../../assets/${item.name}.png`)}')` }"></div>
            </div>
            <div class="carousel bg-cover-all"></div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          name: 'text2'
        },
        {
          name: 'text1'
        },
        {
          name: 'text3'
        }
      ]
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
        transform translateX(rem(-8))
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
        }
    }
}
</style>