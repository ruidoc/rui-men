<template>
    <div class="button">
        <Par type="h1">表格 rum-table</Par>
        <Par>竖排表格组件，自定义 slot 替代 render 函数。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="baseuse"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="参数说明">
            <div ref="div">
                <rum-table :columns="columns" :data="data" add del @on-add="add" @on-del="del" reload @on-reload="reload" @on-row-click="rowclick">
                    <div v-for="(item,ind) in data" :key="ind" :slot="`hd${ind}`">
                        <rum-button size="small" type="primary">ᠳᠪᠬᠹ</rum-button>
                        <rum-button size="small" type="success">ᠳᠪᠬᠹ</rum-button>
                        <rum-button size="small" type="error">ᠳᠪᠬᠹ</rum-button>
                    </div>
                </rum-table>
            </div>
            <div slot="desc">
                <div><f>columns</f> 表示表头数据和改行的配置信息， <f>data</f> 表示表格内容列表，实例请看代码</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">Props</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">add</div>
                <div class="td">是否显示添加按钮</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">del</div>
                <div class="td">是否显示删除按钮</div>
                <div class="td">Boolean</div>
                <div class="td">false</div>
            </div>
            <div class="tr">
                <div class="td">columns</div>
                <div class="td">表头数据，参数下面具体说明</div>
                <div class="td">Array</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">data</div>
                <div class="td">表格列表数据，选项对象 key 值为 <f>columns</f> 中定义的 key 值 </div>
                <div class="td">Array</div>
                <div class="td"><f>必填</f></div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-add</div>
                <div class="td">点击添加按钮触发</div>
                <div class="td">无</div>
            </div>
            <div class="tr">
                <div class="td">on-del</div>
                <div class="td">点击删除按钮触发</div>
                <div class="td">无</div>
            </div>
            <div class="tr">
                <div class="td">on-row-click</div>
                <div class="td">点击单行触发</div>
                <div class="td">data，当前行数据</div>
            </div>
        </Table>

        <br>
        <Par type="h2">columns 参数说明</Par>
        <Table :titles="['名称|2','说明|4','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">title</div>
                <div class="td">表头标题</div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">kay</div>
                <div class="td">表格列表中对象的 key 值 </div>
                <div class="td">String</div>
                <div class="td">不使用 <f>slot</f> 时必填</div>
            </div>
            <div class="tr">
                <div class="td">slot</div>
                <div class="td">自定义表格列表选项的内容，即内容不通过 <f>data</f> 数据获取，而是使用插槽，是较 <f>render</f> 函数更精简的做法 </div>
                <div class="td">String</div>
                <div class="td">无</div>
            </div>
            <div class="tr">
                <div class="td">height</div>
                <div class="td">列高度，单位 <f>px</f> </div>
                <div class="td">Number</div>
                <div class="td">无</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "ᠰᠹᠰᠳᠭᠳᠹᠭ",
            baseuse: `<rum-table :columns="columns" :data="data"></rum-table>`,
            codeh1: `<template>
    <rum-table :columns="columns" :data="data" @on-add="bool=true" @on-del="del">
        <div v-for="(item,ind) in data" :key="ind" :slot="'hd'+ind">
            <rum-button size="small" type="primary">ᠳᠪᠬᠹ</rum-button>
            <rum-button size="small" type="success">ᠳᠪᠬᠹ</rum-button>
            <rum-button size="small" type="error">ᠳᠪᠬᠹ</rum-button>
        </div>
    </rum-table>
</template>

<script>
export default {
    data() {
        columns: [
            {
                title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                key: 'name'
            },
            {
                title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                key: 'sex'
            },
            {
                title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                key: 'age'
            },
            {
                title: 'ᠤᠭ ᠨᠡᠷ',
                slot: 'hd',
                height: 140
            }
        ],
        data: [
            {
                name: 'ᠳᠰᠪᠬᠵ ᠰᠳᠪᠬᠵᠰ ᠰᠳᠪᠹ ᠳᠰᠬᠹ ᠪᠳ',
                sex: 'ᠳᠤᠹᠳᠬᠪ',
                age: '33'
            },
            {
                name: 'ᠪᠳᠬᠠ ᠰᠳᠵᠬᠳ ᠰᠳᠹᠵᠠᠬ',
                sex: 'ᠰᠳᠹᠪᠬ',
                age: '26'
            },
            {
                name: 'ᠳᠰᠪᠵᠼᠬᠪᠰᠳ ᠳᠰᠹᠬᠠᠰ ᠰᠳᠵᠠ',
                sex: 'ᠹᠪᠬᠺᠳᠠ',
                age: '28'
            },
            {
                name: 'ᠳᠪᠬᠹᠠᠪᠰ ᠳᠰᠹᠬᠵᠳ ᠰᠳᠹᠠ',
                sex: 'ᠠᠹᠳᠳᠨ',
                age: '23'
            },
            {
                name: 'ᠳᠰᠠᠺ ᠰᠳᠹᠪᠠᠬ ᠹᠰᠠᠳᠹ ',
                sex: 'ᠳᠰᠹᠪᠺᠠ',
                age: '23'
            },
        ],
    }
}
<script>`,
            columns: [
                {
                    title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                    key: 'name'
                },
                {
                    title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                    key: 'sex'
                },
                {
                    title: 'ᠤᠪᠤᠭ ᠨᠡᠷᠡ',
                    key: 'age'
                },
                {
                    title: 'ᠤᠭ ᠨᠡᠷ',
                    slot: 'hd',
                    height: 140
                }
            ],
            data: [
                {
                    name: 'ᠳᠰᠪᠬᠵ ᠰᠳᠪᠬᠵᠰ ᠰᠳᠪᠹ ᠳᠰᠬᠹ ᠪᠳ',
                    sex: 'ᠳᠤᠹᠳᠬᠪ',
                    age: '33'
                },
                {
                    name: 'ᠪᠳᠬᠠ ᠰᠳᠵᠬᠳ ᠰᠳᠹᠵᠠᠬ',
                    sex: 'ᠰᠳᠹᠪᠬ',
                    age: '26'
                },
                {
                    name: 'ᠳᠰᠪᠵᠼᠬᠪᠰᠳ ᠳᠰᠹᠬᠠᠰ ᠰᠳᠵᠠ',
                    sex: 'ᠹᠪᠬᠺᠳᠠ',
                    age: '28'
                },
                {
                    name: 'ᠳᠪᠬᠹᠠᠪᠰ ᠳᠰᠹᠬᠵᠳ ᠰᠳᠹᠠ',
                    sex: 'ᠠᠹᠳᠳᠨ',
                    age: '23'
                },
                {
                    name: 'ᠳᠰᠠᠺ ᠰᠳᠹᠪᠠᠬ ᠹᠰᠠᠳᠹ ',
                    sex: 'ᠳᠰᠹᠪᠺᠠ',
                    age: '23'
                },
            ],
        }
    },
    methods: {
        add() {
            alert('add')
        },
        del() {
            alert('del')
        },
        reload() {
            alert('reload')
        },
        rowclick(data) {
            console.log(data)
        }
    }
}
</script>

<style>
    
</style>
