<template>
    <div class="content-box bg-cover-all">
        <div class="route-wrap bg-cover-all flex-col-between">
            <div v-for="(item, index) in items" :key="index"  class="route">
                <div class="title">
                    <img :src="`${require(`../../assets/${item.name}.png`)}`" :class="item.name">
                </div>
                <div class="text">{{item.content}}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
      items: [
        {
          name: 'route1',
          content: '可乘机场大巴至上清寺后转乘108路公交车至南坪，再转乘346或347路公交车到学校；或乘轻轨三号线到南坪，再转乘346或347路公交车到学校；直接打车到校费用约为70元；'
        },
        {
          name: 'route2',
          content: '乘323路或168路公交车至南坪，转乘346或347路公交车至学校：或乘轻轨三号线到南坪，再转乘346或347路公交车到学校；直接打车到校费用约40元；'
        },
        {
          name: 'route3',
          content: '可在菜园坝广场乘347路公交车至学校；直接打车到校费用约为25元；'
        },
        {
          name: 'route4',
          content: '1.可乘213路公交车到天星桥，转乘819路公交车至会展中心，再转乘346路公交车到学校 2.可乘426路公交车到南坪红星美凯龙，再转乘347路公交车到学校3.直接打车到校费用约为70元'
        },
        {
          name: 'route5',
          content: '可乘车至南坪后转乘346或347路公交车至学校；直接打车到校费用约为20元。'
        },
        {
          name: 'route6',
          content: '可乘坐校内观光车到教学楼、宿舍楼等，每人需自备一元现金车票。'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(728)
    background-image url('../../assets/security_box.png')
    padding-top rem(138)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(30)
    .route-wrap {
        width 100%
        height 100%
        background-image url('../../assets/security_border.png')
        padding rem(15) rem(15)
        padding-top rem(10)
        .route {
            width 100%
            .title {
                width 100%
                height rem(16)
                margin rem(3) 0 rem(8)
                & > img {
                    width auto 
                    height rem(14)
                }
            }
            .text {
                text-align left 
                font-size rem(12.5)
                color #432c93
            }
        }
    }
}
</style>