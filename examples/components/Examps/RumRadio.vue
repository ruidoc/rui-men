<template>
    <div class="button">
        <Par type="h1">单选 rum-radio</Par>
        <Par>标签页组件，用于切换当前选中值</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="注意">
            <div class="example">
                <p><rum-radio v-model="val" value="1">ᠪᠹᠵᠤᠺᠰᠬᠠ</rum-radio></p>
                <p><rum-radio v-model="val" value="2">ᠰᠪᠼᠬᠠᠰᠼ</rum-radio></p>
                <p><rum-radio v-model="val" value="3">ᠱᠤᠵᠠᠭᠤᠼ</rum-radio></p>
                <p>{{val}}</p>
            </div>
            <div slot="desc">
                <div> 该组件中<f>v-model</f> 绑定的prop值是 model，而不是 value</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">props说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">model</div>
                <div class="td"> 选中的值，使用 <f>v-model</f> 绑定 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">value</div>
                <div class="td"> 当前值 </div>
                <div class="td">String</div>
                <div class="td">必填</div>
            </div>
            <div class="tr">
                <div class="td">disabled</div>
                <div class="td"> 是否禁用 </div>
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
            value: `<rum-radio v-model="val" value="1">ᠪᠹᠵᠤᠺᠰᠬᠠ</rum-radio>`,
            val: '',
            codeh1: `<div class="example">
    <p><rum-radio v-model="val" value="1">ᠪᠹᠵᠤᠺᠰᠬᠠ</rum-radio></p>
    <p><rum-radio v-model="val" value="2">ᠰᠪᠼᠬᠠᠰᠼ</rum-radio></p>
    <p><rum-radio v-model="val" value="3">ᠱᠤᠵᠠᠭᠤᠼ</rum-radio></p>
    <p>{{val}}</p>
</div>`
        }
    }
}
</script>

<style>
    .example {
        writing-mode: vertical-lr;
    }
    .example p {
        margin-left: 8px;
    }
</style>
