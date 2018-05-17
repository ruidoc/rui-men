<template>
    <div id="rum_validator">
        <slot></slot>
        <rum-button name="button" type="primary" @on-click="valide">{{bt_text}}</rum-button>
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

</style>
