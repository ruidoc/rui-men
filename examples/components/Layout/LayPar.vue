<template>
    <p :class="['laypar',type]">
        <slot></slot>
    </p>
</template>

<script>
    export default {
        props: ['type']
    }
</script>

<style lang="less" scoped>
    .laypar {
        font-size: 14px;
        line-height: 16px;
        padding: 8px 0 17px 0;
        font-weight: 500;
        color: #444;
        font-weight: 500;
        &.h1 {
            font-size: 30px;
            color: #000;
            padding: 8px 0 27px 0;
        }
        &.h2 {
            font-size: 24px;
            color: #111;
            padding: 15px 0 20px 0;
        }
        &.h3 {
            font-size: 18px;
            color: #222;
            padding: 15px 0 22px 0;
        }
    }
</style>
