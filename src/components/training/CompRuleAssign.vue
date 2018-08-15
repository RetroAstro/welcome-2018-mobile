<template>
    <div class="rule-content bg-cover-all">
        <div class="text-wrap">
            <div class="text-title">
                <div class="rule bg-cover-all"></div>
            </div>
            <div class="text-content">1.军训期间请假遵循一事一请假的原则，无特殊事由不得请假；<br/>2.学生在军训场上感到不适，可直接通过“打报告”的形式向教官请假，在训练场边暂时休息；<br/>3.请假半天以下的由军训排排长经商辅导员同意后批准；<br/>4.请假半天以上的，3天以下的，由学生本人提出书面申请（请假条见附页），经辅导员签字后报校武装部审批，并由学生本人将审批后的申请交军训排排长实施；<br/>5.请假3天以上的需报请军训师领导同意；<br/>6.请假须外出的，须详细说明原因，并定期向辅导员报告动态；<br/>7.请假时间累计原则上不得超过军训时间的1/3（即5天）；<br/>8.如有其他特殊原因请假超过5天的，须专门报请军训师批准。</div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
.rule-content {
    width rem(277)
    height rem(480)
    background-image url('../../assets/bg1.png')
    padding-left rem(45)
    padding-right rem(35)
    padding-top rem(35)
    .text-wrap {
        width 100%
        .text-title {
            width 100%
            height rem(30)
            display flex
            justify-content flex-start
            .rule {
                width rem(163)
                height rem(16)
                background-image url('../../assets/rule.png')
                &::before {
                    display block
                    content ''
                    width rem(7)
                    height rem(8)
                    background-image url('../../assets/dot.png')
                    background-size 100% 100%
                    background-repeat no-repeat
                    background-position center center
                    transform translate(rem(-14), rem(4))
                }
            }
        }
        .text-content {
            text-align left 
            font-size rem(13)
            color #432c93
            letter-spacing .5px
            line-height rem(17)
        }
    }
}
</style>