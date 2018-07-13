
import RumModel from './components/Common/Model'
import RumModal from './components/Modal'
import RumPoptip from './components/Common/Poptip'
import RumButton from './components/Common/Button'
import RumSelect from './components/Common/Select'
import RumOption from './components/Common/Option'
import RumRadio from './components/Common/Radio'
import RumTable from './components/Common/Table'
import RumIcon from './components/Common/Icon'
import RumInput from './components/Common/Input'
import RumMessage from './components/Message'
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

const components = {
    RumPoptip,
    RumButton,
    RumSelect,
    RumOption,
    RumRadio,
    RumTable,
    RumModel,
    RumModal,
    RumInput,
    RumMessage,
    RumIcon,
    RumTabs,
    RumTabItem,
    RumTrees,
    RumTime,
    RumUpload,
    RumCheckBox,
    RumSteps,
    RumValidator
}

const install = (Vue, options)=> {
    if (install.installed) return;
    Vue.mixin({ components })
    Vue.prototype.$RumModal = RumModal
    Vue.prototype.$RumMessage = RumMessage.show
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
}

const Rum = {
    install,
    ...components
}
module.exports.default = module.exports = Rum