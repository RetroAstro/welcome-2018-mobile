<template>
    <div class="page-wrap">
        <span class="left bg-cover-all" @touchstart="prevOrNext(-1)"></span>
        <ul class="inner">
            <li 
            v-for="(item, index) in totalPages" 
            :key="index"
            :class="[{active: item === currentPage}, 'flex-center', 'bg-cover-all']"
            :style="slide"
            @touchstart="currentPage = item"
            ><span class="flex-center">{{item}}</span></li>
        </ul>
        <span class="right bg-cover-all" @touchstart="prevOrNext(1)"></span>   
    </div>
</template>

<script>

export default {
  data () {
    return {
      currentPage: 1,
      totalPages: 28
    }
  },
  computed: {
    slide () {
      var num = this.currentPage % 5 === 0 ? this.currentPage - 1 : this.currentPage
      var distance = Math.floor(num / 5) * (32 / 75)
      return {
        transform: `translate3d(0, -${distance}rem, 0)`
      }
    }
  },
  methods: {
    prevOrNext (n) {
      this.currentPage += n
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage > this.totalPages ? this.totalPages : this.currentPage
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-wrap {
    position absolute
    bottom 0
    left 0
    width 100%
    height rem(50)
    & > span {
        display inline-block
        position absolute
        top 50%
        transform translateY(-80%)
        width rem(30)
        height rem(30)
    }
    .left {
        left rem(20)
        background-image url('../assets/left_arrow.png')
    }
    .right {
        right rem(20)
        background-image url('../assets/right_arrow.png')
    }
    .inner {
        margin 0 auto
        width rem(160)
        height rem(32)
        overflow hidden
        display flex
        align-items flex-start
        flex-wrap wrap
        & > li {
          width rem(32)
          height rem(32)
          transition transform .3s ease-in-out
          & > span {
            width rem(28)
            height rem(28)
            border-radius 50%
            font-size rem(16)
            color #432c93
          }
          &.active > span {
            background #55acee
            color #fff
          }
        }
    }
}
</style>
