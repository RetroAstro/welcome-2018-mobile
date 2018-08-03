<template>
    <div class="page-container">
        <comp-content :page="currentPage"></comp-content>
        <div class="page-wrap">
            <span class="left" @click="prevOrNext(-1)">left</span>
            <ul class="inner">
                <li 
                v-for="(item, index) in totalPages" 
                :key="index"
                :class="{active: item === currentPage}"
                @click="select(item)"
                :style="slide"
                ><span>{{item}}</span></li>
            </ul>
            <span class="right" @click="prevOrNext(1)">right</span>   
        </div>
    </div>
</template>

<script>

import CompContent from './CompContent.vue'

export default {
  components: {
    CompContent
  },
  data () {
    return {
      currentPage: parseInt(this.$route.params.pageNum),
      totalPages: 30
    }
  },
  computed: {
    slide () {
      var num = this.currentPage % 5 === 0 ? this.currentPage - 1 : this.currentPage
      var distance = Math.floor(num / 5) * 40
      return {
        transform: `translate3d(0, -${distance}px, 0)`
      }
    }
  },
  methods: {
    select (n) {
      this.currentPage = n
      this.$router.push({name: 'page', params: { pageNum: this.currentPage }})
    },
    prevOrNext (n) {
      this.currentPage += n
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage > this.totalPages ? this.totalPages : this.currentPage
      this.$router.push({name: 'page', params: { pageNum: this.currentPage }})
    }
  }
}
</script>

<style lang="stylus" scoped>
.page-container {
    width 550px
    margin 0 auto 
    margin-top 80px
    .page-wrap {
        display flex
        justify-content space-between
        & > span {
            width 40px
            height 40px 
            line-height 40px
            text-align center
            border-radius 6px
            border 1px solid #ccc
            cursor pointer
        }
        .inner {
            width 220px
            height 40px
            display flex
            flex-wrap wrap
            align-items center
            justify-content space-between
            overflow hidden
            & > li {
                width 40px
                height 40px
                line-height 40px
                text-align center
                border-radius 6px
                border 1px solid var(--fontGray)
                font-size 16px
                font-weight 400
                transition all .3s ease-in-out
                &.active {
                    background var(--primary)
                    color #fff
                }
            }
        }
    }
}
</style>

