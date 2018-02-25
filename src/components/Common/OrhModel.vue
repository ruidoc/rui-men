<template>
    <transition name="fades">
    <div class="model" v-if="isShow" @click.self="isShow=false">
        <div :class="['handel',{confirm}]">
            <div class="title" v-if="title.length>0 && !confirm">
                <Icon type="close-round" size="14" class="icon" @click.native="isShow=false"></Icon>
                <span>{{title}}</span>
            </div>
            <div class="content"><slot></slot></div>
            <div class="buttom" v-if="!hideBottom">
                <orh-button type="primary">ᠭᠤᠵᠬᠤ</orh-button>
                &nbsp;
                <orh-button @on-click="isShow=false">ᠤᠬᠵᠤᠪᠪ</orh-button>
            </div>
        </div>
    </div>
    </transition>
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
        },
        title: {
            type: String,
            default: ''
        },
        hideBottom: {
            type: Boolean,
            default: false
        },
        confirm: {
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
.model {
    position: fixed;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    left: 0; top: 0;
    right: 0; bottom: 0;
    background: rgba(0, 0, 0, .6);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .handel {
        background: #fff;
        border-radius: 4px;
        display: inline-block;
        position: relative;
        top: -10%;
        min-height: 400px;
        .title {
            border-right: 1px solid #e9eaec;
            padding: 13px 10px;
            font-weight: 400;
            font-size: 18px;
            background: #e9eaec;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            .icon {
                margin-bottom: 6px;
                position: relative;
                left: 1px;
                cursor: pointer;
                color: #777;
                &:hover {
                    color: #222;
                }
            }
        }
        .content {
            padding: 13px 12px;
        }
        .buttom {
            padding: 13px 10px;
            border-left: 1px solid #e9eaec;
            text-align: end;
        }
        &.confirm {
            .buttom {
                border: none;
                padding-left: 0;
            }
        }
    }
}
.fades-enter-active, .fades-leave-active {
    transition: opacity .3s;
}
.fades-enter, .fades-leave-to {
    opacity: 0;
}
</style>
