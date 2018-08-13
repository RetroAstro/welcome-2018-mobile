<template>
    <div class="redrc-box bg-cover-all flex-between">
        <div class="text-box flex-between">
            <div v-for="(item, index) in items" :key="index" class="text-inner">
                <div class="club-title">
                    <i :class="[item.src, 'title', 'bg-cover-all']" :style="{ backgroundImage: `url('${require(`../../assets/${item.src}.png`)}')` }"></i>
                </div>
                <div class="text-content" v-html="item.text">
                </div>
            </div>
        </div>
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
          text: '【产品策划及运营部】<br/><br/>Ta是用户心理的倾听者，也是产品需求的挖掘者。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.redrc-box {
    width 100%
    height rem(590)
    transform translateY(rem(8))
    background-image url('../../assets/bg1.png')
    flex-direction column
    padding-top rem(30)
    padding-bottom rem(60)
    position relative
    .text-box {
        width rem(250)
        height rem(515)
        flex-direction column
        & > div {
            width 100%
            flex 1
        }
        .text-inner {
            position relative
            .club-title {
                width 100%
                height rem(30)
                display flex
                justify-content flex-start
                padding-left rem(15)
                .title {
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
                height rem(230)
                text-align left 
                font-size 13px
                color #432c93
                letter-spacing .5px
                line-height rem(17)
                position relative
                .dashline {
                    position absolute
                    bottom rem(30)
                    left 0
                    width 100%
                    height rem(2)
                    background-image url('../../assets/dashline.png')
                }
            }
        }
    }
}
</style>