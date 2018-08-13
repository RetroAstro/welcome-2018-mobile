<template>
    <div class="carousel-wrap" @mouseover="clear" @mouseout="autoPlay" v-hammer:swipe.left="goRight" >
        <div class="pic-wrap" :style="{marginLeft: `-${picIndex}00%`}" v-hammer:swipe.right="goLeft">
            <div class="carousel-clip" v-for="(item, index) in items" :key="index">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
/**
 * 轮播组件
 * 基本功能实现:
 * 1. 自动切换 2. 左右箭头点击切换 3. 鼠标移入停止自动切换, 移出自动切换 4. 切换效果?
 */
export default {
  data () {
    return {
      items: [1, 2, 3, 4, 5],
      picIndex: 0,
      timer: null
    }
  },
  mounted () {
    this.autoPlay()
  },
  beforeDestroy () {
    this.clear()
  },
  methods: {
    autoPlay () {
      this.timer = setInterval(() => {
        this.picIndex = this.picIndex < 4 ? (this.picIndex + 1) : 0
      }, 5000)
    },
    goLeft () {
      this.clear()
      this.picIndex = this.picIndex <= 0 ? 4 : (this.picIndex - 1)
    },
    goRight () {
      this.clear()
      this.picIndex = this.picIndex >= 4 ? 0 : (this.picIndex + 1)
    },
    clear () {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style lang="stylus" scoped>
.carousel-container {
    position relative
    width 300px
    height 250px
    margin auto
    overflow hidden
    background #ccc
    .pic-container {
        width 500%
        display flex
        transition all .3s ease-in-out
        .carousel-clip {
            width: 100%
            height: 250px
            line-height 250px
            text-align center
            font-size 16px
        }
    }
    .arrow {
        width 30px
        height 30px
        border-radius 50%
        background orange
        position absolute
        top 50%
        cursor pointer
        transform translateY(-50%)
        &.left {
            left 0
        }
        &.right {
            right 0
        }
    }
}
</style>


