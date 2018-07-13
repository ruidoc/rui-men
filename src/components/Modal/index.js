
import Vue from 'vue'
import Modal from './modal.vue'

Modal.show = (config)=> {
    let instance = Vue.extend({
        data() {
            return { show: false }
        },
        render() { return(
            <Modal value={this.show} title={config.title} 
            onInput={(val)=> {
                this.show = val
            }} onOk={()=>{
                config.onOk()
                this.show = false
            }} confirm={config.confirm}>
                {config.confirm?config.msg:config.render()}
            </Modal>
        )},
        watch: {
            show(val) {
                if(!val) {
                    document.body.removeChild(this.$el)
                }
            }
        }
    })
    let vmodal = new instance()
    vmodal.$mount()
    vmodal.show = true
    document.body.appendChild(vmodal.$el)
}

export default Modal