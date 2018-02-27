
<template>
    <div class="card">
        <div class="show_dv">
            <slot></slot>
        </div>
        <div class="desc_dv">
            <slot name="desc"></slot>
            <span>{{title}}</span>
        </div>
        <div class="code_dv">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="less" scoped>
    .card {
        border: 1px solid #ebedf0;
        border-radius: 3px; 
        .show_dv {
            padding: 17px 25px;
        }
        .desc_dv {
            padding: 10px;
            border-top: 1px solid #ebedf0;
            position: relative;
            span {
                position: absolute;
                background: #fff;
                padding: 0 5px;
                top: -10px; left: 18px;
                font-size: 14px;
            }
        }
    }
</style>
