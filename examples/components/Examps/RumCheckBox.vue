<template>
    <div class="button">
        <Par type="h1">多选框 checkbox</Par>
        <Par>文件上传组件，需要 <f>token</f> </Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="注意">
            <div style="text-align: start">
                <rum-check-box v-model="checked">ᠪᠤᠼᠬᠵᠰᠳᠼᠰᠵᠬᠳᠠ</rum-check-box>
                <rum-check-box v-model="checked2">ᠶᠣᠷᠦᠢ</rum-check-box>
            </div>
            <div slot="desc">
                <div>在项目中使用，<f>upload_token</f> 的值为 <f> localStorage.token</f> 即可</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">rum-upload props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">uploadToken</div>
                <div class="td"> 上传接口token，项目中使用 <f> localStorage.token</f> 即可 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">uploadUrl</div>
                <div class="td"> 上传URL地址 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-ok</div>
                <div class="td">上传成功时触发</div>
                <div class="td">res，接口返回数据</div>
            </div>
            <div class="tr">
                <div class="td">on-err</div>
                <div class="td">上传失败时触发</div>
                <div class="td">err，错误信息</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-upload :uploadToken="upload_token" :uploadUrl="upload_url"></rum-upload>`,
            checked: false,
            checked2: false,
            codeh1: `<tempplate>
    <rum-upload 
        :uploadToken="upload_token" 
        :uploadUrl="upload_url" 
        @on-ok="success" 
        @on-error="error">
    </rum-upload>
</template>

<script>
export default {
    data() {
        return {
            upload_url: 'http://zh.pc.api.smart.ordosmz.cn/api/user/v1/upload',
            upload_token: localStorage.token
        }
    },
    methods: {
        success(res) {
            console.log(res)
        },
        error(err) {
            console.log(err)
        }
    }
}`
        }
    },
    methods: {
        success(res) {
            console.log(res)
        },
        error(err) {
            console.log(err)
        }
    }
}
</script>

<style>
    
</style>
