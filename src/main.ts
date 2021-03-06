import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import ElementUI from 'element-ui'
// import ElementUI from '../node_modules/element-ui/src/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/less/common.less'
import '@/assets/less/variables.less'

// 自定义字体图标
import '@/assets/iconfont/style.css'

Component.registerHooks([
  'beforeRouteEnter'
])

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
