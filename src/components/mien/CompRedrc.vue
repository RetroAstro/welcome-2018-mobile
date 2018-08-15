<template>
    <div class="redrc-box bg-cover-all">
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" class="text-inner">
                <div class="club-title">
                    <i :class="[item.src, 'title', 'bg-cover-all']" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content" v-html="item.text">
                </div>
            </div>
        </div>
        <pagination></pagination>
    </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          src: 'redrc_title_ques',
          text: '重庆邮电大学红岩网校工作站是一个校园互联网 开发团队，自2000年创立以来，已有17个年头了。 它是一群志趣相投的在校大学生共同创建的，在校团委老师的指导下，学生自我管理，多年来走出了一大批优秀的IT人才。红岩网校工作站包括五个部门：产品策划及运营部，视觉设计部，Web研发部，移动开发部和运维安全部。各个部门相互协作，共同推出了重邮小帮手微信公众号、掌上重邮、BT down铺、校园二手拾货网等一系列优秀的校园互联网产品，满足了广大师生的需求，获得一致好评。'
        },
        {
          src: 'redrc_title_sort',
          text: '【产品策划及运营部】<br/>'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.redrc-box {
    width 100%
    background-image url('../../assets/bg2.png')
    position relative
    height rem(405)
    padding-left rem(25)
    padding-top rem(15)
    padding-right rem(15)
    .text-box {
        width 100%
        flex-direction column
        & > div {
            width 100%
            flex 1
        }
        .text-inner {
            position relative
            margin-bottom rem(7)
            .club-title {
                width 100%
                display flex
                justify-content flex-start
                margin-bottom rem(6)
                .title {
                    width rem(80)
                    height rem(18)
                    &::before {
                        display block
                        content ''
                        width rem(7)
                        height rem(8)
                        background-image url('../../assets/dot.png')
                        background-size 100% 100%
                        background-repeat no-repeat
                        background-position center center
                        transform translate(rem(-14), rem(6))
                    }
                }
                .redrc_title_ques {
                    width rem(230)
                }
                .redrc_title_sort {
                    width rem(185)
                }
            }
            .text-content {
                width 100%
                text-align left 
                font-size rem(13)
                color #432c93
                letter-spacing .5px
                line-height rem(17)
                position relative
            }
        }
    }
    & >>> .page-wrap {
        position absolute
        bottom rem(10)
        left 0
        width 100%
        height rem(50)
        padding-top rem(12)
        .left {
            position absolute
            top 50%
            transform translateY(-45%)
            width rem(40)
            height rem(40)
            left rem(15)
            & > span {
                display block
                width rem(15)
                height rem(25)
                background-image url('../../assets/left_arrow.png')
            }
        }
        .right {
            position absolute
            top 50%
            right rem(15)
            transform translateY(-45%)
            width rem(40)
            height rem(40)
            & > span {
                display block
                width rem(15)
                height rem(25)
                background-image url('../../assets/right_arrow.png')
            }
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
}
</style>