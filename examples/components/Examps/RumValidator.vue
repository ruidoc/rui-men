<template>
    <div class="button">
        <Par type="h1">验证器 rum-validator</Par>
        <Par>验证器，支持 <f>rum-input</f> 和 <f>rum-select</f> </Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="注意">
            <div style="height:180px">
                <rum-validator @on-success="$RumMessage('ok','success')" ref="form">
                    <rum-input validate="required" v-model="value1"></rum-input>
                    <rum-input validate="mobile" v-model="value2"></rum-input>
                    <rum-select v-model="opps" :options="[
                        {value: 1, label: 'ᠽᠳᠪᠼ᠋ᡂᠼᠡ'},
                        {value: 2, label: 'ᠠᠰᠼᠤᠼ'}
                    ]" placeholder="ᠬᠰᠹᠰᠳᠹᠹ" validate="required">
                    </rum-select>
                    <rum-button type="primary" slot="submit" @on-click="tock('form')">ᠳᠵᠺᠤᠪᠵᠳᠹᠤ</rum-button>
                </rum-validator>
            </div>
            <div slot="desc">
                <div>暂时只支持 <f>rum-input</f> 和 <f>rum-select</f> 两个组件验证</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">bt_text</div>
                <div class="td">按钮文字</div>
                <div class="td">String</div>
                <div class="td">提交</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Slots</Par>
        <Table :titles="['名称|5','说明']">
            <div class="tr">
                <div class="td">submit</div>
                <div class="td">提交按钮</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-success</div>
                <div class="td">点击按钮验证成功触发</div>
                <div class="td">无</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-validator @on-success="fun"></rum-validator>`,
            opps: '',
            value1: 'value1',
            value2: 'value1',
            codeh1: `<tempplate>
    <rum-validator @on-success="$RumMessage('ok','success')">
        <rum-input validate="required" v-model="value1"></rum-input>
        <rum-input validate="mobile" v-model="value2"></rum-input>
        <rum-select v-model="opps" :options="[
            {value: 1, label: 'ᠽᠳᠪᠼ᠋ᡂᠼᠡ'},
            {value: 2, label: 'ᠠᠰᠼᠤᠼ'}
        ]" placeholder="sᠬᠰᠹᠰᠳᠹᠹ" validate="required">
        </rum-select>
        <rum-button type="primary" slot="submit" @on-click="tock('form')">ᠳᠵᠺᠤᠪᠵᠳᠹᠤ</rum-button>
    </rum-validator>
</template>

<script>
export default {
    data() {
        return {
            opps: '',
            value1: 'value1',
            value2: 'value1'
        }
    },
    methods: {
        tock(dom) {
            let i = this.$refs[dom].valide(true)
            this.$RumMessage(i)
        }
    }
}
<\/script>`
        }
    },
    methods: {
        tock(dom) {
            let i = this.$refs[dom].valide(true)
            this.$RumMessage(i)
        }
    }
}
</script>

<style>
    
</style>
