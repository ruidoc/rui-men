<template>
    <div id="content">
        <lay-tab></lay-tab>
        <lay-sub-menu></lay-sub-menu>
        <slot></slot>
    </div>
</template>

<script>
export default {
    components: {
        LayTab: re=> require(['&/Layout/LayTab'],re),
        LaySubMenu: re=> require(['&/Layout/LaySubMenu'],re)
    }
}
</script>

<style lang="less" scoped>
    #content {
        width: 100%;
        height: 100%;
        writing-mode: vertical-lr;
    }
</style>
