<template>
    <div class="page-wrap">
        <ul class="inner">
            <li 
            v-for="(item, index) in totalPages" 
            :key="index"
            :class="[{active: item === currentPage}, 'flex-center', 'bg-cover-all']"
            :style="slide"
            @touchstart="currentPage = item"
            ><span class="flex-center">{{item}}</span></li>
        </ul>
        <div class="left bg-cover-all flex-center" @click="prevOrNext(-1)"><span class="bg-cover-all"></span></div>
        <div class="right bg-cover-all flex-center" @click="prevOrNext(1)"><span class="bg-cover-all"></span></div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      currentPage: 1,
      totalPages: 28
    }
  },
  computed: {
    slide () {
      var num = this.currentPage % 5 === 0 ? this.currentPage - 1 : this.currentPage
      var distance = Math.floor(num / 5) * (32 / 75)
      return {
        transform: `translate3d(0, -${distance}rem, 0)`
      }
    }
  },
  methods: {
    prevOrNext (n) {
      this.currentPage += n
      this.currentPage = this.currentPage < 1 ? 1 : this.currentPage > this.totalPages ? this.totalPages : this.currentPage
    }
  }
}
</script>
