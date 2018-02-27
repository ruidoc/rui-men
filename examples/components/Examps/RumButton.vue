<template>
    <div class="button">
        <Par type="h1">按钮 rum-button</Par>
        <Par>按钮用于开始一个即时操作。</Par>

        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div style="font-weight:400">
                <rum-button>ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="primary">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="warning">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="error">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp; &nbsp;
                <rum-button size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
                <rum-button type="primary" size="small">ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ</rum-button> &nbsp;
            </div>
            <div slot="desc"></div>
        </Card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "<rum-button>按钮文字</rum-button>"
        }
    }
}
</script>

<style>
    
</style>
