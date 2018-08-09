<template>
  <vue-preview :slides="slide1"></vue-preview>
</template>

<script>
export default {
  data () {
    return {
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          w: 600,
          h: 400
        }
      ]
    }
  },
  methods: {

  }
}
</script>
