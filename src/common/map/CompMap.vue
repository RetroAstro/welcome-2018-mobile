<template>
    <div class="container">
        <div class="drag-wrap" :style="resetParentSize">
            <div class="drag-map" v-drag ref="map" :style="changeSize"></div>
            <div class="plus" @click="change(1.2)"></div>
            <div class="minus" @click="change(0.8)"></div>
        </div>
    </div>
</template>

<script>

export default {
    directives: {
        drag: {
            bind(el) {
                el.onmousedown = (e) => {
                    let parent = e.target.parentNode
                    let maxWidth = parent.clientWidth - el.clientWidth
                    let maxHeight = parent.clientHeight - el.clientHeight
                    let disX = e.clientX - el.offsetLeft
                    let disY = e.clientY - el.offsetTop
                    document.onmousemove = (e) => {
                        let left = e.clientX - disX    
                        let top = e.clientY - disY
                        if (left < 0) {
                            left = 0
                        } 
                        else if (left > maxWidth) {
                            left = maxWidth
                        }
                        if (top < 0) {
                            top = 0
                        } else if (top > maxHeight) {
                            top = maxHeight
                        }
                        el.style.left = left + 'px'
                        el.style.top = top + 'px'
                    }
                    document.onmouseup = (e) => {
                        document.onmousemove = null
                        document.onmouseup = null
                    }
                }
            }
        }
    },
    data() {
        return {
            width: 600,
            height: 430,
            Scale: 1
        }
    },
    computed: {
        resetParentSize() {
            return {
                width: (this.width * 1.2) + 'px',
                height: (this.height * 1.2) + 'px'
            }
        },
        changeSize() {
            return {
                width: this.width + 'px',
                height: this.height + 'px'
            }
        }
    },
    methods: {
        change(n) {
            this.width = this.width * n
            this.height = this.height * n
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
    align-items center
    .drag-wrap {
        border 2px solid var(--primary)
        position relative
        .drag-map {
            position absolute
            top 0
            left 0
            transition all .3s ease-in-out
            transition-property width, height
            background url('../../assets/map.jpg') no-repeat
            background-size cover 
        }
        .plus {
            position absolute
            bottom 0 
            right 0
            width 40px
            height 40px
            border-radius 50%
            background var(--danger)
            cursor pointer
        }
        .minus {
            position absolute
            bottom 0 
            left 0
            width 40px
            height 40px
            border-radius 50%
            background var(--warning)
            cursor pointer
        }
    }
}
</style>


