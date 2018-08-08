<template>
    <div class="prex">
       <img src="../assets/map.jpg" preview="1" class="preview-wrap">
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
rem(px) {
    return (px / 75) * 1rem
}
.preview-wrap {
    margin-top rem(25)
    width rem(300)
    height rem(250)
    margin 0 auto
    background-image url('../assets/map.jpg')
}
</style>

