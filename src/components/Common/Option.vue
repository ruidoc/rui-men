<template>
    <div class="rum-select-option">
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
.rum-select-option {
    display: none;
}
</style>
