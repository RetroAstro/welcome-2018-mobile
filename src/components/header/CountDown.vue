<template>
    <ul class="count-inner flex-between">
        <li v-for="(time, name, index) in timeList" :key="index" class="time " :class="name">
            <span>{{time[0]}}</span>
            <span>{{time[1]}}</span>
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
      var str = '2018/9/14 00:00:00'
      var end = new Date(str).getTime()
      var left = end - now
      if (left >= 0) {
        var arr = [
          Math.floor(left / 1000 / 60 / 60 / 24),
          Math.floor(left / 1000 / 60 / 60 % 24),
          Math.floor(left / 1000 / 60 % 60),
          Math.floor(left / 1000 % 60)
        ]
        Object.keys(this.timeList).forEach((time, index) => {
          var double = parseInt(arr[index] / 10)
          var single = parseInt(arr[index] % 10)
          this.timeList[time] = [double, single]
        })
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
    transform translate(rem(-4), rem(-2))
    .time {
        font-size rem(10)
        font-family "TTChaoHeiJ"
        font-weight bolder
        color #961725
    }
    .day {
        transform translate(rem(0), rem(2))
    }
    .hour {
        transform translate(rem(0), rem(-1))
    }
    .minute {
        transform translate(rem(0), rem(-1))
    }
    .second {
        transform translate(rem(-2), rem(1))
    }
}
</style>