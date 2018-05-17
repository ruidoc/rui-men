<template>
    <transition name="fades">
    <div id="rum_model" v-show="isShow" @click.self="isShow=false">
        <div :class="['handel',{confirm}]">
            <div class="title" v-if="title.length>0 && !confirm">
                <rum-icon type="close-round" size="14" class="icon" @click.native="isShow=false"></rum-icon>
                <span>{{title}}</span>
            </div>
            <div v-if="confirm" class="conf-title">
                <rum-icon type="information-circled" size="25" class="icon" color="#2d8cf0" @click.native="isShow=false"></rum-icon>
                <span>{{title}}</span>
            </div>
            <div class="content"><slot></slot></div>
            <div class="buttom" v-if="!hideBottom && !confirm">
                <rum-button type="primary" @on-click="ok">ᠲᠡᠭᠡᠶ᠎ᠡ</rum-button>
                &nbsp;
                <rum-button @on-click="isShow=false">ᠦᠭᠡᠢ</rum-button>
            </div>
            <div class="cofbutton" v-if="confirm">
                <rum-button type="primary" @on-click="took">ᠲᠡᠭᠡᠶ᠎ᠡ</rum-button>
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
        ok() {
            this.$emit('ok')
        },
        took() {
            this.isShow = false
            this.$emit('ok')
        }
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
#rum_model {
    position: fixed;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    left: 0; top: 0;
    right: 0; bottom: 0;
    background: rgba(0, 0, 0, .6);
    z-index: 10000;
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
            font-size: @font-size-large;
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
        .conf-title {
            padding: 13px 0 13px 20px;
            font-size: 20px;
        }
        .cofbutton {
            text-align: end;
            padding: 0 16px 15px 0;
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
            .content {
                padding: 30px 12px 15px 12px;
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
