<template>
    <div :class="[box,'flex-between']">
        <div class="nav flex-center">
            <ul class="nav-inner flex-between">
                <li 
                v-for="(tab, index) in tabList" :key="index"
                :class="[tab.name, 'bg-cover-all']"
                :style="{ backgroundImage: currentName === tab.name ? `url('${require(`../assets/${tab.name}_active.png`)}')` : `url('${require(`../assets/${tab.name}.png`)}')` }"
                @click="handleSwitch(tab)"
                ></li>
            </ul>
        </div>
        <transition mode="out-in" :enter-active-class="animate.entrance" :leave-active-class="animate.exits">
            <slot></slot>
        </transition>
    </div>
</template>

<script>

export default {
  props: {
    box: {
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
    animate: {
      type: Object,
      required: true,
      validator (value) {
        return value.entrance && value.exits
      }
    },
    currentName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSwitch (item) {
      this.$emit('handleSwitch', item)
    }
  }
}
</script>