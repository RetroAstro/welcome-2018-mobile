<template>
    <ul class="count-inner flex-between">
        <li v-for="(time, name, index) in timeList" :key="index" class="time flex-center bg-cover-all" :class="name">
                <span :style="{ transform: `translate(${0.5 / 75}rem, ${time[0] / 75}rem)` }" class="bg-cover-all"></span>
                <span :style="{ transform: `translate(${0.5 / 75}rem, ${time[1] / 75}rem)` }" class="bg-cover-all"></span>
        </li>
    </ul>
</template>

<script>

export default {
  data () {
    return {
      timeList: {
        day: [],
        hour: [],
        minute: [],
        second: []
      },
      timer: null
    }
  },
  mounted () {
    this.start()
    document.addEventListener('visibilitychange', () => {
      document.hidden ? this.clear() : this.start()
    })
  },
  beforeDestroy () {
    this.clear()
  },
  methods: {
    countTime () {
      var now = new Date().getTime()
      var str = '2018/9/13 00:00:00'
      var end = new Date(str).getTime()
      var left = end - now
      var list = [93.5, 70, 50, 30, 10, -10, -30, -52, -75, -98]
      if (left >= 0) {
        var arr = [
          Math.floor(left / 1000 / 60 / 60 / 24),
          Math.floor(left / 1000 / 60 / 60 % 24),
          Math.floor(left / 1000 / 60 % 60),
          Math.floor(left / 1000 % 60)
        ]
        Object.keys(this.timeList).forEach((time, index) => {
          var double = list[parseInt(arr[index] / 10)]
          var single = list[parseInt(arr[index] % 10)]
          this.timeList[time] = [double, single]
        })
      } else {
        this.timeList = {
          day: [93.5, 93.5],
          hour: [93.5, 93.5],
          minute: [93.5, 93.5],
          second: [93.5, 93.5]
        }
      }
    },
    clear () {
      clearInterval(this.timer)
      this.timer = null
    },
    start () {
      this.timer = setInterval(this.countTime, 1000)
    }
  }
}
</script>

<style lang="stylus" scoped>
.count-inner {
    width 100%
    height 100%
    .time {
        overflow hidden
        & > span {
            width rem(6.8)
            height rem(200) 
            transition all .3s ease-in-out
            background-image url('../../assets/count.png')
        }
    }
}
</style>