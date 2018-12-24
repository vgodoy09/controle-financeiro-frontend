import 'font-awesome/css/font-awesome.css'
import './assets/css/util.css'
import './assets/css/main.css'

import Vue from 'vue'
import App from './App'

import './config/bootstrap'



Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

