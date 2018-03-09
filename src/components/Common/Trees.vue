<template>
    <div id="trees">
        <div v-for="(item,index) in data" :key="index">
            <div class="icon_dv">
                <rum-icon v-if="item.children" type="arrow-down-b" color="#80848f" size="17" class="icon"></rum-icon>
            </div>
            <span>{{item.title}}</span>
        </div>
        <rum-tree-children v-if="item.children && item.children.length>0" :data="item.children"></rum-tree-children>
    </div>
</template>

<script>
export default {
    name: 'trees',
    data() {
        return {
            
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    watch: {
        isShow() {
            if(this.isShow) {
                setTimeout(()=> {
                    this.isShow = false
                },this.time)
            } else {
                this.isShow = false
            }
        }
    },
    mounted() {
        this.isShow = true
    },
}
</script>

<style lang="less" scoped>

#trees {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    padding: 10px 7px;
    position: relative;
    .icon_dv {
        width: 15px;
        height: 15px;
        cursor: pointer;
        display: inline-block;
    }
}
.enters-enter-active, .enters-leave-active {
    transition: all .3s;
}
.enters-enter, .enters-leave-to {
    opacity: 0;
}
</style>
