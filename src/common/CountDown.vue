<template>
    <div class="count">
        <ul>
            <li v-for="(time, index) in timeList" :key="index" class="time">
                <span :style="{backgroundPosition: '40% ' + time[0] + '%'}"></span>
                <span :style="{backgroundPosition: '40% ' + time[1] + '%'}"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
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
    mounted() {
        this.start()
        document.addEventListener('visibilitychange', () => {
            document.hidden ? this.clear() : this.start()
        })
    },
    beforeDestroy() {
        this.clear()
    },
    methods: {
        countTime() {
            var now = new Date().getTime()
            var str = '2018/9/14 00:00:00'
            var end = new Date(str).getTime()
            var left = end - now
            var list = [2.33, 11.7, 21.05, 30.4, 39.8, 49.2, 58.55, 68, 77.4, 87]
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
            }
        },
        clear() {
            clearInterval(this.timer)
            this.timer = null
        },
        start() {
            this.timer = setInterval(this.countTime, 1000)
        }
    }
}
</script>

<style lang="stylus" scoped>
.count {
    width 500px
    margin 0 auto
    margin-top 50px
    & > ul {
        width 100%
        display flex
        justify-content space-between
        .time {
            width 100px
            height 60px
            border-radius 6px
            box-shadow 0 2px 10px 0 #e3e7f6
            display flex
            overflow hidden
            & > span {
                width 50%
                height 100%
                transition all .3s ease-in-out
                background url('../assets/countdown.png') 40% 2.33% no-repeat
            }
        }
    } 
}
</style>

