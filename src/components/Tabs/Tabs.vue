<template>
    <div class="rum-ui-tabs" :style="{width}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bodyWidth: 0
        }
    },
    props: {
        value: String,
        cover: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        active: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input',val)
            }
        },
        width() {
            return !this.cover?this.bodyWidth+50+'px':'100%'
        }
    },
    mounted() {
        let dom = this.$children.find(item=> {
            return item.name == this.value
        })
        this.bodyWidth = dom.$refs.bodys.offsetWidth
    }
}
</script>

<style lang="less">
@import '../../styles/rui-base.less';
.rum-ui-tabs {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    padding: 0 7px;
    position: relative;
    height: 100%;
    &:after {
        position: absolute;
        content: '';
        top: 0; bottom: 0;
        left: 41px;
        width: 1px;
        background: #e9eaec;
        z-index: -1;
    }
}
</style>
