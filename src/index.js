
import OrhModel from '&/components/Common/OrhModel'

const Rui = new Object();
let $vm;

Rui.install = (Vue, options)=> {
    Vue.mixin({
        components: {
            OrhPoptip: re=> require(['&/components/Common/OrhPoptip'],re),
            OrhButton: re=> require(['&/components/Common/OrhButton'],re),
            OrhSelect: re=> require(['&/components/Common/OrhSelect'],re),
            OrhRadio: re=> require(['&/components/Common/OrhRadio'],re),
            OrhTable: re=> require(['&/components/Common/OrhTable'],re),
            OrhModel: re=> require(['&/components/Common/OrhModel'],re),
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
            $vm = new Model({
                el: document.createElement('div')
            })
            document.body.appendChild($vm.$el)
            $vm.show = true
        } else {
            $vm.show = true
        }
    }
}

export default Rui;