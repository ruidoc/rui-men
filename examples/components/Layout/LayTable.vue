<template>
    <div class="table">
        <div class="head">
            <div v-for="(item,ind) in mtitles" :key="ind" 
            :style="{'width':item.width?item.width:'auto','flex':item.width?false:1}" 
            class="td">{{item.title}}</div>
        </div>
        <div ref="body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    props: ['titles'],
    computed: {
        mtitles() {
            return this.titles.map(item=> {
                let srr = item.split('|')
                return {
                    title: srr[0],
                    width: srr[1]?parseInt(srr[1])*10+'%':false
                }
            })
        }
    },
    mounted() {
        let dom = this.$refs.body.getElementsByClassName('td')
        this.mtitles.forEach((item,ind) => {
            let styobj = item.width ? ['width',item.width] : ['flex',1]
            dom[ind].style[styobj[0]] = styobj[1]
            let b = dom.length/this.mtitles.length
            if(b>1) {
                for(let i=1; i<b; i++) {
                    dom[(this.mtitles.length)*i+ind].style[styobj[0]] = styobj[1]
                }
            }
        })
    }
}
</script>

<style lang="less" scoped>
    .table {
        border: 1px solid #ebedf0;
        .head {
            display: flex;
            font-size: 14px;
            background: #f9f9f9;
        }
        .td {
            box-sizing: border-box;
            padding: 16px 20px;
            border-right: 1px solid #ebedf0;
            &:last-child {
                border: none;
            }
        }
        .tr {
            display: flex;
            font-size: 14px;
            border-top: 1px solid #ebedf0;
        }
    }
</style>
