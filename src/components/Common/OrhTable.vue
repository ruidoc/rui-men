<template>
    <div id="tables">
        <div class="handel">
            <orh-button @on-click="add">
                <Icon class="icon" type="plus"></Icon>
                <span>ᠵᠹᠠᠰᠪ ᠬᠳᠤ</span>
            </orh-button> &nbsp;
            <orh-button @on-click="del">
                <Icon class="icon" type="trash-b"></Icon>
                <span>ᠵᠹᠠᠰᠪ ᠬᠳᠤ</span>
            </orh-button> &nbsp;
            <slot name="option"></slot>
        </div>
        <div class="table">
            <div class="head">
                <Checkbox v-model="single"></Checkbox>
                <div v-for="(item,ind) in columns" :key="ind" 
                :style="{'height':item.height?item.height+'px':'auto','flex':item.height?false:1}" 
                class="col">{{item.title}}</div>
            </div>
            <div class="body" v-for="(item,index) in data" :key="index">
                <Checkbox v-model="single"></Checkbox>
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
            add() {
                this.$emit('on-add')
            },
            del() {
                this.$emit('on-del')
            }
        },
        computed: {
            
        },
        components: {
            OrhButton: re=> require(['&/Framwork/OrhButton'],re),
        },
    }
</script>

<style lang="less" scoped>
    #tables {
        writing-mode: vertical-lr;
        font-size: 16px;
        font-family: 'OrhonChaganTig';
        .handel {
            padding: 0 8px;
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

