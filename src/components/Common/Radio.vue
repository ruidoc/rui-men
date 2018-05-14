<template>
    <div id="radio_dv" @click="updateVal">
        <label class="rui-radio" :class="{'checked':model==value,'disabled':disabled}">
            <input type="radio" ref="radio" :value="value"  :disabled="disabled">
        </label>
        <span class="size"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: "rui-radio",
    model: {
        prop: "model",
        event: "change"
    },
    props: {
        value: {
            type: [String, Number, Boolean],
            require: true
        },
        model: {
            type: [String, Number, Boolean],
            require: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    mounted: function() {
        //当dom渲染完成,判断组件是否默认选中
        if (this.checked === true) this.updateVal();
    },
    methods: {
        updateVal() {
            this.$emit("change", this.$refs.radio.value);
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../styles/rui-base.less";
#radio_dv {
    display: flex;
    align-items: center;
    writing-mode: vertical-lr;
    cursor: pointer;
    margin-right: 4px;
}
.size {
    font-size: 16px;
    padding: 4px 0 6px 0;
    font-family: 'OrhonChaganTig';
}
.rui-radio {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #4693fe;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &.disabled {
        border-color: #ccc;
        &::after {
            background-color: #ccc;
        }
    }
    &::after {
        content: "";
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -5px 0 0 -5px;
        background-color: #4693fe;
        transition: all .2s ease;
        opacity: 0;
        transform: scale(0);
    }
    &.checked::after {
        opacity: 1;
        transform: scale(1);
    }
    input[type="radio"] {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        opacity: 0;
        margin: 0;
        cursor: pointer;
    }
}
</style>
