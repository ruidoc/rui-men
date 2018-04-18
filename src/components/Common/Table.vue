<template>
    <div id="tables">
        <div class="handel" v-if="!hideHandel">
            <rum-button @on-click="onadd" v-if="add">
                <rum-icon class="icon" type="plus"></rum-icon>
                <span>ᠰᠢᠨ᠎ᠡ ᠪᠡᠷ ᠨᠡᠮᠡᠬᠦ</span>
            </rum-button> &nbsp;
            <rum-button @on-click="ondel" v-if="del">
                <rum-icon class="icon" type="trash-b"></rum-icon>
                <span>ᠤᠰᠠᠳᠬᠠᠬᠤ</span>
            </rum-button> &nbsp;
            <slot name="option"></slot>
            <span class="reload" v-if="reload" @click="toReload">
                <rum-icon class="icon" type="loop" size="22"></rum-icon>
            </span>
        </div>
        <div class="table">
            <div class="head">
                <div v-for="(item,ind) in columns" :key="ind" 
                :style="{'height':item.height?item.height+'px':'auto','flex':item.height?false:1}" 
                class="col">{{item.title}}</div>
            </div>
            <div class="body" v-for="(item,index) in data" :key="index" @click="rowclick(item)">
                <div v-for="(sitem,ind) in columns" :key="ind" :style="{'height':sitem.height?sitem.height+'px':'auto','flex':sitem.height?false:1}" class="col">
                    <span v-if="!sitem.slot" v-html="item[sitem.key]"/>
                    <slot :name="sitem.slot+index"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vals: this.value,
                single: false,
            }
        },
        props: {
            add: {
                type: Boolean,
                default: false
            },
            del: {
                type: Boolean,
                default: false
            },
            reload: {
                type: Boolean,
                default: false
            },
            hideHandel: {
                type: Boolean,
                default: false
            },
            columns: {
                type: Array,
                required: true
            },
            data: {
                type: Array,
                required: true
            }
        },
        methods: {
            onadd() {
                this.$emit('on-add')
            },
            ondel() {
                this.$emit('on-del')
            },
            toReload() {
                this.$emit('on-reload')
            },
            rowclick(data) {
                this.$emit('on-row-click',data)
            }
        },
        computed: {
            
        }
    }
</script>

<style lang="less" scoped>
@import '../../styles/rui-base.less';
#tables {
    writing-mode: vertical-lr;
    font-size: @font-size;
    font-family: 'OrhonChaganTig';
    .handel {
        padding: 0 8px;
        position: relative;
        .reload {
            position: absolute;
            left: 25%;
            bottom: 6px;
            cursor: pointer;
        }
    }
    .table {
        border: 1px solid #dddee1;
        .head {
            padding: 11px 7px;
            font-weight: bold;
            background: #ecf3fd;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .col {
                padding: 6px 0;
                display: inline-block;
                text-align: center;
            }
            .ivu-checkbox-wrapper {
                margin: 0;
            }
        }
        .body {
            padding: 11px 7px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            border-left: 1px solid #e9eaec;
            .col {
                padding: 6px 0;
                display: inline-block;
                text-align: center;
            }
            .ivu-checkbox-wrapper {
                margin: 0;
            }
        }
    }
}
</style>
