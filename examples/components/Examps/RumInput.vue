<template>
    <div class="button">
        <Par type="h1">输入框 rum-input</Par>
        <Par>通过鼠标或键盘输入内容，是最基础的表单域的包装。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="baseuse"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="说明">
            <div>
                <rum-input v-model="value" style="height:150px" autofocus>
                    <span style="font-size:14px">无验证，自动聚焦 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value1" style="height:150px" validate="required">
                    <span style="font-size:14px">不为空验证 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value1" style="height:150px" search>
                    <span style="font-size:14px">搜索 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value2" style="height:150px" validate="mobile">
                    <span style="font-size:14px">手机号验证 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value3" style="height:150px" validate="idcard">
                    <span style="font-size:14px">身份证号验证 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value4" style="height:150px" validate="email">
                    <span style="font-size:14px">邮箱验证 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value" style="height:150px" disabled>
                    <span style="font-size:14px">禁用 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value" style="height:150px" readonly>
                    <span style="font-size:14px">只读 :</span>
                </rum-input> &nbsp;&nbsp;&nbsp;
                <rum-input v-model="value" style="height:150px" type="textarea">
                    <span style="font-size:14px">文本域 :</span>
                </rum-input>
            </div>
            <div slot="desc">
                <div><f>v-model</f> 必填，与数据双向绑定</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td">输入框内容，使用 <f>v-model</f> 绑定</div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">type</div>
                <div class="td">类型，有 <f>text</f> 和 <f>textarea</f> 两项</div>
                <div class="td">String</div>
                <div class="td">text</div>
            </div>
            <div class="tr">
                <div class="td">autofocus</div>
                <div class="td">自动聚焦</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">search</div>
                <div class="td">搜索</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">placeholder</div>
                <div class="td">为空时显示内容</div>
                <div class="td">String</div>
                <div class="td">ᠲᠡᠰᠲ</div>
            </div>
            <div class="tr">
                <div class="td">disabled</div>
                <div class="td">是否禁用</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">readonly</div>
                <div class="td">是否只读</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">validate</div>
                <div class="td">数据验证，目前有 <f>required</f>，<f>mobile</f>，<f>idcard</f>，<f>email</f>，分别表示不为空验证，手机号验证，身份证号验证和邮箱验证</div>
                <div class="td">String</div>
                <div class="td">无</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-search</div>
                <div class="td">点击搜索按钮触发</div>
                <div class="td">str，搜索字符串</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ",
            value1: "",
            value2: "",
            value3: "",
            value4: "",
            baseuse: `<rum-input v-model="val"/>`,
            codeh1: `<template>
    <rum-input v-model="value" style="height:150px">
        <span style="font-size:14px" autofocus>无验证，自动聚焦 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value1" style="height:150px" validate="required">
        <span style="font-size:14px">不为空验证 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value2" style="height:150px" validate="mobile">
        <span style="font-size:14px">手机号验证 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value3" style="height:150px" validate="idcard">
        <span style="font-size:14px">身份证号验证 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value4" style="height:150px" validate="email">
        <span style="font-size:14px">邮箱验证 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value" style="height:150px" disabled>
        <span style="font-size:14px">禁用 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value" style="height:150px" readonly>
        <span style="font-size:14px">只读 :</span>
    </rum-input> &nbsp;&nbsp;&nbsp;
    <rum-input v-model="value" style="height:150px" type="textarea">
        <span style="font-size:14px">文本域 :</span>
    </rum-input>
</template>

<script>
    export default {
        data() {
            return {
                value: "ᠪᠵᠵᠼᠰᠳᠼᠠᠳᠤᠭ",
                value1: "",
                value2: "",
                value3: "",
                value4: "",
            }
        }
    }
<script>`
        }
    }
}
</script>

<style>
    
</style>
