<template>
    <div class="route-wrap">
        <header class="route-header">
            <div class="center-header">
                <ul class="center">
                    <li v-for="(item, index) in items" :key="index" class="item" @click="change(item.path)">{{item.name}}</li>
                </ul>
            </div>
        </header>
        <transition mode="out-in" name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          name: '军训专题',
          path: 'countdown'
        },
        {
          name: '游子攻略',
          path: 'pagination'
        },
        {
          name: '数据揭秘',
          path: 'compselect'
        },
        {
          name: '迎新活动',
          path: 'compmap'
        }
      ]
    }
  },
  methods: {
    change (path) {
      this.$router.push({path: `/${path}`})
    }
  }
}
</script>

<style lang="stylus" scoped>
.route-header {
    width 100%
    height rem(40)
    .center-header {
        max-width 1100px
        padding 12px 0 13px 
        margin 0 auto 
        .center {
            width 100%
            display flex
            justify-content space-between
            align-items center 
            .item {
                flex 1
                height rem(40)
                line-height rem(40)
                background #f9f9f9
                text-align center 
                cursor pointer
            }
        }
    }
}
.fade-enter-active, .fade-leave-active 
  transition: opacity .3s ease
.fade-enter, .fade-leave-to 
  opacity: 0
</style>


