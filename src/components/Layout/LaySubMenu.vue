<template>
    <div id="sub_menu">
        <div v-for="(item,ind) in menus" :key="ind" class="item">
            {{item.text}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    icon: 'home',
                    text: 'ᠬᠳᠰᠵ ᠰᠳᠹ ᠰᠳᠪᠹ ᠳ'
                },
                {
                    icon: 'document-text',
                    text: 'ᠬᠳᠰᠵ ᠰᠳᠹ ᠰᠳᠪᠹ ᠳ'
                },
                {
                    icon: 'gear-b',
                    text: 'ᠬᠳᠰᠵ ᠰᠳᠹ ᠰᠳᠪᠹ ᠳ'
                },
                {
                    icon: 'waterdrop',
                    text: 'ᠬᠳᠰᠵ ᠰᠳᠹ ᠰᠳᠪᠹ ᠳ'
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    #sub_menu {
        font-family: 'OrhonChaganTig';
        writing-mode: vertical-lr;
        padding: 15px 0;
        background: #ecf3fd;
        border-right: 1px solid #e9eaec;
        padding-left: 10px;
        .item {
            cursor: pointer;
            background: #fff;
            border: 1px solid #e9eaec;
            display: inline-block;
            font-size: 17px;
            padding: 7px 4px;
            border-radius: 2px;
            margin: 0 10px 10px 0;
            &:hover {
                background: #f8f8f8;
            }
        }
    }
    
</style>
