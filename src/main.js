// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import Vuex from 'vuex'
import homeVuex from '@/vuexs/home'
import createLogger from 'vuex/dist/logger'
import 'normalize.css'
import '@/utils/rem.js'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    homeVuex
  },
  plugins: [createLogger()]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
