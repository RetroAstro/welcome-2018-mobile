<template>
    <div class="container">
        <div class="outer-box">
            <div class="map-bottom same">
                <div class="drag-map" :style="changeSize" :class="{initial: Scale == 1 ? true : false, smooth: slide}"></div>
            </div>
            <div class="map-top same" v-drag @mousedown="clear">
                <div class="drag-screen" :style="changeSize" :class="{smooth: slide}">
                    <ul>
                        <li
                         v-for="(site, index) in sites" :key="index"
                         :style="{top: site.top + '%', left: site.left + '%'}"
                         class="site"
                        >{{site.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="search-box">
                <input type="text" class="search" placeholder="请输入地名" v-model="name">
                <span class="confirm" @click="findLocation">搜索</span>
            </div>
            <span class="plus" @click="change(0.3)">放大</span>
            <span class="minus" @click="change(-0.3)">复原</span>
        </div>
    </div>
</template>

<script>

export default {
  directives: {
    drag: {
      bind (el) {
        el.onmousedown = (e) => {
          let parent = findParent(el, 'outer-box')
          let elScreen = parent.querySelector('.drag-screen')
          el = parent.querySelector('.drag-map')
          if (el.classList.contains('initial')) {
            return
          }
          let range = getComputedStyle(el).transform.slice(9, 10) / 20
          let maxWidth = el.clientWidth * range
          let maxHeight = el.clientHeight * range
          let disX = e.clientX - el.offsetLeft
          let disY = e.clientY - el.offsetTop
          document.onmousemove = (e) => {
            let left = e.clientX - disX
            let top = e.clientY - disY
            if (left < -maxWidth) {
              left = -maxWidth
            } else if (left > maxWidth) {
              left = maxWidth
            }
            if (top < -maxHeight) {
              top = -maxHeight
            } else if (top > maxHeight) {
              top = maxHeight
            }
            el.style.left = left + 'px'
            elScreen.style.left = left + 'px'
            el.style.top = top + 'px'
            elScreen.style.top = top + 'px'
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
        function findParent (ele, sle) {
          var parent = ele.parentNode
          while (!parent.classList.contains(sle)) {
            parent = parent.parentNode
          }
          return parent
        }
      }
    }
  },
  data () {
    return {
      Scale: 1,
      name: '',
      aim: false,
      slide: false,
      sites: [
        {
          name: '情人坡',
          top: 20,
          left: 20,
          location: [387, 288]
        },
        {
          name: '红高粱',
          top: 40,
          left: 40,
          location: [107, 102]
        },
        {
          name: '千喜鹊',
          top: 60,
          left: 60,
          location: [-229, -144]
        },
        {
          name: '信科楼',
          top: 80,
          left: 80,
          location: [-387, -288]
        },
        {
          name: '八十万',
          top: 50,
          left: 50,
          location: [-49, -20]
        }
      ]
    }
  },
  computed: {
    changeSize () {
      var style = {
        transform: `scale(${this.Scale})`
      }
      if (this.aim) {
        style['left'] = this.aim[0] + 'px'
        style['top'] = this.aim[1] + 'px'
        this.aim = false
      }
      if (this.Scale === 1) {
        style['left'] = '0px'
        style['top'] = '0px'
        this.name = ''
      }
      return style
    }
  },
  methods: {
    change (n) {
      if (n < 0) {
        this.Scale = 1
        return
      }
      if (this.Scale + n > 1.91) return
      this.Scale += n
    },
    findLocation () {
      if (!this.name) return
      this.sites.map((site) => {
        if (site.name.indexOf(this.name) !== -1) {
          this.Scale = 1.9
          this.slide = true
          this.aim = site.location
        }
      })
    },
    clear () {
      this.slide = false
      this.aim = 'update'
    }
  }
}
</script>

<style lang="stylus" scoped>
.container {
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    display flex
    justify-content center
    .outer-box {
        width 960px
        height 720px
        position relative
        .same {
            position absolute
            top 20px
            left 50%
            transform translateX(-50%)
            width 860px
            height 640px
        }
        .map-bottom {
            z-index 2
            overflow hidden
            border-radius 16px
            .drag-map {
                position relative
                top 0px
                left 0px
                width 860px
                height 640px
                background url('../../assets/map.jpg') no-repeat
                background-size cover
                transition transform .3s ease-in-out
                transition-property transform 
                &.smooth {
                    transition-property left,top,transform
                }
            }
        }
        .map-top {
            z-index 3
            overflow hidden
            border-radius 16px
            box-shadow 0 2px 10px 0 #e3e7f6
            .drag-screen {
                position relative
                top 0px
                left 0px
                width 860px
                height 640px
                transition transform .3s ease-in-out
                transition-property transform
                &.smooth {
                    transition-property left,top,transform
                }
                .site {
                    position absolute
                    color var(--danger)
                    font-size 16px
                }
            }
        }
        & > span {
            display inline-block
            position absolute
            bottom 0 
            width 40px
            height 40px
            text-align center
            line-height 40px
            font-size 14px
            border-radius 50%
            z-index 4
            cursor pointer
            color #fff
            background var(--primary)
        }
        .plus {
            right 0
        }
        .minus {
            left 0
        }
        .search-box {
            position absolute
            width 300px
            height 40px
            left 50%
            transform translateX(-50%)
            bottom 0
            display flex
            align-items center
            justify-content space-between
            .search {
                width 220px
                height 40px
                border-radius 6px
                box-shadow 0 2px 10px 0 #e3e7f6
                padding 4px 20px
                font-size 16px
            }
            .confirm {
                width 40px
                height 40px
                line-height 40px
                text-align center
                border-radius 50%
                background var(--primary)
                color #fff
                font-size 14px
                cursor pointer
            }
        }
    }
}
</style>


