<template>
    <i :class="['icon','ion-'+type]" :style="{color:color?color:false,fontSize:size?size+'px':false}"></i>
</template>

<script>
export default {
    props: {
        type: {
            type: [String, Boolean],
            default: false
        },
        color: {
            type: [String, Boolean],
            default: false
        },
        size: {
            type: [String, Boolean],
            default: false
        }
    }
}
</script>

