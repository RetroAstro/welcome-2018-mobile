<template>
    <div class="echarts-wrap">
        <div ref="pie" class="pie"></div>
    </div>
</template>

<script>

import echarts from '@utils/echarts'

var option = {
  legend: {
    selectedMode: false,
    bottom: 'bottom',
    itemHeight: 20,
    itemGap: 35,
    data: ['女', '男'],
    textStyle: {
      color: '#342176',
      fontWeight: 'bold',
      fontSize: 13,
    }
  },
  series: [
    {
      center: ['46.5%', '40%'],
      hoverAnimation: false,
      legendHoverLink: false,
      type: 'pie',
      radius: ['70%', '75%'],
      itemStyle: {
        normal: {
          labelLine: {
            show: false
          }
        }
      },
      color: ['rgb(84,201,244)'],
      data: [
        {value: 1, name: ' ', itemStyle: {emphasis: {color: 'rgb(84,201,244)'}}},
      ]
    },
    {
      center: ['46.5%', '40%'],
      startAngle: 180,
      hoverAnimation: false,
      type: 'pie',
      radius: '68%',
      itemStyle: {
        normal: {
          borderColor: 'rgb(67,42,146)',
          borderWidth: 2,
          label: {
          },
          labelLine: {
            show: false
          }
        }
      },
      label: {
        normal: {
          show: true,
          position: 'inner',
          textStyle: {
            fontWeight: 800,
            fontSize: 15,
            color: '#000'
          },
          formatter: '{d}%'
        }
      },
      color: ['#FFC0F9', '#7AF3EE'],
      data: [
        {value: 21, name: '女', itemStyle: {emphasis: {color: '#FFC0F9'}}},
        {value: 79, name: '男', itemStyle: {emphasis: {color: '#7AF3EE'}}},
      ]
    },
    {
      center: ['46.5%', '40%'],
      hoverAnimation: false,
      legendHoverLink: false,
      type: 'pie',
      radius: ['75%', '77%'],
      itemStyle: {
        normal: {
          labelLine: {
            show: false
          }
        }
      },
      color: ['rgb(67,42,146)'],
      data: [
        {value: 1, name: '', itemStyle: {emphasis: {color: 'rgb(67,42,146)'}}},
      ]
    }
  ]
}

export default {
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      var pie = echarts.init(this.$refs.pie)
      pie.setOption(option)
    }
  }
}
</script>

<style lang="stylus" scoped>
.echarts-wrap {
    width rem(160)
    height rem(160)
    position relative
    .pie {
        width 100%
        height 100%
        z-index 44
    }
}
</style>
