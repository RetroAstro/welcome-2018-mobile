<template>
    <footer class="footer">
        <div class="text-box">
            <ul class="nav">
                <li v-for="(item, index) in items" :key="index">{{item}}</li>
            </ul>
            <div class="rules">
                <p>本网站由红岩网校工作站负责开发，管理，</p>
                <p>不经红岩网校委员会书面同意，不得进行转载</p>
                <p>地址：重庆市南岸区崇文路2号（重庆邮电大学内）</p>
                <p>400065 E-mail :redrock@cqupt.edu.cn (023-62461084)</p>
            </div>
        </div>
        <div class="bg-footer bg-cover-all"></div>
    </footer>
</template>

<script>

export default {
  data () {
    return {
      items: [
        '关于红岩网校 |',
        ' 网站地图 |',
        ' 指出错误 |',
        ' 管理入口'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer {
    position relative
    z-index 20
    .text-box {
        text-align center
        margin-bottom rem(10)
        .nav {
            display flex
            justify-content center
            color #fff
            font-size 13px
            & > li {
                margin-left rem(4)
            }
            margin-bottom rem(6)
        }
        .rules {
            & > p {
                text-align center
                height rem(20)
                line-height rem(20)
                color #fff
                font-size 10px
                letter-spacing .5px
            }   
        }
    }
    .bg-footer {
        width 100%
        height rem(65)
        background-image url('../../assets/footer.png')
    }
}
</style>