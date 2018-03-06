
import RumModel from './components/Common/OrhModel'
import RumPoptip from './components/Common/OrhPoptip'
import RumButton from './components/Common/OrhButton'
import RumSelect from './components/Common/OrhSelect'
import RumRadio from './components/Common/OrhRadio'
import RumTable from './components/Common/OrhTable'
import RumIcon from './components/Common/OrhIcon'
import RumInput from './components/Common/OrhInput'
import RumMessage from './components/Common/OrhMessage'

const Rui = new Object();
let $vModel;
let $vMessage;

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
            RumIcon,
            RumMessage
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
        if(!$vModel) {
            $vModel = new Model({
                el: document.createElement('div')
            })
            document.body.appendChild($vModel.$el)
            $vModel.show = true
        } else {
            $vModel.show = true
        }
    }
    Vue.prototype.$RumMessage = (msg,type)=> {
        
        if(!$vMessage) {
            $vMessage = document.createElement('div') 
            $vMessage.style.position = 'fixed'
            $vMessage.style.top = '80px'
            $vMessage.style.right = '30px'
            $vMessage.style.writingMode = 'vertical-rl'
            document.body.appendChild($vMessage)
        }

        if(!type) {
            type = 'info'
        }
        
        let Model = Vue.extend(RumMessage)
        
        let instance = new Model()
        instance.message = msg
        instance.type = type
        instance.$mount();

        $vMessage.appendChild(instance.$el)
    }
}

export default Rui;