<template>
    <div class="button">
        <Par type="h1">树形控件 rum-trees</Par>
        <Par>树形控件，可以完整展现其中的层级关系，并具有展开收起选择等交互功能。</Par>

        <br>
        <Par type="h2">基本使用</Par>
        <pre v-highlightjs="value"><code></code></pre>

        <br>
        <Par type="h2">代码演示</Par>
        <Card title="提示">
            <div>
                <rum-trees :data="data" @on-item-click="click" @async-load="async"></rum-trees>
            </div>
            <div slot="desc">
                <div><f>children</f> 不存在时不显示小三角图标</div>
            </div>
            <pre slot="code" v-highlightjs="codeh1"><code></code></pre>
        </Card>

        <br>
        <Par type="h2">参数说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">data</div>
                <div class="td"> 所有树形结构数据 </div>
                <div class="td">Array</div>
                <div class="td"><f>必填</f></div>
            </div>
        </Table>

        <br>
        <Par type="h2">data 说明</Par>
        <Table :titles="['名称|2','说明','类型|2','默认值|2']">
            <div class="tr">
                <div class="td">value</div>
                <div class="td"> 当前树节点的 value 值 </div>
                <div class="td">String，Number</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">label</div>
                <div class="td"> 当前树节点的标题 </div>
                <div class="td">String</div>
                <div class="td"><f>必填</f></div>
            </div>
            <div class="tr">
                <div class="td">children</div>
                <div class="td"> 子级树数据，和 data 本身结构相同，不填时当前节点不显示小三角图标 </div>
                <div class="td">Array</div>
                <div class="td">无</div>
            </div>
        </Table>

        <br>
        <Par type="h2">Events</Par>
        <Table :titles="['事件名|3','说明','参数|3']">
            <div class="tr">
                <div class="td">on-item-click</div>
                <div class="td">点击节点触发</div>
                <div class="td">item，当前行数据</div>
            </div>
            <div class="tr">
                <div class="td">async-load</div>
                <div class="td">异步加载子节点，当对象中有 <f>children</f> 并且值为空数组时触发</div>
                <div class="td">item，calback；当前行数据和回调函数，回调函数的参数是要异步加载的数据</div>
            </div>
        </Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: `<rum-trees :data="data"></rum-trees>`,
            data: [
                {
                    value: 1,
                    title: 'ᠳᠬᠬᠵᠰᠳᠹᠰᠤᠵᠰᠳᠤ',
                    children: [
                        {
                            value: 2,
                            title: 'ᠳᠬᠬᠵᠰᠳ',
                            children: [
                                {
                                    value: 3,
                                    title: 'ᠪᠬᠹᠵᠳᠰᠳᠵᠬᠤ',
                                    children: [
                                        {
                                            value: 4,
                                            title: 'ᠳᠬᠬᠵᠰᠳ'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            value: 2,
                            title: 'ᠳᠬᠬᠵᠰᠳ',
                            children: [
                                {
                                    value: 3,
                                    title: 'ᠪᠬᠹᠵᠳᠰᠳᠵᠬᠤ',
                                    children: [
                                        {
                                            value: 4,
                                            title: 'ᠳᠬᠬᠵᠰᠳ'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 5,
                    title: 'ᠳᠬᠬᠵᠰᠳᠹᠰᠤᠵᠰᠳᠤ',
                    children: [
                        {
                            value: 6,
                            title: 'ᠳᠬᠬᠵᠰ',
                            children: []
                        }
                    ]
                },
            ],
            codeh1: `<template>
    <rum-trees :data="data" @on-item-click="click" @async-load="async"></rum-trees>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    value: 1,
                    title: 'ᠳᠬᠬᠵᠰᠳᠹᠰᠤᠵᠰᠳᠤ',
                    children: [
                        {
                            value: 2,
                            title: 'ᠳᠬᠬᠵᠰᠳ',
                            children: [
                                {
                                    value: 3,
                                    title: 'ᠪᠬᠹᠵᠳᠰᠳᠵᠬᠤ',
                                    children: [
                                        {
                                            value: 4,
                                            title: 'ᠳᠬᠬᠵᠰᠳ'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 5,
                    title: 'ᠳᠬᠬᠵᠰᠳᠹᠰᠤᠵᠰᠳᠤ',
                    children: [
                        {
                            value: 6,
                            title: 'ᠳᠬᠬᠵᠰ',
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        click(item) {
            this.$RumMessage('value：'+item.value)
        },
        async(item,calback) {
            setTimeout(()=> {
                calback([{
                    value: 7,
                    title: 'ᠪᠼᠰᠠᠼᠪᠼᠬ',
                    children: []
                }])
            },1000)
        }
    }
}
<script>`
        }
    },
    methods: {
        click(item) {
            this.$RumMessage('value：'+item.value)
        },
        async(item,calback) {
            setTimeout(()=> {
                calback([{
                    value: 7,
                    title: 'ᠪᠼᠰᠠᠼᠪᠼᠬ',
                    children: []
                }])
            },1000)
        }
    }
}
</script>

<style>
    
</style>
