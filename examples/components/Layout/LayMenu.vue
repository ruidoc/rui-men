<template>
    <div id="munu">
        <div :class="['li',{active:active==index},'type'+item.type]" v-for="(item,index) in menus" :key="index" @click="click(index,item.link,item.type)"><span v-if="item.type==3">{{item.name}}</span> <span :class="{dest:item.type==3}">{{item.title}}</span></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            menus: [
                {
                    type: 1,
                    link: 'about',
                    title: '关于 rui-men'
                },
                {
                    type: 1,
                    link: 'starting',
                    title: '快速上手'
                },
                {
                    type: 2,
                    link: '',
                    title: '组件'
                },
                {
                    type: 3,
                    link: 'rum-input',
                    name: 'rum-input',
                    title: '输入框'
                },
                {
                    type: 3,
                    link: 'rum-select',
                    name: 'rum-select',
                    title: '选择框'
                },
                {
                    type: 3,
                    link: 'rum-button',
                    name: 'rum-button',
                    title: '按钮'
                },
                {
                    type: 3,
                    link: 'rum-table',
                    name: 'rum-table',
                    title: '表格'
                },
                {
                    type: 3,
                    link: 'about',
                    name: 'rum-radio',
                    title: '单选'
                },
                {
                    type: 3,
                    link: 'about',
                    name: 'rum-poptip',
                    title: '气泡提示'
                },
                {
                    type: 3,
                    link: 'rum-model',
                    name: 'rum-model',
                    title: '对话框'
                },
                {
                    type: 3,
                    link: 'rum-message',
                    name: 'rum-message',
                    title: '全局提示'
                },
            ]
        }
    },
    methods: {
        click(i,path,type) {
            if(type!=2) {
                this.active = i;
                this.$router.push(`/component/${path}`);
            }
        }
    },
    created() {
        this.active = this.menus.findIndex(item=> {
            return item.link == this.$route.path.split('/')[2]
        })
    }
}
</script>

<style lang="less" scoped>
    #munu {
        width: 19%;
        border-right: 1px solid #ebedf0;
        display: inline-block;
        height: 100%;
        overflow: auto;
        .li {
            height: 40px;
            line-height: 40px;
            padding: 0 12px 0 25px;
            position: relative;
            cursor: pointer;
            margin: 4px 0 8px 0;
            font-size: 15px;
            font-weight: 500;
            .dest {
                font-size: 13px;
                color: #bbb;
                transition: color .2s;
            }
            &:after {
                content: '';
                position: absolute;
                right: -1px; top: 50%; bottom: 50%;
                width: 3px;
                background: #1890ff;
                transition: all .1s;
            }
            transition: color .2s;
            &.active {
                background: #e6f7ff;
                color: #1890ff;
                .dest {
                    color: #1890ff;
                }
                &:after{
                    top: 0; bottom: 0;
                }
            }
            &:hover {
                color: #1890ff;
            } 
            &.type2 {
                color: #777;
                cursor: default;
            }
            &.type3 {
                cursor: pointer;
                padding-left: 38px;
            }
        }
    }
</style>
