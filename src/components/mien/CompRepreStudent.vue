<template>
    <div class="content-box bg-cover-all">
        <div class="student-wrap">
            <div class="student-box flex-between">
                <div v-for="(item, index) in items" :key="index" class="student flex-center bg-cover-all">
                    <div class="stu-wrap">
                        <div class="photo bg-cover-all"></div>
                        <div class="content">
                            <div class="text-title">
                                <div class="rule bg-cover-all"></div>
                            </div>
                            <div class="text-content">蒋天星，计算机科学与技术学院20 15级智能科学与技术专业学生,上任 红岩网校工作站站长。他充分发挥 “红岩网校工作站”团支部</div>
                        </div>
                    </div>
                </div>
            </div>
            <pagination></pagination>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          name: '',
          photo: '',
          content: ''
        },
        {
          name: '',
          photo: '',
          content: ''
        },
        {
          name: '',
          photo: '',
          content: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(798)
    background-image url('../../assets/repre_student_wrap.png')
    padding-top rem(140)
    padding-left rem(27)
    padding-right rem(41.5)
    .student-wrap {
        width 100%
        .student-box {
            width 100%
            flex-direction column
            .student {
                width 100%
                height rem(175)
                background-image url('../../assets/repre_student_box.png')
                margin-bottom rem(15)
                .stu-wrap {
                    width 90%
                    height 78%
                    display flex
                    justify-content space-between
                    .photo {
                        flex 4
                        height 100%
                        background-image url('../../assets/carousel3.jpg')
                    }
                    .content {
                        flex 6
                        height 100%
                        padding-left rem(16)
                        .text-title {
                            width 100%
                            height rem(30)
                            display flex
                            justify-content flex-start
                            .rule {
                                width rem(45)
                                height rem(16)
                                background-image url('../../assets/jtx.png')
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
                }
            }
            .student:last-child {
                margin-bottom 0
            }
        }
        & >>> .page-wrap {
            width 100%
            height rem(50)
            margin-top rem(26)
            position relative
            .left {
                position absolute
                top rem(-3)
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
                top rem(-3)
                right rem(15)
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
}
</style>