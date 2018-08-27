<template>
    <div class="slide-menu" v-clickOut="test">
        <div class="clickOut bg-cover-all" @touchstart="showOptions = !showOptions">
            <div class="input-wrap">
                <input type="text" readonly class="menu-content flex-center ellipsis" 
                :value="selected.value" 
                :style="{ backgroundColor: selected.color }"
                ref="input"
                >
            </div>
        </div>
        <div class="option-wrap">
          <transition enter-active-class="animated faster slideInDown" leave-active-class="animated faster slideOutUp">
            <ul class="option" v-if="showOptions">
                <li 
                v-for="(item, index) in options" :key="index" 
                @click="choose(item)"
                :style="selected.value === item.value ? { backgroundColor: selected.color } : {}"
                >{{item.value}}</li>
            </ul>
          </transition>
        </div>
    </div>
</template>

<script>

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    selected: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showOptions: false
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
    choose (item) {
      this.showOptions = false
      if (item.value !== this.selected.value) {
        this.$emit('changeOption', item)
      }
    },
    test () {
      this.showOptions = false
    }
  }
}
</script>
