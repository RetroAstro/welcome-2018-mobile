<template>
    <div class="rule-content bg-cover-all flex-center">
        <text-slot>
            <span slot="text1">1.军训期间请假遵循一事一请假的原则，无特殊事由不得请假；<br/>2.学生在军训场上感到不适，可直接通过“打报告”的形式向教官请假，在训练场边暂时休息；<br/>3.请假半天以下的由军训排排长经商辅导员同意后批准；<br/>4.请假半天以上的，3天以下的，由学生本人提出书面申请（请假条见附页），经辅导员签字后报校武装部审批，并由学生本人将审批后的申请交军训排排长实施；<br/>5.请假3天以上的需报请军训师领导同意；<br/>6.请假须外出的，须详细说明原因，并定期向辅导员报告动态；<br/>7.请假时间累计原则上不得超过军训时间的1/3（即5天）；<br/>8.如有其他特殊原因请假超过5天的，须专门报请军训师批准。</span>
            <!-- <span slot="text2">学校将各学院学生工作负责人、2018级学生辅导员作为军训教导员、指导员，与军训带训干部一道，随队训练，并提出“每天至少到训练场3次的工作要求”（7月2日-15日）。学校在老运动场和太极运动场主席台分别设置教师签到点，教师签到情况，特别是到所带连队配合教官共同开展思想教育和学生管理工作的情况将作为集体和个人评优评先的依据。</span> -->
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
.rule-content {
    width 100%
    height rem(604)
    background-image url('../../assets/bg1.png')
    & >>> .box-wrap {
        height rem(590)
        .one {
            flex 8
            padding-top rem(30)
            transform translateY(rem(6))
            & span {
                transform translateY(rem(-35))
            }
        }
        .two {
            flex 2
            visibility hidden
        }
        .text-title {
            height rem(20)
        }
        .text-content {
            display flex
            align-items center
            justify-content center
        }
        .diet {
            width rem(163) !important
            background-image url('../../assets/rule.png') !important
        }
        .unburn {
            width rem(152) !important
            background-image url('../../assets/instruction.png') !important
            transform translateY(rem(10)) !important
        }
    }
}
</style>