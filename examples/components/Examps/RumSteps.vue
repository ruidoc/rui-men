<template>
    <div class="button">
        <Par type="h1">步骤条 rum-steps</Par>
        <Par>拆分某项流程的步骤，引导用户按流程完成任务。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div class="demo">
                <rum-steps :data="data" :current="current"></rum-steps>
                <rum-button type="primary" @on-click="next">ᠰᠪᠬᠤᠪᠰᠬᠳ</rum-button>
            </div>
            <div slot="desc">
                <div><f>width</f> 用来设定该组件的宽度，类型是数值，默认是 <f>100</f> </div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">current</div>
                <div class="td">当前步骤，从 <f>1</f> 开始</div>
                <div class="td">Number</div>
                <div class="td">1</div>
            </div>
            <div class="tr">
                <div class="td">data</div>
                <div class="td">对象数组，对象包含一个 <f>desc</f> 的key值，用于描述当前步骤</div>
                <div class="td">Array</div>
                <div class="td">无</div>
            </div>
            <div class="tr">
                <div class="td">width</div>
                <div class="td">组件宽度，默认 <f>100</f>，单位 px</div>
                <div class="td">Number</div>
                <div class="td">100</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '<rum-steps :data="data" :current="current"></rum-steps>',
            data: [
                {desc:'ᠳᠰᠪᠬᠤᠪᠰ ᠰᠳᠤᠬᠳᠰ ᠳᠰᠹᠬᠠᠳᠬᠤᠰᠳᠳᠬ'},
                {desc:'ᠳᠰᠪᠬᠤᠪᠰ '},
                {desc:'ᠳᠰᠪᠬᠤᠪᠰᠰᠠᠤ ᠼᠬᠰᠳᠼᠰᠬᠳ '},
                {desc:'ᠳᠰᠪᠬᠤᠰᠳᠪᠹᠬ '},
            ],
            current: 1,
            codeh1: `<template>
    <div class="demo">
        <rum-steps :data="data" :current="current"></rum-steps>
        <rum-button type="primary" @on-click="next">ᠰᠪᠬᠤᠪᠰᠬᠳ</rum-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            current: 1,
            data: [
                {desc:'ᠳᠰᠪᠬᠤᠪᠰ ᠰᠳᠤᠬᠳᠰ ᠳᠰᠹᠬᠠᠳᠬᠤᠰᠳᠳᠬ'},
                {desc:'ᠳᠰᠪᠬᠤᠪᠰ '},
                {desc:'ᠳᠰᠪᠬᠤᠪᠰᠰᠠᠤ ᠼᠬᠰᠳᠼᠰᠬᠳ '},
                {desc:'ᠳᠰᠪᠬᠤᠰᠳᠪᠹᠬ '}
            ],
        }
    },
    methods: {
        next() {
            if(this.current<this.data.length+1) {
                this.current++
            } else {
                this.current = 1
            }
        }
    }
}
<script>
`
        }
    },
    methods: {
        next() {
            if(this.current<this.data.length+1) {
                this.current++
            } else {
                this.current = 1
            }
        }
    }
}
</script>

<style>
    .demo {
        writing-mode: vertical-lr;
    }
</style>
