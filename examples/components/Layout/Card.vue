
<template>
    <div class="card">
        <div class="show_dv">
            <slot></slot>
        </div>
        <div class="desc_dv">
            <slot name="desc"></slot>
            <span class="tt">{{title}}</span>
            <span class="icons" @click="show=!show">
                <rum-icon type="code"></rum-icon>
            </span>
        </div>
        <div class="code_dv" v-if="show">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: ['title']
}
</script>

<style lang="less" scoped>
    .card {
        border: 1px solid #ebedf0;
        border-radius: 3px; 
        .show_dv {
            padding: 20px 25px;
        }
        .desc_dv {
            padding: 18px 28px 16px 24px;
            border-top: 1px solid #ebedf0;
            position: relative;
            font-size: 14px;
            .tt {
                position: absolute;
                background: #fff;
                padding: 0 5px;
                top: -10px; left: 18px;
                font-size: 14px;
            }
            .icons {
                position: absolute;
                bottom: 10px;
                right: 20px;
                font-size: 17px;
                cursor: pointer;
                color: #888;
                user-select: none;
                &:hover {
                    color: #333;
                }
            }
        }
        .code_dv {
            border-top: 1px solid #ebedf0;
            pre {
                margin: 0;
            }
        }
    }
</style>
