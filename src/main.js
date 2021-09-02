import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import router from './core/router'
import ApiService from './core/services/api.service'
import store from './core/services/store'

router.beforeEach(async (to, from, next) => {
    if (to.name !== 'Login' && !store.getters.isAuth)
        next({ name: 'Login' })
    next()
})

const app = createApp(App);

ApiService.init(app);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.use(store);

app.mount('#app');