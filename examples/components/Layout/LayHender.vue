<template>
    <div id="menu">
        <div class="left_dv">
            <span class="logo">rui-men</span>
        </div>
        <div class="right_dv">
            <div class="tab">
                <span>首页</span>
            </div>
            <div class="tab">
                <span>组件</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            reload() {
                location.reload()
            }
        }
    }
</script>

<style lang="less" scoped>
    #menu {
        position: fixed;
        top: 0; left: 0; right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        box-shadow: 0 2px 8px #f0f1f2;
        box-sizing: border-box;
        padding: 0 20px;
        .left_dv {
            .logo {
                font-size: 20px;
                font-weight: 400;
                padding: 0 12px;
            }
        }
        .right_dv {
            padding: 0 15px;
            height: 100%;
            .tab {
                display: inline-block;
                padding: 0 20px;
                line-height: 60px;
                cursor: pointer;
                transition: all .3s;
                border-bottom: 2px solid transparent;
                box-sizing: border-box;
                height: 100%;
                &:hover {
                    color: #1890ff;
                    border-color: #1890ff;
                }
            }
        }
    }
    
</style>
