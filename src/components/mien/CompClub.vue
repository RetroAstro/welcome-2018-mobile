<template>
    <div class="club-box bg-cover-all flex-between">
        <div class="club-wrap">
            <div class="slide-down ">
                <slider :selected="selected" :options="options" @changeOption="changeOption"></slider>
            </div>
            <transition enter-active-class="fadeIn animated faster" leave-active-class="fadeOut animated faster">
                <div class="text-box flex-between" v-show="show">
                    <div v-for="(item, index) in itemList.items[itemList.currentIndex]" :key="index" class="text-inner">
                        <div class="club-title">
                            <img :src="`${require(`../../assets/${item.name}.png`)}`" class="title">
                        </div>
                        <div class="text-content">
                            {{item.content}}
                        </div>
                    </div>
                </div>  
            </transition>
        </div>
        <div class="arrow-wrap flex-around" v-show="itemList.items.length > 1">
                <div class="left bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(-1)"></span></div>
                <div class="right bg-cover-all flex-center"><span class="bg-cover-all" @click="handleSwitch(1)"></span></div>
        </div>
    </div>
</template>

<script>

import util from '@utils/util'
import mock from '@service/mock'

export default {
  data () {
    return {
      show: true,
      selected: {
        value: '团委办公室',
        color: '#d5fbff'
      },
      options: [
        {
          value: '团委办公室'
        },
        {
          value: '团委组织部'
        },
        {
          value: '团委宣传部'
        },
        {
          value: '学生社团联合会'
        },
        {
          value: '学生科技联合会'
        },
        {
          value: '青年志愿者协会'
        },
        {
          value: '学生会'
        },
        {
          value: '大学生艺术团'
        }
      ],
      itemList: {
        currentIndex: 0,
        items: [
          [
            {
              name: '团委办公室',
              content: '重庆邮电大学团委办公室(以下简称办公室）是共青团重庆邮电大学委员会直属机构之一。是学校团学工作的枢纽与核心，在团委与各校级学生组织之间起到桥梁与枢纽的作用，是所有学生组织中与老师联系最密切的部门，是团委老师的得力助手。办公室负责团委工作的上传下达——向上通过制作团委工作简报《重邮共青团》等，向团中央、团市委汇报学校团学工作动态；向下沟通联系各校级学生组织，传达团委相关工作要求，并针对学生组织相关工作予以监督。参与学生组织各类活动的筹备工作，负责学生活动场地的管理工作，监督并完善团建在线网站的建设。同时，办公室还协助完成学校大型活动的会务，秘书工作，协助完成大学生志愿者暑期“三下乡”社会实践活动，负责各项文件，奖状资料的管理存档工作。'
            }
          ]
        ]
      },
    }
  },
  methods: {
    changeOption (item) {
      this.selected.value = item.value
      this.itemList = mock.groups[item.value]
    },
    handleSwitch: util.throttle(function (num) {
      this.show = false
      setTimeout(() => {
        this.show = true
        this.itemList.currentIndex += num
        this.itemList.currentIndex = this.itemList.currentIndex < 0 ? (this.itemList.items.length - 1) : this.itemList.currentIndex > (this.itemList.items.length - 1) ? 0 : this.itemList.currentIndex
      }, 500)
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>
.club-box {
    width 100%
    flex-direction column
    position relative
    background-image url('../../assets/bg2.png')
    height rem(405)
    padding-right rem(20)
    padding-left rem(30)
    padding-top rem(10)
    padding-bottom rem(10)
    .club-wrap {
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content flex-start
        .slide-down {
            width 100%
            height rem(40)
            display flex
            justify-content flex-end
            align-items center
            margin-bottom rem(3)
            & >>> .slide-menu {
                width rem(110)
                height rem(28)
                position relative
                .clickOut {
                    width 100%
                    height 100%
                    display flex
                    align-items center
                    background-image url('../../assets/slide_menu.png')
                }
                .input-wrap {
                    width 70%
                    height rem(23)
                    transform translateX(rem(4))
                    .menu-content {
                        width 100%
                        height 100%
                        color #645bac
                        font-size rem(13)
                        text-align center
                    }
                }
                .option-wrap {
                    position absolute
                    left 0
                    top rem(28)
                    width rem(110)
                    height rem(210)
                    z-index 200
                    overflow hidden
                    .option {
                        width 100%
                        height rem(210)
                        overflow-y auto
                        flex-direction column
                        background-color #9ce8ff
                        border-left rem(2) solid #432a92
                        border-right rem(2) solid #432a92
                        border-bottom rem(2) solid #432a92
                        border-bottom-left-radius 6px
                        border-bottom-right-radius 6px
                        & > li {
                            width 100%
                            padding-left rem(8)
                            padding rem(6) 0
                            padding-left rem(8)
                            display flex
                            align-items center
                            justify-content flex-start
                            font-size rem(13)
                            color #645bac
                        }
                    }
                }
            }
        }
        .text-box {
            width 100%
            flex-direction column
            position relative
            & > div {
                width 100%
                flex 1
            }
            .text-inner {
                position relative
                margin-bottom rem(10)
                .club-title {
                    width 100%
                    display flex
                    justify-content flex-start
                    margin-bottom rem(6)
                    .title {
                        width auto
                        height rem(16)
                        &::before {
                            display block
                            content ''
                            width rem(7)
                            height rem(8)
                            background-image url('../../assets/dot.png')
                            background-size 100% 100%
                            background-repeat no-repeat
                            background-position center center
                            transform translate(rem(-14), rem(5))
                        }
                    }
                }
                .text-content {
                    width 100%
                    text-align left 
                    font-size rem(12)
                    color #432c93
                    letter-spacing .5px
                    position relative
                }
            }
            .text-inner:last-child {
                margin-bottom 0
            }
        }
    }
    .arrow-wrap {
        width 100%
        position absolute
        bottom rem(3)
        left 50%
        transform translateX(-50%)
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
</style>