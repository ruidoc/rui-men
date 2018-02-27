
const Rui = {};

Rui.install = function (Vue, options) {
    Vue.mixin({
        components: {
            Par: re => require(['&/Layout/Par.vue'], re),
            F: re => require(['&/Layout/F.vue'], re),
            Card: re => require(['&/Layout/Card.vue'], re),
        }
    })
}
export default Rui