
import OrhModel from '&/Common/OrhModel'

const Rui = new Object();
let $vm;

Rui.install = (Vue, options)=> {
    Vue.mixin({
        components: {
            OrhPoptip: re=> require(['&/Common/OrhPoptip'],re),
            OrhButton: re=> require(['&/Common/OrhButton'],re),
            OrhSelect: re=> require(['&/Common/OrhSelect'],re),
            OrhRadio: re=> require(['&/Common/OrhRadio'],re),
            OrhTable: re=> require(['&/Common/OrhTable'],re),
            OrhModel: re=> require(['&/Common/OrhModel'],re),
        }
    })
    Vue.prototype.$orhModel = (config)=> {
        let Model = Vue.extend({
            data() {
                return {show:false}
            },
            render() {
                return (
                    <OrhModel value={this.show} title={config.title} 
                        onInput={(val)=> {
                            this.show = val
                        }}>
                        {config.render()}
                    </OrhModel>
                )
            }
        })
        if(!$vm) {
            $vm = new Model().$mount('#model')
            $vm.show = true
        } else {
            $vm.show = true
        }
    }
}

export default Rui;