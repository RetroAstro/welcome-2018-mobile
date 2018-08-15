<template>
    <div class="schedule-content bg-cover-all">
        <div class="schedule-time bg-cover-all"></div>
    </div>
</template>

<style lang="stylus" scoped>
.schedule-content {
    width 100%
    height rem(480)
    background-image url('../../assets/bg1.png')
    display flex
    justify-content center
    align-items center
    .schedule-time {
        width rem(235)
        height rem(414)
        background-image url('../../assets/time.png')
    }
}
</style>