import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { fetch, http } from '@/assets/js/http'

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$fetch = fetch
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
