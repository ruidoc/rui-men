<template>
    <div class="rum-ui-input-wrap">
        <span class="title" v-if="$slots.default">
            <slot></slot>
        </span>

        <input :type="type" :autofocus="autofocus" :min="1" v-if="type!='textarea'" v-model="vals" ref="input" :class="['rum-ui-input',{validate_err},{disabled},{readonly},{search}]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="blur(validate)"/>

        <textarea v-if="type=='textarea'" :style="{width}" :autofocus="autofocus" v-model="vals" ref="input" :class="['rum-ui-input',{validate_err},{disabled},{readonly}]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @blur="blur(validate)"/>
        <div class="rum-input-search" v-if="search" @click="onsearch">
            <rum-icon type="search"></rum-icon>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                validate_err: false
            }
        },
        props: {
            value: [String,Number],
            autofocus: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            },
            width: {
                type: String,
                default: '55px'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            search: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            validate: String,
            errmsg: String
        },
        methods: {
            blur(valid) {
                if(valid) {
                    this.validate_err = false
                    this.validated()
                }
            },
            validated() {
                let patt = ''
                switch(this.validate) {
                    case 'required':
                        if(this.value.length==0) {
                            this.validate_err = true
                            this.$RumMessage(this.errmsg?this.errmsg:'字段不为空','error')
                        }
                        break;
                    case 'mobile':
                        patt = /^(13|15|18|14)[0-9]{9}$/
                        if(!patt.test(this.value)) {
                            this.validate_err = true
                            this.$RumMessage(this.errmsg?this.errmsg:'手机号格式错误','error')
                        }
                        break;
                    case 'idcard':
                        patt = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
                        if(!patt.test(this.value)) {
                            this.validate_err = true
                            this.$RumMessage(this.errmsg?this.errmsg:'身份证号错误','error')
                        }
                        break;
                    case 'email':
                        patt = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
                        if(!patt.test(this.value)) {
                            this.validate_err = true
                            this.$RumMessage(this.errmsg?this.errmsg:'邮箱格式错误','error')
                        }
                        break;
                }
            },
            onsearch() {
                this.$emit('on-search',this.vals)
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
.rum-ui-input-wrap {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    display: inline-block;
    position: relative;
    margin: 0 4px 10px 1px;
    .title {
        padding: 0 3px 0 0;
    }
    .rum-ui-input {
        font-family: 'OrhonChaganTig';
        display: table-cell;
        font-size: @font-size;
        padding: 5px 3px;
        border: 1px solid #dddee1;
        outline: none;
        height: 100%;
        min-height: 150px;
        text-indent: 2px;
        min-width: 34px;
        border-radius: 2px;
        &[type='text'] {
            width: 34px;
        }
        &.textarea {
            min-height: 70px;
        }
        &.validate_err {
            border-color: #ed3f14;
        }
        &:focus {
            border-color: @primary-color;
        }
        &.search {
            padding: 5px 3px 25px 3px;
        }
        &.disabled {
            background: #f0f0f0;
            cursor: not-allowed;
        }
        &.readonly {
            cursor: not-allowed;
        }
    }
    .rum-input-search {
        position: absolute;
        width: 34px; height: 25px;
        right: 0; bottom: 0;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        color: #ccc;
    }
}
</style>

