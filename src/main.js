import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
