<template>
    <div id="myinput" :class="[type]" :style="{'text-align':align}" contenteditable :placeholder="placeholder" v-html="content" @focus="isLocked=true" @blur="isLocked=false" @input="changeText">
        <Icon type="search"></Icon>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vals: this.value
            }
        },
        props: ['value','placeholder','type','align'],
        methods: {
            changeText() {
                this.$emit('input',this.$el.innerHTML);
            }
        },
        computed: {
            content() {
                if(this.type=='number') {
                    return this.vals
                } else {
                    return this.vals.replace(/ /g,'&nbsp;').replace(/(\n)/g,'<br>')
                }
            }
        },
        watch: {
            value(){
                if (!this.isLocked || !this.vals) {
                    this.vals = this.value;
                }
            }
        },
    }
</script>

<style lang="less" scoped>
@import '../../styles/rui-base.less';
    #myinput {
        font-size: @font-size;
        line-height: 20px;
        padding: 5px 6px;
        border: 1px solid #dddee1;
        outline: none;
        text-indent: 2px;
        display: inline-block;
        font-family: 'OrhonChaganTig';
        &.textarea {
            min-height: 70px;
        }
        &:empty::before {  
            color: #aaa;  
            content:attr(placeholder);
        }
        &:focus {
            border-color: @primary-color;
        }
        &.number {
            display: inline-block;
            padding: 3px 6px;
        }
    }
</style>

