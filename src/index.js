
import RumModel from './components/Common/OrhModel'
import RumPoptip from './components/Common/OrhPoptip'
import RumButton from './components/Common/OrhButton'
import RumSelect from './components/Common/OrhSelect'
import RumRadio from './components/Common/OrhRadio'
import RumTable from './components/Common/OrhTable'
import RumIcon from './components/Common/OrhIcon'
import RumInput from './components/Common/OrhInput'

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
            RumModel,
            RumInput,
            RumIcon
        }
    })
    Vue.prototype.$RumModel = (config)=> {
        let Model = Vue.extend({
            data() {
                return {show:false}
            },
            render() {
                return (
                    <RumModel value={this.show} title={config.title} 
                        onInput={(val)=> {
                            this.show = val
                        }}>
                        {config.render()}
                    </RumModel>
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