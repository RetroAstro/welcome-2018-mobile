<template>
    <div class="content-box bg-cover-all">
        <div class="tips-box bg-cover-all">
            <div class="tips-wrap">
                <div class="tip-one">
                    <div class="title">
                        <div class="diet bg-cover-all"></div>
                    </div>
                    <div class="text-content">1.早餐一定要吃好，午餐一定要吃饱，晚餐要吃得适宜。军训时饭量会增大，不想发胖的妹子在晚饭时一定要管好自己的嘴巴；由于天气比较炎热，也会有一些同学吃不下饭，建议多少吃点，军训体力消耗很大，以免身体不适。<br/>2.多吃富含多种维生素的水果蔬菜，可以淡化黑色素，在一定程度上起到美白的效果。<br/>3.饮用水、运动饮料（军训期间会大量流汗适量补充水分很重要，建议可以喝一些葡萄糖水）</div>
                </div>
                <div class="tip-two">
                    <div class="title">
                        <div class="unburn bg-cover-all"></div>
                    </div>
                    <div class="text-content">1.军训防晒是最重要的环节，不管是男生还是女生，都一定要注意防晒，因为防晒不仅是要防晒，更是要防晒伤。<br/>2.防晒霜、防晒喷雾（最好买SPF50、PA+++的，用指数高的比较适宜。出门前半个小时就要涂，因为防晒霜也要时间吸收。可以随身携带防晒霜，军训时出汗多，可以定时补涂一次。防晒霜的涂抹位置最好是脸部脖子以及所有穿上军训服后能够露出来的地方。<br/>3.湿纸巾、吸油面纸（擦汗必备，擦完脸再涂上防晒霜。）</div>
                </div>
            </div>
            <div class="arrow-wrap flex-around">
                <div class="left bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
                <div class="right bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(772)
    background-image url('../../assets/tip_box.png')
    padding-top rem(100)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(38)
    .tips-box {
        width 100%
        height 100%
        background-image url('../../assets/bg1.png')
        padding-top rem(15)
        padding-left rem(42)
        padding-right rem(30)
        .tips-wrap {
            width 100%
            height rem(540)
            display flex
            flex-direction column
            & > div {
                width 100%
            }
            .tip-one {
                flex 5.5
            }
            .tip-two {
                flex 4.5
            }
            .title {
                width 100%
                height rem(40)
                display flex
                justify-content flex-start
                align-items center
                .diet {
                    width rem(53)
                    height rem(18)
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
                    width rem(53)
                    height rem(18)
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
                text-align left 
                font-size rem(13)
                color #432c93
                letter-spacing .5px
                line-height rem(17)
            }
        }
        .arrow-wrap {
            width 100%
            height rem(76)
            & > div {
                width rem(40)
                height rem(40)
                transform translateX(rem(-6))
            }
            .left {
                & > span {
                    display block
                    width rem(15)
                    height rem(25)
                    background-image url('../../assets/left_arrow.png')
                }
            }
            .right {
                & > span {
                    display block
                    width rem(15)
                    height rem(25)
                    background-image url('../../assets/right_arrow.png')
                }
            }
        }
    }
}
</style>
