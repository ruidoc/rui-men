<template>
    <div id="tabs">
        <div class="tab" v-for="(item,index) in tabs" :key="index">
            <span class="close"><Icon type="close-round" size="15"></Icon></span>
            <span style="padding-top:2px">{{item.title}}</span>
        </div>
        <div class="more">
            <orh-poptip placement="right-bottom"> 
                <div class="zk"><Icon type="chevron-right" color="#888"></Icon></div>
            </orh-poptip>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    id: 1,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                },
                {
                    id: 2,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                },
                {
                    id: 1,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                },
                {
                    id: 2,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                },
                {
                    id: 2,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                },
                {
                    id: 2,
                    title: 'ᠤᠳᠵ ᠳᠤᠵᠳᠰᠠ',
                }
            ]
        }
    },
    components: {
        OrhPoptip: re=> require(['&/Framwork/OrhPoptip'],re)
    }
}
</script>

<style lang="less" scoped>
    #tabs {
        writing-mode: vertical-lr;
        font-family: 'OrhonChaganTig';
        background: #f8f8f9;
        font-size: 18px;
        height: 100%;
        width: 37px;
        position: relative;
        // border-right: 1px solid #e9eaec;
        display: flex;
        .tab {
            display: flex;
            width: 100%;
            height: 20%;
            align-items: center;
            padding-bottom: 8px;
            // border-bottom: 1px solid #e9eaec;
            overflow: hidden;
            color: #2b85e4;
            background: url('../../assets/tab.png');
            cursor: pointer;
            &:hover {
                background: url('../../assets/tab_act.png') no-repeat;
                background-size: 100% 100%;
                border: 0;
            }
            .close {
                padding: 6px 0;
                color: #5cadff;
                &:hover {
                    color: #2b85e4;
                }
            }
        }
        .more {
            position: absolute;
            width: 100%;
            height: 40px;
            bottom: 0; left: 0;
            text-align: center;
            cursor: pointer;
            .zk {
                width: 40px;
                height: 35px;
                line-height: 40px;
            }
        }
    }
</style>
