<template>
    <div class="button">
        <Par type="h1">时间日期 rum-time</Par>
        <Par>时间日期组件，借助第三方插件 <f link to="https://github.com/hilongjw/vue-datepicker">vue-datepicker</f></Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="提示">
            <div>
                <span>时间:</span>
                <rum-time v-model="datetime" type="datetime" @on-change="change"></rum-time>
                &nbsp;&nbsp;&nbsp;&nbsp;<span>日期:</span>
                <rum-time v-model="date" type="date" @on-change="change"></rum-time>
            </div>
            <div slot="desc">
                <div><f>value</f> 格式为字符串，例子：<f>2018-12-14</f>，<f>2018-12-14 12:45:00</f></div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">参数说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td"> 时间值，字符串，用 <f>v-model</f> 绑定 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
        </Table>

        <br>
        <Par type="h2">props 说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">type</div>
                <div class="td"> 类型，<f>date</f> 和 <f>datetime</f>，分别表示日期和日期时间 </div>
                <div class="td">String</div>
                <div class="td"><f>date</f></div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-change</div>
                <div class="td">值改变触发</div>
                <div class="td">value，时间值</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-time v-model="date"></rum-time>`,
            date: '2018-03-14',
            datetime: '2018-03-14 13:23:00',
            codeh1: `<template>
    <div>
        <span>时间:</span>
        <rum-time v-model="datetime" type="datetime" @on-change="change"></rum-time>
        &nbsp;&nbsp;&nbsp;&nbsp;<span>日期:</span>
        <rum-time v-model="date" type="date" @on-change="change"></rum-time>
    </div>
</template>

<script>
export default {
    data() {
        return {
            date: '2018-03-14',
            datetime: '2018-03-14 13:23:00'
        }
    },
    methods: {
        change(val) {
            this.$RumMessage(val)
        }
    }
}
<script>`
        }
    },
    methods: {
        change(val) {
            this.$RumMessage(val)
        }
    }
}
</script>

<style>

</style>
