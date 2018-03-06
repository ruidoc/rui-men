<template>
    <div class="button">
        <Par type="h1">对话框 rum-model</Par>
        <Par>全局对话框，提供 <f>template</f> 和 <f>function</f> 两种形式调用</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div>
                <rum-button type="primary" @on-click="bool=true">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-model v-model="bool" title="ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ">这里是对话框的内容</rum-model>
            </div>
            <div slot="desc">
                <div><f>type</f> 表示按钮类型。 <f>size</f> 表示按钮大小</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">type</div>
                <div class="td">按钮类型，有 <f>default</f>，<f>primary</f>，<f>warning</f>，<f>error</f> 四种</div>
                <div class="td">String</div>
                <div class="td">default</div>
            </div>
            <div class="tr">
                <div class="td">size</div>
                <div class="td">按钮大小，有 <f>default</f>，<f>small</f> 两种</div>
                <div class="td">String</div>
                <div class="td">default</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-click</div>
                <div class="td">点击按钮触发</div>
                <div class="td">无</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "<rum-model>这里是内容</rum-model>",
            bool: false,
            codeh1: `<div>
    <rum-button>ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="primary">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="warning">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="error">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp; &nbsp;
    <rum-button size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="primary" size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
</div>`
        }
    }
}
</script>

<style>
    
</style>
