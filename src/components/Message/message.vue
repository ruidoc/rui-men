<template>
    <transition name="enters">
    <div class="rum-ui-message" v-if="isShow">
        <rum-icon v-if="type=='info'" type="information-circled" color="#2d8cf0" size="18"></rum-icon>
        <rum-icon v-if="type=='warning'" type="alert-circled" color="#ff9900" size="18"></rum-icon>
        <rum-icon v-if="type=='error'" type="close-circled" color="#ed3f14" size="18"></rum-icon>
        <rum-icon v-if="type=='success'" type="checkmark-circled" color="#19be6b" size="18"></rum-icon>
        <span class="rum-message-text">{{message}}</span>
    </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            time: 3000,
            isShow: false,
            type: 'info',
        }
    },
    watch: {
        isShow() {
            if(this.isShow) {
                setTimeout(()=> {
                    this.isShow = false
                },this.time)
            } else {
                this.isShow = false
            }
        }
    },
    mounted() {
        this.isShow = true
    },
}
</script>

<style lang="less">
.rum-ui-message {
    font-family: 'OrhonChaganTig';
    writing-mode: vertical-lr;
    padding: 10px 7px;
    background: #fff;
    box-shadow: 0 2px 8px #ddd;
    margin-left: 10px;
    color: #888;
    border-radius: 2px;
    position: relative;
    .rum-message-text {
        -webkit-text-orientation: sideways-right;
        font-size: 18px;
        padding-top: 3px;
    }
}
.enters-enter-active, .enters-leave-active {
    transition: all .3s;
}
.enters-enter, .enters-leave-to {
    opacity: 0;
}
</style>