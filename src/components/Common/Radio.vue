<template>
    <div id="radio" @click="isShow=!isShow">
        <div :class="['radio',{active: isShow}]"></div>
        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        
    },
    computed: {
        isShow: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input',val)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../styles/rui-base.less';
#radio {
    display: inline-block;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    padding-left: 1px;
    cursor: pointer;
    font-size: @font-size;
    user-select: none;
    .radio {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid #dddee1;
        display: inline-block;
        text-align: center;
        position: relative;
        &:after {
            content: '';
            position: absolute;
            left: 3px; top: 3px;
            right: 3px; bottom: 3px;
            background: #dddee1;
            border-radius: 50%;
        }
        &.active {
            border-color: @primary-color;
        }
        &.active:after {
            background: @primary-color;
        }
    }
    span {
        position: relative;
        right: 2px;
    }
}
</style>
