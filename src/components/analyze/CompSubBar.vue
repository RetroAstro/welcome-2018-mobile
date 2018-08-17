<template>
    <div class="echarts-wrap">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script>

import echarts from '@utils/echarts'

var option = {
  grid: {
    left: 0,
    right: '6%',
    bottom: '3%',
    top: '6%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['大学英语', '大学体育', '形式与政策'],
      axisLabel: {
        show: true,
        textStyle: {
          color: '#422b93',
          fontSize: 10,
          fontWeight: 600
        },
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: '#422b93',
          width: 2
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 0.1,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#422b93',
          fontSize: 12,
        }
      },
      axisLine: {
        lineStyle: {
          color: '#422b93',
          width: 2
        }
      }
    }
  ],
  series: [
    {
      selectMode: false,
      barWidth: 100,
      type: 'bar',
      itemStyle: {
        normal: {
          color: function (params) {
            var colorList = ['#fec0f8', '#9be9fe', '#95f8f4']
            return colorList[params.dataIndex]
          },
          borderColor: '#422b93',
          borderWidth: 2,
          barBorderRadius: [5, 5, 0, 0],
          label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            color: '#422b93',
            fontSize: 12
          }
        }
      },
      barWidth: '50%',
      data: [0.09, 0.05, 0.02]
    }
  ]
}

export default {
  mounted () {
    this.draw()
  },
  methods: {
    draw () {
      var bar = echarts.init(this.$refs.bar)
      bar.setOption(option)
    }
  }
}
</script>

<style lang="stylus" scoped>
.echarts-wrap {
    width rem(220)
    height rem(160)
    position relative
    .bar {
        width 100%
        height 100%
        z-index 44
    }
}
</style>