import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './core/router'

createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
