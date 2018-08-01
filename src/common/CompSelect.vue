<template>
    <div class="select">
        <div class="inner" v-clickOut="test">
            <div class="input-wrap" @click="showOptions = !showOptions">
                <input type="text" readonly placeholder="请选择菜品" :value="selected">
                <span></span>
            </div>
            <ul class="option" v-show="showOptions">
                <li v-for="(item, index) in options" :key="index" @click="choose(item.value)">{{item.value}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showOptions: false,
            selected: '',
            options: [
                {
                value: '西红柿鸡蛋'
                },
                {
                value: '青椒抱鸡蛋'
                },
                {
                value: '回锅肉'
                },
                {
                value: '宫保鸡丁'
                },
                {
                value: '地三鲜'
                }
            ]
        }
    },
    directives: {
        clickOut: {
            bind: function(el, binding) {
                function handler(e) {
                    if (el.contains(e.target)) return false
                    if (binding.expression) {
                        binding.value()
                    }
                }
                el.handler = handler
                document.addEventListener('click', el.handler)
            },
            unbind: function(el) {
                document.removeEventListener('click', el.handler)
            }  
        }
    },
    methods: {
        choose(value) {
            this.showOptions = false
            if (value !== this.selected) {
                this.selected = value
            }
        },
        test() {
            this.showOptions = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.select {
    width 300px
    margin 0 auto 
    margin-top 20px
    .input-wrap {
        width 100%
        height 30px
        border-radius 6px
        border 1px solid var(--fontGray)
        overflow hidden
        & > input {
            width 100%
            height 100%
            text-align center
            cursor pointer
        }
    }
    .option {
        width 100%
        margin-top 10px
        border-radius 6px
        box-shadow: 0 2px 10px 0 #e3e7f6
        & > li {
            height 30px
            line-height 30px
            border-bottom 1px solid #e3e7f6
            text-align center
            cursor pointer
            &:hover {
                background rgba(0,0,0,.1)
            }
        }
        & > li:last-child {
            border none
        }
    }
}
</style>

