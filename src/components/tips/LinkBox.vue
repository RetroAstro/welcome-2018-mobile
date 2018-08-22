<template>
    <div class="content-box bg-cover-all">
      <div class="link-wrap bg-cover-all">
        <div class="link-box flex-col-between">
          <div v-for="(item, index) in items" :key="index" class="link" @click="jump(item.link)"><span>{{item.name}}</span></div>
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
          name: '重庆邮电大学官网',
          link: 'http://www.cqupt.edu.cn/cqupt/index.shtml'
        },
        {
          name: '红岩网校',
          link: 'http://hongyan.cqupt.edu.cn/'
        },
        {
          name: '教务在线',
          link: 'http://jwzx.cqupt.edu.cn/'
        },
        {
          name: '校务信息网',
          link: 'http://oa.cqupt.edu.cn/'
        },
        {
          name: '重庆邮电大学学工在线',
          link: 'http://222.177.140.105/index.shtml'
        },
        {
          name: '保卫处/武装部',
          link: 'http://bwc.cqupt.edu.cn/'
        },
        {
          name: '重庆邮电大学招生信息网',
          link: 'http://zs.cqupt.edu.cn/'
        }
      ]
    }
  },
  methods: {
    jump (link) {
      window.location.href = link
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(519)
    background-image url('../../assets/stu_box.png')
    padding-top rem(138)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(30)
    .link-wrap {
      width 100%
      height 100%
      background-image url('../../assets/security_border.png')
      padding rem(20)
      .link-box {
        width 100%
        height 100%
        .link {
          width 100%
          height rem(31)
          display flex
          justify-content flex-start
          align-items center
          font-size rem(15)
          color #432c93
          position relative
         & > span {
           position relative
         }
         & > span::after {
            position absolute
            right rem(-30)
            top rem(2)
            content: ''
            display block 
            width rem(16)
            height rem(16)
            background-image url('../../assets/link.png')
            background-size 100% 100%
            background-repeat no-repeat
            background-position center center
          }
        }
      }
    }
}
</style>