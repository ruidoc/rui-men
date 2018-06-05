<template>
    <div class="rum-ui-step-wrap" :style="{width:width+'px'}">
        <div :class="['rum-ui-step',{active:current==index+1},{will:current<index+1}]" v-for="(item,index) in data" :key="index" ref="stpiem">
            <div class="step_line" v-if="index!=0" :style="{height:height+'px'}"></div>
            <div class="step_ctrl">
                <rum-icon type="checkmark" v-if="current>index+1"></rum-icon>
                <span v-else>{{index+1}}</span>
                <div class="desc">
                    {{item.desc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rui-steps",
    props: {
        width: {
            type: Number,
            default: 100
        },
        height: {
            type: Number,
            default: 80
        },
        current: {
            type: Number,
            default: 1
        },
        data: {
            type: Array,
            default: []
        }
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
.rum-ui-step-wrap {
    writing-mode: vertical-lr;
    display: flex;
    padding-bottom: 50px;
    .rum-ui-step {
        display: flex;
        .step_ctrl {
            width: 26px;
            height: 26px;
            border-radius: 26px;
            border: 1px solid #2d8cf0;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #2d8cf0;
            font-size: 16px;
            writing-mode: horizontal-tb;
            position: relative;
            .desc {
                writing-mode: vertical-lr;
                font-family: 'OrhonChaganTig';
                position: absolute;
                top: 0; left: 26px;
                height: 80px;
                padding: 2px 10px;
            }
        }
        .step_line {
            width: 26px;
            height: 80px;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 4px; bottom: 4px;
                left: 12px;
                width: 1px;
                background: #2d8cf0;
            }
        }
        &.active {
            .step_ctrl {
                background: #2d8cf0;
                color: #fff;
                .desc {
                    color: #2d8cf0;
                }
            }
        }
        &.will {
            .step_ctrl {
                color: #ddd;
                border-color: #ddd;
            }
            .step_line::after {
                background: #ddd;
            }
        }
    }
}
</style>
