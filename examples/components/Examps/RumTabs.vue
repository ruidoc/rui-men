<template>
    <div class="button">
        <Par type="h1">标签页 rum-tabs</Par>
        <Par>标签页组件，用于切换当前显示区域</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="注意">
            <div>
                <rum-tabs v-model="curtab" style="height:300px" cover>
                    <rum-tab-item name="name" label="ᠳᠰᠵᠬᠹᠠ" cover>
                        <p>ᠰᠳᠬᠼᠪᠰᠠᠳᠪᠼᠠᠵᠺᠼᠪᠰ</p>
                        <p>ᠪᠺᠼᠪᠺᠠᠰᠪᠼᠠᠰᠪᠼᠺ</p>
                    </rum-tab-item>
                    <rum-tab-item name="name1" label="ᠰᠬᠳᠼᠬᠰᠪ">
                        ᠠᠪᠰᠳᠬᠪᠠ
                    </rum-tab-item>
                    <rum-tab-item name="name2" label="ᠰᠪᠼᠬᠳᠪᠰᠳᠺ">
                        ᠳᠪᠬᠰᠠᠳᠼᠹᠰᠠᠳᠠᠰ
                    </rum-tab-item>
                </rum-tabs>
            </div>
            <div slot="desc">
                <div><f>rum-tab-item</f> 组件只能在 <f>rum-tabs</f> 组件下使用，不能单独使用</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">rum-tabs props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td"> 当前选中的 <f>rum-tab-item</f> 组件的 name 值，使用 <f>v-model</f> 绑定 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">cover</div>
                <div class="td"> 设置组件宽度为 <f>100%</f> ，默认自适应内容宽度 </div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
        </Table>

        <br>
        <Par type="h2">rum-tab-item props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">name</div>
                <div class="td"> 与 <f>rum-tabs</f> 组件的 value 值相等即选中 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">label</div>
                <div class="td"> tab 标题 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">cover</div>
                <div class="td"> 设置组件宽度为 <f>100%</f> ，默认自适应内容宽度 </div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-tabs v-model="name">
    <rum-tab-item name="name" label="ᠰᠬᠳᠼᠬᠰᠪ">ᠠᠪᠰᠳᠬᠪᠠ</rum-tab-item>
</rum-tabs>`,
            curtab: 'name1',
            codeh1: `<rum-tabs v-model="curtab" style="height:300px" cover>
    <rum-tab-item name="name" label="ᠳᠰᠵᠬᠹᠠ" cover>
        <p>ᠰᠳᠬᠼᠪᠰᠠᠳᠪᠼᠠᠵᠺᠼᠪᠰ</p>
        <p>ᠪᠺᠼᠪᠺᠠᠰᠪᠼᠠᠰᠪᠼᠺ</p>
    </rum-tab-item>
    <rum-tab-item name="name1" label="ᠰᠬᠳᠼᠬᠰᠪ">
        ᠠᠪᠰᠳᠬᠪᠠ
    </rum-tab-item>
    <rum-tab-item name="name2" label="ᠰᠪᠼᠬᠳᠪᠰᠳᠺ">
        ᠳᠪᠬᠰᠠᠳᠼᠹᠰᠠᠳᠠᠰ
    </rum-tab-item>
</rum-tabs>

data() {
    return {
        curtab: 'name1'
    }
}`
        }
    }
}
</script>

<style>
    
</style>
