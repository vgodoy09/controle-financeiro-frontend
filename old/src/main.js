import 'font-awesome/css/font-awesome.css'
import './assets/css/util.css'
import './assets/css/main.css'


import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import './config/bootstrap'



Vue.config.productionTip = false

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})



