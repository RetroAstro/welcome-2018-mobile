<template>
    <div class="content-box bg-cover-all">
        <div class="smile-wrap flex-col-between">
            <div class="top-box flex-center bg-cover-all">
                <img src="../../assets/zuimei.jpg">
            </div>
            <div class="bottom-box bg-cover-all">
                <div class="text-box flex-col-between">
                    <div class="text-row"><img src="../../assets/t_活动主题.png"></div>
                    <div class="text-row">晒出萌新照，为班级集赞</div>
                    <div class="text-row"><img src="../../assets/t_参与对象.png"></div>
                    <div class="text-row">2018级所有小鲜肉可上传照片，全体在校学生参与点赞</div>
                    <div class="text-row"><img src="../../assets/t_活动时间.png"></div>
                    <div class="text-row">即日起至2018年9月14日24:00</div>
                    <div class="text-row"><img src="../../assets/t_参与方式.png"></div>
                    <div class="text-row">关注微信公众号重邮小帮手，进入“线上互动”,点击“最美班级墙”，即可上传照片。</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(500)
    background-image url('../../assets/teacher_box.png')
    padding-top rem(85)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(25)
    .smile-wrap {
        width 100%
        height 100%
        .top-box {
            width 100%
            height rem(178)
            background-image url('../../assets/smile_border1.png')
            & > img {
                width 98.5%
                height 97%
            }
        }
        .bottom-box {
            width 100%
            height rem(200)
            background-image url('../../assets/smile_border2.png')
            padding rem(9) rem(6)
            padding-left rem(8)
            font-size rem(12.5)
            color #432c93
            .text-box {
                width 100%
                height 100%
                .text-row {
                    width 100%
                    display flex
                    justify-content flex-start
                    & > img {
                        width auto
                        height rem(14)
                    }
                }
            }
        }
    }
}
</style>