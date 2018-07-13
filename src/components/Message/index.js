
import Vue from 'vue'
import Message from './message.vue'
let domswap

Message.show = (msg,type='info')=> {

    if(!domswap) {
        domswap = document.createElement('div') 
        domswap.style.position = 'fixed'
        domswap.style.top = '80px'
        domswap.style.right = '30px'
        domswap.style.zIndex = '1500'
        domswap.style.writingMode = 'vertical-rl'
        document.body.appendChild(domswap)
    }
    
    let Msg = Vue.extend(Message)
    
    let instance = new Msg()
    instance.message = msg
    instance.type = type
    instance.$mount();

    domswap.appendChild(instance.$el)
}

export default Message