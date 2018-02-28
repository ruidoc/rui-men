<template>
    <div class="button">
        <Par type="h1">输入框 rum-input</Par>
        <Par>通过鼠标或键盘输入内容，是最基础的表单域的包装。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="baseuse"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div>
                <rum-select v-model="opp" :options="options" placeholder="ᠬᠰᠹᠰᠳᠹᠹ"></rum-select>
                <rum-select v-model="opps" :options="options" placeholder="ᠬᠰᠹᠰᠳᠹᠹ" multiple></rum-select>
            </div>
            <div slot="desc">
                <div><f>type</f> 表示输入框类型。 <f>size</f> 表示按钮大小</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td">输入框内容，使用 <f>v-model</f> 绑定</div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
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
            value: "ᠰᠹᠰᠳᠭᠳᠹᠭ",
            baseuse: `<rum-input v-model="val"/>`,
            codeh1: `<div>
    <rum-button>ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="primary">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="warning">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="error">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp; &nbsp;
    <rum-button size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="primary" size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
</div>`,
            options: [
                {
                    label: 'ᠳᠪᠬᠹᠠᠪᠰ',
                    value: 1
                },
                {
                    label: 'ᠳᠰᠹᠬᠵᠳ',
                    value: 2
                },
                {
                    label: 'ᠳᠰᠹᠬᠵᠳ',
                    value: 3
                }
            ],
            opp: '',
            opps: [],
        }
    }
}
</script>

<style>
    
</style>
