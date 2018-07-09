
import RumModel from './components/Common/Model'
import RumPoptip from './components/Common/Poptip'
import RumButton from './components/Common/Button'
import RumSelect from './components/Common/Select'
import RumOption from './components/Common/Option'
import RumRadio from './components/Common/Radio'
import RumTable from './components/Common/Table'
import RumIcon from './components/Common/Icon'
import RumInput from './components/Common/Input'
import RumMessage from './components/Common/Message'
import RumTabs from './components/Tabs/Tabs'
import RumTabItem from './components/Tabs/TabItem'
import RumTrees from './components/Trees/Tree'
import RumTime from './components/Common/Time'
import RumUpload from './components/Common/Upload'
import RumCheckBox from './components/Common/CheckBox'
import RumSteps from './components/Common/Steps'
import RumValidator from './components/Common/Validator'

let $message;
// import './styles/rui-base.css'

const install = (Vue, options)=> {
    if (install.installed) return;
    Vue.mixin({
        components: {
            RumPoptip,
            RumButton,
            RumSelect,
            RumOption,
            RumRadio,
            RumTable,
            RumModel,
            RumInput,
            RumIcon,
            RumMessage,
            RumTabs,
            RumTabItem,
            RumTrees,
            RumTime,
            RumUpload,
            RumCheckBox,
            RumSteps,
            RumValidator
        }
    })
    Vue.prototype.$RumModel = (config)=> {
        let model = Vue.extend({
            data() {
                return { show: false }
            },
            render() { return(
                <RumModel value={this.show} title={config.title} 
                onInput={(val)=> {
                    this.show = val
                }} onOk={()=>{
                    config.onOk()
                    this.show = false
                }} confirm={config.confirm}>
                    {config.confirm?config.msg:config.render()}
                </RumModel>
            )},
            watch: {
                show(val) {
                    if(!val) {
                        document.body.removeChild(this.$el)
                    }
                }
            }
        })
        let vmodel = new model()
        vmodel.$mount()
        vmodel.show = true
        document.body.appendChild(vmodel.$el)
    }
    Vue.prototype.$RumMessage = (msg,type)=> {
        
        if(!$message) {
            $message = document.createElement('div') 
            $message.style.position = 'fixed'
            $message.style.top = '80px'
            $message.style.right = '30px'
            $message.style.zIndex = '1500'
            $message.style.writingMode = 'vertical-rl'
            document.body.appendChild($message)
        }

        if(!type) {
            type = 'info'
        }
        
        let Model = Vue.extend(RumMessage)
        
        let instance = new Model()
        instance.message = msg
        instance.type = type
        instance.$mount();

        $message.appendChild(instance.$el)
    }
}
export default { install }