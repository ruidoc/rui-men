<template>
    <div class="rum-ui-poptip">
        <div class="refer" tabindex="0" @focus="show" @blur="isShow=false" ref="refer">
            <slot></slot>
        </div>
        <div class="others" :style="position" v-show="isShow" ref="popper">
            <div class="item" @click.stop="isShow=false">ᠰᠵᠹ ᠤᠹ ᠰᠳᠤ</div>
            <div class="item" @click.stop="isShow=false">ᠰᠵᠹ ᠤᠹ ᠰᠳᠤ</div>
            <div class="item" @click.stop="isShow=false">ᠰᠵᠹ ᠤᠹ ᠰᠳᠤ</div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            position: {
                top: 0,
                left: 0
            },
            isShow: false
        };
    },
    props: {
        placement: {
            type: String,
            default: 'buttom'
        },
        left: {
            type: Number,
            default: 0
        },
        top: {
            type: Number,
            default: 0
        }
    },
    methods: {
        show() {
            this.changePosition(this.$refs.refer,this.$refs.popper)
        },
        aaa() {
            console.log(1)
        },
        changePosition(refer,popper) {
            let pm_left = refer.offsetLeft+this.left
            let pm_right = refer.offsetLeft+refer.offsetWidth+this.left
            let pm_top = refer.offsetTop+this.top
            let pm_bottom = refer.offsetTop+refer.offsetHeight+this.top
            this.isShow = !this.isShow;

            setTimeout(()=> {
                let pop_width = popper.offsetWidth/2-refer.offsetWidth/2
                let pop_height = popper.offsetHeight/2-refer.offsetHeight/2
                console.log(pop_width)
                switch(this.placement) {
                    case 'buttom':
                        this.position.top = pm_bottom+'px'
                        this.position.left = pm_left-pop_width+'px'
                        break;
                    case 'buttom-left':
                        this.position.top = pm_bottom+'px'
                        this.position.left = pm_left+'px'
                        break;
                    case 'buttom-right':
                        this.position.top = pm_bottom+'px'
                        this.position.left = pm_right-popper.offsetWidth+'px'
                        break;
                    case 'right':
                        this.position.top = pm_top-pop_height+'px'
                        this.position.left = pm_right+'px'
                        break;
                    case 'right-top':
                        this.position.top = pm_top+'px'
                        this.position.left = pm_right+'px'
                        break;
                    case 'right-bottom':
                        this.position.top = pm_bottom-popper.offsetHeight+'px'
                        this.position.left = pm_right+'px'
                        break;
                }
            },.01)
        }
    }
};
</script>

<style lang="less">
@import '../../styles/rui-base.less';
.rum-ui-poptip {
    position: relative;
    cursor: pointer;
    font-family: 'OrhonChaganTig';
    display: inline-block;
    .refer {
        outline: none;
    }
    .others {
        position: absolute;
        height: 150px;
        background: #fff;
        box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.08);
        z-index: 20;
        border-radius: 1px;
        width: 200px;
        text-align: center;
        font-size: @font-size;
        padding: 0 5px;
        .item {
            height: 100%;
            padding: 0 3px;
            &:hover {
                background: #f5f5f5;
            }
        }
    }
}
</style>

