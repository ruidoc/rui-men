<template>
    <div id="trees" :class="{sub}">
        <rum-node v-for="(item,index) in data" :key="index" :item="item" @on-item-click="click" @async-load="async"></rum-node>
    </div>
</template>

<script>

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
        RumNode: re=> require(['./Node.vue'],re)
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
