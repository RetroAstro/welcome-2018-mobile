<template>
      <div :class="[nav, 'flex-center']">
        <transition mode="out-in" enter-active-class="animated faster fadeInUp" leave-active-class="animated faster fadeOutDown">
            <ul class="nav-inner flex-between" v-show="show">
                <li 
                ref="tabs"
                v-for="(tab, index) in tabList" :key="index"
                :class="[{ tada: tada && currentName === tab.name }, tab.name, 'bg-cover-all', 'animated', { active: currentName === tab.name }]"
                :style="{backgroundImage: currentName === tab.name ? `url('${require(`../assets/${tab.name}_active.png`)}')` : `url('${require(`../assets/${tab.name}.png`)}')` }"
                @touchstart="handleSwitch(tab)"
                ></li>
            </ul>
        </transition>
      </div>
</template>

<script>

export default {
  props: {
    nav: {
      type: String,
      required: true
    },
    tabList: {
      type: Array,
      required: true,
      validator (value) {
        return value.map((val) => typeof val === 'object' && val.name && val.component)
      }
    },
    currentName: {
      type: String,
      required: true
    },
    tada: {
      type: Boolean
    }
  },
  data () {
    return {
      show: true,
    }
  },
  methods: {
    handleSwitch (item) {
      if (this.nav === 'training-nav' || this.nav === 'mien-video-nav' || this.nav === 'representer-nav') {
        var pass = true
        this.$refs.tabs.map((tab) => {
          if (tab.classList.contains('active') && this.currentName === item.name) {
            tab.classList.add('tada')
            setTimeout(() => {
              tab.classList.remove('tada')
            }, 1000)
            pass = false
          }
        })
        if (pass) {
          this.show = false
          var footer = document.querySelector('.footer')
          footer.classList.add('animated', 'faster', 'fadeOutDown')
          setTimeout(() => {
            this.show = true
            footer.classList.remove('fadeOutDown')
            footer.classList.add('fadeInUp')
          }, 660)
        }
      }
      this.$emit('handleSwitch', item)
    }
  }
}
</script>
