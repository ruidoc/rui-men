<template>
    <div :class="['rum-tabs-tabitem',{active}]">
        <span class="title" @click="change">{{label}}</span>
        <div :class="['bodys',{cover}]" v-show="active" ref="bodys">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        name: String,
        cover: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        change() {
            this.$parent.active = this.name
            this.$nextTick(()=> {
                this.$parent.bodyWidth = this.$refs.bodys.offsetWidth
            })
        }
    },
    computed: {
        active() {
            return this.$parent.value == this.name
        }
    }
}
</script>

<style lang="less">
@import '../../styles/rui-base.less';
.rum-tabs-tabitem {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    display: inline-block;
    min-height: 60px;
    .title {
        display: inline-block;
        height: 100%;
        width: 35px;
        line-height: 35px;
        padding: 5px 0;
        cursor: pointer;
        position: relative;
        text-align: center;
    }
    &.active {
        .title {
            color: @primary-color;
            &:after {
                position: absolute;
                content: '';
                background: @primary-color;
                top: 0; bottom: 0; right: 0;
                width: 2px;
            }
        }
    }
    .bodys {
        position: absolute;
        top: 0; left: 41px; bottom: 0;
        box-sizing: border-box;
        padding: 2px 0 2px 12px;
        &.cover {
            right: 0;
        }
    }
}
</style>
