<template>
    <div class="slide-menu" v-clickOut="test">
        <div class="clickOut bg-cover-all" @touchstart="showOptions = !showOptions">
            <div class="input-wrap">
                <input type="text" readonly class="menu-content flex-center ellipsis" :value="selected" ref="input">
            </div>
        </div>
        <div class="option-wrap">
            <ul class="option" v-show="showOptions">
                <li v-for="(item, index) in options" :key="index" @click.prevent="choose(item.value)">{{item.value}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      showOptions: false,
      selected: '团委办公室',
      options: [
        {
          value: '西红柿鸡蛋'
        },
        {
          value: '青椒抱鸡蛋'
        },
        {
          value: '回锅肉'
        },
        {
          value: '宫保鸡丁'
        },
        {
          value: '地三鲜'
        },
        {
          value: '宫保鸡丁'
        },
        {
          value: '地三鲜'
        },
        {
          value: '西红柿鸡蛋'
        },
        {
          value: '青椒抱鸡蛋'
        },
        {
          value: '回锅肉'
        },
        {
          value: '宫保鸡丁'
        },
        {
          value: '地三鲜'
        },
        {
          value: '宫保鸡丁'
        },
        {
          value: '地三鲜'
        }
      ]
    }
  },
  directives: {
    clickOut: {
      bind: function (el, binding) {
        function handler (e) {
          if (el.contains(e.target)) return false
          if (binding.expression) {
            binding.value()
          }
        }
        el.handler = handler
        document.addEventListener('click', el.handler)
      },
      unbind: function (el) {
        document.removeEventListener('click', el.handler)
      }
    }
  },
  mounted () {
    this.$refs.input.addEventListener('focus', () => {
      document.activeElement.blur()
    })
  },
  methods: {
    choose (value) {
      this.showOptions = false
      if (value !== this.selected) {
        this.selected = value
      }
    },
    test () {
      this.showOptions = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.slide-menu {
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
            background-color #d5fbff
            color #645bac
            font-size rem(13)
            text-align center
        }
    }
    .option-wrap {
        position absolute
        left 0
        top rem(27)
        width rem(110)
        height rem(210)
        z-index 200
        overflow hidden
        .option {
            width 100%
            height rem(210)
            overflow-y auto
            flex-direction column
            background-color #d5fbff
            border-left rem(2) solid #432a92
            border-right rem(2) solid #432a92
            border-bottom rem(2) solid #432a92
            border-bottom-left-radius 6px
            border-bottom-right-radius 6px
            & > li {
                width 100%
                padding-left rem(8)
                height rem(30)
                display flex
                align-items center
                justify-content flex-start
                font-size rem(13)
                color #645bac
            }
        }
    }
}
</style>