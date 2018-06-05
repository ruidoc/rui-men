<template>
    <div class="rum-ui-validator">
        <slot></slot>
        <div>
            <rum-button type="primary" @on-click="valide">{{bt_text}}</rum-button>
            <slot name="submit"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bt_text: {
            type: String,
            default: 'ᠲᠤᠰᠢᠶᠠᠬᠤ'
        }
    },
    methods: {
        valide() {
            this.$children.forEach(item=> {
                if(item.validate) {
                    item.validated()
                }
            })
            let leng = this.$children.filter(item=>item.validate_err).length
            console.log('leng',leng);
            if(leng==0) {
                this.$emit('on-success')
            } else {
                this.$emit('on-error')
            }
        }
    },
}
</script>

<style>
.rum-ui-validator {
    writing-mode: vertical-lr;
}
</style>
