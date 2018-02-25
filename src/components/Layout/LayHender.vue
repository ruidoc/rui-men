<template>
    <div id="menu" @on-select="menuClick">
        <div class="logo">
            <img src="@/assets/logo.png" @click="reload" height="45"/>
        </div>
        <div class="right_dv">
            <Poptip title="提示标题" content="提示内容" placement="bottom-end">
                <Button class="bottom" type="text" size="small">小瑞老师 <Icon type="arrow-down-b"></Icon></Button>
            </Poptip>
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
            },
            menuClick(val) {
                let mu = val.split('-')
                console.log(mu)
                if(mu[0]==1) {
                    this.$router.push('/')
                }
                if(mu[0]==3) {
                    this.$store.commit('upfontSize',mu[1])
                }
                if(mu[0]==4) {
                    if(mu[1]==1) {
                        this.$store.commit('upIsMen',false)
                    } else {
                        this.$store.commit('upIsMen',true)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #menu {
        position: fixed;
        top: 0; left: 0; right: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #2d8cf0;
        height: 60px;
    }
    .logo {
        padding: 3px 30px 0 20px;
        cursor: pointer;
    }
    .right_dv {
        padding: 0 15px;
    }
    .right_dv .bottom {
        font-size: 14px;
        color: #fff;
    }
</style>
