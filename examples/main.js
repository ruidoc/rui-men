// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import rui from '^/index'
import '^/styles/rui-base.less'
Vue.use(rui)

import VueHighlightJS from 'vue-highlightjs'
Vue.use(VueHighlightJS)

import plug from './plugins'
Vue.use(plug)

import ruis from '../lib/rui-men'
Vue.use(ruis)

Vue.config.productionTip = false

new Vue({
	el: '#app', 
	router, 
	store,
	render: h => h(App)
})