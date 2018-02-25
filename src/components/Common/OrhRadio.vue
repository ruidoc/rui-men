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
#radio {
    display: inline-block;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    padding-left: 1px;
    cursor: pointer;
    font-size: 17px;
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
            border-color: #2d8cf0;
        }
        &.active:after {
            background: #2d8cf0;
        }
    }
    span {
        position: relative;
        right: 2px;
    }
}
</style>
