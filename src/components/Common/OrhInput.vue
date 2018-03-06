<template>
    <div id="inputwp">
         <span class="title">
            <slot></slot>
        </span>
        <div class="myinput" ref="input" :class="[type,{error}]" contenteditable :placeholder="placeholder" @focus="isLocked=true" @blur="blur(validate)" @input="changeText" @keyup.delete="del">{{vals}}</div>
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
            placeholder: {
                type: String,
                default: 'ᠲᠡᠰᠲ'
            },
            type: String,
            validate: String
        },
        methods: {
            changeText() {
                let html = this.$refs.input.innerHTML.toString()
                this.$emit('input',html);
            },
            del() {
                let dom = this.$refs.input.getElementsByTagName('br')
                if(dom.length==1) {
                    this.$refs.input.removeChild(dom[0])
                }
            },
            blur(valid) {
                if(valid) {
                    this.error = false
                    this.validated()
                }
                this.isLocked = false
            },
            validated() {
                let patt = ''
                switch(this.validate) {
                    case 'required':
                        if(this.value.length==0) {
                            this.error = true
                            alert('字段不为空')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'mobile':
                        patt = /^(13|15|18|14)[0-9]{9}$/
                        if(!patt.test(this.value)) {
                            this.error = true
                            alert('手机号格式错误')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'idcard':
                        patt = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                        if(!patt.test(this.value)) {
                            this.error = true
                            console.log('身份证号错误')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'email':
                        patt = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
                        if(!patt.test(this.value)) {
                            this.error = true
                            alert('邮箱格式错误')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
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
#inputwp {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    .title {
        padding: 1px 3px 0 0;
    }
    .myinput {
        font-size: @font-size;
        line-height: 20px;
        padding: 5px 6px;
        border: 1px solid #dddee1;
        outline: none;
        text-indent: 2px;
        display: inline-block;
        min-width: 34px;
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
}
    
</style>

