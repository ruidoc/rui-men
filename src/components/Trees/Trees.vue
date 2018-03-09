<template>
    <div id="trees" :class="{sub}">
        <div class="tree_item" v-for="(item,index) in data" :key="index">
            <div class="rows">
                <div class="icon_dv" @click="toRotate">
                    <rum-icon v-if="item.children" type="arrow-down-b" color="#80848f" size="17" class="icon"></rum-icon>
                </div>
                <span class="can_click_title" @click="itemClick(item.value,$event)">{{item.title}}</span>
            </div>
            <rum-trees v-if="item.children && item.children.length>0" :data="item.children" :sub="!sub" @on-item-click="click"></rum-trees>
        </div>
    </div>
</template>

<script>
export default {
    name: 'trees',
    data() {
        return {
            active: '',
            rotate: []
        }
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        sub: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toRotate(e) {
            let tree_item = e.target.parentNode.parentNode.parentNode
            let self = e.target.parentNode
            if(self.classList.length>1) {
                self.classList.remove('open');
                tree_item.style.width = '24px'
            } else {
                self.classList.add('open');
                tree_item.style.width = 'auto'
            }
        },
        itemClick(val,e) {
            let cl = document.getElementsByClassName('can_click_title active')
            if(cl.length>0) {
                cl[0].classList.remove('active')
            }
            e.target.classList.add('active')
            this.$emit('on-item-click',val)
        },
        click(val) {
            this.$emit('on-item-click',val)
        }
    }
}
</script>

<style lang="less" scoped>

#trees {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    position: relative;
    user-select: none;
    transition: all .2s;
    &.sub {
        padding: 10px 0;
    }
    .tree_item {
        overflow: hidden;
        transition: all .2s;
        width: 24px;
        .rows {
            padding: 2px 3px;
            display: flex;
            align-items: stretch;
        }
    }
    .icon_dv {
        width: 19px;
        height: 17px;
        padding: 0 1px;
        cursor: pointer;
        display: inline-block;
        transition: all .2s;
        &.open {
            transform: rotate(-90deg);
        }
    }
    .can_click_title {
        cursor: pointer;
        padding: 5px 1px;
        border-radius: 2px;
        &.active {
            background: #e6f7ff;
        }
    }
}
</style>
