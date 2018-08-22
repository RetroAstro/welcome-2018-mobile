<template>
    <div class="new-box" ref="scroll">
        <div class="scroll-wrap">
            <ul class="ques-box">
                <li 
                v-for="(ques, index) in quesList" :key="index" 
                class="ques flex-col-between bg-cover-all"
                @click="handleClick(ques.Id)"
                >
                    <div class="ques-one">
                        <div class="avatar bg-cover-all" :style="{ backgroundImage: `url('${ques.headImg}')` }"></div>
                        <div class="name ellipsis">{{ques.name}}</div>
                    </div>
                    <div class="ques-two ellipsis">
                        | {{ques.title}} |
                    </div>
                    <div class="ques-three ellipsis">
                        {{ques.content}}
                    </div>
                    <div class="ques-four">
                        <!-- {{ques.create_time}} -->
                    </div>
                </li>
            </ul>
        </div>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
            <comment-board :id="id" v-if="show" @launchClose="launchClose"></comment-board>
        </transition>
    </div> 
</template>

<script>

import api from '@api/index'
import BScroll from 'better-scroll'
import CommentBoard from './CommentBoard.vue'

export default {
  components: {
    CommentBoard
  },
  data () {
    return {
      quesList: [],
      page: 1,
      scroll: null,
      id: 0,
      show: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMenu()
    })
    this.getQues(this.page)
  },
  methods: {
    initMenu () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            scrollY: true,
            click: true,
            pullUpLoad: {
              threshold: -80
            }
          })
          this.scroll.on('pullingUp', () => {
            this.page += 1
            this.getQues(this.page)
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    getQues (page) {
      api
        .getNewQuesList(page)
        .then((data) => {
          if (data) {
            data.data.map((item) => {
              this.quesList.push(item)
            })
            this.$nextTick(() => {
              this.scroll.finishPullUp()
              this.scroll.refresh()
            })
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleClick (id) {
      this.scroll.disable()
      this.id = id
      this.show = true
    },
    launchClose () {
      this.scroll.enable()
      this.show = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.new-box {
    width 100%
    height rem(432)
    overflow hidden
    position relative
    .scroll-wrap {
        width 100%
        .ques-box {
            width 100%
            .ques {
                width 100%
                height rem(100)
                background-image url('../../assets/ques_border.png')
                margin-bottom rem(10)
                padding rem(10) 0
                padding-left rem(16)
                padding-right rem(28)
                & >  div {
                    width 100%
                }
                .ques-one {
                    height rem(30)
                    display flex
                    justify-content flex-start
                    align-items center
                    .avatar {
                        width rem(26)
                        height rem(26)
                        border-radius 50%
                        margin-right rem(6)
                    }
                    .name {
                        color #432c93
                        font-size rem(15)
                    }
                }
                .ques-two {
                    text-align left 
                    font-size rem(11)
                    color #432c93
                }
                .ques-three {
                    text-align left 
                    font-size rem(14)
                    color #432c93
                    margin rem(3) 0
                }
                .ques-four {
                    text-align right
                    font-size rem(10)
                    color #432c93
                }
            }
        }
    }
}
</style>