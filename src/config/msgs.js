import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    position: 'top-center', 
    className: ['toast-global'],
    duration: 3000
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg, { type: 'success', icon: 'check' }
)

Vue.toasted.register(
    'defaultInfo',
    payload => !payload.msg ? 'Existem alerta do sistema.' : payload.msg, { type: 'info', icon: 'check' }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg, { type: 'error', icon: 'times' }
)

Vue.toasted.register(
    'defaultWarning',
    payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg, { type: 'info', icon: 'check' }
)

