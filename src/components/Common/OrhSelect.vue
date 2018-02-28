<template>
    <div id="select">
        <div class="refer" tabindex="1" @focus="show" @blur="hide" ref="refer">
            <span v-if="typeof(selected)=='object'">{{selected.label}}</span>
            <span v-else-if="typeof(selected)=='string'">{{selected.length==0?placeholder:selected}}</span>
            <Icon type="arrow-right-b" color="#bbb" size="15" class="icon"></Icon>
        </div>
        <div class="others" :style="position" v-show="isShow" ref="popper">
            <div class="item" v-if="!multiple" :class="{act:item.value==value}" v-for="(item,index) in options" :key="index" @click="itemClick(item,multiple)">
                <span>{{item.label}}</span>
                <rum-icon type="android-done" v-if="item.value==value" size="15" class="icon"></rum-icon>
            </div>
            <div class="item" v-if="multiple" :class="{act:value.includes(item.value)}" v-for="(item,index) in options" :key="index" @click="itemClick(item,multiple)">
                <span>{{item.label}}</span>
                <rum-icon type="android-done" v-if="value.includes(item.value)" size="15" class="icon"></rum-icon>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                position: {
                    top: 0,
                    left: 0
                },
                isShow: false
            }
        },
        props: {
            placeholder: {
                type: String,
                default: '请选择'
            },
            placement: {
                type: String,
                default: 'right'
            },
            options: {
                type: Array,
                default: []
            },
            value: {
                type: [Number, Array]
            },
            multiple: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            hide() {
                setTimeout(()=> {
                    this.isShow=false
                },10)
            },
            show() {
                this.changePosition(this.$refs.refer,this.$refs.popper)
            },
            changePosition(refer,popper) {
                let pm_left = refer.offsetLeft-popper.offsetWidth-3
                let pm_right = refer.offsetLeft+refer.offsetWidth+3
                this.isShow = !this.isShow;

                setTimeout(()=> {
                    switch(this.placement) {
                        case 'left':
                            this.position.left = pm_left+'px'
                            break;
                        case 'right':
                            this.position.left = pm_right+'px'
                            break;
                    }
                },10)
            },
            itemClick(item,bool) {
                if(!bool) {
                    this.values = item.value
                } else {
                    if(this.values.includes(item.value)) {
                        this.values.splice(this.values.indexOf(item.value),1)
                    } else {
                        this.values.push(item.value)
                    }
                }
            }
        },
        computed: {
            selected() {
                if(this.multiple) {
                    let arr = this.options.filter(item=> this.values.includes(item.value))
                    return arr.map(item=> item.label).join(' , ')
                } else {
                    return this.options.find(item=> item.value==this.values)
                }
            },
            values: {
                get() {
                    return this.value
                },
                set(val) {
                    this.$emit('input',val)
                }
            }
        },
        watch: {
            
        },
    }
</script>

<style lang="less" scoped>
@import '../../styles/rui-base.less';
    #select {
        position: relative;
        cursor: pointer;
        font-family: 'OrhonChaganTig';
        display: inline-block;
        user-select: none;
        .refer {
            outline: none;
            font-size: @font-size;
            height: 100%;
            padding: 6px 3px 22px 3px;
            border: 1px solid #dddee1;
            text-indent: 2px;
            display: inline-block;
            font-family: 'OrhonChaganTig';
            cursor: pointer;
            position: relative;
            border-radius: 2px;
            min-height: 120px;
            &:empty::before {  
                color: #aaa;  
                content:attr(placeholder);
            }
            &:focus {
                border-color: @primary-color;
            }
            .icon {
                position: absolute;
                bottom: 4px;
                left: 27%;
            }
        }
        .others {
            position: absolute;
            height: 100%;
            background: #fff;
            box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
            z-index: 20;
            border-radius: 1px;
            text-align: center;
            font-size: @font-size;
            padding: 0 6px;
            .item {
                height: 100%;
                padding: 10px 2px;
                text-align: start;
                position: relative;
                &:hover {
                    background: #f5f5f5;
                }
                &.act {
                    color: @primary-color;
                }
                .icon {
                    position: absolute;
                    bottom: 10px;
                    left: 31%;
                }
            }
        }
    }
</style>
