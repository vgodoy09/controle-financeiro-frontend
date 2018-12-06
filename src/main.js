import 'font-awesome/css/font-awesome.css'
import './assets/css/dark.css'

import Vue from 'vue'
import App from './App'

import './config/bootstrap'



Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')

