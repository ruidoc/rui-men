<template>
    <div class="button">
        <Par type="h1">全局提示 rum-message</Par>
        <Par>全局提示组件，只提供 <f>function</f> 形式调用</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div>
                <rum-button type="primary" @on-click="show('info')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="warning" @on-click="show('warn')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="error" @on-click="show('error')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="success" @on-click="show('success')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
            </div>
            <div slot="desc">
                <div><f>type</f> 表示按钮类型。 <f>size</f> 表示按钮大小</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">参数说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">msg</div>
                <div class="td">提示消息内容</div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">type</div>
                <div class="td">提示类型，有 <f>info</f>，<f>warn</f>，<f>success</f>，<f>error</f> 四种</div>
                <div class="td">String</div>
                <div class="td">info</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "this.$RumMessage(msg,type)",
            bool: false,
            codeh1: `# template
<div>
    <rum-button type="primary" @on-click="show('info')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="warning" @on-click="show('warn')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="error" @on-click="show('error')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
    <rum-button type="success" @on-click="show('success')">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
</div>

# function
show(type) {
    this.$RumMessage(msg,type)
}`
        }
    },
    methods: {
        show(type) {
            this.$RumMessage('ᠳᠰᠤᠼᠰᠬᠵ ᠳᠰᠬᠵᠤᠰᠳ',type)
        }
    }
}
</script>

<style>
    
</style>
