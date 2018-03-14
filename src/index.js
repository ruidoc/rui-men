
import RumModel from './components/Common/Model'
import RumPoptip from './components/Common/Poptip'
import RumButton from './components/Common/Button'
import RumSelect from './components/Common/Select'
import RumRadio from './components/Common/Radio'
import RumTable from './components/Common/Table'
import RumIcon from './components/Common/Icon'
import RumInput from './components/Common/Input'
import RumMessage from './components/Common/Message'
import RumTabs from './components/Tabs/Tabs'
import RumTabItem from './components/Tabs/TabItem'
import RumTrees from './components/Trees/Tree'

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
            RumMessage,
            RumTabs,
            RumTabItem,
            RumTrees
        }
    })
    Vue.prototype.$RumModel = (config)=> {
        let Model = Vue.extend({
            data() {
                return {show: false}
            },
            render() {
                return (
                    <RumModel value={this.show} title={config.title} 
                        onInput={(val)=> {
                            this.show = val
                        }} onOk={()=>{
                            config.onOk()
                            this.show = false
                        }}>
                        {config.render()}
                    </RumModel>
                )
            }
        })
        if(!$vModel) {
            $vModel = new Model()
            $vModel.$mount()
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