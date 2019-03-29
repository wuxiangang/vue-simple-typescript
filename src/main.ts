import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { http, fetch } from '@/assets/js/http'

/*按需引用*/
// import { Dialog, Message } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Dialog)
Vue.config.productionTip = false 

// Vue.prototype.$message= Message
Vue.prototype.$http = http
Vue.prototype.$fetch = fetch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
