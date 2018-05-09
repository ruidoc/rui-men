<template>
    <div id="rum-checkbox" @click="checked" :class="{disabled}">
        <span :class="['box',{check: checks.includes(value)}]">
            <rum-icon type="checkmark" size="10"></rum-icon>
        </span>
        <span style="padding-top:4px;font-size:18px">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'model',
        event: 'change'
    },
    data() {
        return {
            
        };
    },
    props: {
        value: [ String, Number ],
        model: {
            type: Array,
            default: []
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        checks: {
            get() {
                return this.model
            },
            set(val) {
                this.$emit('change',val)
            }
        }
    },
    methods: {
        checked() {
            if(this.disabled) return
            let b = this.checks.findIndex(it=>it==this.value)
            if(b>=0) {
                this.checks.splice(b,1)
            } else {
                this.checks.push(this.value)
            }
            this.$emit('on-check',this.checks)
        }
    }
};
</script>

<style lang="less" scoped>
#rum-checkbox {
    display: flex;
    align-items: center;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    cursor: pointer;
    user-select: none;
    padding: 0 3px;
    margin-right: 4px;
    &.disabled {
        cursor: not-allowed;
        .box {
            background: #ddd;
        }
    }
    .box {
        display: inline-block;
        width: 16px; height: 16px;
        text-align: center;
        line-height: 14px;
        border: 1px solid #ddd;
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

