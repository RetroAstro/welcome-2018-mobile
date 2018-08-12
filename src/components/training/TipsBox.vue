<template>
    <div class="tips-box flex-center bg-cover-all">
        <text-slot>
            <span slot="text1">1.早餐一定要吃好，午餐一定要吃饱，晚餐要吃得适宜。军训时饭量会增大，不想发胖的妹子在晚饭时一定要管好自己的嘴巴；由于天气比较炎热，也会有一些同学吃不下饭，建议多少吃点，军训体力消耗很大，以免身体不适。<br/>2.多吃富含多种维生素的水果蔬菜，可以淡化黑色素，在一定程度上起到美白的效果。<br/>3.饮用水、运动饮料（军训期间会大量流汗适量补充水分很重要，建议可以喝一些葡萄糖水）</span>
            <span slot="text2">1.军训防晒是最重要的环节，不管是男生还是女生，都一定要注意防晒，因为防晒不仅是要防晒，更是要防晒伤。<br/>2.防晒霜、防晒喷雾（最好买SPF50、PA+++的，用指数高的比较适宜。出门前半个小时就要涂，因为防晒霜也要时间吸收。可以随身携带防晒霜，军训时出汗多，可以定时补涂一次。防晒霜的涂抹位置最好是脸部脖子以及所有穿上军训服后能够露出来的地方。<br/>3.湿纸巾、吸油面纸（擦汗必备，擦完脸再涂上防晒霜。）</span>
        </text-slot>
    </div>
</template>

<script>

import TextSlot from './TextSlot.vue'

export default {
  components: {
    TextSlot
  }
}
</script>


<style lang="stylus" scoped>
.tips-box {
    width rem(276)
    height rem(650)
    background-image url('../../assets/bg1.png')
    margin 0 auto
    position relative
}
</style>
