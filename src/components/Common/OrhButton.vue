<template>
    <div id="button" :class="[size,type]" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        size: {
            type: String,
            default: 'default'
        },
        type: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        onClick() {
            this.$emit('on-click')
        }
    },
    computed: {

    }
}
</script>

<style lang="less" scoped>
#button {
    display: inline-block;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    user-select: none;
    cursor: pointer;
    padding: 7px 3px;
    font-size: 17px;
    border-radius: 2px;
    color: #fff;
    &:hover {
        opacity: 0.9;
    }
    &.small {
        padding: 5px 2px;
        font-size: 15px;
    }
    &.default {
        color: #000;
        border: 1px solid #e9eaec;
        background: #f8f8f9;
    }
    &.warning {
        color: #fff;
        border: 1px solid #ff9900;
        background: #ff9900;
    }
    &.error {
        color: #fff;
        border: 1px solid #ed3f14;
        background: #ed3f14;
    }
    &.success {
        color: #fff;
        border: 1px solid #19be6b;
        background: #19be6b;
    }
    &.primary {
        color: #fff;
        border: 1px solid #2d8cf0;
        background: #2d8cf0;
    }
    .icon {
        position: relative;
        left: 1px;
    }
}
</style>
