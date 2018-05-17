<template>
    <div id="select">
        <span class="title">
            <slot></slot>
        </span>
        <div :class="['refer',{validate_err},{disabled}]" @click="focus(disabled)" ref="refer">
            <span v-if="typeof(selected)=='object'">{{selected.label}}</span>
            <span v-else-if="value==''" style="color:#aaa">{{placeholder}}</span>
            <span v-else-if="typeof(selected)=='string'">{{selected}}</span>
            <rum-icon type="arrow-right-b" color="#bbb" size="15" class="icon"></rum-icon>
        </div>
        <div class="others" :style="position" v-show="isShow" ref="popper">

            <div v-if="!multiple" 
                :class="['item',{act:item.value==value},{disabled:item.disabled}]" 
                v-for="(item,index) in options?options:optiones" :key="index" @click.stop="itemClick(item,multiple,item.disabled)">
                    <span>{{item.label}}</span>
                    <rum-icon type="android-done" v-if="item.value==value" size="15" class="icon"></rum-icon>
            </div>

            <div v-if="multiple" 
            :class="['item',{act:value.includes(item.value)},{disabled:item.disabled}]" 
            v-for="(item,index) in options?options:optiones" :key="index" @click.stop="itemClick(item,multiple,item.disabled)">
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
                isShow: false,
                validate_err: false,
                cpval: '',
                optiones: []
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            placement: {
                type: String,
                default: 'right'
            },
            options: Array,
            value: {
                type: [Number, String, Array]
            },
            multiple: {
                type: Boolean,
                default: false
            },
            validate: String,
            errmsg: String,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            focus(bool) {
                if(bool) {
                    return false
                }
                this.changePosition(this.$refs.refer)
                this.isShow ? this.hide() : this.show()
            },
            changePosition(refer) {
                let options = this.options?this.options:this.optiones
                let pm_left = refer.offsetLeft-(options.length)*32-15
                let pm_right = refer.offsetLeft+refer.offsetWidth+3
                switch(this.placement) {
                    case 'left':
                        this.position.left = pm_left+'px'
                        break;
                    case 'right':
                        this.position.left = pm_right+'px'
                        break;
                }
            },
            itemClick(item,bool,disabled) {
                if(disabled) {
                    return false
                }
                if(!bool) {
                    this.isShow = false
                    this.values = item.value
                } else {
                    if(this.values.includes(item.value)) {
                        this.values.splice(this.values.indexOf(item.value),1)
                    } else {
                        this.values.push(item.value)
                    }
                }
            },
            validated() {
                if(this.values.length?this.values.length==0:this.values==0) {
                    this.validate_err = true
                    this.$RumMessage(this.errmsg?this.errmsg:'该选项必选','error')
                } else {
                    this.validate_err = false
                }
            },
            show() {
                this.isShow = true
                document.addEventListener('click', this.hidePanel, false)
            },
            hide() {
                this.isShow = false
                document.removeEventListener('click', this.hidePanel, false)
            },
            hidePanel(e) {
                let iswrap = this.$refs.popper.contains(e.target)
                let isoring = this.$refs.refer.contains(e.target)
                if (!iswrap && !isoring) {
                    this.hide()
                }
            }
        },
        computed: {
            selected() {
                let options = this.options?this.options:this.optiones
                if(this.multiple) {
                    let arr = options.filter(item=> this.values.includes(item.value))
                    return arr.map(item=> item.label).join(' , ')
                } else {
                    return options.find(item=> item.value==this.values)
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
            isShow(val) {
                if(!val && this.validate == 'required') {
                    this.validated()
                }
            },
            values(val) {
                this.$emit('on-change',val)
            }
        },
        mounted() {
            let options = this.$children.filter(item=>item.$options.name=='rum-option')
            if(options.length>0) {
                this.optiones = options.map(item=>({
                    value: item.value?item.value:item.text,
                    label: item.text
                }))
            }
        }
    }
</script>

<style lang="less" scoped>
@import '../../styles/rui-base.less';
#select {
    position: relative;
    cursor: pointer;
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    display: inline-block;
    user-select: none;
    margin:0 10px 10px 1px;
    .title {
        padding: 0 3px 0 0;
    }
    .refer {
        outline: none;
        font-size: @font-size;
        height: 100%;
        min-height: 150px;
        padding: 6px 0 22px 0;
        width: 34px;
        line-height: 34px;
        box-sizing: border-box;
        border: 1px solid #dddee1;
        text-indent: 2px;
        display: inline-block;
        font-family: 'OrhonChaganTig';
        cursor: pointer;
        position: relative;
        border-radius: 2px;
        &.disabled {
            background: #f0f0f0;
            cursor: not-allowed;
        }
        &:empty::before {  
            color: #aaa;  
            content: attr(placeholder);
        }
        &:focus {
            border-color: @primary-color;
        }
        &.validate_err {
            border-color: #ed3f14;
        }
        .icon {
            position: absolute;
            bottom: 4px;
            left: 0;
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
        max-width: 400px;
        overflow-x: auto;
        overflow-y: hidden;
        .item {
            height: 100%;
            padding: 10px 6px;
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
            &.disabled {
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }
}
</style>
