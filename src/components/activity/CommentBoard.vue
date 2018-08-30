<template>
    <div class="comment-board bg-cover-all">
        <div class="asker-box flex-col-between" @click="show = true">
                <div class="asker-one">
                    <div class="avatar bg-cover-all" :style="{ backgroundImage: `url('${question.headImg}')` }"></div>
                    <div class="name ellipsis">{{question.name}}</div>
                </div>
                <div class="asker-two ellipsis">| {{question.title}} |</div>
                <div class="asker-three ellipsis">
                    {{question.content}}
                </div>
                <div class="asker-four">
                    <div class="date">{{question.create_time}}</div>
                    <div class="comments">{{commentList.length}}评论</div>
                </div>
        </div>
        <div class="comment-wrap" ref="commentScroll">
            <div class="comment-scroll-wrap">
                <ul class="comment-box">
                    <li v-for="(comment, index) in commentList" :key="index" class="comment flex-col-between">
                        <div class="inner-wrap">
                            <div class="comment-man">
                                <div class="avatar bg-cover-all" :style="{ backgroundImage: `url('${comment.headImg}')` }"></div>
                                <div class="name ellipsis">{{comment.name}}</div>
                            </div>
                            <div class="comment-content">
                                {{comment.content}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="close-btn flex-center" @click="launchClose"><span class="bg-cover-all"></span></div>
        <transition enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
            <div class="bg-grey" @click="handleClick" v-if="show">
                <div class="question-detail translate-center">{{question.content}}</div>
            </div>
        </transition>
    </div>
</template>

<script>

import api from '@api/index'
import BScroll from 'better-scroll'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      show: false,
      question: {},
      commentList: [],
      scroll: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMenu()
    })
    if (this.id) {
      api
        .getCommentList(this.id)
        .then((data) => {
          this.question = data.data.question
          this.commentList = data.data.comment
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  methods: {
    initMenu () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.commentScroll, {
            scrollY: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    launchClose () {
      this.$emit('launchClose')
    },
    handleClick (e) {
      if (e.target.classList.contains('bg-grey')) {
        this.show = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
    .comment-board {
        position absolute
        z-index 2000
        top 0
        left 0
        right 0
        bottom 0
        background-image url('../../assets/ques_hot_border.png')
        padding rem(9) rem(16)
        .bg-grey {
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            z-index 3000
            background-color rgba(0,0,0,.3)
            .question-detail {
                width rem(220)
                min-height rem(130)
                padding rem(10)
                border-radius 6px
                text-align left 
                font-size rem(13)
                color #432c93
                background-color #d5fbff
            }
        }
        .close-btn {
            top rem(9)
            right rem(16)
            position absolute
            width rem(25)
            height rem(25)
            z-index 2222
            & > span {
                width rem(12)
                height rem(12)
                background-image url('../../assets/close.png')
            }
        }
        .asker-box {
            width 100%
            height rem(100)
            margin-bottom rem(12)
            .asker-one {
                height rem(30)
                display flex
                justify-content flex-start
                align-items center
                .avatar {
                    width rem(30)
                    height rem(30)
                    border-radius 50%
                    margin-right rem(6)
                }
                .name {
                    color #432c93
                    font-size rem(15)
                }
            }
            .asker-two {
                text-align left 
                font-size rem(11)
                color #432c93
            }
            .asker-three {
                text-align left 
                font-size rem(14)
                color #432c93
                margin rem(3) 0
            }
            .asker-four {
                display flex
                justify-content space-between
                position relative
                & > div {
                    font-size rem(12)
                    color #432c93
                }
                &::after {
                    display block
                    content ''
                    position absolute
                    left 0 
                    top rem(23)
                    width 100%
                    height rem(2)
                    background-image url('../../assets/dash.png')
                    background-size 100% 100%
                    background-repeat no-repeat
                    background-position center center
                }
            }
        }
        .comment-wrap {
            width 100%
            height rem(300)
            overflow hidden
            .comment-scroll-wrap {
                width 100%
                .comment-box {
                    width 100%
                    .comment {
                        width 100%
                        position relative
                        &::after {
                            display block
                            content ''
                            position absolute
                            left 0 
                            bottom rem(0)
                            width 100%
                            height rem(2)
                            background-image url('../../assets/dash.png')
                            background-size 100% 100%
                            background-repeat no-repeat
                            background-position center center
                        }
                        .inner-wrap {
                            margin rem(6) 0
                        }
                        .comment-man {
                            height rem(30)
                            display flex
                            justify-content flex-start
                            align-items center
                            .avatar {
                                width rem(26)
                                height rem(26)
                                border-radius 50%
                                background-image url('../../assets/avatar_smile.png')
                                margin-right rem(6)
                            }
                            .name {
                                color #432c93
                                font-size rem(13)
                            }
                        }
                        .comment-content {
                            color #432c93
                            font-size rem(14)
                        }
                    }
                }
            }
        }
    }
</style>

