<template>
    <div class="wrap">
        <div class="tabs">
            <div class="tab" :class="{ 'active' : currentTab === 'prince' }" @click="toggleTab('prince')">prince</div>
            <div class="tab" :class="{ 'active' : currentTab === 'rose' }" @click="toggleTab('rose')">rose</div>
            <div class="tab" :class="{ 'active' : currentTab === 'fox' }" @click="toggleTab('fox')">fox</div>
        </div>
        <transition mode="out-in" name="fade">
              <prince :is="currentTab" class="current" keep-alive></prince>  
        </transition>
    </div>
</template>

<script>

// Tab 动态组件切换效果
// :is 特性可以动态绑定组件, 即该标签可以指向任何组件
// keep-alive 将切换出去的组件保存在内存中, 即不销毁组件
// transition 实现动态组件的过渡效果, mode: out-in 当前元素先进行过渡，完成之后新元素过渡进入

// import prince from './components/prince'
// import rose from './components/rose'
// import fox from './components/fox'

var prince = {
    template: `<div>This is my prince</div>`
}

var rose = {
    template: `<div>This is my rose</div>`
}

var fox = {
    template: `<div>This is my fox</div>`
}

export default {
  data () {
    return {
      currentTab: 'prince'  
    }
  },
  components: {
    prince,
    rose,
    fox
  },
  methods: {
    toggleTab: function(tab) {
      this.currentTab = tab
    }
  }
}

</script>

<style lang="stylus" scoped>
.wrap {
    width 100px
    text-align center
    .tabs {
        display flex
        justify-content space-between
        font-size 14px
        margin-bottom 10px
        .tab {
            cursor pointer
            &.active {
                color #ffafc9
            }
        }
    }
    .current {
        font-size 10px
    }
}
.fade-enter-active, .fade-leave-active 
  transition: opacity .3s ease
.fade-enter, .fade-leave-to 
  opacity: 0

</style>

