<template>
    <header class="header">
        <div class="nav">
            <div class="nav-inner" ref="scroll">
                <div class="scroll-wrap" ref="btns">
                    <ul class="btns-box animated flex-between">
                        <li 
                        v-for="(item, index) in items" 
                        :key="index"
                        :class="[
                        {
                            bounceIn: item.name === currentName 
                        },
                        'btn', 'bg-cover-all', 'flex-center', 'animated', 'slow'
                        ]" 
                        :style="{ backgroundImage: currentName === item.name ? `url('${require(`../../assets/header_${item.path}_active.png`)}')` : `url('${require(`../../assets/header_${item.path}.png`)}')` }"
                        @click="handleSwitch(item)"
                        >
                        </li>
                    </ul>
                </div>
            </div>
            <div class="blur"></div>
        </div>
        <div class="robot-box bg-cover-all">
            <div class="cloud bg-cover-all"></div>
            <div class="robot bg-cover-all"></div>
            <div class="long-pipe bg-cover-all"></div> 
            <div class="hand bg-cover-all"></div>
            <div class="coin bg-cover-all"></div>
            <div class="coin-box bg-cover-all"></div>
            <div class="train bg-cover-all animated pulse infinite"></div>
            <div class="go bg-cover-all animated slower swing infinite delay-1s"></div>
            <div class="flag bg-cover-all"></div>
            <div class="right-pipe bg-cover-all"></div>
            <div class="left-pipe bg-cover-all"></div>
            <div class="tian bg-cover-all little"></div>
            <div class="shi bg-cover-all little"></div>
            <div class="fen bg-cover-all little"></div>
            <div class="miao bg-cover-all little"></div>
            <div class="countdown">
                <div class="count-wrap">
                    <count-down></count-down>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

import CountDown from './CountDown.vue'

import BScroll from 'better-scroll'

export default {
  components: {
    CountDown
  },
  props: {
    currentName: {
      type: String,
      required: true
    }
  },
  watch: {
    currentName (value) {
      var scroll = document.querySelector('.scroll-wrap')
      if (value === '风采') {
        scroll.style.transition = `transform .3s ease-in-out`
        scroll.style.transform = `translateX(-119px)`
      } else {
        scroll.style.transition = `transform .3s ease-in-out`
        scroll.style.transform = `translateX(0px)`
      }
    }
  },
  data () {
    return {
      items: [
        {
          name: '首页',
          path: 'index'
        },
        {
          name: '活动',
          path: 'activity'
        },
        {
          name: '攻略',
          path: 'tips'
        },
        {
          name: '军训',
          path: 'training'
        },
        {
          name: '揭秘',
          path: 'analyze'
        },
        {
          name: '风采',
          path: 'mien'
        },
        {
          name: '我们',
          path: 'about'
        }
      ],
      timeList: {
        day: [],
        hour: [],
        minute: [],
        second: []
      },
      timer: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMenu()
    })
  },
  methods: {
    initMenu () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.scroll, {
            scrollX: true,
            eventPassthrough: 'vertical'
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    handleSwitch (item) {
      this.$emit('launch', item.name)
      if (item.path === 'about') {
        window.location.href = 'http://hongyan.cqupt.edu.cn/aboutus/'
        return
      }
      item.path === 'activity' ? this.$router.push({path: `/${item.path}/help`}) : this.$router.push({path: `/${item.path}`})
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
    width 100%
    height rem(245)
    position relative
    .nav {
        position fixed
        top 0
        left 0
        width 100%
        height rem(50)
        background-color #9be9fe
        border-bottom 1.5px solid #33177b
        z-index 100
        .blur {
            position absolute
            top 0
            right 0
            background linear-gradient(to right,rgba(155,233,254,0) 0%,rgba(155,233,254,1) 50%)
            opacity 0.66
            width rem(23)
            height rem(50)
        }
        .nav-inner {
            width rem(352)
            height rem(50)
            margin 0 auto
            .scroll-wrap {
                width rem(472)
                height rem(50)
                transition all .3s ease-in-out
                transition-property transform
                position relative
                .btns-box {
                    width 100%
                    height 100%
                    .btn {
                        width rem(53)
                        height rem(32)
                        position relative
                    }
                }
            }
        }
    }
    .robot-box {
        z-index 16
        position absolute
        top rem(50)
        left 0
        width 100%
        // height rem(1100)
        // background-image url('../../assets/banner.png')
        .cloud {
            position absolute
            left 0
            top rem(-18)
            width 100%
            height rem(154)
            background-image url('../../assets/h_cloud.png')
            z-index 2
        }
        .robot {
            position absolute
            left rem(4)
            top rem(12)
            width rem(370)
            height rem(237.7)
            background-image url('../../assets/robot.png')
            z-index 3
        }
        .long-pipe {
            position absolute
            left 0
            top rem(86)
            width 105%
            height rem(1910.5)
            background-image url('../../assets/long_pipe.png')
        }
        .hand {
            position absolute
            top rem(22)
            right rem(3)
            width rem(54)
            height rem(66)
            background-image url('../../assets/hand.png')
            z-index 6
        }
        .coin {
            position absolute
            top rem(98)
            right rem(16)
            width rem(28)
            height rem(23)
            background-image url('../../assets/coin.png')
            z-index 5
        }
        .coin-box {
            position absolute
            top rem(130)
            right rem(9)
            width rem(40)
            height rem(86)
            background-image url('../../assets/coin_box.png')
            z-index 4
        }
        .train {
            position absolute
            top rem(150)
            right rem(53)
            width rem(44)
            height rem(30)
            background-image url('../../assets/train.png')
            animation-duration 2s
        }
        .go {
            position absolute
            top rem(130)
            left rem(50)
            width rem(28)
            height rem(35)
            background-image url('../../assets/go.png')
        }
        .flag {
            position absolute
            top rem(155)
            left rem(65)
            width rem(39)
            height rem(36)
            background-image url('../../assets/flag.png')
        }
        .right-pipe {
            position absolute
            width rem(45)
            height rem(1670)
            top rem(260)
            right 0
            background-image url('../../assets/right_pipe.png')
            z-index 6
        }
        .left-pipe {
            position absolute
            width rem(20)
            height rem(1930)
            top rem(1100)
            left rem(8)
            background-image url('../../assets/left_pipe.png')
            z-index 6
        }
        .little {
            width rem(13)
            height rem(13)
            position absolute
        }
        .tian {
            top rem(158)
            left rem(128)
            z-index 50
            background-image url('../../assets/tian.png')
        }
        .shi {
            top rem(156)
            left rem(171)
            background-image url('../../assets/shi.png')
            z-index 50
        }
        .fen {
            top rem(157)
            left rem(216)
            background-image url('../../assets/fen.png')
            z-index 50
        }
        .miao {
            top rem(161)
            left rem(259)
            background-image url('../../assets/miao.png')
            z-index 50
        }
        .countdown {
            position absolute
            top rem(150)
            left rem(116)
            width rem(146)
            height rem(18)
            z-index 33
            .count-wrap {
                width 86%
                height rem(30)
                margin 0 auto 
                position relative
                & >>> .count-inner {
                    .time {
                        width rem(33)
                        height rem(25)
                    }
                    .day {
                        transform translate(rem(-28.5), rem(1))
                        background-image url('../../assets/time_wrap1.png')
                        padding-right rem(3.8)
                    }
                    .hour {
                        transform translate(rem(-18), rem(-2))
                        background-image url('../../assets/time_wrap2.png')
                    }
                    .minute {
                        transform translate(rem(-5), rem(-2))
                        background-image url('../../assets/time_wrap3.png')
                    }
                    .second {
                        transform translate(rem(7), rem(1))
                        background-image url('../../assets/time_wrap4.png')
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 540px) {
    .nav {
        width 540px !important
        position relative !important
        margin 0 auto
    }
}
</style>