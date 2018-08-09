<template>
    <header class="header">
        <div class="menu-button bg-cover-all"></div>
    </header>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>
.header {
    position fixed
    top 0
    width 100%
    height rem(80)
    display flex
    justify-content flex-end
    align-items center
    padding-right rem(20)
    .menu-button {
        width rem(40)
        height rem(40)
        background-image url('../../assets/menu_button.png')
    }
}
</style>