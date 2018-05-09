<template>
    <div id="button" :class="[size,type]" @click="onClick">
        <rum-icon v-if="icon" :type="icon"></rum-icon>
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
            default: 'def-type'
        },
        icon: {
            type: [Boolean, String],
            default: false
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
@import '../../styles/rui-base.less';
#button {
    display: inline-block;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    user-select: none;
    cursor: pointer;
    padding: 7px 3px;
    font-size: @font-size;
    border-radius: 2px;
    color: #fff;
    position: relative;
    margin-right: 4px;
    &:hover {
        opacity: 0.85;
    }
    &.small {
        padding: 5px 2px;
        font-size: @font-size-small;
    }
    &.def-type {
        color: #000;
        border: 1px solid #e9eaec;
        background: #f8f8f9;
        &:hover {
            background: #fff;
        }
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
        border: 1px solid @primary-color;
        background: @primary-color;
    }
    .icon {
        position: relative;
        left: 1px;
    }
}
</style>
