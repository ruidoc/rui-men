
import RumModel from './components/Common/OrhModel'
import RumPoptip from './components/Common/OrhPoptip'
import RumButton from './components/Common/OrhButton'
import RumSelect from './components/Common/OrhSelect'
import RumRadio from './components/Common/OrhRadio'
import RumTable from './components/Common/OrhTable'

const Rui = new Object();
let $vm;

Rui.install = (Vue, options)=> {
    Vue.mixin({
        components: {
            RumPoptip,
            RumButton,
            RumSelect,
            RumRadio,
            RumTable,
            RumModel
        }
    })
    Vue.prototype.$RumModel = (config)=> {
        let Model = Vue.extend({
            data() {
                return {show:false}
            },
            render() {
                return (
                    <RuModel value={this.show} title={config.title} 
                        onInput={(val)=> {
                            this.show = val
                        }}>
                        {config.render()}
                    </RuModel>
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