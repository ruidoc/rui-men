<template>
    <div class="button">
        <Par type="h1">选择框 rum-select</Par>
        <Par>选择框分为 <f>单选</f> 和 <f>多选</f>，向右弹出。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="baseuse"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div>
                <rum-select v-model="opp" :options="options" placeholder="ᠬᠰᠹᠰᠳᠹᠹ" style="margin-right:40px" @on-change="change">
                    <span style="font-size:14px">单选示例 :</span>
                </rum-select>
                <rum-select v-model="opps" :options="options" placeholder="sᠬᠰᠹᠰᠳᠹᠹ" multiple placement="left" @on-change="change" style="margin-right:40px">
                    <span style="font-size:14px">多选示例 :</span>
                </rum-select>
                <rum-select v-model="opps" :options="options" placeholder="sᠬᠰᠹᠰᠳᠹᠹ" multiple validate="required">
                    <span style="font-size:14px">必选验证 :</span>
                </rum-select>
                <rum-select v-model="opp" :options="options" placeholder="ᠬᠰᠹᠰᠳᠹᠹ" style="margin-right:40px" @on-change="change" disabled>
                    <span style="font-size:14px">禁用示例 :</span>
                </rum-select>
            </div>
            <div slot="desc">
                <p><f>multiple</f> 指定输入框类型为多选。</p>
                <p><f>value</f> 单选时值类型为字符串或数值，多选时为数组</p>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td">选择框内容，使用 <f>v-model</f> 绑定。单选时类型为 String 或 Number，多选时为 Array</div>
                <div class="td">String，Number，Array</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">options</div>
                <div class="td">下拉框选项，对象包含 <f>value</f> 和 <f>label</f> 两个 key</div>
                <div class="td">Array</div>
                <div class="td">[]</div>
            </div>
            <div class="tr">
                <div class="td">placement</div>
                <div class="td">下拉框弹出方向，<f>left</f>，<f>right</f> 两个值</div>
                <div class="td">String</div>
                <div class="td">right</div>
            </div>
            <div class="tr">
                <div class="td">placeholder</div>
                <div class="td">未选择时显示的值</div>
                <div class="td">String</div>
                <div class="td">''</div>
            </div>
            <div class="tr">
                <div class="td">multiple</div>
                <div class="td">是否多选</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">validate</div>
                <div class="td">数据验证，目前只有 <f>required</f> 表示不为空验证</div>
                <div class="td">String</div>
                <div class="td">无</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-change</div>
                <div class="td">选择框改变触发</div>
                <div class="td">value</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseuse: `<rum-select v-model="value" :options="options"></rum-select>`,
            codeh1: `<template>
    <div>
        <rum-select v-model="value" :options="options" placeholder="ᠬᠰᠹᠰᠳᠹᠹ" style="margin-right:40px">
            <span style="font-size:14px">单选示例 :</span>
        </rum-select>
        <rum-select v-model="values" :options="options" placeholder="sᠬᠰᠹᠰᠳᠹᠹ" multiple @on-change="change">
            <span style="font-size:14px">多选示例 :</span>
        </rum-select>
    </div>
</template>

<script>
export default {
    data() {
        value: '',
        values: [],
        options: [
            {
                label: 'ᠳᠪᠬᠹᠠᠪᠰ',
                value: 1
            },
            {
                label: 'ᠳᠰᠹᠬᠵᠳ',
                value: 2,
                disabled: true
            },
            {
                label: 'ᠳᠰᠹᠬᠵᠳ',
                value: 3
            }
        ]
    },
    methods: {
        change(val) {
            this.$RumMessage(val)
        }
    }
}
<script>`,
            opp: '',
            opps: [],
            options: [
                {
                    label: 'ᠳᠪᠬᠹᠠᠪᠰ',
                    value: 1
                },
                {
                    label: 'ᠳᠰᠹᠬᠵᠳ',
                    value: 2,
                    disabled: true
                },
                {
                    label: 'ᠳᠰᠹᠬᠵᠳ',
                    value: 3
                }
            ]
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
