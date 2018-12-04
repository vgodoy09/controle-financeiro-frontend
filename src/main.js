import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'
import App from './app/App'

import './config/bootstrap'


Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')