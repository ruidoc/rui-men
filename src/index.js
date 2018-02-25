
import OrhModel from './components/Common/OrhModel'
import OrhPoptip from './components/Common/OrhPoptip'
import OrhButton from './components/Common/OrhButton'
import OrhSelect from './components/Common/OrhSelect'
import OrhRadio from './components/Common/OrhRadio'

const Rui = new Object();
let $vm;

Rui.install = (Vue, options)=> {
    Vue.mixin({
        components: {
            OrhPoptip,
            OrhButton,
            OrhSelect,
            OrhRadio,
            OrhTable: re=> require(['./components/Common/OrhTable'],re),
            OrhModel
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