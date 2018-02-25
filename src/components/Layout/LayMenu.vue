<template>
    <div id="munu">
        <Tooltip v-for="(item,ind) in menus" :key="ind" :content="item.text" placement="right" >
            <div class="item">
                <Icon :type="item.icon" size="33" color="#fff"></Icon>
            </div>
        </Tooltip>
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
    #munu {
        font-family: 'OrhonChaganTig';
        writing-mode: vertical-lr;
        width: 55px;
        position: absolute;
        left: 0; top: 60px;
        bottom: 0;
        padding: 15px 0;
        // overflow: auto;
        background: #2b85e4;
        .item {
            cursor: pointer;
            width: 55px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background: #2d8cf0;
            }
        }
    }
    
</style>
