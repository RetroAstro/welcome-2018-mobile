<template>
    <div class="echarts-wrap">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script>

import echarts from '@utils/echarts'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  watch: {
    data (value) {
      this.draw(value)
    }
  },
  mounted () {
    this.draw(this.data)
  },
  methods: {
    draw (data) {
      var option = {
        baseOption: {
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
              data: [data.subject[0], data.subject[1], data.subject[2]],
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#422b93',
                  fontSize: 10,
                  fontWeight: 600
                },
                interval: 0,
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
              max: 0.5,
              splitLine: {
                show: false
              },
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
              data: [data.number[0], data.number[1], data.number[2]]
            }
          ]
        },
        media: [
          {
            query: {
              maxWidth: 210,
            },
            option: {
              xAxis: [
                {
                  axisLabel: {
                    textStyle: {
                      fontSize: 8
                    },
                    rotate: 15
                  }
                }
              ]
            }
          }
        ]
      }
      var bar = echarts.init(this.$refs.bar)
      bar.setOption(option)
    }
  }
}
</script>

<style lang="stylus" scoped>
.echarts-wrap {
    width rem(225)
    height rem(160)
    position relative
    .bar {
        width 100%
        height 100%
        z-index 44
    }
}
</style>