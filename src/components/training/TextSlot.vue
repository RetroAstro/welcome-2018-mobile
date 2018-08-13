<template>
    <div class="box-wrap flex-between">
        <div class="text-box one">
            <div class="text-title">
                <div class="diet bg-cover-all"></div>
            </div>
            <div class="text-content"><slot name="text1"></slot></div>
        </div>
        <div class="text-box two">
            <div class="text-title">
                <div class="unburn bg-cover-all"></div>
            </div>
            <div class="text-content"><slot name="text2"></slot></div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.box-wrap {
    width rem(250)
    height rem(560)
    flex-direction column
    .text-box {
        width 100%
        flex 1
        display flex
        justify-content space-between
        flex-direction column
        padding 0 rem(18)
        .text-title {
            height rem(30)
            display flex
            justify-content flex-start
            .diet {
                width rem(45)
                height rem(16)
                background-image url('../../assets/diet.png')
                &::before {
                    display block
                    content ''
                    width rem(7)
                    height rem(8)
                    background-image url('../../assets/dot.png')
                    background-size 100% 100%
                    background-repeat no-repeat
                    background-position center center
                    transform translate(rem(-14), rem(4))
                }
            }
            .unburn {
                width rem(45)
                height rem(16)
                background-image url('../../assets/unburn.png')
                &::before {
                    display block
                    content ''
                    width rem(7)
                    height rem(8)
                    background-image url('../../assets/dot.png')
                    background-size 100% 100%
                    background-repeat no-repeat
                    background-position center center
                    transform translate(rem(-14), rem(4))
                }
            }
        }
        .text-content {
            width 100%
            height 100%
            text-align left 
            font-size rem(13)
            color #432c93
            letter-spacing .5px
            line-height rem(17)
        }
    }
}
</style>

