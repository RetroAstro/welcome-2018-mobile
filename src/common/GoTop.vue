<template>
    <div class="box" style="height:5000px">
        <transition name="fade">
            <div class="button" @click="BacktoTop" v-show="show"></div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        showIcon() {
            this.show = document.documentElement.scrollTop < 500 ? false : true
        },
        BacktoTop() {
            var timer = null
            cancelAnimationFrame(timer)
            var startTime = +new Date()
            var b = document.body.scrollTop || document.documentElement.scrollTop
            var d = 300
            var c = b
            timer = requestAnimationFrame(function func() {
                var t = d - Math.max(0, startTime - (+new Date()) + d)
                document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b
                timer = requestAnimationFrame(func)
                if (t == d) {
                    cancelAnimationFrame(timer)
                }
            })
            window.addEventListener('scroll', this.showIcon)
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.showIcon)
    }
}
</script>

<style lang="stylus" scoped>
.button {
    position fixed
    right 0
    bottom 100px
    width 50px
    height 50px
    border-radius 50%
    background orange
}
.fade-enter-active, .fade-leave-active {
    transition opacity .3s ease-in-out
}
.fade-enter, .fade-leave-to {
    opacity 0
}
</style>


