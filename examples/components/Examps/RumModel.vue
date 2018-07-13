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
            <div style="font-size:15px">
                <rum-button type="primary" @on-click="model2">render提示</rum-button> &nbsp;
                <rum-button type="primary" @on-click="model">render内容</rum-button> &nbsp;
                <rum-button type="primary" @on-click="bool=true">普通提示</rum-button>
                <rum-model v-model="bool" title="ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ" confirm>
                    确定执行这项操作？
                </rum-model>
            </div>
            <div slot="desc">
                <div>第一个按钮是模板调用，第二个按钮是方法调用</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td">控制对话框显示，tmplate 形式下用 <f>v-model</f> 绑定</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">title</div>
                <div class="td">对话框标题，不加时标题栏不显示</div>
                <div class="td">String</div>
                <div class="td">无</div>
            </div>
            <div class="tr">
                <div class="td">hideBottom</div>
                <div class="td">隐藏底部按钮区域</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">transfer</div>
                <div class="td">是否放置到body下，解决z-inde问题</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">confirm</div>
                <div class="td">以 <f>confirm</f> 形式显示，此时 hideBottom 失效</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">ok</div>
                <div class="td">点击确认回调</div>
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
            text: '',
            codeh1: `<template>
    <div style="font-size:15px">
        <rum-button type="primary" @on-click="model2">render提示</rum-button> &nbsp;
        <rum-button type="primary" @on-click="model">render内容</rum-button> &nbsp;
        <rum-button type="primary" @on-click="bool=true">普通提示</rum-button>
        <rum-model v-model="bool" title="ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ" confirm>
            确定执行这项操作？
        </rum-model>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bool: false,
            text: '',
        }
    },
    methods: {
        model() {
            let self = this
            this.$RumModel({
                title: 'ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ',
                render:()=> (
                    <rum-input value={self.text} onInput={(val)=>{
                        self.text = val
                    }}>输入框内容是：{self.text}</rum-input>
                ),
                onOk() {
                    self.$RumMessage('ok事件触发')
                }
            })
        },
        model2() {
            let self = this
            this.$RumModel({
                title: 'ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ',
                confirm: true,
                msg: '确定执行这项操作？',
                onOk() {
                    self.$RumMessage('ok事件触发')
                }
            })
        }
    }
}
<\/script>`
        }
    },
    methods: {
        model() {
            let self = this
            this.$RumModel({
                title: 'ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ',
                render:()=> (
                    <rum-input value={self.text} onInput={(val)=>{
                        self.text = val
                    }}>输入框内容是：{self.text}</rum-input>
                ),
                onOk() {
                    self.$RumMessage('ok事件触发')
                }
            })
        },
        model2() {
            let self = this
            this.$RumModel({
                title: 'ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ',
                confirm: true,
                msg: '确定执行这项操作？',
                onOk() {
                    self.$RumMessage('ok事件触发')
                }
            })
        }
    }
}
</script>

<style>
    
</style>
