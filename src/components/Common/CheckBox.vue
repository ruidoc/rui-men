<template>
    <div id="rum-checkbox" @click="checked">
        <span :class="['box',{check}]">
            <rum-icon type="checkmark" size="10"></rum-icon>
        </span>
        <span style="position:relative;right:1px">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        check: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input',val)
            }
        }
    },
    methods: {
        checked() {
            this.check = !this.check
        }
    }
};
</script>

<style lang="less" scoped>
#rum-checkbox {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    display: inline-block;
    cursor: pointer;
    user-select: none;
    padding: 0 3px;
    .box {
        display: inline-block;
        width: 16px; height: 16px;
        text-align: center;
        line-height: 14px;
        border: 1px solid #f3f3f3;
        border-radius: 2px;
        color: #fff;
        font-size: 10px;
        &.check {
            background: #2d8cf0;
            border-color: #2d8cf0;
        }
    }
}
</style>

