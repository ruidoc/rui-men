<template>
    <div id="myinput" :class="[type,{error}]" contenteditable :placeholder="placeholder" @focus="isLocked=true" @blur="blur(validate)" @input="changeText" @keyup.delete="del">
        {{vals}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                vals: this.value,
                isLocked: false,
                error: false
            }
        },
        props: {
            value: String,
            placeholder: String,
            type: String,
            validate: String
        },
        methods: {
            changeText() {
                let html = this.$el.innerHTML.toString()
                this.$emit('input',html);
            },
            del() {
                let dom = this.$el.getElementsByTagName('br')
                if(dom.length==1) {
                    this.$el.removeChild(dom[0])
                }
            },
            blur(valid) {
                if(valid) {
                    this.validated()
                }
                this.isLocked = false
            },
            validated() {
                console.log(this.validate)
                switch(this.validate) {
                    case 'required':
                        if(this.value.length==0) {
                            this.error = true
                            alert('字段不为空')
                        }
                        break;
                    case 'required':
                        let patt = /^(13|15|18|14)[0-9]{9}$/
                        if(patt.test(this.value)) {
                            this.error = true
                            alert('手机号格式错误')
                        }
                        break;
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
        writing-mode: vertical-lr;
        height: 100%;
        border-radius: 2px;
        &.textarea {
            min-height: 70px;
        }
        &.error {
            border-color: #ed3f14;
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

