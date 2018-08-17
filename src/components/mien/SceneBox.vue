<template>
    <div class="content-box bg-cover-all">
        <div class="content-wrap">
            <div class="scene-box">
                <div v-for="(item, index) in items" :key="index" class="scene bg-cover-all">
                    <div class="photo bg-cover-all" :style="{ backgroundImage: `url('${require(`../../assets/${item.picture}.jpg`)}')` }"></div>
                    <div class="name flex-center">{{item.name}}</div>
                </div>
            </div>
            <div class="arrow-wrap flex-around">
                <div class="left bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
                <div class="right bg-cover-all flex-center"><span class="bg-cover-all"></span></div>
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
    padding-bottom rem(30)
    .content-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
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
        .arrow-wrap {
            width 90%
            margin 0 auto 
            transform translateX(rem(6))
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