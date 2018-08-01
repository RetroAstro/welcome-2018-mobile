<template>
    <div class="content">
        <ul>
            <li v-for="(news, index) in list" :key="index">
                <span>{{news.title}}</span>
                <span>{{news.author.loginname}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

import news from '../../api/index.js'

export default {
    props: {
        page: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            list: [],
            limit: 10
        }
    },
    watch: {
        page() {
            this.getNews()
        }
    },
    created() {
        this.getNews()
    },
    methods: {
        getNews() {
            news
            .getList({
                page: this.page,
                limit: this.limit
            })
            .then((res) => {
                this.list = res.data.data
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.content {
    width 100%
    height 500px
    margin-bottom 20px
    & li {
        width 100%;
        height 50px
        display flex
        justify-content space-between
        align-items center
        font-size 14px
        border-top 1px solid var(--fontBlack)
    }
}
</style>

