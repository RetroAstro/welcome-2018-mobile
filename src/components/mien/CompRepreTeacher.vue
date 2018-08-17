<template>
    <div class="content-box bg-cover-all">
        <div class="content-wrap">
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
            <div class="arrow-wrap flex-around">
                <div class="left bg-cover-all flex-center" @click="handleSwitch(-1)"><span class="bg-cover-all"></span></div>
                <div class="right bg-cover-all flex-center" @click="handleSwitch(1)"><span class="bg-cover-all"></span></div>
            </div>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'
import mock from '@service/mock'

export default {
  data () {
    return {
      currentPage: 0,
      rows: [
        [
          {
            name: '高非',
            picture: '高非'
          },
          {
            name: '陈褀褀',
            picture: '陈褀褀'
          }
        ],
        [
          {
            name: '高冬',
            picture: '高冬'
          },
          {
            name: '张清华',
            picture: '张清华'
          }
        ]
      ]
    }
  },
  methods: {
    handleSwitch: util.throttle(function (num) {
      this.currentPage += num
      this.currentPage = this.currentPage <= 0 ? 0 : this.currentPage >= 4 ? 4 : this.currentPage
      this.rows = mock.teachers[this.currentPage]
    }, 1000)
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
    padding-bottom rem(30)
    .content-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content space-between
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
        .arrow-wrap {
            width 90%
            margin 0 auto 
            transform translateX(rem(8))
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