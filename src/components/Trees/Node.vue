<template>
    <div :class="['rum-trees-item',{auto}]">
        <div class="rows">
            <span :class="['rum-trees-icons',{open},{loding}]">
                <rum-icon v-if="item.children && !loding" type="arrow-down-b" color="#80848f" size="17" class="icon"  @click.native="toRotate"></rum-icon>
                <rum-icon v-if="loding" type="load-d" color="#80848f" size="17" class="icon"></rum-icon>
            </span>
            <span :class="['rum-trees-title',{active:item.selected}]" @click="itemClick(item,$event)">{{item.title}}</span>
        </div>
        <rum-trees v-if="item.children && item.children.length>0" :data="item.children" :sub="true" @on-item-click="click" @async-load="async"></rum-trees>
    </div>
</template>

<script>

export default {
    name: 'rum-trees-item',
    data() {
        return {
            loding: false,
            auto: false,
            open: false
        }
    },
    props: {
        item: Object
    },
    methods: {
        toRotate(e) {
            this.auto = !this.auto;
            this.open = !this.open;
            if(this.item.children.length==0) {
                this.loding = true
                this.$emit('async-load', this.item, (data)=> {
                    this.item.children = data
                    this.loding = false
                })
            }
        },
        itemClick(val,e) {
            let cl = document.getElementsByClassName('rum-trees-title active')
            if(cl.length>0) {
                cl[0].classList.remove('active')
            }
            e.target.classList.add('active')
            this.$emit('on-item-click',val)
        },
        click(val) {
            this.$emit('on-item-click',val)
        },
        async(item,calback) {
            this.$emit('async-load', item, calback)
        }
    }
}
</script>

<style lang="less" scoped>
@-webkit-keyframes rote {
    100% {
        transform: rotate(360deg);
    }
}
.rum-trees-item {
    overflow: hidden;
    transition: all .2s;
    width: 24px;
    &.auto {
        width: auto;
    }
    &.sub {
        padding: 10px 0;
    }
    .rows {
        padding: 2px 3px;
        display: flex;
        align-items: stretch;
    }
}
.rum-trees-icons {
    cursor: pointer;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &.open {
        transform: rotate(-90deg);
    }
    & i {
        transition: all .2s;
        transform-origin: 49% 50%;
    }
    &.loding i {
        animation: rote .2s ease infinite;
    }
}
.rum-trees-title {
    cursor: pointer;
    padding: 5px 1px;
    border-radius: 2px;
    &.active {
        background: #e6f7ff;
    }
}
</style>
