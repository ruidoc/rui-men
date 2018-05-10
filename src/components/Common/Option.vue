<template>
    <div id="rum-option">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'rum-option',
    data() {
        return {}
    },
    props: {
        value: [String,Number]
    },
    computed: {
        text() {
            return this.$slots.default[0].text
        }
    }
}
</script>

<style>
#rum-option {
    display: none;
}
</style>
