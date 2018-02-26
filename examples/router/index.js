
import Vue from 'vue'
import vueRouter from 'vue-router'
import routerConf from './router'

Vue.use(vueRouter)

const router = new vueRouter(routerConf)

export default router