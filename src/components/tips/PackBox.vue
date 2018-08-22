<template>
    <div class="content-box bg-cover-all">
        <div class="pack-wrap bg-cover-all flex-col-between">
            <div v-for="(item, index) in items" :key="index"  class="pack">
                <div class="title">
                    <img :src="`${require(`../../assets/${item.name}.png`)}`">
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
          name: 'baodaoshijian',
          content: '本科新生2018年9月14、15日报道'
        },
        {
          name: 'baodaodidian',
          content: '重庆邮电大学风雨操场'
        },
        {
          name: 'bidai',
          content: '自带同版近期照片共15张（要求光面相纸洗印，白底一寸，半神，正脸，免冠大头照片），新生档案，党团关系证明，户口本（需要迁户口的同学携带），录取通知书，高考准考证，《新生适应性资料》学习心得，入学指南中附带《学的生管理与学生自律协议书》以及《重庆邮电大学社会实践表》（不同学院要求不同）身份证以及户口本（复印件多复印几份，多复印几份，虽然学校并未做要求），银行卡（缴学费）,少量现金。'
        },
        {
          name: 'xihu',
          content: '男生的剃须刀，女生的护肤品（男生也可以适当准备一些），日常洗漱需要的物品（诸如牙膏牙刷，毛巾，沐浴露，盆桶以及洗衣物所需要的洗衣液，刷子等等。'
        },
        {
          name: 'yiwu',
          content: '四季的外套、袜子等等（要是重庆本地的同学或者是经常回家的同学非当季的衣物可以不用携带），各种四晾衣物的工具。蚊帐（根据个人喜好，也可以采用驱蚊液，这样就可以不挂蚊帐），一些基本的床上用品（枕头，被子等，被单最好准备两张，枕套同样如此），凉席（有空调的夏天一般不用），遮光帘，一些日常使用的药品（感冒药，创可贴之类的），台灯，还有各类寝室神器。'
        },
        {
          name: 'gerenshiyong',
          content: '电脑（笔记本最宜，其他的数码产品根据自己的情况进行添置），以及一些学习物品（签字笔，笔记本等等），台灯，水杯等等。'
        }
      ]
    }
  }
}
</script>


<style lang="stylus" scoped>
.content-box {
    width rem(345)
    height rem(772)
    background-image url('../../assets/tip_box.png')
    padding-top rem(138)
    padding-left rem(28)
    padding-right rem(40)
    padding-bottom rem(30)
    .pack-wrap {
        width 100%
        height 100%
        background-image url('../../assets/bg1.png')
        padding rem(10) rem(20)
        .pack {
            width 100%
            .title {
                width 100%
                height rem(16)
                margin rem(3) 0
                display flex
                justify-content flex-start
                & > img {
                    width auto 
                    height rem(13)
                }
            }
            .text {
                text-align left 
                font-size rem(11)
                color #432c93
            }
        }
    }
}
@media screen and (max-width: 360px) {
    .pack {
        transform translateY(rem(-7)) !important
    }
}
</style>