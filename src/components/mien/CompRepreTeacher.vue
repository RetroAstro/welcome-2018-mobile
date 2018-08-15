<template>
    <div class="content-box bg-cover-all">
        <div class="teacher-box flex-between">
            <div class="row flex-between" v-for="(row, index) in rows" :key="index">
                <div class="picture-wrap bg-cover-all flex-between" v-for="(person, index) in row" :key="index">
                    <div class="picture">
                        <img :src="require(`../../assets/${person.picture}.jpg`)">
                    </div>
                    <div class="name flex-center">{{person.name}}</div>
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
      rows: [
        [
          {
            name: '吴江',
            picture: 'carousel3'
          },
          {
            name: '吴江',
            picture: 'carousel3'
          }
        ],
        [
          {
            name: '吴江',
            picture: 'carousel3'
          },
          {
            name: '吴江',
            picture: 'carousel3'
          }
        ]
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(500)
    background-image url('../../assets/teacher_box.png')
    padding-top rem(135)
    padding-left rem(26.5)
    padding-right rem(39.5)
    padding-bottom rem(10)
    .teacher-box {
        width 100%
        position relative
        .row {
            width rem(130)
            height 100%
            flex-direction column
            position relative
            .picture-wrap {
                width 100%
                height rem(130)
                background-image url('../../assets/repre_teacher_box.png')
                flex-direction column
                padding 0 rem(5)
                padding-top rem(5)
                & > div {
                    width 100%
                }
                .picture {
                    flex 7.5
                    & > img {
                        width 100%
                        height 100%
                    }
                }
                .name {
                    flex 2.5
                    font-size rem(14)
                }
            }
            .picture-wrap:first-child {
              margin-bottom rem(15)
            }
        }
    }
    & >>> .page-wrap {
        width 100%
        height rem(50)
        padding-top rem(20)
        position relative
        .left {
            position absolute
            top 50%
            transform translateY(-20%)
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
            transform translateY(-20%)
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