<template>
    <span :class="['font',{link}]" @click="tolink(to)">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: {
            link: {
                type: Boolean,
                default: false
            },
            to: {
                type: [String, Boolean],
                default: false
            }
        },
        methods: {
            tolink(to) {
               to ? window.open(to) : false
            }
        }
    }
</script>

<style lang="less" scoped>
    .font {
        padding: 0 5px;
        background: #f5f5f5;
        border: 1px solid #e9eaec;
        border-radius: 3px;
        &.link {
            border: none;
            background: transparent;
            color: #1890ff;
            cursor: pointer;
        }
    }
</style>
