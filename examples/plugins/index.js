
const Rui = {};

Rui.install = function (Vue, options) {
    Vue.mixin({
        components: {
            Par: re => require(['&/Layout/LayPar.vue'], re),
            F: re => require(['&/Layout/LayFont.vue'], re),
            Card: re => require(['&/Layout/LayCard.vue'], re),
            Table: re => require(['&/Layout/LayTable.vue'], re),
        }
    })
}
export default Rui