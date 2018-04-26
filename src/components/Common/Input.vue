<template>
    <div id="inputwp">
        <span class="title">
            <slot></slot>
        </span>
        <input type="text" v-if="type=='text'" v-model="vals" class="myinput" ref="input" :class="[{error},{disabled},{readonly}]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="blur(validate)"/>
        <textarea v-if="type=='textarea'" v-model="vals" class="myinput" ref="input" :class="[{error},{disabled},{readonly}]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="blur(validate)"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: false
            }
        },
        props: {
            value: String,
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            validate: String
        },
        methods: {
            blur(valid) {
                if(valid) {
                    this.error = false
                    this.validated()
                }
            },
            validated() {
                let patt = ''
                switch(this.validate) {
                    case 'required':
                        if(this.value.length==0) {
                            this.error = true
                            this.$RumMessage('字段不为空','error')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'mobile':
                        patt = /^(13|15|18|14)[0-9]{9}$/
                        if(!patt.test(this.value)) {
                            this.error = true
                            this.$RumMessage('手机号格式错误','error')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'idcard':
                        patt = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                        if(!patt.test(this.value)) {
                            this.error = true
                            this.$RumMessage('身份证号错误','error')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                    case 'email':
                        patt = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
                        if(!patt.test(this.value)) {
                            this.error = true
                            this.$RumMessage('邮箱格式错误','error')
                            this.$emit('on-validated',false)
                        } else {
                            this.$emit('on-validated',true)
                        }
                        break;
                }
            }
        },
        computed: {
            vals: {
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
#inputwp {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    display: inline-block;
    .title {
        padding: 1px 3px 0 0;
    }
    .myinput {
        font-family: 'OrhonChaganTig';
        display: table-cell;
        font-size: @font-size;
        padding: 5px 6px;
        border: 1px solid #dddee1;
        outline: none;
        height: 100%;
        text-indent: 2px;
        min-width: 34px;
        border-radius: 2px;
        &.textarea {
            min-height: 70px;
        }
        &.error {
            border-color: #ed3f14;
        }
        &:focus {
            border-color: @primary-color;
        }
        &.number {
            display: inline-block;
            padding: 3px 6px;
        }
        &.disabled {
            background: #f0f0f0;
            cursor: not-allowed;
        }
        &.readonly {
            cursor: not-allowed;
        }
    }
}
    
</style>

