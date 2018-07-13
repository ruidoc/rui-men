// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import rui from '../lib/main'
import '../lib/main.css'
Vue.use(rui)

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import plug from './plugins'
Vue.use(plug)

Vue.config.productionTip = false

new Vue({
	el: '#app', 
	router, 
	store,
	render: h => h(App)
})