<template>
    <div class="Box">
        <div class="nav flex-center">
            <ul class="nav-inner flex-between">
                <li 
                v-for="(item, index) in items" :key="index"
                :class="[item.name, 'bg-cover-all']"
                :style="{ backgroundImage: currentName === item.name ? `url('${require(`../../assets/${item.name}_active.png`)}')` : `url('${require(`../../assets/${item.name}.png`)}')` }"
                @click="handleSwitch(item)"
                ></li>
            </ul>
        </div>
        <transition mode="out-in" enter-active-class="animated fast bounceIn" leave-active-class="animated fast bounceOut">
            <dynamic-component :is="currentComponent"></dynamic-component>
        </transition>
    </div>
</template>

<script>

export default {
  components: {

  },
  data () {
    return {
      currentName: '',
      currentComponent: '',
      items: [
        {
          name: '',
          currentComponent: ''
        }
      ]
    }
  },
  methods: {
    handleSwitch (item) {
      this.currentName = item.name
      this.currentComponent = item.currentComponent
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>