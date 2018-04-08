<template>
    <div id="trees" :class="{sub}">
        <rum-node v-for="(item,index) in data" :key="index" :item="item" @on-item-click="click" @async-load="async"></rum-node>
    </div>
</template>

<script>

import RumNode from './Node.vue'

export default {
    name: 'trees',
    props: {
        data: Array,
        sub: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click(val) {
            this.$emit('on-item-click',val)
        },
        async(item,calback) {
            this.$emit('async-load', item, calback)
        }
    },
    components: {
        RumNode
    }
}
</script>

<style lang="less" scoped>
#trees {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    position: relative;
    user-select: none;
    &.sub {
        padding-top: 10px;
    }
}
</style>
