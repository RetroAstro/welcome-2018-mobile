<template>
    <div class="content-box bg-cover-all">
        <div class="scene-box">
            <div v-for="(item, index) in items" :key="index" class="scene bg-cover-all">
                <div class="photo bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.picture}.jpg`)}')` }"></div>
                <div class="name flex-center">{{item.name}}</div>
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
          picture: 'carousel3',
          name: '春华秋实'
        },
        {
          picture: 'carousel3',
          name: '春华秋实'
        },
        {
          picture: 'carousel3',
          name: '春华秋实'
        },
        {
          picture: 'carousel3',
          name: '春华秋实'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(464)
    background-image url('../../assets/scene_box.png')
    padding-top rem(92)
    padding-left rem(26.5)
    padding-right rem(41.5)
    padding-bottom rem(10)
    .scene-box {
        width 100%
        height rem(280)
        display flex
        justify-content space-between
        flex-wrap wrap
        & > div {
            width rem(132)
            height rem(135)
            background-image url('../../assets/scene_inside.png')
            padding rem(6)
            .photo {
                width 100%
                height rem(100)
            }
            .name {
                width 100%
                height rem(28)
                font-size rem(13)
                color #432c93
            }
        }
        & > div:first-child, & > div:nth-of-type(2) {
            margin-bottom rem(12)
        }
    }
    & >>> .page-wrap {
        width 100%
        height rem(50)
        position relative
        padding-top rem(10)
        margin-top rem(20)
        .left {
            position absolute
            top 50%
            transform translateY(-50%)
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
            transform translateY(-50%)
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