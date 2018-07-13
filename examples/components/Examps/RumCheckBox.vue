<template>
    <div class="button">
        <Par type="h1">多选框 checkbox</Par>
        <Par>多选框，选择多个值</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="注意">
            <div class="example">
                <rum-check-box v-model="checked" value="a">ᠪᠤᠼᠬᠵᠰᠳᠼᠰᠵᠬᠳᠠ</rum-check-box>
                <rum-check-box v-model="checked" value="b">ᠶᠣᠷᠦᠢ</rum-check-box>
                <rum-check-box v-model="checked" value="c" disabled>ᠶᠣᠷᠦᠢ</rum-check-box>
                {{JSON.stringify(checked)}}
            </div>
            <div slot="desc">
                <div>该组件中<f>v-model</f> 绑定的prop值是 model，而不是 value</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td"> 绑定的值，必须唯一 </div>
                <div class="td">String，Number</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">model</div>
                <div class="td"> value组成的数组，<f>v-model</f> 绑定 </div>
                <div class="td">Array</div>
                <div class="td">[]</div>
            </div>
            <div class="tr">
                <div class="td">disabled</div>
                <div class="td"> 禁用 </div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-check</div>
                <div class="td">选择时触发</div>
                <div class="td">model，返回model</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-check-box v-model="checked" value="a">ᠪᠤᠼᠬᠵᠰᠳᠼᠰᠵᠬᠳᠠ</rum-check-box>`,
            checked: ['a','b'],
            codeh1: `<template>
    <div class="example">
        <rum-check-box v-model="checked" value="a">ᠪᠤᠼᠬᠵᠰᠳᠼᠰᠵᠬᠳᠠ</rum-check-box>
        <rum-check-box v-model="checked" value="b">ᠶᠣᠷᠦᠢ</rum-check-box>
        <rum-check-box v-model="checked" value="c" disabled>ᠶᠣᠷᠦᠢ</rum-check-box>
        {{JSON.stringify(checked)}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: ['a','b']
        }
    }
}`
        }
    }
}
</script>

<style>
    .example {
        writing-mode: vertical-lr;
    }
</style>
