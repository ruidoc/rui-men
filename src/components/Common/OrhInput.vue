<template>
    <div id="myinput" :class="[type]" :style="{'text-align':align}" contenteditable :placeholder="placeholder" @focus="isLocked=true" @blur="isLocked=false" @input="changeText">
        {{vals}}
        <!-- <rum-icon type="search" size="15" color="#888" class="ic"></rum-icon> -->
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
        writing-mode: vertical-lr;
        min-height: 130px;
        border-radius: 2px;
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

